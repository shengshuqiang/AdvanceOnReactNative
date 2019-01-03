#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "v8.h"
#include "libplatform/libplatform.h"

using std::string;


using namespace v8;

/*
 * mkdir build
 * cd build
 * cmake ..
 * make
 * ./v8_demo
 */
Handle<v8::String> buildSource(v8::Isolate *isolate, const char *str);
void printStr(v8::Isolate *isolate, Handle<v8::Value> result);
void test_String(v8::Isolate *isolate);
void test_Array(v8::Isolate *isolate);
void test_getjs_data(v8::Isolate *isolate, Handle<Context> pContext);
void test_getjs_dataofObject(v8::Isolate *isolate, Handle<Context> pContext);
void test_getjs_dataofObjectClass(v8::Isolate *isolate, Handle<Context> pContext);


int main(int argc, char *argv[]) {
    v8::V8::InitializeICUDefaultLocation(argv[0]);
    v8::V8::InitializeExternalStartupData(argv[0]);
    std::unique_ptr<v8::Platform> platform = v8::platform::NewDefaultPlatform();
    v8::V8::InitializePlatform(platform.get());
    v8::V8::Initialize();

    // Create a new Isolate and make it the current one.
    v8::Isolate::CreateParams create_params;
    create_params.array_buffer_allocator = v8::ArrayBuffer::Allocator::NewDefaultAllocator();
    v8::Isolate *isolate = v8::Isolate::New(create_params);

    v8::Isolate::Scope isolate_scope(isolate);

    // Create a stack-allocated handle scope.
    v8::HandleScope handle_scope(isolate);

    // Create a new context.
    v8::Local<v8::Context> context = v8::Context::New(isolate);

    // Enter the context for compiling and running the hello world script.
    v8::Context::Scope context_scope(context);

    test_String(isolate);
    test_Array(isolate);
    test_getjs_data(isolate, context);
    test_getjs_dataofObject(isolate, context);
    test_getjs_dataofObjectClass(isolate, context);
}

Handle<v8::String> buildSource(v8::Isolate *isolate, const char *str) {
    Handle<String> source = v8::String::NewFromUtf8(isolate, str, v8::NewStringType::kNormal).ToLocalChecked();
    return source;
}

void printStr(v8::Isolate *isolate, Handle<v8::Value> result) {
    v8::String::Utf8Value utf8(isolate, result);
    printf("%s\n", *utf8);
}

// V8之脚本运行-获取字符串
void test_String(v8::Isolate *isolate){
  Handle<v8::String> source = buildSource(isolate, "'Hello' + ', World!'");
  Handle<v8::Script> script = v8::Script::Compile(source);
  Handle<v8::Value> result = script->Run();

  printStr(isolate, result);
}

// V8之脚本运行-获取数组
void test_Array(v8::Isolate *isolate){
  Handle<String> source = buildSource(isolate, "[1, 2, 'hello', 6+5]");
  Handle<Script> script = Script::Compile(source);
  Handle<Value> result = script->Run();

  printStr(isolate, result);
}

// V8之C++取设JS-获取成员数据
void test_getjs_data(v8::Isolate *isolate, Handle<Context> pContext){
 Handle<String> source = buildSource(isolate, "var s1 = 8+5;");
 Handle<Script> script = Script::Compile(source);
 Handle<Value> result = script->Run();
 Handle<String> js_data = v8::String::NewFromUtf8(isolate, "s1",v8::NewStringType::kNormal).ToLocalChecked();
 Handle<Value> js_data_value = pContext->Global()->Get(js_data);

 printStr(isolate, js_data_value);
}

// V8之C++取设JS-获取成员之全局对象
void test_getjs_dataofObject(v8::Isolate *isolate, Handle<Context> pContext){
 Handle<String> source = buildSource(isolate,  "function Point(x,y){this.x=x; this.y=y;} var pt=new Point(10,20);");
 Handle<Script> script = Script::Compile(source);
 Handle<Value> result = script->Run();

 Handle<String> js_data = buildSource(isolate,  "pt");
 Handle<Value> js_data_value = pContext->Global()->Get(js_data);

 printStr(isolate, js_data_value);

 Handle<Object> js_data_object = Handle<Object>::Cast(js_data_value);
 Handle<Value> key = buildSource(isolate, "x");
 Handle<Value> objX = js_data_object->Get(key);
 printStr(isolate, objX);
}

// V8之C++取设JS-获取js类
void test_getjs_dataofObjectClass(v8::Isolate *isolate, Handle<Context> pContext){
 Handle<String> source = buildSource(isolate, "function Point(x,y){this.x=x; this.y=y;} Point.prototype.show=function(){return '(x,y) = '+this.x+','+this.y;}");
 Handle<Script> script = Script::Compile(source);
 Handle<Value> result = script->Run();

 Handle<String> js_data = buildSource(isolate, "Point");
 Handle<Value> js_data_value = pContext->Global()->Get(js_data);

 printStr(isolate, js_data_value);

 bool bIsFunction = js_data_value->IsFunction();
 if(bIsFunction){
  printf("Point is function\n");
 }

 bool bIsObject = js_data_value->IsObject();
 if(bIsObject){
  printf("Point is object\n");
 }

 Handle<Object> js_data_object = Handle<Object>::Cast(js_data_value);
 // var newObj = new Point(1,2);
 Handle<Value>  argv[2] ;
 argv[0] = v8::Int32::New(isolate, 1);
 argv[1] = v8::Int32::New(isolate, 2);
 Handle<Value> newObj = js_data_object->CallAsConstructor(pContext, 2, argv).ToLocalChecked();
 {
  bool bIsFunction = newObj->IsFunction();
  if(bIsFunction){
   printf("newObj is function\n");
  }

  bool bIsObject = newObj->IsObject();
  if(bIsObject){
   printf("newObj is object\n");
  }
 }

//  newObj.show();
 {
  Handle<Object> obj = Handle<Object>::Cast(newObj);
  Handle<String> js_func_name = buildSource(isolate, "show");
  Handle<Value>  js_func_ref = obj->Get(js_func_name);

  Handle<Function> js_func = Handle<Function>::Cast(js_func_ref);
  js_data_value = js_func->Call(obj, 0, NULL) ;

  printStr(isolate, js_data_value);
 }
}

// V8之JS取设C++ - js 和 C++的关联
void test_getc_loadObjectTemplate(v8::Isolate *isolate, Handle<ObjectTemplate> pObj)
{
 //-load c++'s data-
 pObj->SetAccessor(buildSource(isolate, "x"), XGetter, XSetter);

 //-load c++'s function-
 pObj->Set(buildSource(isolate, "setColor"),FunctionTemplate::New(set_color));

 //-load c++'s class-
 CreateObjectToJs(pObj);
}



Point* NewPointFunction(const Arguments & args)
 {
  if(args.Length()==2)
  {
   Local<Value> v1 = args[0];
   Local<Value> v2 = args[1];

   return new Point( v1->Int32Value(), v2->Int32Value() );
  }
  else
  return new Point();
 }

void PointWeakExternalReferenceCallback(Persistent<Value>, void* parameter)
{
 if (Point* cpp_object = static_cast<Point*>(parameter))
  delete cpp_object;
}

Persistent<External> NewWeakExternalPoint(void* parameter)
{
 Persistent<External> ret = Persistent<External>::New(External::New(parameter));
 ret.MakeWeak(parameter, PointWeakExternalReferenceCallback);
 return ret;
}

Handle<Value> PointFunctionInvocationCallback(const Arguments &args)
 {
 if (!args.IsConstructCall())
 return Undefined();

 Point* cpp_object = NewPointFunction(args);
 if (!cpp_object)
 return ThrowException(String::New("Can not create Object in C++"));

 args.Holder()->SetInternalField(0, NewWeakExternalPoint(cpp_object));
 return Undefined();
 }



void CreateObjectToJs(Handle<ObjectTemplate> pObj)
{
 Point* p = new Point(0, 0);
 Handle<FunctionTemplate> point_templ = FunctionTemplate::New(&PointFunctionInvocationCallback, External::New(p));
 point_templ->SetClassName(String::New("Point"));
 point_templ->InstanceTemplate()->SetInternalFieldCount(1);

 Handle<ObjectTemplate> point_proto = point_templ->PrototypeTemplate();
 point_proto->SetAccessor(String::New("x"), GetPointX, SetPointX);
 point_proto->SetAccessor(String::New("y"), GetPointY, SetPointY);
 point_proto->Set(String::New("show"), FunctionTemplate::New(ShowPoint));

 pObj->Set(String::New("Point"), point_templ);
}
