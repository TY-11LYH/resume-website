# 童瑶的个人简历网站

这是一个基于《Her》电影风格的个人简历网站，部署在GitHub Pages上，任何人都可以访问。

## 网站特点

- 🎨 **Her电影风格设计**：温暖的米色调，绿色点缀
- 📱 **完全响应式**：支持桌面和移动设备
- 📄 **完整简历展示**：包含教育背景、实习经历、项目经历等
- 📥 **PDF下载**：可以直接下载完整PDF简历
- 🌐 **公共访问**：通过GitHub Pages实现全球访问

## 如何部署到GitHub Pages

### 方法一：使用GitHub网页界面

1. **创建GitHub仓库**
   - 登录GitHub，创建一个新仓库（如：resume-website）
   - 仓库设为公开（Public）

2. **上传文件**
   - 将以下文件上传到仓库：
     - `index.html`
     - `style.css`
     - `script.js`
     - `resume.pdf`

3. **启用GitHub Pages**
   - 进入仓库的 Settings → Pages
   - 在 "Source" 下选择 "Deploy from a branch"
   - 选择 "main" 分支和 "/ (root)" 目录
   - 点击 Save

4. **等待部署完成**
   - GitHub会自动部署网站（通常需要1-2分钟）
   - 部署完成后会显示网站URL

### 方法二：使用Git命令行

```bash
# 1. 初始化git仓库
cd gh-pages
git init

# 2. 添加文件
git add .

# 3. 提交更改
git commit -m "Initial commit"

# 4. 创建GitHub仓库后，添加远程仓库
git remote add origin https://github.com/你的用户名/resume-website.git

# 5. 推送到GitHub
git branch -M main
git push -u origin main

# 6. 在GitHub仓库设置中启用Pages
```

## 更新网站内容

### 更新简历信息

1. 编辑 `script.js` 文件中的 `resumeData` 对象
2. 修改对应的个人信息、经历、技能等
3. 提交更改到GitHub

### 更新PDF简历

1. 将新的PDF文件命名为 `resume.pdf`
2. 替换项目中的 `resume.pdf` 文件
3. 提交更改到GitHub

### 修改设计风格

编辑 `style.css` 文件可以调整：
- 颜色方案
- 布局样式
- 响应式设计
- 动画效果

## 网站结构

```
gh-pages/
├── index.html      # 主页面
├── style.css       # 样式文件
├── script.js       # 数据和交互逻辑
├── resume.pdf      # 简历PDF文件
└── README.md       # 说明文档
```

## 主要特性

- ✅ 无需服务器，纯静态网站
- ✅ 所有数据嵌入JavaScript，无需API
- ✅ 支持PDF在线预览和下载
- ✅ 移动端友好设计
- ✅ 平滑滚动导航
- ✅ 响应式布局

## 自定义域名（可选）

如果想要自定义域名：

1. 购买域名（如：tongyao-resume.com）
2. 在GitHub仓库的Settings → Pages中设置自定义域名
3. 按照指示配置DNS记录

## 维护和更新

定期更新简历信息：
- 📝 更新工作经历
- 📚 添加新技能或证书
- 🏆 更新获奖情况
- 📄 更新PDF简历版本

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- GitHub Pages

## 联系方式

如有问题或建议，欢迎联系：
- 📧 Email: 1716880166@qq.com
- 📱 Phone: +86 182 6791 9140

---

© 2025 童瑶. 保留所有权利.