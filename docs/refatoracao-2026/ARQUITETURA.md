# RFC — Reconstrução do site Dr. Lucas Carazza (2026)

**Estado:** proposta técnica inicial baseada em auditoria da branch `cqq/development` e do site publicado.  
**Regra:** não substituir a produção até a homologação clínica, funcional e SEO.

## Objetivos de produto

1. Paciente: localizar informações claras sobre médico, clínica, doenças, exames e tratamentos; contato com a clínica em no máximo dois passos, principalmente no celular.
2. Equipe: atualizar conteúdos, fotos, dados de contato e metadados sem alterar layout ou código.
3. Engenharia: reduzir JavaScript enviado, desacoplar conteúdo, ter tipos/testes, CI previsível e preview por PR.
4. Preservar ativos: domínio, fotos reais, marca, artigos e URLs indexadas.

## Diagnóstico verificado

- Gatsby 4 / React 18 / Bootstrap / Sass / Styled Components no `package.json`.
- Informações estruturadas em `src/components/allData.js`, estruturas JSX e componentes grandes.
- Muitas páginas usam title/description globais; templates de artigos reutilizam descrição geral.
- Dados de artigos indexados por Markdown frontmatter; 18 arquivos de artigos encontrados.
- Arquivo `preparando-lentes.markdown`: frontmatter com título vazio.
- Arquivo de menu utiliza hrefs relativos, alt da logo diz "React Bootstrap logo".
- `Btn-flutuante/index.jsx`: CTA depende de intervalo fixo de scroll e manipulação direta de DOM.
- `Footer/index.jsx`: telefone celular exibido diferente do número construído para o WhatsApp. Confirmar número antes de corrigir.
- Templates escolhem artigos relacionados com Math.random em renderização; não há relevância editorial determinística.
- `package.json` não declara scripts para testes, lint ou typecheck.
- O site publicado ainda apresenta aviso "Página em construção" em Doenças Oculares.

## Arquitetura alvo

- **Framework:** Astro 6 + TypeScript strict + renderização estática por padrão.
- **Conteúdo:** Astro Content Collections com esquemas de validação (Zod), Markdown/MDX somente quando necessário; conteúdo separado de componentes.
- **UI:** HTML semântico, CSS com tokens, componentes Astro; React como ilha apenas quando a interação realmente exigir.
- **Design:** identidade clínica própria; fotografia real e tratamentos responsivos por contexto; sem banners genéricos, carrossel obrigatório ou gráficos inventados.
- **Edição:** conteúdo versionado no GitHub com revisão editorial. Considerar Keystatic GitHub mode como interface para editores, após validar autenticação, permissão de escrita e runtime do deploy. Sem exigir CMS para compilar o site público.
- **Infra:** hospedagem estática com preview por branch/PR, build reprodutível; nenhuma API ou banco de dados para o site institucional.
- **Qualidade:** ESLint, Prettier, astro check, validação de conteúdo, testes de componentes e smoke E2E (Playwright), auditoria acessibilidade axe.
- **Observabilidade:** indicadores de navegação e conversão por eventos não sensíveis; nunca incluir dados de saúde ou identificação de paciente em analytics.

### Modelo de conteúdo

- `settings`: nome, credenciais médicas a confirmar, endereço, telefones validados, redes, horários e CTAs.
- `conditions`: doenças oculares; título, resumo, termos acessíveis, corpo, fonte, URL legada, revisão clínica, relações.
- `exams`: exames disponíveis; finalidade informativa e relações com doenças.
- `procedures`: tratamentos/cirurgias com indicação, conteúdo médico aprovado e relações.
- `articles`: orientações e dúvidas frequentes.
- `media`: fotos reais com dimensões, alt específico, origem e permissão de uso.

Campos comuns de conteúdo: `slug`, `title`, `description`, `category`, `relatedEntries`, `published`, `updatedAt` quando comprovado. Campos de revisão clínica só podem registrar aprovações reais.

## Experiência do paciente

- Navegação principal: Início, O médico, A clínica, Exames, Doenças oculares, Tratamentos, Artigos, Contato.
- Home: apresentação e credenciais, CTA contato, atalhos relevantes, serviços, médico, localização e conteúdo selecionado.
- Conteúdo: breadcrumb, sumário quando longo, texto legível, artigos relacionados por curadoria explícita, CTA contextual discreto.
- Contato: WhatsApp/call/map com número único validado; sem simular agenda real ou captar dados sensíveis por formulário.
- Mobile first: menu acessível, atalhos de contato claros, imagens sem corte facial inadequado, sem conteúdo-chave oculto por hover.
- Fotografia: reutilizar imagens oficiais da clínica e do profissional; validar direitos de uso/consentimento em fotos de pacientes.

## Restrições éticas, legais e SEO

- Revisar nome, CRM e RQE com a equipe; respeitar Resolução CFM 2.336/2023 e manual Codame.
- Não inventar especialidades, prometer resultados, diagnosticar, criar depoimentos ou manipular imagens clínicas.
- Evitar coleta de dados de saúde; se futuramente houver formulário/agendamento integrado, fazer avaliação LGPD e segurança própria.
- Inventariar URLs existentes antes da migração; preservar caminhos sempre que possível.
- Se um caminho mudar, mapear 301/308 direto ao destino correto; manter canonical, sitemap, links internos e validação de 404.
- Nunca apagar conteúdo indexado sem avaliação editorial e redirecionamento relevante.

## Entregas técnicas

**Fase 0 — Baseline:** captura de sitemap, rotas, imagens, dados de contato e métricas disponíveis; correções urgentes aprovadas.

**Fase 1 — Fundação:** site v2 isolado em branch, configuração Astro 6 TS, estrutura, tokens, layout semântico, pipeline CI, deploy de preview.

**Fase 2 — Conteúdo:** migração dos 18 artigos e das estruturas de exames, doenças e tratamentos; schema e editor; referências internas tipadas.

**Fase 3 — UX:** home, navegação, listagem, busca por texto/título sem dados de paciente, templates de conteúdo, clínica, contatos e estados 404.

**Fase 4 — Qualidade:** revisão clínica, teclado/leitor de tela, WCAG 2.2 AA, responsividade, mídia, Core Web Vitals, SEO, links, segurança e analytics.

**Fase 5 — Lançamento:** regressão comparativa de URLs, validar domínio e contato, promoção controlada do preview, monitorar Search Console, rollback documentado.

## Critérios de aceite

- Todas as URLs antigas importantes respondem 200 com conteúdo ou 301/308 para rota pertinente; nenhuma 404 involuntária.
- Todos os CTAs de contato usam o número confirmado; teste automatizado de consistência.
- Os 18 artigos passam por validação de esquema; nenhum título em branco ou texto de placeholder publicado.
- Conteúdo de exames/doenças/tratamentos não fica duplicado em JSX e markdown.
- Build, typecheck, lint, verificador de links e smoke E2E verdes no CI.
- Meta: Lighthouse >=90 em SEO/acessibilidade/performance para templates representativos em ambiente de homologação, sem substituir testes manuais ou medidas reais de campo.
- Conformidade CFM e revisão de conteúdo médico aprovadas pela equipe responsável.
- Production deploy somente após homologação e plano de rollback.

## Decisões em aberto (não preencher com suposições)

- Confirmar celular/WhatsApp, CRM/RQE, nome e informações regulatórias da clínica.
- Confirmar equipe autorizada a editar e aprovar conteúdo.
- Validar se existe ferramenta real de agendamento; caso contrário, CTA de contato sem prometer horário.
- Verificar Search Console/analytics para URLs de maior tráfego e SEO.
