cmake_minimum_required(VERSION 3.22...3.28)
set(CMAKE_VERBOSE_MAKEFILE ON)
set(CMAKE_CXX_STANDARD 17)  # 设置 C++ 标准为 C++17
set(CMAKE_CXX_STANDARD_REQUIRED ON)
project(re-plants-vs-zombies LANGUAGES C CXX ASM)


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
 elseif (APPLE)
    list(APPEND SOURCES
            ${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/macos/graphics/Window.cpp
            ${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/macos/graphics/GLInterface.cpp
            ${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/macos/Input.cpp
    )
    list(APPEND PLAT_INCLUDES
            ${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/macos
    )
elseif (EMSCRIPTEN)
	set(LIBTYPE STATIC CACHE STRING "Build type for SDL (STATIC/SHARED)" FORCE) # Force SDL to build as static
	list(APPEND SOURCES
			${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/emscripten/graphics/Window.cpp
			${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/emscripten/graphics/GLInterface.cpp
			${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/emscripten/Input.cpp
	)
	list(APPEND PLAT_INCLUDES
		${CMAKE_CURRENT_SOURCE_DIR}/src/SexyAppFramework/platform/emscripten
	)
endif()

if(NOT ANDROID)
set(SDL_STATIC ON CACHE BOOL "Build static library of SDL" FORCE)
set(SDL_SHARED OFF CACHE BOOL "Build shared library of SDL" FORCE)
endif()

set(USE_MIDI OFF CACHE BOOL "SDL Mixer X midi" FORCE)
set(USE_MODPLUG OFF CACHE BOOL "SDL Mixer X modplug" FORCE)
set(USE_XMP OFF CACHE BOOL "SDL Mixer X xmp" FORCE)
set(USE_OPUS OFF CACHE BOOL "SDL Mixer X opus" FORCE)
set(USE_DRFLAC OFF CACHE BOOL "SDL Mixer X flac" FORCE)
set(USE_PXTONE OFF CACHE BOOL "SDL Mixer X pxtone" FORCE)
set(USE_OPENMPT ON CACHE BOOL "SDL Mixer X openmpt" FORCE) # 启用 OpenMPT 支持

if(ANDROID)
set(BUILD_SHARED_LIBS ON CACHE BOOL "Build static libraries for Emscripten" FORCE)
else ()
set(BUILD_STATIC_LIBS ON CACHE BOOL "Build static libraries for Emscripten" FORCE)
set(BUILD_SHARED_LIBS OFF CACHE BOOL "Build static libraries for Emscripten" FORCE)
endif()

add_subdirectory(Libs/SDL)
add_subdirectory(Libs/SDL-Mixer-X)

if (WIN32)
	add_executable(re-plants-vs-zombies ${SOURCES})
elseif (ANDROID)
	add_library(re-plants-vs-zombies SHARED ${SOURCES})
elseif (EMSCRIPTEN)
	add_executable(re-plants-vs-zombies ${SOURCES}) # Emscripten output is an executable (.js or .html)
	set_target_properties(re-plants-vs-zombies PROPERTIES SUFFIX ".html") # Set suffix to .html for convenience
else ()
	add_executable(re-plants-vs-zombies ${SOURCES})
endif()

target_include_directories(re-plants-vs-zombies PRIVATE
	${PROJECT_SOURCE_DIR}/src/SexyAppFramework/imagelib/zlib
	${PROJECT_SOURCE_DIR}/src
	${PROJECT_SOURCE_DIR}/Libs/SDL/include
	${PROJECT_SOURCE_DIR}/Libs/SDL-Mixer-X/include
	${PLAT_INCLUDES}
)

# 强制使用小端序编码
target_compile_definitions(re-plants-vs-zombies PRIVATE SDL_BYTEORDER=SDL_LIL_ENDIAN)
# 禁用浮点异常（避免低性能设备崩溃）
target_compile_options(re-plants-vs-zombies PRIVATE -fno-trapping-math)


if(APPLE)
    # 设置输出目录（可选）
    set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/bin")
    set(CMAKE_LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib")
    set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib")

    # 定义资源目录
    set(RESOURCES_DIR "${PROJECT_SOURCE_DIR}/Resources")
    set(APP_RESOURCES_DIR
"$<TARGET_BUNDLE_CONTENT_DIR:re-plants-vs-zombies>/Resources")

    # 设置 macOS Bundle 属性
        set_target_properties(re-plants-vs-zombies PROPERTIES
        MACOSX_BUNDLE TRUE
        MACOSX_BUNDLE_GUI_IDENTIFIER "com.popcap.pvz"
        MACOSX_BUNDLE_BUNDLE_NAME "Plants vs Zombies"
        MACOSX_BUNDLE_BUNDLE_VERSION "1.0.0"
        MACOSX_BUNDLE_SHORT_VERSION_STRING "1.0"
        MACOSX_BUNDLE_ICON_FILE "AppIcon.icns"
        
        # 签名关键配置
        XCODE_ATTRIBUTE_DEVELOPMENT_TEAM "SuSen36"
        XCODE_ATTRIBUTE_CODE_SIGN_IDENTITY "Apple Development"
        XCODE_ATTRIBUTE_CODE_SIGN_STYLE "Automatic"
        XCODE_ATTRIBUTE_ENABLE_HARDENED_RUNTIME "YES"
    )

file(GLOB_RECURSE RESOURCE_FILES
    "${RESOURCES_DIR}/*"
    "${RESOURCES_DIR}/compiled/*"
    "${RESOURCES_DIR}/data/*"
    "${RESOURCES_DIR}/images/*"
    "${RESOURCES_DIR}/particle/*"
    "${RESOURCES_DIR}/properties/*"
    "${RESOURCES_DIR}/reanim/*"
    "${RESOURCES_DIR}/sounds/*"
)
endif()

if(NOT ANDROID)
	# 导出 SDL2 目标到命名空间
	install(TARGETS SDL2-static SDL2main EXPORT SDL2Targets  # 显式导出 SDL2
			ARCHIVE DESTINATION lib
			LIBRARY DESTINATION lib
			RUNTIME DESTINATION bin
			INCLUDES DESTINATION include
	)
else()
	install(TARGETS SDL2 SDL2main EXPORT SDL2Targets  # 显式导出 SDL2
			ARCHIVE DESTINATION lib
			LIBRARY DESTINATION lib
			RUNTIME DESTINATION bin
			INCLUDES DESTINATION include
	)
endif()

# 将 SDL2 加入全局导出集
install(EXPORT SDL2Targets
		FILE SDL2Targets.cmake
		NAMESPACE SDL2::
		DESTINATION lib/cmake/SDL2
)


target_compile_definitions(re-plants-vs-zombies PRIVATE _DEBUG)
if(ANDROID)
target_link_libraries(re-plants-vs-zombies SDL2 SDL2_mixer_ext) # 为 Android 链接 OpenMPT
else()
target_link_libraries(re-plants-vs-zombies SDL2-static SDL2_mixer_ext_Static) # 为其他平台链接 OpenMPT
endif()

if (EMSCRIPTEN)
	# Emscripten 特定的链接选项
    target_link_options(re-plants-vs-zombies PRIVATE
        -sWASM=1 # 输出 WebAssembly
        -sASYNCIFY=1
        -sEXPORTED_FUNCTIONS=_main
        -sEXPORTED_RUNTIME_METHODS=ccall,cwrap
        --shell-file "${CMAKE_CURRENT_SOURCE_DIR}/web_project/emsdk/upstream/emscripten/src/shell_minimal.html"
        -sUSE_WEBGL2=1 # 启用 WebGL 2
        ${LDFLAGS}
    )
endif()

if (WIN32)
	target_link_libraries(re-plants-vs-zombies opengl32 ws2_32 ddraw dinput8 dxguid dxerr8 user32 gdi32 winmm imm32)
	target_compile_definitions(re-plants-vs-zombies PRIVATE WINDOWS)
elseif (ANDROID)  # 增加安卓平台的支持
    target_link_libraries(re-plants-vs-zombies android log EGL)  # 链接需要的库
	target_compile_definitions(re-plants-vs-zombies PRIVATE ANDROID)  # 定义ANDROID宏
elseif (APPLE)
	target_link_libraries(re-plants-vs-zombies "-framework OpenGL" "-framework Cocoa" "-framework IOKit" "-framework CoreFoundation" "-framework CoreAudio" "-framework AudioToolbox" "-framework CoreVideo")
	target_compile_definitions(re-plants-vs-zombies PRIVATE MACOS)
elseif (EMSCRIPTEN)
	target_compile_definitions(re-plants-vs-zombies PRIVATE EMSCRIPTEN)
elseif (UNIX AND NOT APPLE AND NOT ANDROID AND NOT EMSCRIPTEN)
	target_link_libraries(re-plants-vs-zombies GL dl X11 EGL)
	target_compile_definitions(re-plants-vs-zombies PRIVATE LINUX)  # 定义 LINUX 宏
else ()
	target_link_libraries(re-plants-vs-zombies GL)
endif()

if (UNIX AND NOT APPLE AND NOT ANDROID AND NOT EMSCRIPTEN) 
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
endif()
