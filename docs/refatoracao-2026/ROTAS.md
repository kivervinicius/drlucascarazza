# Inventário inicial de rotas e migração — Site Dr. Lucas Carazza

Origem: `src/pages` e frontmatter dos 18 arquivos em `src/markdown-pages`, branch `cqq/development`.

## Rotas institucionais e de catálogo

| Rota pública atual | Origem | Destino v2 | Ação |
| --- | --- | --- | --- |
| `/` | `index.jsx` | `/` | Preservar |
| `/sobre-a-clinica/` | `sobre-a-clinica.jsx` | mesmo caminho | Preservar |
| `/exames/` | `exames.jsx` | mesmo caminho | Preservar |
| `/doencas-oculares/` | `doencas-oculares.jsx` | mesmo caminho | Preservar |
| `/tratamentos/` | `tratamentos.jsx` | mesmo caminho | Preservar |
| Outras / 404 | `404.js` | página 404 | Preservar status correto |

## Artigos

A tabela considera o `frontmatter.slug` (e não necessariamente o nome do arquivo):

| Arquivo legado | URL pública a preservar |
| --- | --- |
| `blefarite-olhos-secos.markdown` | `/blefarite-olhos-secos/` |
| `ceratocone.markdown` | `/ceratocone/` |
| `cirurgia-refrativa.markdown` | `/cirurgia-refrativa/` |
| `conjutivites-alergicas.md` | `/conjutivites-alergicas/` |
| `conjutivites-infecciosas.md` | `/conjutivites-infecciosas/` |
| `descolamento-de-vitreo.markdown` | `/descolamento-de-vitreo/` |
| `dica-catarata-cirurgia.md` | `/catarata-cirurgia/` |
| `dica-cor-olhos.markdown` | `/dica-pediatria-cor-olhos/` |
| `dica-lentes.markdown` | `/lentes/` |
| `dica-oculos.markdown` | `/dica-oculos/` |
| `dica-pediatria.markdown` | `/dica-pediatria/` |
| `glaucoma.markdown` | `/glaucoma/` |
| `hemorragia-subconjuntival.markdown` | `/hemorragia-subconjuntival/` |
| `hordeolo-e=calazio.markdown` | `/hordeolo-calazio/` |
| `miopia.markdown` | `/miopia/` |
| `preparando-lentes.markdown` | `/como-usar-lentes/` |
| `pterigio.markdown` | `/pterigio/` |
| `slt.markdown` | `/slt/` |

> Os caminhos `conjutivites-*` contêm erro ortográfico, mas NÃO devem mudar sem redirecionamento 301. Preservar inicialmente é a alternativa mais segura para SEO.

## Problemas de conteúdo a corrigir na migração

1. `preparando-lentes.markdown` possui `title: ""`; obter título e descrição corretos antes da publicação.
2. Template `{MarkdownRemark.frontmatter__slug}.js` usa a descrição geral do site em todos os artigos; produzir metadados próprios aprovados por página.
3. Textos antigos podem estar desatualizados clinicamente: cada conteúdo deve ser revisado pelo responsável médico, sem criar datas de revisão artificiais.
4. Links internos montados manualmente precisam ser resolvidos por registry e validados em CI.
5. Página `/doencas-oculares/` contém placeholder "Página em construção"; eliminar após catálogo estar completo e aprovado.
6. Galeria utiliza alt genérico "foto da clinica"; mapear descrições específicas e responsivas de imagens autorizadas.
7. Endereço e contatos aparecem em diferentes componentes: centralizar após validar com a equipe.

## Verificações finais (automáticas)

- Extrair sitemap atual e inventário real de URLs acessadas; comparar com esta lista (não assumir que está completa).
- Comparar status HTTP e titles de produção vs preview.
- Verificar URLs com barra final, variantes http/https e www.
- Garantir rel=canonical de cada página, sitemap, robots e ausência de noindex em produção.
- Checar todos os links internos, imagens e arquivos de mídia.
- Exportar CSV com old_url, new_url, status esperado e motivo para revisão.
