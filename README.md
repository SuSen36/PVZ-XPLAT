# REPVZ (Re-Plants vs Zombies)

## 项目介绍
这是一个使用 SDL2 和 GLAD 重新实现的植物大战僵尸游戏，支持跨平台（Windows/Linux/Android）。本项目基于社区反编译的植物大战僵尸源码，进行了现代化重构和跨平台移植。

## 特性
- 使用现代 C++17 标准
- 跨平台支持 (Windows/Linux/Android)
- 基于 SDL2 的图形渲染
- GLAD OpenGL 加载器
- BASS 音频引擎
- CMake 构建系统

## 目录结构
```
├── android-project/    # Android 平台相关文件
├── build/             # 构建输出目录
├── CMake/             # CMake 配置文件
├── Libs/              # 第三方库
│   ├── SDL/          # SDL2 库
│   └── zlib/         # zlib 压缩库
├── Resources/         # 游戏资源文件
│   ├── compiled/     # 编译后的资源
│   ├── data/         # 游戏数据
│   ├── images/       # 图片资源
│   ├── particles/    # 粒子效果
│   ├── properties/   # 配置文件
│   ├── reanim/       # 动画资源
│   └── sounds/       # 音频资源
├── src/              # 源代码
│   ├── Lawn/         # 游戏主要逻辑
│   ├── SexyAppFramework/  # 游戏框架
│   └── Sexy.TodLib/  # 工具库
└── tools/            # 开发工具
    ├── copy_resources.sh  # 资源复制脚本
    ├── decrypt.c     # 资源解密工具
    └── metadata.c    # 元数据处理工具
```

## 构建说明

### Windows
需求：
- CMake 3.2.2 或更高版本
- MinGW-w64 或 MSVC
- SDL2 开发库
- BASS 音频库

```bash
mkdir build
cd build
cmake ..
cmake --build .

# 复制资源文件
../tools/copy_resources.sh ../Resources  cmake-build-debug
```

### Linux
需求：
- CMake 3.2.2+
- GCC/Clang
- SDL2 开发库
- BASS 音频库
- X11 开发库
- OpenGL 开发库

```bash
sudo apt-get update
sudo apt-get install libx11-dev libxkbcommon-dev
mkdir build
cd build
cmake ..
cmake --build .

# 复制资源文件
chmod +x ../tools/copy_resources.sh
../tools/copy_resources.sh ../Resources .
```

### macOS
需求：
- CMake 3.2.2+
- Xcode Command Line Tools
- SDL2 开发库
- BASS 音频库
- OpenGL 开发库

```bash
# 安装依赖
brew install cmake

mkdir build
cd build
cmake ..
cmake --build .

#构建
cd build
cmake -G "Xcode" ..
# 复制资源文件
//请手动加入 .xcodeproj
```

### Android
需求：
- Android Studio
- Android NDK
- CMake 3.2.2+
- SDL2 for Android
- BASS for Android

使用 Android Studio 打开 android-project 目录进行构建。

```bash
# 复制资源文件到Android项目
./tools/copy_resources.sh Resources android-project/app/src/main/assets
```

### Web
```bash
# 构建
 cd web_project;.\web_build.ps1
```

```bash
# 启动本地服务器
# http://localhost:8000/re-plants-vs-zombies.html
# 此脚本会启动一个由 web_server.py 支持的本地 HTTP 服务器
 cd web_project;.\start_web_server.ps1
```
## 运行
Windows/Linux 平台编译完成后，游戏数据文件需要放在可执行文件同目录下。
Android 平台的数据文件存放在 Android/data/com.popcap.pvz/files 目录下。

## 开发者
- 移植者：SuSen36

## 许可说明
本项目仅用于学习和研究目的。所有游戏资源的版权归 PopCap Games 所有。

## 免责声明
本项目及其所有内容仅供教育和研究目的使用。我们不对本项目中包含的任何信息的准确性、完整性或有用性做出任何保证，也不对因使用或依赖这些信息而造成的任何损害承担责任。
本项目的开发者不对任何直接、间接、附带、特殊或后果性损害承担责任，包括但不限于数据丢失、利润损失或业务中断，这些损害可能是由于使用或无法使用本项目而引起的，即使我们已被告知发生此类损害的可能性。
用户应自行承担使用本项目的全部风险。在任何情况下，用户都应对其使用本项目所采取的行动负全部责任。
本项目不隶属于 PopCap Games，也不受其认可、维护或授权。所有游戏资源和商标均为其各自所有者的财产。本项目无意侵犯任何版权或商标。

## 贡献指南
欢迎提交 Issue 和 Pull Request 来改进项目。在提交代码前，请确保：
1. 代码符合项目的编码规范
2. 通过所有平台的编译测试

## 致谢
- 跨平台和音频部分的代码参考自 @headshot2017 的项目: [https://github.com/headshot2017/re-plants-vs-zombies](https://github.com/headshot2017/re-plants-vs-zombies)
- 反编译项目来自 @Patoke 的项目: [https://github.com/Patoke/re-plants-vs-zombies](https://github.com/Patoke/re-plants-vs-zombies)
- 感谢 @rspforhp 在反编译 PvZ 0.9.9 版本方面的出色工作。
- 感谢 @ruslan831 存档了 PvZ 0.9.9 的反编译项目。

## 已知问题
- 如遇到编译问题，请检查 CMake 配置和依赖库是否正确安装
- 音频相关问题请确认 BASS 库是否正确配置
- 资源文件复制失败时，请检查脚本执行权限和路径是否正确
