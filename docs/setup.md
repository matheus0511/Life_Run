# Setup do Projeto - LifeRun

## Stack inicial

Para a Fase 0, o projeto inicia como uma aplicacao web estatica com HTML, CSS e JavaScript. Essa escolha permite validar estrutura, navegacao, linguagem visual e documentacao antes da introducao de frameworks e backend.

Stack recomendada para evolucao:

- Frontend web: React ou Next.js.
- Backend: Node.js com NestJS.
- Banco de dados: PostgreSQL.
- Cache: Redis.
- Storage: AWS S3 ou equivalente.
- Mapas: Google Maps API ou OpenStreetMap.
- Pagamentos: Mercado Pago, Stripe ou Asaas.
- Notificacoes: Firebase Cloud Messaging.

## Execucao local

Com PowerShell:

```powershell
.\scripts\dev.ps1
```

Se a politica do Windows bloquear scripts:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/dev.ps1
```

Com npm, quando Node.js estiver instalado:

```bash
npm run dev
```

URL local:

```text
http://localhost:5173
```

## Validacao

Com PowerShell:

```powershell
.\scripts\check.ps1
```

Se a politica do Windows bloquear scripts:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/check.ps1
```

Com npm, quando Node.js estiver instalado:

```bash
npm run check
```

## Convencoes iniciais

- Usar HTML semantico.
- Manter estilos em `styles/style.css`.
- Manter scripts em `scripts/main.js`.
- Manter documentos do produto e arquitetura em `docs/`.
- Usar textos em portugues do Brasil.
- Evitar logica de negocio no frontend quando backend for introduzido.
