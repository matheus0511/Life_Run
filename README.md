# LifeRun

LifeRun e uma plataforma web para descoberta, inscricao e gestao de corridas, caminhadas, maratonas e eventos esportivos.

## Fase atual

Fase 0 - Preparacao do Projeto.

Esta etapa cria a base tecnica, visual e organizacional para o MVP descrito em `docs/implementation_plan.md`.

## Como executar

Requisitos para execucao imediata neste ambiente:

- Python Launcher (`py`) para servir os arquivos estaticos localmente.
- PowerShell para executar os scripts locais.

Comandos:

```powershell
.\scripts\dev.ps1
```

Se a execucao de scripts estiver bloqueada no Windows:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/dev.ps1
```

Alternativa quando Node.js/npm estiver instalado:

```bash
npm run dev
```

Depois acesse:

```text
http://localhost:5173
```

Verificacao de estrutura:

```powershell
.\scripts\check.ps1
```

Se a execucao de scripts estiver bloqueada no Windows:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/check.ps1
```

Verificacao JavaScript quando Node.js estiver instalado:

```bash
npm run check
```

## Estrutura

```text
assets/     Imagens, icones e recursos visuais.
data/       Seeds, fixtures e contratos de dados.
docs/       PRD, plano, arquitetura, guia visual e backlog.
pages/      Paginas futuras da aplicacao.
scripts/    JavaScript do frontend.
styles/     CSS global e tokens visuais.
tests/      Testes futuros.
```

## Documentos principais

- `docs/PRD.md`
- `docs/implementation_plan.md`
- `docs/architecture.md`
- `docs/design_guide.md`
- `docs/data_model.md`
- `docs/backlog.md`
- `docs/setup.md`
