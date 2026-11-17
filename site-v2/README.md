# Dr. Lucas Carazza — reconstrução para homologação

Site independente, construído em Astro 6 e TypeScript, em `site-v2/`.
A branch `refactor/astro-2026` não altera o site em produção.

## Execução local

```bash
cd site-v2
npm install
npm run dev
```

O comando `dev` prepara os arquivos automaticamente, a partir de `../src/`.

Para build estático: `npm run build`. Para GitHub Pages: `npm run build:pages`.

## Retratos oficiais — independentes da Hostinger

Os arquivos originais do material de marketing estão versionados em `site-v2/assets/doctor/originals/*.webp`, incluindo o retrato de alta resolução (1656 × 2560). As quatro versões prontas para uso estão em `site-v2/public/media/doctor/*.webp`.

As correções foram determinísticas (recorte de área ociosa, ajuste leve de iluminação/cor e compactação WebP). Não há reconstrução de rosto, roupa ou ambiente por IA. O script `scripts/sync-doctor-media.mjs` apenas valida arquivos locais — **não há fetch ao WordPress no build ou na navegação**.

O cabeçalho azul-marinho `#1D374E` garante contraste com a logo original transparente e branca.

## Conteúdo e fotografias

**As fotos são cópias do acervo real do repositório**:
- `src/components/images/` → `site-v2/public/media/clinic/`
- `src/components/Exames/images/` → `site-v2/public/media/exams/`
- `src/components/Tratamentos/images/` → `site-v2/public/media/treatments/`

A preparação converte automaticamente os **18 artigos** em Markdown do Gatsby para páginas Astro, incluindo arquivos com BOM e pastas de imagens originais. Catálogos de exames, doenças e tratamentos são extraídos do `src/components/allData.js`, sem recadastramento manual.

**Importante:** alguns artigos originais referenciam imagens de sites externos; revisar permanência, disponibilidade, qualidade e direitos de uso antes de publicar em produção.

## URLs disponíveis

- `/`
- `/o-medico/`
- `/sobre-a-clinica/`
- `/exames/`
- `/doencas-oculares/`
- `/tratamentos/`
- `/conteudos/`
- `/contato/`
- 18 rotas de artigos, preservando os slugs históricos

## Publicação do preview

O workflow `.github/workflows/site-v2-preview.yml` compila na branch e tenta publicar no GitHub Pages: `https://kivervinicius.github.io/drlucascarazza/`.

**Pré-requisito de permissão:** GitHub Pages precisa estar ativado em `Settings → Pages → Build and deployment → Source → GitHub Actions`. Sem isso, o workflow compila, mas a publicação é rejeitada pela API do GitHub.

O preview está marcado com `robots: noindex,nofollow` e não deve substituir o domínio do cliente sem homologação.

## Revisões necessárias antes de lançamento

1. Confirmar imagem selecionada para o hero e conferir todas as legendas de fotos.
2. Validar celular/WhatsApp, endereço, CRM-MT/RQE e demais dados do médico.
3. Revisar conteúdo clínico e publicidade médica conforme CFM.
4. Testar links, imagens, responsividade, acessibilidade e todas as 27 páginas em navegador.
5. Analisar dependências, adicionar lockfile e pipeline de testes antes de merge.
6. Definir processo de edição de conteúdo sem dar acesso de escrita excessivo à equipe.
7. Estabelecer aprovação e rollback, preservação SEO e redirecionamentos reais.

**Este é um preview de produto**, não um sistema de agendamento. O CTA abre o WhatsApp existente; não promete horários ou confirma consultas.
