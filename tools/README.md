# 资源复制工具使用说明

## 工具介绍
`copy_resources.sh` 是一个跨平台的资源文件复制工具，用于将游戏资源文件复制到指定目录。该工具支持 Windows 和 Linux 系统，并自动选择最适合的复制命令。

## 功能特点
- 跨平台支持（Windows/Linux）
- 自动检测并使用合适的复制命令
- 支持递归复制目录
- 彩色输出提示
- 错误检查和提示
- 自动创建目标目录

## 使用方法

### 基本用法
```bash
./copy_resources.sh <源目录> <目标目录>
```

### Windows 平台
1. 在构建目录中复制资源：
```bash
# 假设当前在 build 目录
../tools/copy_resources.sh ../Resources .
```

2. 复制到其他目录：
```bash
./tools/copy_resources.sh Resources D:/game/assets
```

### Linux 平台
1. 首先添加执行权限：
```bash
chmod +x copy_resources.sh
```

2. 在构建目录中复制资源：
```bash
# 假设当前在 build 目录
../tools/copy_resources.sh ../Resources .
```

3. 复制到其他目录：
```bash
./tools/copy_resources.sh Resources /opt/game/assets
```

### Android 平台
```bash
# 复制到 Android 项目的 assets 目录
./tools/copy_resources.sh Resources android-project/app/src/main/assets
```

## 参数说明
- `<源目录>`：要复制的资源文件所在目录
- `<目标目录>`：资源文件要复制到的目标目录

## 输出说明
- 黄色：操作进行中
- 绿色：操作成功完成
- 红色：错误信息

## 常见问题
1. 权限问题
   - Linux/Android：确保脚本有执行权限
   - Windows：以管理员身份运行命令提示符

2. 路径问题
   - 使用绝对路径或相对路径
   - Windows 路径使用正斜杠(/)或反斜杠(\)
   - Linux 路径使用正斜杠(/)

3. 复制失败
   - 检查源目录是否存在
   - 检查目标目录是否有写入权限
   - 检查磁盘空间是否充足

## 示例
```bash
# 示例1：复制到构建目录
./copy_resources.sh ../Resources build

# 示例2：复制到指定目录
./copy_resources.sh Resources /path/to/destination

# 示例3：复制到Android项目
./copy_resources.sh Resources android-project/app/src/main/assets
```

## 注意事项
1. 确保源目录包含所有必要的资源文件
2. 目标目录会被自动创建（如果不存在）
3. 复制过程会保留目录结构
4. 建议在构建完成后执行复制操作
5. 定期备份重要的资源文件 