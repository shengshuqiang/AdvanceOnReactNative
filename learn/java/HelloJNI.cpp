#include <stdio.h>
#include "HelloJNI.h"

/*
 * Class:     HelloJNI
 * Method:    sendMsg
 * Signature: (Ljava/lang/String;)V
 */
JNIEXPORT void JNICALL Java_HelloJNI_sendMsg(JNIEnv * env, jclass cls, jstring jstr) {
    //const char *c_str = null;
    //c_str = env->GetStringUTFChars(str, null);
    printf("Java_HelloJNI_sendMsg:\n");

/*
    const char* str;
    str = env->GetStringUTFChars(jstr, false);
    if(str == NULL) {
    return;
    }
    printf("Java_HelloJNI_sendMsg:\t" + *str);

    env->ReleaseStringUTFChars(jstr, str);
    */

}

JNIEXPORT void JNICALL Java_HelloJNI_sendOrder
  (JNIEnv * env, jobject jobj, jstring jstr) {
   printf("Java_HelloJNI_sendOrder:\n");
}
