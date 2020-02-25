package com.awesomeproject;

import android.graphics.Color;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManager;

import javax.annotation.Nonnull;

// shengshuqiang 2020-01-15
public class SSUViewManager extends SimpleViewManager {
    @Nonnull
    @Override
    public String getName() {
        return "SSUView";
    }

    @Nonnull
    @Override
    protected View createViewInstance(@Nonnull ThemedReactContext reactContext) {
        TextView textView = new TextView(reactContext);
        textView.setText("SSUView");
        textView.setLayoutParams(new ViewGroup.LayoutParams(200, 100));
        textView.setGravity(Gravity.CENTER);
        textView.setBackgroundColor(Color.RED);
        return textView;
    }

}
