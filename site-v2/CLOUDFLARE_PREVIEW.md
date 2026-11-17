# Publicação de preview na Cloudflare Pages

Objetivo: publicar o novo site em um **projeto separado**, por exemplo `drlucascarazza-preview`, com URL `*.pages.dev`. **Não** alterar o site oficial em `drlucascarazza.com.br`, DNS, domínios personalizados, zonas ou projetos Cloudflare existentes.

## Fonte

- Repositório: `kivervinicius/drlucascarazza`
- Branch: `refactor/astro-2026`
- Diretório raiz do projeto: `site-v2`
- Framework: `Astro`
- Comando de build: `npm run build`
- Diretório de saída: `dist`
- Node.js: `22` (configurar `NODE_VERSION=22` se necessário)
- Deploy: produção do **novo projeto de preview** recebe a branch `refactor/astro-2026` (não a branch principal do site atual).

Os assets reais, artigos e catálogos são preparados por `scripts/sync-legacy.mjs` durante o build. O diretório `site-v2` depende de arquivos do `src/` na raiz do mesmo repositório; no CI, fazer checkout do repositório completo, não apenas da subpasta.

### Se o painel de Pages não conseguir acessar os arquivos acima da pasta de projeto

Usar a raiz do repositório como diretório do projeto e configurar:
- Build command: `cd site-v2 && npm install --no-audit --no-fund && npm run build`
- Build output directory: `site-v2/dist`
- Root directory: `/` (raiz do repositório)

Esta configuração é mais segura para garantir que o script de migração leia o `src/` legado.

## Restrições de segurança

- Não adicionar `drlucascarazza.com.br` como domínio customizado.
- Não editar DNS nem routes.
- Não promover qualquer deploy na aplicação existente.
- Não trocar a branch principal do repositório.
- Deixar `noindex,nofollow` nas páginas de preview.
- URL `*.pages.dev` pode ser compartilhada para avaliação, mas ainda é uma prévia, não uma versão com conteúdo clínico homologado.

## Checklist de validação após publicar

1. Abrir a URL gerada (não assumir que o deploy ficou pronto).
2. Confirmar que as imagens de `/media/clinic/`, `/media/exams/` e `/media/treatments/` carregam sem erro.
3. Conferir Home, `/sobre-a-clinica/`, `/o-medico/`, `/exames/`, `/tratamentos/`, `/doencas-oculares/`, `/conteudos/`, `/contato/`.
4. Conferir todos os 18 artigos e imagens relativas, inclusive `hordeolo-e=calazio`.
5. Testar menu mobile, pesquisa e botões de contato.
6. Confirmar que `https://drlucascarazza.com.br` permanece inalterado.

## Status em 16/11/2026

- Build Astro previamente validado no GitHub Actions: 27 páginas geradas.
- Deploy Cloudflare **não realizado**: painel inacessível no navegador conectado (`ERR_SOCKS_CONNECTION_FAILED`); credenciais e permissões Cloudflare não disponíveis.
