import java.util.Scanner;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

// 1. 新建build文件夹：mkdir build
// 2. 进入build文件夹：cd build
// 3. 执行cmake命令编译，build文件夹内生成一堆构建文件：cmake ..
// 4. 执行make命令编译生成动态链接文件libHelloJNI.dylib：make
// 5. 执行javac命令生成class文件HelloJNI.class：javac ../HelloJNI.java -d .
// 6. 执行java命令运行程序：java HelloJNI
// 7. 执行hello.js中移动棋子指令，会看到棋局移动：handleOrder(1,5)
// 8. 继续执行hello.js中移动棋子指令对弈：handleOrder(7,4)
// 9. 执行quit退出：quit()

public class HelloJNI {
    private Scanner scanner = new Scanner(System.in);

    static {
        System.loadLibrary("HelloJNI");
    }

    public HelloJNI() {
        scanner.useDelimiter(System.getProperty("line.separator"));
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
            jsBundle = readFile("../hello.js");
        } catch(IOException exception) {
        }
        if (null != jsBundle) {
            helloJni.load(jsBundle);
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
         // System.out.println("##JAVA##\n" + fileStr);
         return fileStr;
     }

     public String waitForInputOrder() {
         if (scanner.hasNext()) {
             String order = scanner.next();
             // System.out.println("##JAVA##\n" + "waitForInputOrder:\t" + order);
             return order;
         }
         return null;
     }
}
