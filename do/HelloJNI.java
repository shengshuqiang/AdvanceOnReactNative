import java.util.Scanner;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

// javac HelloJNI.java
// javah HelloJNI
// gcc -dynamiclib HelloJNI.cpp -o libHelloLib.jnilib -I ../include/
// java HelloJNI
// java -Djava.library.path="/Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/java/" HelloJNI
// https://mp.weixin.qq.com/s/xu1wM2c7mCNRK8xI1M7P4A

public class HelloJNI {
    static {
        System.loadLibrary("HelloJNI");
    }
    public native void load(String jsBundle);
    public native void sendOrder(String orderStr);

    public static void receiveMsg(String msg) {
        System.out.println("receiveMsg:\t" + msg);
    }
    public static void main(String[] args) {
        System.out.println("Hello SSU!");
        HelloJNI helloJni = new HelloJNI();

        String jsBundle = null;
        try {
            jsBundle = readFile("./hello.js");
        } catch(IOException exception) {
        }
        if (null != jsBundle) {
            helloJni.load(jsBundle);

            Scanner scanner = new Scanner(System.in);
            scanner.useDelimiter(System.getProperty("line.separator"));
            while(scanner.hasNext()){
                String str = scanner.next();
                System.out.println("Scanner:\t" + str);
                helloJni.sendOrder(str);
            }
        }
    }

    /**
     * 通过字符流读取文件中的数据
     * @throws IOException
     */
     public static String readFile(String path) throws IOException{
         // 注意这里的不同，File.separator是分隔符，这里指明绝对路径，即D盘根目录下的abc.txt文件
         File file = new File(path);
         // 如果文件不存在则创建文件
         if (!file.exists()) {
             file.createNewFile();
         }
         InputStream inputStream = new FileInputStream(file);
         // 这里也有不同，可以根据文件的大小来声明byte数组的大小，确保能把文件读完
         byte[] bs = new byte[(int)file.length()];
         // read()方法每次只能读一个byte的内容
         inputStream.read(bs);
         inputStream.close();
         String fileStr = new String(bs);
         System.out.println(fileStr);
         return fileStr;
     }
}
