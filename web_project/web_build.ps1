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
$buildDir = Join-Path $PSScriptRoot "pvz-web\src\main\resources\static"
mkdir $buildDir -ErrorAction SilentlyContinue
cd $buildDir
Write-Host "After cd to $buildDir. Current Directory: $(pwd)"

# Configure CMake
# CMAKE_BIN is expected to be a system environment variable pointing to the CMake bin directory.
# User provided specific path for CMake: C:\CMake\bin(请替换为你的cmakeBin路径)
$cmakeExePath = "C:\CMake\bin\cmake.exe"
$emscriptenToolchainFile = Join-Path $emsdkRoot "upstream\emscripten\cmake\Modules\Platform\Emscripten.cmake"
$nodeExePath = Join-Path $emsdkRoot "node\22.16.0_64bit\bin\node.exe"

Write-Host "Current Directory before CMake: $(pwd)"
& $cmakeExePath ../../../../../../ -G "Ninja" `
    "-DCMAKE_TOOLCHAIN_FILE=$emscriptenToolchainFile" `
    "-DCMAKE_CROSSCOMPILING_EMULATOR=$nodeExePath" `
    "-DCMAKE_EXE_LINKER_FLAGS=-s FORCE_FILESYSTEM=1 --preload-file ../"

# Build project
$ninjaExePath = Join-Path $emsdkRoot "upstream\bin\ninja.exe"
& $ninjaExePath -j8