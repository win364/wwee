while ($true) {
    Write-Host "Starting cloudflared tunnel..." -ForegroundColor Green
    try {
        & ".\cloudflared.exe" tunnel --url http://localhost:8082 --no-autoupdate
    }
    catch {
        Write-Host "Tunnel crashed: $($_.Exception.Message)" -ForegroundColor Red
    }
    Write-Host "Tunnel stopped, restarting in 5 seconds..." -ForegroundColor Yellow
    Start-Sleep -Seconds 5
}




