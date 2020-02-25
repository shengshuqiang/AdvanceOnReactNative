package com.awesomeproject;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class SSUToastAndroid extends ReactContextBaseJavaModule {
    public SSUToastAndroid(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "SSUToastAndroid";
    }

    @ReactMethod
    public void callBackFunction(boolean flag, Callback successCallback, Callback errorCallback) {
        if (flag) {
            successCallback.invoke(1, 2, 3, 4, 5);
        } else {
            errorCallback.invoke(6, 7, 8, 9, 10);
        }
    }

}
