package com.awesomeproject;

import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class ToastCustomAndroidPromise extends ReactContextBaseJavaModule {
    public ToastCustomAndroidPromise(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "ToastCustomAndroidPromise";
    }

    @ReactMethod
    public void promiseCallbackTest(boolean flag, Promise promise) {
        Log.i("ToastPromise", "promiseCallbackTest\t" + System.currentTimeMillis());
        if (flag) {
            promise.resolve(100);
        } else {
            promise.reject("promise Error", "wrong");
        }
    }

}
