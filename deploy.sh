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

echo -e "\n${GREEN}>>> 正在强制推送到 origin/main...${NC}"
git push -f origin main

echo -e "\n${GREEN}>>> 操作完成！${NC}"