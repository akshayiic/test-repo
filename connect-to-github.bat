@echo off
echo ========================================
echo Connect Local Repo to GitHub
echo ========================================
echo.

REM Step 1: Check current git status
echo Current git status:
git status
echo.

REM Step 2: Ask for GitHub username
set /p USERNAME="Enter your GitHub username: "

REM Step 3: Set repo name
set REPO_NAME=coderabbit-test-repo

REM Step 4: Check if remote already exists
git remote get-url origin >nul 2>&1
if %errorlevel% equ 0 (
    echo Remote 'origin' already exists
    git remote -v
    echo.
    set /p REPLACE="Do you want to replace it? (y/n): "
    if /i "%REPLACE%"=="y" (
        git remote remove origin
        echo Removed existing remote
    ) else (
        echo Keeping existing remote
        goto end
    )
)

REM Step 5: Add remote
echo.
echo Adding remote: https://github.com/%USERNAME%/%REPO_NAME%.git
git remote add origin https://github.com/%USERNAME%/%REPO_NAME%.git

REM Step 6: Rename branch to main (if not already)
git branch -M main

REM Step 7: Show what to do next
echo.
echo ========================================
echo NEXT STEPS:
echo ========================================
echo.
echo 1. Create repository on GitHub first:
echo    Go to: https://github.com/new
echo    Name: %REPO_NAME%
echo    Make it PUBLIC
echo    DON'T initialize with README
echo.
echo 2. Then push your code:
echo    git push -u origin main
echo.
echo 3. Install CodeRabbit:
echo    https://github.com/marketplace/coderabbit
echo.

:end
pause
