package com.awesomeproject;

import android.graphics.Color;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.WritableNativeArray;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "AwesomeProject";
    }

    @Override
    public void setContentView(View view) {
        LinearLayout contentLayout = new LinearLayout(this);
        contentLayout.setOrientation(LinearLayout.VERTICAL);

        contentLayout.addView(view, new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, 0));
        ((LinearLayout.LayoutParams) view.getLayoutParams()).weight = 1;

        Button btn = new Button(this);
        btn.setText("Reload");
        btn.setTextSize(20);
        btn.setGravity(Gravity.CENTER);
        btn.setBackgroundColor(Color.LTGRAY);
        btn.setTextColor(Color.RED);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getReactNativeHost().getReactInstanceManager().getDevSupportManager().handleReloadJS();
//                getReactNativeHost().getReactInstanceManager().getCurrentReactContext().getCatalystInstance()
//                        .callFunction("global", "eval", new WritableNativeArray());
            }
        });
        contentLayout.addView(btn, new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, 200));

        super.setContentView(contentLayout);
    }
}
