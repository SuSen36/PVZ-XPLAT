cmake_minimum_required(VERSION 3.2.2)
set(CMAKE_VERBOSE_MAKEFILE ON)
set(CMAKE_CXX_STANDARD 17)  # 设置 C++ 标准为 C++17
set(CMAKE_CXX_STANDARD_REQUIRED ON)
project(re-plants-vs-zombies LANGUAGES C CXX ASM)

if(APPLE)
    # 在macOS平台上使用xcode-project中的CMakeLists.txt
    add_subdirectory(xcode-project)
endif()

file(GLOB SOURCES
		src/*.cpp
		src/SexyAppFramework/*.cpp
		src/SexyAppFramework/graphics/*.cpp
		src/SexyAppFramework/imagelib/*.cpp
		src/SexyAppFramework/misc/*.cpp
		src/SexyAppFramework/paklib/*.cpp
		src/SexyAppFramework/sound/*.cpp
		src/SexyAppFramework/widget/*.cpp
		src/Sexy.TodLib/*.cpp
		src/Lawn/*.cpp
		src/Lawn/Widget/*.cpp
		src/Lawn/System/*.cpp
		src/SexyAppFramework/glad/*.c
		src/SexyAppFramework/imagelib/png/*.c
		src/SexyAppFramework/imagelib/jpeg/*.c
		src/SexyAppFramework/imagelib/zlib/*.c
)

# these files are included and must not be built in the project
list(REMOVE_ITEM SOURCES
        src/Sexy.TodLib/SWTri/TodDrawTriangle.cpp
		src/Sexy.TodLib/SWTri/TodDrawTriangleInc.cpp
)

if(ANDROID)
	list(APPEND SOURCES
		${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/android/graphics/Window.cpp
		${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/android/graphics/GLInterface.cpp
		${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/android/Input.cpp
	)
	list(APPEND PLAT_INCLUDES
		${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/android
	)
elseif(WIN32)
	list(APPEND SOURCES
		${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/windows/graphics/Window.cpp
		${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/windows/graphics/GLInterface.cpp
		${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/windows/Input.cpp
	)
	list(APPEND PLAT_INCLUDES
		${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/windows
	)
elseif (UNIX AND NOT APPLE AND NOT ANDROID)
	list(APPEND SOURCES
			${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/linux/graphics/Window.cpp
			${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/linux/graphics/GLInterface.cpp
			${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/linux/Input.cpp
	)
	list(APPEND PLAT_INCLUDES
			${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/linux
	)
endif()




set(SDL_STATIC OFF CACHE BOOL "Build static library of SDL" FORCE)
set(SDL_SHARED ON CACHE BOOL "Build shared library of SDL" FORCE)

add_subdirectory(Libs/SDL)

include(FetchContent)

if (WIN32)
	set(BASS_SRC https://www.un4seen.com/files/bass24.zip)
	set(BASS_LIB x64/bass.dll)
	set(BASS_INCLUDE c)
elseif (UNIX)
	if (APPLE)
		set(BASS_SRC https://www.un4seen.com/files/bass24-osx.zip)
		set(BASS_LIB libbass.dylib)
		set(BASS_INCLUDE ./)
	elseif (LINUX)
		set(BASS_SRC https://www.un4seen.com/files/bass24-linux.zip)
		set(BASS_LIB libs/x86_64/libbass.so)
		set(BASS_INCLUDE ./)
	elseif (ANDROID)
		set(BASS_INCLUDE c)
		# 使用ANDROID_ABI来动态识别当前架构
		if (ANDROID_ABI STREQUAL "arm64-v8a")
			set(BASS_SRC https://www.un4seen.com/files/bass24-android.zip)
			set(BASS_LIB libs/arm64-v8a/libbass.so)
		elseif (ANDROID_ABI STREQUAL "armeabi-v7a")
			set(BASS_SRC https://www.un4seen.com/files/bass24-android.zip)
			set(BASS_LIB libs/armeabi-v7a/libbass.so)
		elseif (ANDROID_ABI STREQUAL "x86")
			set(BASS_SRC https://www.un4seen.com/files/bass24-android.zip)
			set(BASS_LIB libs/x86/libbass.so)
		elseif (ANDROID_ABI STREQUAL "x86_64")
			set(BASS_SRC https://www.un4seen.com/files/bass24-android.zip)
			set(BASS_LIB libs/x86_64/libbass.so)
		else()
			message(FATAL_ERROR "不支持的Android架构: ${ANDROID_ABI}.")
		endif()  # 结束针对 Android 的判断
	else()
		message(FATAL_ERROR "仅支持Android平台的构建.")
	endif()  # 结束针对 UNIX 的判断

endif()  # 结束针对 WIN32 的判断

message(STATUS "Current ABI: ${ANDROID_ABI}")

FetchContent_Declare(
		bass
		URL ${BASS_SRC}
		#DOWNLOAD_EXTRACT_TIMESTAMP TRUE
)

FetchContent_GetProperties(bass)
if (NOT bass_POPULATED)
	FetchContent_Populate(bass)
	file(COPY ${bass_SOURCE_DIR}/${BASS_LIB} DESTINATION ${CMAKE_BINARY_DIR})
endif()

get_filename_component(bassfile ${BASS_LIB} NAME)

if(UNIX AND NOT APPLE AND NOT ANDROID)
    add_library(bass STATIC IMPORTED GLOBAL)
else ()
	add_library(bass STATIC IMPORTED GLOBAL)
endif()

set_target_properties(bass PROPERTIES
		IMPORTED_LOCATION ${CMAKE_BINARY_DIR}/${bassfile}
)

if (WIN32)
	add_executable(re-plants-vs-zombies ${SOURCES})
elseif (ANDROID)
	add_library(re-plants-vs-zombies SHARED ${SOURCES})
elseif (APPLE)
	add_executable(re-plants-vs-zombies ${SOURCES})
elseif (UNIX AND NOT APPLE AND NOT ANDROID)
	add_executable(re-plants-vs-zombies ${SOURCES})
endif()

target_include_directories(re-plants-vs-zombies PRIVATE
	${PROJECT_SOURCE_DIR}/src
	${PROJECT_SOURCE_DIR}/Libs/SDL/include
	${PLAT_INCLUDES}
	${bass_SOURCE_DIR}/${BASS_INCLUDE}
)

target_compile_definitions(re-plants-vs-zombies PRIVATE _DEBUG)

target_link_libraries(re-plants-vs-zombies SDL2::SDL2 bass)

if (WIN32)
	target_link_options(re-plants-vs-zombies PRIVATE -static -static-libgcc -static-libstdc++)
	target_link_libraries(re-plants-vs-zombies opengl32 ws2_32 ddraw dinput8 dxguid dxerr8 user32 gdi32 winmm imm32)
	target_compile_definitions(re-plants-vs-zombies PRIVATE WINDOWS)

	if(NOT CONSOLE)
		target_link_options(re-plants-vs-zombies PRIVATE -mwindows)
	endif()
elseif (ANDROID)  # 增加安卓平台的支持
    target_link_libraries(re-plants-vs-zombies android log EGL)  # 链接需要的库
	target_compile_definitions(re-plants-vs-zombies PRIVATE ANDROID)  # 定义ANDROID宏
elseif (APPLE)
	target_link_libraries(re-plants-vs-zombies "-framework OpenGL" "-framework Cocoa" "-framework IOKit" "-framework CoreFoundation" "-framework CoreAudio" "-framework AudioToolbox" "-framework CoreVideo")
	target_compile_definitions(re-plants-vs-zombies PRIVATE MACOS)
elseif (UNIX AND NOT APPLE AND NOT ANDROID)
	target_link_libraries(re-plants-vs-zombies GL dl pthread X11 EGL)
	target_compile_definitions(re-plants-vs-zombies PRIVATE LINUX)  # 定义 LINUX 宏
else ()
	target_link_libraries(re-plants-vs-zombies GL)
endif()

if (UNIX AND NOT APPLE AND NOT ANDROID)
	# 确保Linux系统使用相应的包
	message(STATUS "Linux系统检测到，将尝试安装libx11-dev 和 libxkbcommon-dev")

	execute_process(COMMAND sudo apt-get update
			RESULT_VARIABLE update_result)

	if (update_result EQUAL 0)
		execute_process(COMMAND sudo apt-get install -y libx11-dev libxkbcommon-dev
				RESULT_VARIABLE install_result)

		if(NOT install_result EQUAL 0)
			message(FATAL_ERROR "无法安装所需的库: libx11-dev 和 libxkbcommon-dev。")
		else()
			message(STATUS "成功安装所需的库。")
		endif()
	else()
		#message(FATAL_ERROR "无法更新软件包。")
	endif()

	# 这里继续放置你的其他Linux构建配置代码
elseif (APPLE)
	# 检查Homebrew是否已安装
	execute_process(COMMAND which brew
		RESULT_VARIABLE brew_result
		OUTPUT_QUIET
	)
	
	if(NOT brew_result EQUAL 0)
		message(STATUS "正在安装Homebrew...")
		execute_process(COMMAND /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
			RESULT_VARIABLE brew_install_result
		)
		
		if(NOT brew_install_result EQUAL 0)
			message(FATAL_ERROR "无法安装Homebrew。")
		else()
			message(STATUS "Homebrew安装成功。")
		endif()
	endif()
	
	# 检查CMake是否已安装
	execute_process(COMMAND which cmake
		RESULT_VARIABLE cmake_result
		OUTPUT_QUIET
	)
	
	if(NOT cmake_result EQUAL 0)
		message(STATUS "正在安装CMake...")
		execute_process(COMMAND brew install cmake
			RESULT_VARIABLE cmake_install_result
		)
		
		if(NOT cmake_install_result EQUAL 0)
			message(FATAL_ERROR "无法安装CMake。")
		else()
			message(STATUS "CMake安装成功。")
		endif()
	endif()
	
	# 检查SDL2是否已安装
	execute_process(COMMAND brew list sdl2
		RESULT_VARIABLE sdl2_result
		OUTPUT_QUIET
	)
	
	if(NOT sdl2_result EQUAL 0)
		message(STATUS "正在安装SDL2...")
		execute_process(COMMAND brew install sdl2
			RESULT_VARIABLE sdl2_install_result
		)
		
		if(NOT sdl2_install_result EQUAL 0)
			message(FATAL_ERROR "无法安装SDL2。")
		else()
			message(STATUS "SDL2安装成功。")
		endif()
	endif()
endif()
