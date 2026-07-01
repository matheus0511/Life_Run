$ErrorActionPreference = "Stop"

$requiredFiles = @(
  "index.html",
  "styles/style.css",
  "scripts/main.js",
  "pages/events.html",
  "pages/event-detail.html",
  "pages/register.html",
  "pages/login.html",
  "pages/forgot-password.html",
  "pages/profile.html",
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
$main = Get-Content -Raw "scripts/main.js"
$events = Get-Content -Raw "pages/events.html"

if ($index -notmatch 'styles/style.css') { throw "index.html nao referencia styles/style.css" }
if ($index -notmatch 'scripts/main.js') { throw "index.html nao referencia scripts/main.js" }
if ($index -notmatch 'pages/events.html') { throw "Home nao possui link para eventos" }
if ($index -notmatch 'pages/login.html') { throw "Home nao possui link para login" }
if ($events -notmatch 'data-event-list="all"') { throw "Listagem de eventos nao possui container esperado" }
if ($main -notmatch 'const events') { throw "scripts/main.js nao possui seed inicial de eventos" }

Write-Host "Fase 1 validada: home, eventos, autenticacao e perfil basico encontrados."
