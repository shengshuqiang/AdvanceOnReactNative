import java.io.File;
import java.io.FileReader;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

/**
 * Created by shengshuqiang on 2018/11/17.
 * 运行命令：
 * javac HelloScriptEngine.java
 * java HelloScriptEngine
 */
public class HelloScriptEngine {

    public static void main(String[] args) {
        HelloScriptEngine helloScriptEngine = new HelloScriptEngine();
        helloScriptEngine.test("SSU");
        helloScriptEngine.test2();
        helloScriptEngine.testJSCore1();
        helloScriptEngine.testJSCore2();
//        try {
//            helloScriptEngine.testScriptInterface();
//        } catch (ScriptException e) {
//            e.printStackTrace();
//        }
    }

    /*
     * 在java中调用js，jdk1.6中有加载js引擎类，然后由它来调用js方法。
     * 并通过JDK平台给script的方法中的形参赋值
     */
    public void test(String name) {
        ScriptEngineManager sem = new ScriptEngineManager();
        ScriptEngine se = sem.getEngineByName("js");
        try {
            String script = "function say(){ return 'hello," + name + "'; }";
            se.eval(script);
            Invocable inv2 = (Invocable) se;
            String res = (String) inv2.invokeFunction("say", name);
            System.out.println(res);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    /*
     * 加载脚本引擎，并在java中调用js方法
     */
    public void test2()
    {
        ScriptEngineManager manager = new ScriptEngineManager();

        ScriptEngine engine = manager.getEngineByName("javascript");
        try {
            String str="2";
            Double d = new Double(String.valueOf(engine.eval(str)));
            Integer i=d.intValue();
            System.out.println(i);
        } catch (ScriptException ex) {
            ex.printStackTrace();
        }

    }

    /*
     * 演示如何在java中如何通过线程来启动一个js方法
     */
    public void testScriptInterface() throws ScriptException {
        ScriptEngineManager sem = new ScriptEngineManager();
        ScriptEngine engine = sem.getEngineByName("js");
        String script = "var obj=new Object();obj.run=function(){console('test thread')}";
        engine.eval(script);
        Object obj = engine.get("obj");//获取js中对象
        Invocable inv = (Invocable) engine;
        Runnable r = inv.getInterface(obj, Runnable.class);
        Thread t = new Thread(r);
        t.start();
    }

    public interface IJSHello {
        String handleMsg(String msg);
    }

    public void testJSCore1() {
        //创建一个脚本引擎管理器
        ScriptEngineManager manager = new ScriptEngineManager();
        //获取一个指定的名称的脚本引擎
        ScriptEngine engine = manager.getEngineByName("js");
        try {
            //获取当前类的所在目录的路径
//            String path = getClass().getResource("").getPath();
            // FileReader的参数为所要执行的js文件的路径
//            String filePath = path + "hello.js";
            String filePath = "./hello.js";
            FileReader fileReader = new FileReader(filePath);
            System.out.println(filePath);
            engine.eval(fileReader);
            if (engine instanceof Invocable) {
                Invocable invocable = (Invocable) engine;
                //从脚本引擎中返回一个给定接口的实现
                IJSHello executeMethod = invocable.getInterface(IJSHello.class);
                //执行指定的js方法
                System.out.println(executeMethod.handleMsg("SSU"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * https://blog.csdn.net/f6991/article/details/9312791
     */
    public void testJSCore2() {
        // 初始化JS脚本引擎
        ScriptEngineManager factory = new ScriptEngineManager();
        ScriptEngine engine = factory.getEngineByName("JavaScript");
        // 注入全局变量，a = 4， b = 6
        engine.put("a", 4);
        engine.put("b", 6);
        try {
            // 运行JS代码字符串
            // 定义求最大值函数max_num
            // 执行max_num(a,b)，a 和 b对应上面设置的全局变量
            Object maxNum = engine.eval("function max_num(a,b){return (a>b)?a:b;}max_num(a,b);");
            System.out.println("max_num:" + maxNum);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

}
