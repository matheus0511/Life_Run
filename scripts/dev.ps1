$ErrorActionPreference = "Stop"

Write-Host "LifeRun local server"
Write-Host "Acesse http://localhost:5173"

py -m http.server 5173
