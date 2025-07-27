#!/bin/bash

# 定义颜色
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 任何命令失败时停止执行
set -e

echo -e "${GREEN}>>> 正在检查文件状态...${NC}"
git status

# 检查是否有任何更改（已暂存或未暂存）
# 如果没有更改，则退出脚本
if git diff-index --quiet HEAD --; then
    echo -e "\n${YELLOW}>>> 工作区是干净的，没有任何更改需要提交。脚本退出。${NC}"
    exit 0
fi

echo -e "\n${GREEN}>>> 正在添加所有更改...${NC}"
git add .

echo -e "\n${GREEN}>>> 正在提交更改...${NC}"
# 从命令行参数获取提交信息，如果没有则使用默认信息
COMMIT_MSG="${1:-"chore: routine update"}"
git commit -m "$COMMIT_MSG"

echo -e "\n${GREEN}>>> 正在推送到 origin/main...${NC}"
# 强烈建议移除 -f (force) 参数，除非你非常清楚你在做什么
git push origin main

echo -e "\n${GREEN}>>> 操作完成！${NC}"