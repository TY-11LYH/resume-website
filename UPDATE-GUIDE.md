# 🚀 简便更新方法

您有三种简便的方法来更新简历网站：

## 方法一：使用自动化脚本（推荐）⭐

### Windows系统
1. 克隆GitHub��库到本地：
   ```bash
   git clone https://github.com/您的用户名/resume-website.git
   cd resume-website
   ```

2. 每次更新时：
   - 📄 替换 `resume.pdf` 文件
   - 📝 修改 `script.js` 中的数据
   - 🖼️ 添加图片到仓库
   - 双击运行 `quick-update.bat`
   - 输入更新说明，回车即可自动上传

### Mac/Linux系统
```bash
./quick-update.sh "更新了我的工作经历"
```

## 方法二：使用GitHub Desktop（图形界面）

### 安装GitHub Desktop
1. 下载：https://desktop.github.com/
2. 安装后登录GitHub账号

### 更新步骤
1. 打开GitHub Desktop
2. 选择您的resume-website仓库
3. 点击 "Fetch origin" 拉取最新代码
4. 修改文件内容
5. 在左侧会看到更改的文件
6. 在底部输入更新说明
7. 点击 "Commit to main"
8. 点击 "Push origin"

## 方法三：简化Git命令

### 首次设置
```bash
# 克隆仓库
git clone https://github.com/您的用户名/resume-website.git
cd resume-website

# 配置用户信息（只需一次）
git config user.name "您的名字"
git config user.email "您的邮箱"
```

### 每次更新（3行命令）
```bash
cd resume-website
# 修改文件后运行：
git add . && git commit -m "更新说明" && git push
```

## 🎯 各方法的对比

| 方法 | 难度 | 速度 | 适用场景 |
|------|------|------|----------|
| **自动化脚本** | ⭐ 简单 | ⚡ 快速 | 推荐，最适合频繁更新 |
| **GitHub Desktop** | ⭐⭐ 中等 | 🚀 快速 | 不喜欢命令行的用户 |
| **简化命令** | ⭐⭐⭐ 中等 | 🚀🚀 最快 | 熟悉Git的用户 |

## 📸 添加图片的方法

### 在script.js中添加图片数据
```javascript
// 头像图片
"avatar": "avatar.jpg"

// 项目图片
{
  "image": "project1.jpg",
  // ...
}
```

### 上传图片步骤
1. 将图片文件放入仓库文件夹
2. 在 `script.js` 中引用图片文件名
3. 运行更新脚本

### 支持的图片格式
- ✅ JPG/JPEG
- ✅ PNG
- ✅ GIF
- ✅ SVG
- ✅ WebP

## 🔄 典型更新场景

### 场景1：更新PDF简历
```bash
# 1. 替换resume.pdf文件
# 2. 运行更新脚本
quick-update.bat "更新PDF简历到v2.1版本"
```

### 场景2：添加新工作经历
```bash
# 1. 编辑script.js，添加新的internship数据
# 2. 运行更新脚本
quick-update.bat "添加喜马拉雅平台实习经历"
```

### 场景3：添加项目图片
```bash
# 1. 将图片放到项目文件夹
# 2. 在script.js中引用图片
# 3. 运行更新脚本
quick-update.bat "添加项目展示图片"
```

### 场景4：修改样式
```bash
# 1. 编辑style.css
# 2. 运行更新脚本
quick-update.bat "优化移动端样式"
```

## 🛠️ 高级技巧

### 批量更新多个文件
```bash
# 修改多个文件后
quick-update.bat "全面更新：简历、样式和数据"
```

### 定时自动更新（高级）
可以设置定时任务自动运行更新脚本，但这需要更多配置。

### 多人协作更新
如果有团队协作，建议使用Pull Request流程：
```bash
git checkout -b feature/new-update
# 修改文件
git add . && git commit -m "新功能"
git push origin feature/new-update
# 在GitHub上创建Pull Request
```

## 📱 移动端更新

### 通过手机更新
1. 使用GitHub手机App
2. 直接在手机上编辑文件
3. Commit和Push

### 通过平板更新
1. 使用Termius等SSH客户端
2. 远程连接到电脑
3. 运行更新脚本

## ⚠️ 注意事项

1. **文件大小限制**
   - 单个文件最大100MB
   - 总仓库大小1GB（GitHub Pages限制）

2. **更新频率**
   - GitHub Pages更新需要1-2分钟
   - 过于频繁的更新可能影响访问速度

3. **备份重要**
   - 保留原始PDF文件
   - 定期备份整个仓库

4. **版本管理**
   - 使用有意义的提交信息
   - 可以随时回滚到之前的版本

## 🎉 推荐方案

**最适合您的方案：使用 `quick-update.bat` 脚本**

**理由：**
- ✅ 最简单，双击即可运行
- ✅ 自动处理所有Git操作
- ✅ 适合频繁更新
- ✅ 有友好的中文提示
- ✅ 减少出错机会

现在您只需要：
1. 修改文件内容
2. 双击运行 `quick-update.bat`
3. 输入更新说明
4. 完成！网站自动更新

就这么简单！🎊