@echo off
cd /d "%~dp0"
:loop
echo Starting cloudflared tunnel...
echo Current URL will be saved to tunnel-url.txt
cloudflared.exe tunnel --url http://localhost:8082 --no-autoupdate > tunnel-output.txt 2>&1
echo Tunnel stopped, restarting in 5 seconds...
timeout /t 5 /nobreak >nul
goto loop




