# PRD — LifeRun
**Versão:** 1.0  
**Data:** 01/07/2026  
**Status:** Draft  
**Autor:** Engenheiro de Requisitos / Desenvolvedor Sênior

---

# 1. Visão Geral

## Nome do Projeto
**LifeRun**

## Descrição

LifeRun é uma plataforma web e mobile destinada à organização e participação em corridas de rua, caminhadas, maratonas e eventos esportivos.

A plataforma permitirá que atletas encontrem eventos próximos, realizem inscrições online, acompanhem informações da prova, recebam notificações em tempo real, acompanhem sua performance e visualizem seus resultados.

Além dos atletas, o sistema fornecerá ferramentas para organizadores administrarem eventos e patrocinadores divulgarem suas marcas.

---

# 2. Objetivos

O sistema deverá permitir que o usuário:

- Encontrar corridas próximas.
- Realizar inscrições.
- Efetuar pagamentos.
- Receber informações da corrida.
- Acompanhar cronometragem.
- Visualizar resultados.
- Compartilhar experiências.

Para os organizadores:

- Criar eventos.
- Gerenciar inscrições.
- Controlar pagamentos.
- Publicar resultados.
- Enviar notificações.

---

# 3. Público-Alvo

### Atletas

- Corredores iniciantes
- Corredores profissionais
- Caminhantes
- Ciclistas (futuro)

### Organizadores

- Empresas de eventos esportivos
- Assessorias esportivas
- Prefeituras
- Academias

### Patrocinadores

- Lojas esportivas
- Marcas de suplementos
- Clínicas
- Academias
- Empresas parceiras

---

# 4. Personas

## João

- 25 anos
- Corre aos finais de semana
- Busca provas na sua cidade
- Quer fazer inscrição rapidamente

---

## Maria

- 38 anos
- Maratonista
- Participa de provas nacionais
- Acompanha histórico de resultados

---

## Carlos

- Organizador de corridas
- Cria eventos mensalmente
- Precisa controlar centenas de inscrições

---

# 5. Problema

Hoje muitos eventos utilizam diversos sistemas diferentes para:

- inscrição;
- pagamento;
- divulgação;
- resultados;
- fotos.

Isso gera dificuldade para atletas e organizadores.

O LifeRun centraliza todo o processo em uma única plataforma.

---

# 6. Objetivos do Produto

- Centralizar eventos esportivos.
- Facilitar inscrições.
- Melhorar comunicação entre atletas e organização.
- Automatizar resultados.
- Melhorar experiência do atleta.

---

# 7. Escopo

## Incluído

✔ Cadastro

✔ Login

✔ Recuperação de senha

✔ Perfil

✔ Eventos

✔ Inscrições

✔ Pagamentos

✔ Resultados

✔ Galeria

✔ Notificações

✔ GPS

✔ Cronometragem

✔ Suporte

✔ Área patrocinadores

---

## Fora do Escopo (MVP)

- Loja virtual
- Streaming ao vivo
- Marketplace
- Rede social própria
- Treinos personalizados
- Integração com relógios inteligentes (Garmin, Polar etc.)

---

# 8. Funcionalidades

# 8.1 Home

A tela inicial deverá apresentar:

- Próximos eventos
- Data
- Local
- Horário
- Banner principal
- Eventos em destaque
- Pesquisa
- Categorias

---

# 8.2 Cadastro

O usuário poderá cadastrar-se utilizando:

- Nome
- CPF
- Data de nascimento
- Sexo
- Email
- Telefone
- Senha

Opcional:

- Foto
- Cidade
- Estado
- Tipo sanguíneo
- Contato de emergência

---

# 8.3 Login

Autenticação por:

- Email
- Senha

Futuro:

- Google
- Apple
- Facebook

---

# 8.4 Perfil do Atleta

O perfil deverá conter:

- Foto
- Nome
- Idade
- Cidade
- Histórico
- Corridas realizadas
- Medalhas
- Estatísticas
- Melhor tempo
- Ranking

---

# 8.5 Eventos

Cada evento deverá possuir:

- Nome
- Descrição
- Banner
- Data
- Hora
- Local
- Organizador
- Valor
- Regulamento
- Distâncias
- Limite de participantes
- Status

---

# 8.6 Calendário

Visualização:

- Mensal
- Semanal

Filtros:

- Cidade
- Estado
- Distância
- Tipo de prova

---

# 8.7 Inscrição

Fluxo:

Selecionar evento

↓

Selecionar categoria

↓

Confirmar dados

↓

Pagamento

↓

Confirmação

↓

Recebimento do comprovante

---

# 8.8 Pagamentos

Métodos:

- PIX
- Cartão
- Boleto

Status:

- Pendente
- Aprovado
- Cancelado
- Estornado

---

# 8.9 Informações do Percurso

Cada corrida deverá apresentar:

- Mapa
- Distância
- Altimetria
- Ponto de largada
- Ponto de chegada
- Postos de hidratação
- Banheiros
- Estacionamento

---

# 8.10 Kit do Atleta

Informações:

- Camisa
- Medalha
- Número de peito
- Chip
- Brindes

Também deverá informar:

- Local da retirada
- Data
- Horário

---

# 8.11 Cronometragem

Integração com empresa de cronometragem.

Exibir:

- Tempo bruto
- Tempo líquido
- Pace
- Velocidade média

---

# 8.12 Resultados

Após a corrida:

- Classificação geral
- Categoria
- Tempo
- Pace
- Ranking

Filtros:

- Sexo
- Faixa etária
- Distância

---

# 8.13 GPS

Durante a corrida:

- Localização
- Trajeto percorrido
- Distância restante
- Tempo estimado

---

# 8.14 Galeria

Fotos:

- Busca pelo número de peito
- Busca pelo nome

Download disponível.

---

# 8.15 Notificações

Tipos:

- Lembretes
- Mudanças de percurso
- Mudanças climáticas
- Kit disponível
- Resultado publicado
- Promoções

---

# 8.16 Suporte

Contato por:

- Chat
- Email
- FAQ

---

# 8.17 Área de Patrocinadores

Espaço para:

- Banner
- Vídeos
- Cupons
- Produtos
- Promoções

---

# 9. Painel Administrativo

O administrador poderá:

- Criar eventos
- Editar eventos
- Cancelar eventos
- Aprovar inscrições
- Gerenciar pagamentos
- Publicar resultados
- Gerenciar patrocinadores
- Gerenciar usuários
- Enviar notificações
- Gerenciar galeria

---

# 10. Requisitos Funcionais

## RF001

O sistema deve permitir cadastro.

## RF002

O sistema deve permitir login.

## RF003

O sistema deve permitir recuperação de senha.

## RF004

O sistema deve listar eventos.

## RF005

O sistema deve permitir inscrição.

## RF006

O sistema deve processar pagamentos.

## RF007

O sistema deve mostrar o percurso.

## RF008

O sistema deve mostrar calendário.

## RF009

O sistema deve permitir visualizar kit.

## RF010

O sistema deve publicar resultados.

## RF011

O sistema deve acompanhar cronometragem.

## RF012

O sistema deve enviar notificações.

## RF013

O sistema deve disponibilizar fotos.

## RF014

O sistema deve mostrar GPS em tempo real.

## RF015

O sistema deve permitir gerenciamento administrativo.

---

# 11. Requisitos Não Funcionais

## RNF001

Tempo de resposta inferior a 2 segundos.

## RNF002

Disponibilidade de 99,9%.

## RNF003

Responsivo.

## RNF004

Compatível com:

- Android
- iOS
- Chrome
- Edge
- Firefox
- Safari

## RNF005

Autenticação segura utilizando JWT/OAuth 2.0.

## RNF006

Criptografia de senhas (bcrypt ou Argon2).

## RNF007

Conformidade com a LGPD.

## RNF008

Backups automáticos.

---

# 12. Regras de Negócio

RN001

Cada atleta pode realizar várias inscrições.

RN002

Cada inscrição pertence a apenas um evento.

RN003

Não poderá haver inscrição após o encerramento do prazo.

RN004

A vaga somente será garantida após confirmação do pagamento.

RN005

Cada evento possui limite máximo de participantes.

RN006

Resultados somente poderão ser publicados pelo organizador.

RN007

O kit somente poderá ser retirado por atletas inscritos.

RN008

A classificação será baseada na cronometragem oficial.

---

# 13. Fluxo do Usuário

Cadastro

↓

Login

↓

Pesquisar corrida

↓

Visualizar detalhes

↓

Inscrever-se

↓

Pagamento

↓

Receber confirmação

↓

Receber notificações

↓

Retirar kit

↓

Participar da corrida

↓

Acompanhar resultado

↓

Baixar certificado

↓

Visualizar fotos

---

# 14. Tecnologias Recomendadas

## Front-end

- React
- Next.js
- Flutter (Mobile)

## Back-end

- Node.js
- NestJS

## Banco

- PostgreSQL

## Cache

- Redis

## Storage

- AWS S3

## Mapas

- Google Maps API
- OpenStreetMap

## Pagamentos

- Mercado Pago
- Stripe
- Asaas

## Notificações

- Firebase Cloud Messaging

## Hospedagem

- AWS
- Azure
- Google Cloud

---

# 15. Estrutura Inicial do Banco de Dados

### Usuários

- id
- nome
- email
- senha
- cpf
- telefone
- foto
- data_nascimento

### Eventos

- id
- nome
- descrição
- data
- horário
- local
- valor
- banner

### Inscrições

- id
- usuário_id
- evento_id
- categoria
- status_pagamento

### Pagamentos

- id
- inscrição_id
- método
- valor
- status

### Resultados

- id
- atleta_id
- evento_id
- tempo
- pace
- posição

### Fotos

- id
- evento_id
- url
- atleta

### Patrocinadores

- id
- nome
- logo
- site
- banner

---

# 16. Roadmap

## MVP

- Cadastro
- Login
- Eventos
- Inscrição
- Pagamento
- Perfil
- Resultados

## Versão 2

- GPS em tempo real
- Cronometragem
- Chat
- Galeria
- Área patrocinadores

## Versão 3

- Integração Garmin
- Apple Health
- Google Fit
- Smartwatch
- Inteligência Artificial para análise de desempenho

---

# 17. Critérios de Aceitação

- O atleta consegue criar uma conta e autenticar-se.
- O usuário consegue localizar e filtrar eventos.
- A inscrição é concluída somente após pagamento aprovado.
- O comprovante de inscrição é disponibilizado automaticamente.
- O percurso é exibido em mapa com informações detalhadas.
- O atleta recebe notificações antes e durante o evento.
- Os resultados são publicados em tempo real após a validação da organização.
- O perfil do atleta exibe histórico completo de participações.
- O painel administrativo permite gerenciar eventos, inscrições, pagamentos e patrocinadores sem intervenção técnica.

---

# 18. Métricas de Sucesso (KPIs)

- 95% das inscrições concluídas sem abandono.
- Tempo médio de inscrição inferior a 3 minutos.
- Disponibilidade da plataforma superior a 99,9%.
- Tempo médio de resposta das APIs inferior a 500 ms.
- Taxa de aprovação de pagamentos superior a 98%.
- Satisfação dos usuários (NPS) superior a 70.
- Crescimento mensal de atletas cadastrados superior a 15%.
- Redução de atendimentos relacionados a inscrições em pelo menos 50%.

---

# 19. Conclusão

O **LifeRun** foi concebido para ser uma plataforma completa de gestão de eventos esportivos, reunindo em um único ecossistema funcionalidades para atletas, organizadores e patrocinadores. O produto prioriza uma experiência intuitiva, segura e escalável, automatizando desde a descoberta de eventos e inscrições até pagamentos, acompanhamento em tempo real, divulgação de resultados e interação pós-prova. Sua arquitetura modular permite evolução contínua com integrações futuras, consolidando o LifeRun como uma solução moderna para o mercado de corridas e eventos esportivos.