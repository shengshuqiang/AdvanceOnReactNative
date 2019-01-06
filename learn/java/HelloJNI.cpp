#include <stdio.h>
#include "HelloJNI.h"

/*
 * Class:     HelloJNI
 * Method:    sendMsg
 * Signature: (Ljava/lang/String;)V
 */
JNIEXPORT void JNICALL Java_HelloJNI_sendMsg(JNIEnv * env, jclass cls, jstring jstr) {
    const char* str = env->GetStringUTFChars(jstr, NULL);
    printf("Java_HelloJNI_sendMsg:%s\n", str);
    env->ReleaseStringUTFChars(jstr, str);
}