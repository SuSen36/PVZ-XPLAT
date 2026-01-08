@echo off
chcp 65001 >nul
echo ========================================
echo Plants vs Zombies PAK 文件解包工具
echo ========================================
echo.

if "%~1"=="" (
    echo 用法: unpack_pak.bat ^<pak文件路径^> [输出目录]
    echo.
    echo 示例:
    echo   unpack_pak.bat "C:\Users\Administrator\Downloads\zs\Plants_Vs_Zombies_V1.0.0.1051_CN_V2\main.pak"
    echo.
    pause
    exit /b 1
)

set PAK_FILE=%~1
set OUTPUT_DIR=%~2

if not exist "%PAK_FILE%" (
    echo 错误: PAK 文件不存在: %PAK_FILE%
    pause
    exit /b 1
)

echo 正在解包: %PAK_FILE%
echo.

python unpack_pak.py "%PAK_FILE%" %OUTPUT_DIR%

if errorlevel 1 (
    echo.
    echo 解包失败！
    pause
    exit /b 1
)

echo.
echo 解包完成！
pause

