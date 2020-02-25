package com.awesomeproject;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import javax.annotation.Nonnull;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new ReactPackage() {

                        @Nonnull
                        @Override
                        public List<NativeModule> createNativeModules(@Nonnull ReactApplicationContext reactContext) {
                            return Arrays.asList(
                                    new SSUToastAndroid(reactContext),
                                    new ToastCustomAndroidPromise(reactContext)
                            );
                        }

                        @Nonnull
                        @Override
                        public List<ViewManager> createViewManagers(@Nonnull ReactApplicationContext reactContext) {
                            return Arrays.asList(
                                    new SSUViewManager()
                            );
                        }
                    }
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
