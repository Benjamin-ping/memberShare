#!/bin/bash

# deploy.sh

# 确保脚本在任何命令失败时退出
set -e

# 提示用户输入提交信息
read -p "请输入本次提交的描述信息 (例如: 新增XX文章): " COMMIT_MSG

# 如果用户没有输入任何信息，则使用一个默认值
if [ -z "$COMMIT_MSG" ]; then
  COMMIT_MSG="📝 update: new changes"
fi

# 执行 Git 命令
echo " "
echo "正在将修改推送到 GitHub..."

# 1. 添加所有文件
git add .

# 2. 提交，并使用用户输入的描述
git commit -m "$COMMIT_MSG"

# 3. 推送到远程仓库
git push

echo " "
echo "✅ 推送成功！Cloudflare Pages 正在自动构建..."
echo " "