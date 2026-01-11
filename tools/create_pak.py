#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Plants vs Zombies PAK 文件创建工具
将目录中的所有文件打包为 PAK 格式
"""

import os
import struct
import sys

# PAK 文件格式常量
PAK_MAGIC = 0xBAC04AC0
FILEFLAGS_END = 0x80
XOR_KEY = 0xF7


def create_pak_from_directory(source_dir, output_pak_path):
    """从目录创建 PAK 文件"""
    print(f'正在从 {source_dir} 创建 PAK 文件: {output_pak_path}')
    
    # 验证源目录存在
    if not os.path.exists(source_dir):
        print(f'错误: 源目录不存在: {source_dir}')
        return False
    
    # 收集所有文件
    files_data = []
    total_files = 0
    
    for root, dirs, files in os.walk(source_dir):
        for file in files:
            file_path = os.path.join(root, file)
            relative_path = os.path.relpath(file_path, source_dir)
            # 将反斜杠替换为正斜杠
            relative_path = relative_path.replace('\\', '/')
            
            # 如果是直接在source_dir下的文件，确保不包含前导斜杠
            if relative_path.startswith('./'):
                relative_path = relative_path[2:]
            
            file_size = os.path.getsize(file_path)
            file_time = int(os.path.getmtime(file_path))
            
            files_data.append({
                'path': file_path,
                'relative_path': relative_path,
                'size': file_size,
                'time': file_time
            })
            total_files += 1
    
    print(f'找到 {total_files} 个文件')
    
    if total_files == 0:
        print('警告: 没有找到任何文件，将创建空的 PAK 文件')
    
    # 构建 PAK 文件内容
    pak_content = bytearray()
    
    # 写入魔数和版本
    pak_content.extend(struct.pack('<II', PAK_MAGIC, 0))
    
    # 写入文件列表
    current_data_offset = 0
    for file_info in files_data:
        relative_path = file_info['relative_path']
        file_size = file_info['size']
        file_time = file_info['time']
        
        # 写入文件名长度和文件名
        name_bytes = relative_path.encode('latin-1', errors='replace')
        name_length = len(name_bytes)
        
        if name_length > 255:
            print(f'警告: 文件名过长，将被截断: {relative_path}')
            name_bytes = name_bytes[:255]
            name_length = 255
        
        pak_content.extend(bytes([0]))  # flags
        pak_content.extend(bytes([name_length]))  # name length
        pak_content.extend(name_bytes)  # name
        pak_content.extend(struct.pack('<i', file_size))  # size
        pak_content.extend(struct.pack('<Q', file_time))  # time
        
        current_data_offset += file_size
    
    # 写入文件列表结束标志
    pak_content.extend(bytes([FILEFLAGS_END]))
    
    # 写入文件数据
    for file_info in files_data:
        with open(file_info['path'], 'rb') as f:
            file_data = f.read()
            pak_content.extend(file_data)
    
    # 对整个文件内容进行异或加密
    for i in range(len(pak_content)):
        pak_content[i] ^= XOR_KEY
    
    # 确保输出目录存在
    output_dir = os.path.dirname(output_pak_path)
    if output_dir:
        os.makedirs(output_dir, exist_ok=True)
    
    # 写入 PAK 文件
    with open(output_pak_path, 'wb') as f:
        f.write(pak_content)
    
    print(f'PAK 文件创建完成: {output_pak_path}')
    print(f'文件大小: {len(pak_content)} 字节')
    return True


def main():
    """主函数"""
    if len(sys.argv) != 3:
        print('用法: python create_pak.py <源目录> <输出PAK文件路径>')
        print('示例: python create_pak.py Resources PAK/main.pak')
        sys.exit(1)
    
    source_dir = sys.argv[1]
    output_pak = sys.argv[2]
    
    try:
        success = create_pak_from_directory(source_dir, output_pak)
        if success:
            print('PAK 文件创建成功')
            sys.exit(0)
        else:
            print('PAK 文件创建失败')
            sys.exit(1)
    except Exception as e:
        print(f'错误: {str(e)}')
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == '__main__':
    main()
