@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo 🚀 开始更新简历网站...

:: 设置目录
set "GITHUB_DIR=%~1"

if "%GITHUB_DIR%"=="" (
    echo 📁 请输入GitHub仓库本地路径:
    set /p GITHUB_DIR=
)

:: 检查目录是否存在
if not exist "%GITHUB_DIR%" (
    echo ❌ 目录不存在: %GITHUB_DIR%
    pause
    exit /b 1
)

cd /d "%GITHUB_DIR%"

:: 显示当前状态
echo 📊 当前Git状态:
git status

:: 添加所有更改
echo 📦 添加文件...
git add .

:: 询问提交信息
echo 📝 请输入更新说明 (直接回车使用默认):
set /p commit_message=
if "!commit_message!"=="" (
    for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
    set "commit_message=更新简历内容 - !dt:~0,4!-!dt:~4,2!-!dt:~6,2! !dt:~8,2!:!dt:~10,2!:!dt:~12,2!"
)

:: 提交更改
echo 💾 提交更改...
git commit -m "!commit_message!"

:: 推送到GitHub
echo 📤 推送到GitHub...
git push

echo ✅ 更新完成！
echo ⏳ GitHub Pages将在1-2分钟内自动更新
pause