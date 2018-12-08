# V8SayHello

## 参考源码

https://github.com/coderzh/v8-demo

## 命令行

* mkdir build
* cd build
* cmake ..
* make
* ./v8_demo

### 问题

运行会报错“dyld: Library not loaded: /usr/local/lib/libv8.dylib”，找不到v8动态链接库

### 方案

直接复制到/usr/local/lib即可。

* cp ../libs/* /usr/local/lib
* ./v8_demo

## 日志信息
![v8-say-hello](./v8-say-hello.png)
```
shengshuqiangdeMacBook-Pro:AdvanceOnReactNative shengshuqiang$ mkdir build
shengshuqiangdeMacBook-Pro:AdvanceOnReactNative shengshuqiang$ cd build/
shengshuqiangdeMacBook-Pro:build shengshuqiang$ cmake ..
-- The C compiler identification is AppleClang 10.0.0.10001145
-- The CXX compiler identification is AppleClang 10.0.0.10001145
-- Check for working C compiler: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc
-- Check for working C compiler: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc -- works
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Detecting C compile features
-- Detecting C compile features - done
-- Check for working CXX compiler: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++
-- Check for working CXX compiler: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ -- works
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Configuring done
-- Generating done
-- Build files have been written to: /Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/build
shengshuqiangdeMacBook-Pro:build shengshuqiang$ make
Scanning dependencies of target v8_demo
[ 50%] Building CXX object CMakeFiles/v8_demo.dir/src/main.cc.o
[100%] Linking CXX executable v8_demo
[100%] Built target v8_demo
shengshuqiangdeMacBook-Pro:build shengshuqiang$ ./v8_demo 
dyld: Library not loaded: /usr/local/lib/libv8.dylib
  Referenced from: /Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/build/./v8_demo
  Reason: image not found
Abort trap: 6
shengshuqiangdeMacBook-Pro:build shengshuqiang$ cp ../libs/* /usr/local/lib
shengshuqiangdeMacBook-Pro:build shengshuqiang$ ./v8_demo 
我服SSU,一个牛逼💯的人
```
