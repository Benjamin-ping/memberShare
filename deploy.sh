#!/bin/bash

# 脚本将在任何命令失败时停止执行
set -e

echo -e "${GREEN}>>> 正在检查当前分支...${NC}"
git branch

echo -e "\n${GREEN}>>> 正在检查文件状态...${NC}"
git status

echo -e "\n${GREEN}>>> 正在添加所有更改...${NC}"
git add .


echo -e "\n${GREEN}>>> 正在提交更改...${NC}"
# 注意：这里的提交信息是固定的
git commit -m "feat: add Bing verification and update content"

# 4. 推送到 GitHub 的主分支
# 注意：你的主分支可能是 'main' 或 'master'。请根据你的实际情况修改。
BRANCH_NAME="main"
echo "⬆️  步骤 3/3: 正在推送到 GitHub 的 '$BRANCH_NAME' 分支..."
git push origin $BRANCH_NAME

echo "✅ 成功！所有更改已推送到 GitHub。"