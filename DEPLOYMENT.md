# GitHub Pages 部署详细指南

## 🚀 快速开始 - 3步部署

### 第1步：创建GitHub仓库
1. 登录 GitHub：https://github.com
2. 点击右上角 "+" → "New repository"
3. 仓库名称：`resume-website`
4. 设为公开：选择 "Public"
5. 点击 "Create repository"

### 第2步：上传文件
1. 在新创建的仓库页面，点击 "uploading an existing file"
2. 将以下文件拖拽到上传区域：
   - ✅ `index.html`
   - ✅ `style.css`
   - ✅ `script.js`
   - ✅ `resume.pdf`
   - ✅ `README.md`
3. 在底部填写提交信息：`Initial commit`
4. 点击 "Commit changes"

### 第3步：启用GitHub Pages
1. 进入仓库的 "Settings" 标签页
2. 左侧菜单找到 "Pages"
3. 在 "Build and deployment" 部分：
   - Source：选择 "Deploy from a branch"
   - Branch：选择 "main" 和 "/ (root)"
4. 点击 "Save"
5. 等待1-2分钟，刷新页面，会看到网站URL

## 🌐 访问你的网站

部署完成后，你的网站地址将是：
`https://你的用户名.github.io/resume-website/`

例如：`https://tongyao123.github.io/resume-website/`

## 📱 测试网站功能

### 检查清单：
- [ ] 页面正常加载，显示个人信息
- [ ] 导航菜单可以正常跳转
- [ ] PDF简历可以在线预览
- [ ] PDF下载按钮可以正常下载
- [ ] 移动端布局正常
- [ ] 所有联系方式链接有效

## 🔄 更新网站内容

### 更新简历信息
1. 修改 `script.js` 文件中的 `resumeData` 对象
2. 提交更改到GitHub
3. GitHub Pages会自动重新部署

### 更新PDF简历
1. 将新的PDF文件重命名为 `resume.pdf`
2. 上传新文件，替换旧的 `resume.pdf`
3. 提交更改

### 修改样式
1. 编辑 `style.css` 文件
2. 调整颜色、布局、字体等
3. 提交更改

## 🎨 自定义域名（可选）

### 购买域名
1. 选择域名服务商（如阿里云、腾讯云、Namecheap）
2. 购买域名（如：`tongyao-resume.com`）

### 配置GitHub Pages
1. 在仓库Settings → Pages中
2. 在 "Custom domain" 中输入你的域名
3. 点击 "Save"

### 配置DNS
在你的域名服务商处添加DNS记录：

**方式一：A记录**
```
类型：A
主机记录：@
记录值：185.199.108.153
TTL：600
```

**方式二：CNAME记录**
```
类型：CNAME
主机记录：@
记录值：你的用户名.github.io
TTL：600
```

## 📂 使用Git命令行部署（高级）

### 初始化仓库
```bash
cd gh-pages
git init
git add .
git commit -m "Initial commit"
git branch -M main
```

### 连接远程仓库
```bash
git remote add origin https://github.com/你的用户名/resume-website.git
git push -u origin main
```

### 后续更新
```bash
# 修改文件后
git add .
git commit -m "更新简历信息"
git push
```

## 🔍 故障排除

### 网站无法访问
- 检查仓库是否为公开（Public）
- 确认GitHub Pages已正确设置
- 等待几分钟让部署完成

### PDF无法加载
- 确认 `resume.pdf` 文件存在
- 检查文件大小是否过大（建议小于10MB）
- 确认文件名完全匹配（区分大小写）

### 样式显示异常
- 检查 `style.css` 文件是否存在
- 确认HTML中的CSS链接路径正确
- 清除浏览器缓存后重新加载

### 移动端显示问题
- 检查CSS中的媒体查询是否生效
- 使用开发者工具测试不同屏幕尺寸
- 确认viewport设置正确

## 📊 网站监控

### 查看部署状态
- 仓库页面 → Actions 标签
- 查看部署日志和状态

### 添加访问统计
推荐使用以下免费工具：
- Google Analytics
- Cloudflare Web Analytics
- 百度统计

## 🔒 安全建议

1. **不包含敏感信息**
   - 不要在简历中包含密码、密钥等
   - 手机号和邮箱可以正常显示

2. **定期更新**
   - 及时更新联系方式
   - 移除过期的信息

3. **备份数据**
   - 保留原始PDF文件
   - 定期备份代码和数据

## 🌟 优化建议

### 性能优化
- 压缩图片文件
- 使用CDN加速
- 优化CSS和JavaScript

### SEO优化
- 添加meta标签
- 使用语义化HTML
- 创建sitemap.xml

### 可访问性
- 确保颜色对比度足够
- 添加适当的ARIA标签
- 测试键盘导航

## 📞 获取帮助

如果遇到问题：
1. 检查GitHub Pages文档：https://docs.github.com/pages
2. 搜索类似问题的解决方案
3. 在GitHub社区寻求帮助

## 🎉 完成！

现在你的简历网站已经部署完成，任何人都可以通过链接访问！

---

**示例网站链接：** `https://你的用户名.github.io/resume-website/`

**更新简历内容时，只需编辑文件并推送到GitHub即可自动更新！**