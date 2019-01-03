// javac HelloJNI.java
// javah HelloJNI
// gcc -dynamiclib HelloJNI.cpp -o libNativeLibrary.jnilib -I ../include/
// java HelloJNI
// java -Djava.library.path="/Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/java/" HelloJNI
// https://mp.weixin.qq.com/s/xu1wM2c7mCNRK8xI1M7P4A

public class HelloJNI {
    static {
        // System.out.println( System.getProperty("java.library.path"));
        System.loadLibrary("NativeLibrary");
    }
    public static native void sendMsg(String msg);

    public static void receiveMsg(String msg) {
        System.out.println("receiveMsg:\t" + msg);
    }
    public static void main(String[] args) {
        System.out.println("Hello SSU!");
        sendMsg("SSU");
    }
}
