#!/bin/bash

# 设置颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 检查参数
if [ $# -ne 2 ]; then
    echo -e "${RED}错误: 需要两个参数${NC}"
    echo "用法: $0 <源目录> <目标目录>"
    exit 1
fi

SRC_DIR=$1
DST_DIR=$2

# 检查源目录是否存在
if [ ! -d "$SRC_DIR" ]; then
    echo -e "${RED}错误: 源目录不存在: $SRC_DIR${NC}"
    exit 1
fi

# 创建目标目录
mkdir -p "$DST_DIR"

# 复制文件
echo -e "${YELLOW}正在复制资源文件...${NC}"
if cp -r "$SRC_DIR"/* "$DST_DIR"/ 2>/dev/null; then
    echo -e "${GREEN}资源文件复制完成${NC}"
else
    # Windows系统使用xcopy
    if command -v xcopy &> /dev/null; then
        echo -e "${YELLOW}使用xcopy复制文件...${NC}"
        xcopy /E /I /Y "$SRC_DIR" "$DST_DIR"
        echo -e "${GREEN}资源文件复制完成${NC}"
    else
        echo -e "${RED}错误: 复制文件失败${NC}"
        exit 1
    fi
fi

exit 0 