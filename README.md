[toc]

[进击ReactNative之疾如风](https://shengshuqiang.github.io/2019/01/07/%E8%BF%9B%E5%87%BBReactNative-%E7%96%BE%E5%A6%82%E9%A3%8E.html)

# 学

## 文件夹C

**功能：**shell.cc文件实现加载并执行js文件
进入c目录，运行命令行【通过执行CMake和make编译，配置文件为CMakeLists.txt】

1. CMakeLists.txt文件中确保配置是add_executable(learn shell.cc)
2. 新建build文件夹：mkdir build
3. 进入build文件夹：cd build
4. cmake编译，build文件夹内生成一堆构建文件：cmake ..
5. make编译：make
6. 运行程序：./learn
7. 加载js文件【路径相对于当前执行命令位置】：load('../../js/hello.js')
8. 执行hello.js中初始化init方法，会看到输出棋局：init()
9. 执行hello.js中移动棋子指令，会看到棋局移动：handleOrder(1,5)
10. 执行hello.js中退出指令quit()，程序退出：quit()

## 文件夹JAVA

**功能：**打通JNI能力，java中可以调用c中实现方法【详情参考：[JNI初探](https://mp.weixin.qq.com/s/xu1wM2c7mCNRK8xI1M7P4A)】
进入java目录，运行命令行【javac、javah、gcc、java命令】

1. 执行javac命令，生成.class文件：javac HelloJNI.java
2. 执行javah命令，生成.h文件：javah HelloJNI
3. 拷贝.h文件里面方法，新建.cpp文件：新建文件，复制黏贴，实现native方法
4. 执行gcc命令，生成动态链接库.jnilib文件【需要拷贝jni.h和jni_md.h到include目录下】：gcc -dynamiclib HelloJNI.cpp -o libNativeLibrary.jnilib -I ./include/
5. 执行java命令，运行程序，打印java和c输出日志：java HelloJNI

## 文件夹JS

**功能：**JS实现对角棋功能【主体功能在hello.js，测试入口为hello-test.js】

1. 进入js目录，运行node命令看到棋局：node hello-test.js
2. 输入移动棋子指令【源位置,目标位置】，会看到棋局移动：1,5
3. 输入退出指令【quit】，程序退出：quit

# 做

## 思路

1. java端启动js初始化运行环境
2. js端输出游戏规则和棋局，等待java端输入
3. java端输入指令，js刷新棋盘并且对弈，直至高下立判
4. java端只是用户输入和棋盘展示终端，c端只负责透传消息，js端负责逻辑处理

## 命令

1. 新建build文件夹：mkdir build
2. 进入build文件夹：cd build
3. 执行cmake命令编译，build文件夹内生成一堆构建文件：cmake ..
4. 执行make命令编译生成动态链接文件libHelloJNI.dylib：make
5. 执行javac命令生成class文件HelloJNI.class：javac ../HelloJNI.java -d .
6. 执行java命令运行程序：java HelloJNI
7. 执行hello.js中移动棋子指令，会看到棋局移动：handleOrder(1,5)
8. 继续执行hello.js中移动棋子指令对弈：handleOrder(7,4)
9. 执行quit退出：quit()
