#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Plants vs Zombies PAK 文件解包工具
支持解包 main.pak 文件并提取其中的资源文件
"""

import os
import struct
import sys
from pathlib import Path

# PAK 文件格式常量
PAK_MAGIC = 0xBAC04AC0
FILEFLAGS_END = 0x80
XOR_KEY = 0xF7


class PakFile:
    """PAK 文件解析类"""
    
    def __init__(self, pak_path):
        self.pak_path = pak_path
        self.data = None
        self.files = []
        
    def read(self):
        """读取 PAK 文件"""
        print(f"正在读取 PAK 文件: {self.pak_path}")
        
        if not os.path.exists(self.pak_path):
            raise FileNotFoundError(f"PAK 文件不存在: {self.pak_path}")
        
        with open(self.pak_path, 'rb') as f:
            self.data = bytearray(f.read())
        
        print(f"文件大小: {len(self.data)} 字节")
        
        # 解密：对整个文件数据进行异或操作
        print("正在解密文件数据...")
        for i in range(len(self.data)):
            self.data[i] ^= XOR_KEY
        
        # 验证魔数和版本
        if len(self.data) < 8:
            raise ValueError("PAK 文件太小，无法读取头部")
        
        magic, version = struct.unpack('<II', self.data[0:8])
        
        if magic != PAK_MAGIC:
            raise ValueError(f"无效的 PAK 文件魔数: 0x{magic:08X} (期望: 0x{PAK_MAGIC:08X})")
        
        if version > 0:
            raise ValueError(f"不支持的 PAK 文件版本: {version}")
        
        print(f"魔数验证通过: 0x{magic:08X}, 版本: {version}")
        
    def parse_file_list(self):
        """解析文件列表"""
        print("\n正在解析文件列表...")
        
        ptr = 8  # 跳过魔数和版本（8字节）
        aPos = 0  # 文件数据起始位置（相对于文件列表结束后的偏移）
        
        file_count = 0
        
        while ptr < len(self.data):
            # 读取 Flags
            if ptr >= len(self.data):
                break
            
            flags = self.data[ptr]
            ptr += 1
            
            # 检查是否到达文件列表末尾
            if flags & FILEFLAGS_END:
                break
            
            # 读取文件名长度
            if ptr >= len(self.data):
                break
            
            name_width = self.data[ptr]
            ptr += 1
            
            # 读取文件名
            if ptr + name_width > len(self.data):
                break
            
            name_bytes = self.data[ptr:ptr + name_width]
            name = name_bytes.decode('latin-1', errors='replace')
            ptr += name_width
            
            # 将反斜杠替换为正斜杠
            name = name.replace('\\', '/')
            
            # 读取文件大小
            if ptr + 4 > len(self.data):
                break
            
            src_size = struct.unpack('<i', self.data[ptr:ptr + 4])[0]
            ptr += 4
            
            # 读取文件时间
            if ptr + 8 > len(self.data):
                break
            
            file_time = struct.unpack('<Q', self.data[ptr:ptr + 8])[0]
            ptr += 8
            
            # 计算文件数据偏移（文件列表结束后 + 累积偏移）
            file_offset = aPos
            aPos += src_size
            
            self.files.append({
                'name': name,
                'size': src_size,
                'time': file_time,
                'offset': file_offset,
                'flags': flags
            })
            
            file_count += 1
        
        # 计算文件列表结束位置（即文件数据开始位置）
        list_end_offset = ptr
        
        # 更新所有文件的偏移量
        for file_info in self.files:
            file_info['offset'] += list_end_offset
        
        print(f"找到 {file_count} 个文件")
        return list_end_offset
    
    def extract_files(self, output_dir=None):
        """提取所有文件"""
        if output_dir is None:
            # 默认输出到 PAK 文件同目录下的 extracted 文件夹
            pak_dir = os.path.dirname(self.pak_path)
            pak_name = os.path.splitext(os.path.basename(self.pak_path))[0]
            output_dir = os.path.join(pak_dir, f"{pak_name}_extracted")
        
        output_path = Path(output_dir)
        output_path.mkdir(parents=True, exist_ok=True)
        
        print(f"\n正在提取文件到: {output_dir}")
        
        extracted_count = 0
        failed_count = 0
        
        for i, file_info in enumerate(self.files, 1):
            file_path = output_path / file_info['name']
            
            # 创建目录
            file_path.parent.mkdir(parents=True, exist_ok=True)
            
            try:
                # 检查文件数据是否在范围内
                offset = file_info['offset']
                size = file_info['size']
                
                if offset + size > len(self.data):
                    print(f"[{i}/{len(self.files)}] 错误: {file_info['name']} - 数据超出文件范围")
                    failed_count += 1
                    continue
                
                # 提取文件数据
                file_data = bytes(self.data[offset:offset + size])
                
                # 写入文件
                with open(file_path, 'wb') as f:
                    f.write(file_data)
                
                extracted_count += 1
                
                if i % 100 == 0 or i == len(self.files):
                    print(f"[{i}/{len(self.files)}] 已提取: {file_info['name']} ({size} 字节)")
                
            except Exception as e:
                print(f"[{i}/{len(self.files)}] 错误: {file_info['name']} - {str(e)}")
                failed_count += 1
        
        print(f"\n提取完成!")
        print(f"成功: {extracted_count} 个文件")
        print(f"失败: {failed_count} 个文件")
        print(f"输出目录: {output_dir}")
        
        return extracted_count, failed_count
    
    def list_files(self):
        """列出所有文件"""
        print("\n文件列表:")
        print("-" * 80)
        print(f"{'序号':<6} {'文件名':<50} {'大小':<12} {'时间戳':<15}")
        print("-" * 80)
        
        for i, file_info in enumerate(self.files, 1):
            name = file_info['name']
            if len(name) > 47:
                name = name[:44] + "..."
            
            print(f"{i:<6} {name:<50} {file_info['size']:<12} {file_info['time']:<15}")
        
        print("-" * 80)
        print(f"总计: {len(self.files)} 个文件")


def main():
    """主函数"""
    if len(sys.argv) < 2:
        print("用法: python unpack_pak.py <pak文件路径> [输出目录]")
        print("示例: python unpack_pak.py \"C:\\Users\\Administrator\\Downloads\\zs\\Plants_Vs_Zombies_V1.0.0.1051_CN_V2\\main.pak\"")
        sys.exit(1)
    
    pak_path = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else None
    
    try:
        # 创建 PAK 文件对象
        pak = PakFile(pak_path)
        
        # 读取并解析
        pak.read()
        pak.parse_file_list()
        
        # 列出文件
        pak.list_files()
        
        # 提取文件
        print("\n" + "=" * 80)
        pak.extract_files(output_dir)
        
    except Exception as e:
        print(f"错误: {str(e)}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == '__main__':
    main()

