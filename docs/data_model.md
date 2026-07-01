# Modelo Inicial de Dados - LifeRun

## Usuario

| Campo | Tipo sugerido | Observacao |
| --- | --- | --- |
| id | uuid | Identificador unico |
| nome | varchar | Obrigatorio |
| email | varchar | Obrigatorio e unico |
| senha_hash | varchar | Nunca armazenar senha em texto puro |
| cpf | varchar | Obrigatorio no cadastro completo |
| telefone | varchar | Obrigatorio |
| foto_url | varchar | Opcional |
| data_nascimento | date | Obrigatorio |
| sexo | varchar | Opcional conforme LGPD e regras de ranking |
| cidade | varchar | Opcional |
| estado | varchar | Opcional |
| tipo_sanguineo | varchar | Opcional |
| contato_emergencia | varchar | Opcional |
| perfil | enum | atleta, organizador, admin, patrocinador |
| criado_em | timestamp | Auditoria |

## Evento

| Campo | Tipo sugerido | Observacao |
| --- | --- | --- |
| id | uuid | Identificador unico |
| nome | varchar | Obrigatorio |
| descricao | text | Obrigatorio |
| banner_url | varchar | Opcional |
| data | date | Obrigatorio |
| horario | time | Obrigatorio |
| local | varchar | Obrigatorio |
| cidade | varchar | Obrigatorio |
| estado | varchar | Obrigatorio |
| organizador_id | uuid | Relacao com usuario organizador |
| valor | decimal | Obrigatorio |
| regulamento_url | varchar | Opcional |
| distancias | json | Exemplo: 5 km, 10 km, 21 km |
| limite_participantes | integer | Obrigatorio |
| status | enum | rascunho, publicado, encerrado, cancelado |

## Inscricao

| Campo | Tipo sugerido | Observacao |
| --- | --- | --- |
| id | uuid | Identificador unico |
| usuario_id | uuid | Atleta inscrito |
| evento_id | uuid | Evento escolhido |
| categoria | varchar | Categoria da prova |
| distancia | varchar | Distancia escolhida |
| status | enum | pendente, confirmada, cancelada |
| status_pagamento | enum | pendente, aprovado, cancelado, estornado |
| comprovante_url | varchar | Gerado apos pagamento aprovado |
| criado_em | timestamp | Auditoria |

## Pagamento

| Campo | Tipo sugerido | Observacao |
| --- | --- | --- |
| id | uuid | Identificador unico |
| inscricao_id | uuid | Relacao com inscricao |
| metodo | enum | pix, cartao, boleto |
| valor | decimal | Valor pago |
| status | enum | pendente, aprovado, cancelado, estornado |
| provedor | varchar | Mercado Pago, Stripe, Asaas etc. |
| transacao_externa_id | varchar | Identificador do gateway |
| criado_em | timestamp | Auditoria |

## Resultado

| Campo | Tipo sugerido | Observacao |
| --- | --- | --- |
| id | uuid | Identificador unico |
| atleta_id | uuid | Usuario atleta |
| evento_id | uuid | Evento relacionado |
| tempo_bruto | interval | Cronometragem oficial |
| tempo_liquido | interval | Cronometragem oficial |
| pace | varchar | Exemplo: 5:10/km |
| velocidade_media | decimal | Km/h |
| posicao_geral | integer | Ranking geral |
| posicao_categoria | integer | Ranking por categoria |

## Foto

| Campo | Tipo sugerido | Observacao |
| --- | --- | --- |
| id | uuid | Identificador unico |
| evento_id | uuid | Evento relacionado |
| url | varchar | Caminho no storage |
| atleta_id | uuid | Opcional |
| numero_peito | varchar | Usado em busca |

## Patrocinador

| Campo | Tipo sugerido | Observacao |
| --- | --- | --- |
| id | uuid | Identificador unico |
| nome | varchar | Obrigatorio |
| logo_url | varchar | Obrigatorio |
| site | varchar | Opcional |
| banner_url | varchar | Opcional |
| status | enum | ativo, inativo |
