# LifeRun

LifeRun e uma plataforma web para descoberta, inscricao e gestao de corridas, caminhadas, maratonas e eventos esportivos.

## Fase atual

Fase 1 - MVP Publico: Home, Eventos e Autenticacao.

Esta etapa entrega uma primeira experiencia navegavel com home, pesquisa, listagem de eventos, detalhes, cadastro, login, recuperacao de senha e perfil basico.

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

Depois acesse:

```text
http://localhost:5173
```

Verificacao de estrutura:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/check.ps1
```

## Estrutura

```text
assets/     Imagens, icones e recursos visuais.
data/       Seeds, fixtures e contratos de dados.
docs/       PRD, plano, arquitetura, guia visual e backlog.
pages/      Paginas da aplicacao web.
scripts/    JavaScript do frontend.
styles/     CSS global e tokens visuais.
tests/      Testes futuros.
```

## Paginas da Fase 1

- `index.html` - Home com banner, busca, categorias e eventos em destaque.
- `pages/events.html` - Listagem e filtros de eventos.
- `pages/event-detail.html` - Detalhes de evento.
- `pages/register.html` - Cadastro de usuario.
- `pages/login.html` - Login.
- `pages/forgot-password.html` - Recuperacao de senha.
- `pages/profile.html` - Perfil basico do atleta.

## Documentos principais

- `docs/PRD.md`
- `docs/implementation_plan.md`
- `docs/architecture.md`
- `docs/design_guide.md`
- `docs/data_model.md`
- `docs/backlog.md`
- `docs/setup.md`
