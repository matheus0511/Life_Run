$ErrorActionPreference = "Stop"

$requiredFiles = @(
  "index.html",
  "styles/style.css",
  "scripts/main.js",
  "docs/implementation_plan.md",
  "docs/architecture.md",
  "docs/design_guide.md",
  "docs/data_model.md",
  "docs/backlog.md",
  "docs/setup.md"
)

foreach ($file in $requiredFiles) {
  if (-not (Test-Path $file)) {
    throw "Arquivo obrigatorio ausente: $file"
  }
}

$index = Get-Content -Raw "index.html"

if ($index -notmatch 'styles/style.css') {
  throw "index.html nao referencia styles/style.css"
}

if ($index -notmatch 'scripts/main.js') {
  throw "index.html nao referencia scripts/main.js"
}

Write-Host "Fase 0 validada: estrutura base e referencias principais encontradas."
