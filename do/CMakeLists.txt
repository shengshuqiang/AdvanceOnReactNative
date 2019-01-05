# camke版本
cmake_minimum_required(VERSION 2.8)
# 工程名
project (do)
# 编译输出位置，生成的库所在的文件目录，这里是build/lib，也可以改为其他的
# add_subdirectory(lib)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CC_COMPILER g++)
# set(CMAKE_INSTALL_RPATH_USE_LINK_PATH TRUE)
set(PROJECT_LINK_LIBS libv8.dylib libv8_libplatform.dylib)

link_directories(${CMAKE_SOURCE_DIR}/libs)
include_directories(include)

set(LIBDEPTH_SRC HelloJNI.cc)
# 生成动态库
add_library(HelloJNI SHARED ${LIBDEPTH_SRC})

# https://blog.csdn.net/Hansry/article/details/77053850
# message(STATUS ${CMAKE_BINARY_DIR})
target_link_libraries(HelloJNI libv8.dylib ${PROJECT_LINK_LIBS})


