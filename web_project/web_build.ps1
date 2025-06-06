# build.ps1
cd $PSScriptRoot
Write-Host "After initial cd to PSScriptRoot. Current Directory: $(pwd)"

# 设置环境
$emsdkRoot = Join-Path $PSScriptRoot "emsdk"
Write-Host "emsdkRoot set to: $emsdkRoot"

# Explicitly change to emsdk directory, source the env script, then go back
Push-Location $emsdkRoot
Write-Host "Before sourcing emsdk_env.ps1. Current Directory: $(pwd)"
. .\emsdk_env.ps1
Write-Host "After sourcing emsdk_env.ps1. Current Directory: $(pwd)"
Write-Host "PATH after emsdk_env.ps1: $($env:Path)"
Pop-Location
Write-Host "After Pop-Location. Current Directory: $(pwd)"

# Remove any manual PATH additions as direct calls will be used.
# Removed the emsdk list and activate calls that were added for diagnostics.

cd build_emscripten
Write-Host "After cd to build_emscripten. Current Directory: $(pwd)"

# Configure CMake
# CMAKE_BIN is expected to be a system environment variable pointing to the CMake bin directory.
# User provided specific path for CMake: C:\CMake\bin(请替换为你的cmakeBin路径)
$cmakeExePath = "C:\CMake\bin\cmake.exe"
$emscriptenToolchainFile = Join-Path $emsdkRoot "upstream\emscripten\cmake\Modules\Platform\Emscripten.cmake"
$nodeExePath = Join-Path $emsdkRoot "node\22.16.0_64bit\bin\node.exe"

& $cmakeExePath ../.. -G "Ninja" `
    "-DCMAKE_TOOLCHAIN_FILE=$emscriptenToolchainFile" `
    "-DCMAKE_CROSSCOMPILING_EMULATOR=$nodeExePath"

# Build project
$ninjaExePath = Join-Path $emsdkRoot "upstream\bin\ninja.exe"
& $ninjaExePath -j8

# 运行测试
start re-plants-vs-zombies.html 