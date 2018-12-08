cmake_minimum_required(VERSION 2.8)
project (v8_demo)

set(CMAKE_CXX_STANDARD 11)
# set(CMAKE_INSTALL_RPATH_USE_LINK_PATH TRUE)
set(PROJECT_LINK_LIBS libv8.dylib libv8_libplatform.dylib)

link_directories(${CMAKE_SOURCE_DIR}/libs)
include_directories(include)

add_executable(v8_demo src/main.cc)

# message(STATUS ${CMAKE_BINARY_DIR})
target_link_libraries(v8_demo libv8.dylib ${PROJECT_LINK_LIBS})
