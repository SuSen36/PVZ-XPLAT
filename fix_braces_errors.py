#!/usr/bin/env python3
"""
修复GLVertex数组初始化的大括号格式问题 - 增强版
支持处理嵌套大括号结构
"""

import os
import re

def fix_glvertex_braces(file_path):
    """修复GLVertex数组初始化的格式问题，支持嵌套大括号"""

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 修复GLVertex数组初始化的格式
    # 改进后的正则表达式：匹配从GLVertex aVertex[4] = { 到下一个行首缩进后的};
    # 使用非贪婪匹配，直到遇到独立一行的"};"（前面可能有空格）
    # 使用re.DOTALL让.匹配换行符
    pattern = r'(GLVertex\s+aVertex\[\d+\]\s*=\s*\{)(.*?)(^\s*\};)'

    def replace_braces(match):
        """替换大括号格式，保持嵌套结构"""
        prefix = match.group(1)  # "GLVertex aVertex[4] = {"
        braces_content = match.group(2)  # 大括号内部的所有内容
        suffix = match.group(3)  # 结束的"};"

        # 分割内容为行
        lines = braces_content.strip().split('\n')

        # 重新格式化每一行，保持适当的缩进
        formatted_lines = []
        for i, line in enumerate(lines):
            stripped = line.strip()
            if stripped:  # 忽略空行
                # 为每个元素添加一致的缩进（8个空格）
                formatted_lines.append('        ' + stripped)

        # 重新组合，确保格式正确
        if formatted_lines:
            result = prefix + '\n'
            result += ',\n'.join(formatted_lines) + '\n'
            result += '    ' + suffix.strip()  # 为结束的"};"添加缩进
        else:
            result = prefix + suffix

        return result

    # 应用修复，使用re.MULTILINE | re.DOTALL标志
    fixed_content = re.sub(pattern, replace_braces, content, flags=re.MULTILINE | re.DOTALL)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(fixed_content)

    print(f"已修复文件: {file_path}")
    return True

def fix_all_glvertex_patterns(file_path):
    """修复各种GLVertex数组初始化模式"""

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 修复模式1: GLVertex aVertex[4] = { ... };
    patterns = [
        # 标准4元素数组
        (r'(GLVertex\s+aVertex\[4\]\s*=\s*\{)(.*?)(^\s*\};)', 'GLVertex aVertex[4]'),

        # 可能的不同大小
        (r'(GLVertex\s+aVertex\[\d+\]\s*=\s*\{)(.*?)(^\s*\};)', 'GLVertex aVertex[N]'),

        # 可能有不同变量名
        (r'(GLVertex\s+\w+\[\d+\]\s*=\s*\{)(.*?)(^\s*\};)', 'GLVertex varName[N]'),
    ]

    modified = False
    for pattern, desc in patterns:
        # 检查是否存在此模式
        if re.search(pattern, content, flags=re.MULTILINE | re.DOTALL):
            print(f"  找到 {desc} 模式")
            modified = True

    if not modified:
        print(f"文件 {file_path} 中未找到需要修复的GLVertex模式")
        return False

    # 实际修复逻辑
    def format_vertex_array(match):
        prefix = match.group(1)
        content = match.group(2)
        suffix = match.group(3)

        # 清理内容
        lines = [line.strip() for line in content.strip().split('\n') if line.strip()]

        if not lines:
            return prefix + suffix

        # 重新格式化，每行前面加8个空格
        formatted_lines = ['        ' + line for line in lines]

        # 在行之间添加逗号（最后一行不加）
        formatted_content = ',\n'.join(formatted_lines)

        return f'{prefix}\n{formatted_content}\n    {suffix.strip()}'

    # 应用第一个模式（最具体的）
    fixed_content = re.sub(
        patterns[0][0],
        format_vertex_array,
        content,
        flags=re.MULTILINE | re.DOTALL
    )

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(fixed_content)

    print(f"已成功修复 {file_path} 中的GLVertex数组格式")
    return True

def process_directory(directory, extensions=('.cpp', '.h', '.hpp', '.c', '.cc')):
    """递归处理目录中的所有源代码文件"""

    files_fixed = []

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(extensions):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()

                    # 检查是否包含GLVertex模式
                    if re.search(r'GLVertex\s+\w+\[\d+\]\s*=', content):
                        print(f"处理文件: {file_path}")
                        if fix_all_glvertex_patterns(file_path):
                            files_fixed.append(file_path)
                except Exception as e:
                    print(f"读取文件 {file_path} 时出错: {e}")

    return files_fixed

def main():
    import sys

    if len(sys.argv) > 1:
        # 处理命令行参数指定的文件/目录
        targets = sys.argv[1:]
    else:
        # 默认处理当前目录
        targets = ['.']

    all_files_fixed = []

    for target in targets:
        if os.path.isfile(target):
            # 处理单个文件
            if target.endswith(('.cpp', '.h', '.hpp', '.c', '.cc')):
                print(f"处理单个文件: {target}")
                if fix_all_glvertex_patterns(target):
                    all_files_fixed.append(target)
            else:
                print(f"跳过非源代码文件: {target}")

        elif os.path.isdir(target):
            # 处理目录
            print(f"扫描目录: {target}")
            files_fixed = process_directory(target)
            all_files_fixed.extend(files_fixed)
        else:
            print(f"目标不存在: {target}")

    # 输出总结
    print("\n" + "="*50)
    print("修复完成!")
    if all_files_fixed:
        print(f"已修复 {len(all_files_fixed)} 个文件:")
        for file in all_files_fixed:
            print(f"  - {file}")
    else:
        print("未找到需要修复的GLVertex数组。")
    print("="*50)

if __name__ == "__main__":
    main()