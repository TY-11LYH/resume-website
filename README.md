# 童瑶个人简历网站

现代化的个人简历网站，采用Her Movie风格设计，完全响应式布局。

## 🌐 在线访问

**GitHub Pages地址：** https://ty-11lyh.github.io/resume-website/

## 📋 简历内容

### 🎓 教育背景
- **教育学硕士** (2024.09-2027.06) | 浙江师范大学
- **小学数学教育本科** (2020.10-2024.06) | 浙江师范大学

### 💼 实习经历
1. **喜马拉雅平台** - 有声内容运营实�� (2026.03-2026.06)
   - AI工具开发，效率提升95%+
   - 数据驱动决策管理
   - 用户运营沟通协调

2. **浙江银泰百货** - 市场部运营实习 (2025.10-2026.01)
   - 全平台新媒体运营
   - 数据驱动内容策略

3. **金华东苑小学** - 数学实习教师 (2023.03-2023.11)
   - 教学创新与实践

4. **金华家教平台** - 社群运营 (2021.06-2023.06)
   - 用户需求对接与商业转化

### 🔧 核心技能
- **AI与技术能力：** AI工具开发、Python基础、自动化脚本设计、算法应用
- **数据分析：** Excel高级应用、数据可视化、用户行为分析
- **产品运营：** 用户需求洞察、产品化思维、数据驱动决策
- **内容创作：** 图文内容生产、短视频运营、跨平台内容适配

### 🏆 项目经历
- 部级课题《中国与南非教育合作研究》
- 部级课题《中国对非洲青年国际传播的战略环境与策略路径研究》

## 🎨 设计特色

- **Her Movie风格：** 温暖的米色背景配合绿色点缀
- **完全响应式：** 完美适配桌面和移动设备
- **现代化布局：** 清晰的排版，优雅的动画效果
- **PDF展示下载：** 完整简历PDF在线查看与下载

## 📞 联系方式

- **邮箱：** 1716880166@qq.com
- **电话：** +86 182 6791 9140
- **GitHub：** https://github.com/TY-11LYH/my-tools

## 🚀 GitHub Pages部署步骤

### 方法一：网页界面部署（推荐）

1. **创建GitHub仓库**
   - 访问 https://github.com/new
   - 仓库名称：`resume-website`
   - 设置为公开（Public）
   - 点击 "Create repository"

2. **上传文件**
   - 在仓库页面点击 "uploading an existing file"
   - 上传以下文件：
     - `index.html`
     - `style.css`
     - `script.js`
     - `resume.pdf`
     - `README.md`

3. **启用GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source选择 "Deploy from a branch"
   - Branch选择 "main"，目录选择 "/ (root)"
   - 点击 Save

4. **等待部署**
   - 1-2分钟后网站会部署完成
   - 访问地址：`https://你的用户名.github.io/resume-website/`

### 方法二：Git命令行部署

```bash
# 1. 创建GitHub仓库（网页端）
# 访问 https://github.com/new 创建仓库

# 2. 在gh-pages目录中执行
cd "C:\Users\xbjt\ZCodeProject\resume-website\gh-pages"
git init
git add .
git commit -m "Initial commit: Personal Resume Website"

# 3. 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/TY-11LYH/resume-website.git
git branch -M main
git push -u origin main

# 4. 在GitHub仓库设置中启用Pages
```

## 📝 更新网站内容

### 快速更新流程

1. **修改内容：** 编辑 `script.js` 中的简历数据
2. **更新PDF：** 替换 `resume.pdf` 文件
3. **提交更改：**
   ```bash
   git add .
   git commit -m "更新简历内容"
   git push
   ```
4. **自动部署：** GitHub Pages会在1-2分钟内自动更新

---

© 2026 童瑶. 保留所有权利.