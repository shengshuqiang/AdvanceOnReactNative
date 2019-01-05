#include "HelloJNI.h"

// gcc -dynamiclib HelloJNI.cc -o libHelloLib.jnilib -I ./include/

/*
 * Class:     HelloJNI
 * Method:    load
 * Signature: (Ljava/lang/String;)V
 */
JNIEXPORT void JNICALL Java_HelloJNI_load(JNIEnv *env, jobject jobj, jstring jstr) {
    const char * str = env->GetStringUTFChars(jstr, NULL);
    printf("##C##\nJava_HelloJNI_load: %s\n", str);
    // init();
}

/*
 * Class:     HelloJNI
 * Method:    sendOrder
 * Signature: (Ljava/lang/String;)V
 */
JNIEXPORT void JNICALL Java_HelloJNI_sendOrder(JNIEnv * env, jobject jobj, jstring jstr) {
    const char * str = env->GetStringUTFChars(jstr, NULL);
    if(str){
        printf("##C##\nJava_HelloJNI_sendOrder:\t%s\n", str);
        env->ReleaseStringUTFChars(jstr, str);
    }
}

int init() {
  // 初始化v8引擎
  char* argv = "hellojni";
  int argc = 1;
  v8::V8::InitializeICUDefaultLocation(argv);
  v8::V8::InitializeExternalStartupData(argv);
  std::unique_ptr<v8::Platform> platform = v8::platform::NewDefaultPlatform();
  v8::V8::InitializePlatform(platform.get());
  v8::V8::Initialize();
  v8::V8::SetFlagsFromCommandLine(&argc, &argv, true);
  v8::Isolate::CreateParams create_params;
  create_params.array_buffer_allocator = v8::ArrayBuffer::Allocator::NewDefaultAllocator();
  v8::Isolate* isolate = v8::Isolate::New(create_params);

  // 运行状态位
  int result;

  {
    // 初始化js上下文
    v8::Isolate::Scope isolate_scope(isolate);
    v8::HandleScope handle_scope(isolate);
    // 初始化注入可供js调用c方法上下文
    v8::Local<v8::Context> context = CreateShellContext(isolate);
    if (context.IsEmpty()) {
      fprintf(stderr, "Error creating context\n");
      return 1;
    }
    v8::Context::Scope context_scope(context);
    // result = RunMain(isolate, platform.get(), argc, argv);
    // if (run_shell) RunShell(context, platform.get());
  }

  // 释放v8引擎
  isolate->Dispose();
  v8::V8::Dispose();
  v8::V8::ShutdownPlatform();
  delete create_params.array_buffer_allocator;
  return result;
}

// Creates a new execution environment containing the built-in
// functions.
v8::Local<v8::Context> CreateShellContext(v8::Isolate* isolate) {
  // Create a template for the global object.
  v8::Local<v8::ObjectTemplate> global = v8::ObjectTemplate::New(isolate);
/*
  // Bind the global 'print' function to the C++ Print callback.
  global->Set(
      v8::String::NewFromUtf8(isolate, "print", v8::NewStringType::kNormal)
          .ToLocalChecked(),
      v8::FunctionTemplate::New(isolate, Print));
  // Bind the global 'read' function to the C++ Read callback.
  global->Set(v8::String::NewFromUtf8(
                  isolate, "read", v8::NewStringType::kNormal).ToLocalChecked(),
              v8::FunctionTemplate::New(isolate, Read));
  // Bind the global 'load' function to the C++ Load callback.
  global->Set(v8::String::NewFromUtf8(
                  isolate, "load", v8::NewStringType::kNormal).ToLocalChecked(),
              v8::FunctionTemplate::New(isolate, Load));
  // Bind the 'quit' function
  global->Set(v8::String::NewFromUtf8(
                  isolate, "quit", v8::NewStringType::kNormal).ToLocalChecked(),
              v8::FunctionTemplate::New(isolate, Quit));
  // Bind the 'version' function
  global->Set(
      v8::String::NewFromUtf8(isolate, "version", v8::NewStringType::kNormal)
          .ToLocalChecked(),
      v8::FunctionTemplate::New(isolate, Version));

*/
  return v8::Context::New(isolate, NULL, global);
}

// Executes a string within the current v8 context.
bool ExecuteString(v8::Isolate* isolate, v8::Local<v8::String> source,
                   v8::Local<v8::Value> name, bool print_result,
                   bool report_exceptions) {
  fprintf(stderr, "ExecuteString:\tsource=\n%s\n, name=\n%s\n", LocalValue2Str(isolate, source), LocalValue2Str(isolate, name));

  v8::HandleScope handle_scope(isolate);
  v8::TryCatch try_catch(isolate);
  v8::ScriptOrigin origin(name);
  v8::Local<v8::Context> context(isolate->GetCurrentContext());
  v8::Local<v8::Script> script;
  if (!v8::Script::Compile(context, source, &origin).ToLocal(&script)) {
    // Print errors that happened during compilation.
    if (report_exceptions)
      ReportException(isolate, &try_catch);
    return false;
  } else {
    v8::Local<v8::Value> result;
    if (!script->Run(context).ToLocal(&result)) {
      assert(try_catch.HasCaught());
      // Print errors that happened during execution.
      if (report_exceptions)
        ReportException(isolate, &try_catch);
      return false;
    } else {
      assert(!try_catch.HasCaught());
      if (print_result && !result->IsUndefined()) {
        // If all went well and the result wasn't undefined then print
        // the returned value.
        v8::String::Utf8Value str(isolate, result);
        const char* cstr = ToCString(str);
        printf("%s\n", cstr);
      }
      return true;
    }
  }
}

// Extracts a C string from a V8 Utf8Value.
const char* ToCString(const v8::String::Utf8Value& value) {
  return *value ? *value : "<string conversion failed>";
}


void ReportException(v8::Isolate* isolate, v8::TryCatch* try_catch) {
  v8::HandleScope handle_scope(isolate);
  v8::String::Utf8Value exception(isolate, try_catch->Exception());
  const char* exception_string = ToCString(exception);
  v8::Local<v8::Message> message = try_catch->Message();
  if (message.IsEmpty()) {
    // V8 didn't provide any extra information about this error; just
    // print the exception.
    fprintf(stderr, "%s\n", exception_string);
  } else {
    // Print (filename):(line number): (message).
    v8::String::Utf8Value filename(isolate,
                                   message->GetScriptOrigin().ResourceName());
    v8::Local<v8::Context> context(isolate->GetCurrentContext());
    const char* filename_string = ToCString(filename);
    int linenum = message->GetLineNumber(context).FromJust();
    fprintf(stderr, "%s:%i: %s\n", filename_string, linenum, exception_string);
    // Print line of source code.
    v8::String::Utf8Value sourceline(
        isolate, message->GetSourceLine(context).ToLocalChecked());
    const char* sourceline_string = ToCString(sourceline);
    fprintf(stderr, "%s\n", sourceline_string);
    // Print wavy underline (GetUnderline is deprecated).
    int start = message->GetStartColumn(context).FromJust();
    for (int i = 0; i < start; i++) {
      fprintf(stderr, " ");
    }
    int end = message->GetEndColumn(context).FromJust();
    for (int i = start; i < end; i++) {
      fprintf(stderr, "^");
    }
    fprintf(stderr, "\n");
    v8::Local<v8::Value> stack_trace_string;
    if (try_catch->StackTrace(context).ToLocal(&stack_trace_string) &&
        stack_trace_string->IsString() &&
        v8::Local<v8::String>::Cast(stack_trace_string)->Length() > 0) {
      v8::String::Utf8Value stack_trace(isolate, stack_trace_string);
      const char* stack_trace_string = ToCString(stack_trace);
      fprintf(stderr, "%s\n", stack_trace_string);
    }
  }
}

const char* LocalValue2Str(v8::Isolate* isolate, v8::Local<v8::Value> localStr) {
  v8::String::Utf8Value str(isolate, localStr);
  const char* cstr = ToCString(str);
  // printf("%s", cstr);
  return cstr;
}
