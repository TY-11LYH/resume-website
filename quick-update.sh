# 快速更新脚本
# 使用方法：双击运行或在命令行执行: ./quick-update.sh "更新说明"

#!/bin/bash

# 设置颜色
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 开始更新简历网站...${NC}"

# 设置目录
GITHUB_DIR="$1"

if [ -z "$GITHUB_DIR" ]; then
    echo -e "${YELLOW}📁 请输入GitHub仓库本地路径:${NC}"
    read GITHUB_DIR
fi

# 检查目录是否存在
if [ ! -d "$GITHUB_DIR" ]; then
    echo -e "❌ 目录不存在: $GITHUB_DIR"
    exit 1
fi

cd "$GITHUB_DIR"

# 显示当前状态
echo -e "${BLUE}📊 当前Git状态:${NC}"
git status

# 添加所有更改
echo -e "${GREEN}📦 添加文件...${NC}"
git add .

# 询问提交信息
echo -e "${YELLOW}📝 请输入更新说明 (直接回车使用默认):${NC}"
read commit_message
if [ -z "$commit_message" ]; then
    commit_message="更新简历内容 - $(date '+%Y-%m-%d %H:%M:%S')"
fi

# 提交更改
echo -e "${GREEN}💾 提交更改...${NC}"
git commit -m "$commit_message"

# 推送到GitHub
echo -e "${GREEN}📤 推送到GitHub...${NC}"
git push

echo -e "${BLUE}✅ 更新完成！${NC}"
echo -e "${YELLOW}⏳ GitHub Pages将在1-2分钟内自动更新${NC}"