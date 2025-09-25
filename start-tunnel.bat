@echo off
cd /d "%~dp0"
:loop
echo Starting cloudflared tunnel...
cloudflared.exe tunnel --url http://localhost:8082 --no-autoupdate
echo Tunnel stopped, restarting in 5 seconds...
timeout /t 5 /nobreak >nul
goto loop




