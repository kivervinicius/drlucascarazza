# Dr. Lucas Carazza — proposta de identidade editorial

## Ambientes isolados

- Branch desta proposta: \`feat/identidade-editorial-2026\`.
- Preview independente: \`https://drlucascarazza-editorial.pages.dev/\`.
- Preview anterior (não alterar): \`https://drlucascarazza-preview.pages.dev/\`, branch \`refactor/astro-2026\`.
- Produção (não alterar antes de aprovação): \`https://drlucascarazza.com.br/\`.

## Diagnóstico

O layout anterior era tecnicamente organizado, mas excessivamente intercambiável entre profissionais de saúde: título aspiracional, cartão de navegação, vários cartões numerados de especialidades, mais cartões de artigos e CTA final. A nova versão usa uma assinatura visual e editorial consistente, sem alterar a informação médica preexistente.

## Direção de arte

- Marca oficial preservada, com fundo azul-marinho \`#1D374E\` para manter contraste.
- Fotografia autêntica e transparente do Dr. Lucas, de jaleco e gravata azuis, no hero: \`/media/doctor/hero-blue-transparent.webp\`. Não editar identidade física, roupa ou expressão.
- Papel quente \`#F8F5EE\`, branco editorial \`#FDFCFA\`, azul-marinho, acento discreto areia \`#A17E60\`.
- Headline com \`Instrument Serif\`; texto de interface com \`DM Sans\`. Evitar itálicos sistemáticos e slogans genéricos.
- Quatro formas de composição, cada uma com função clara: hero tipográfico, rota de navegação em faixa, linhas abertas de atuação, linha editorial de artigos.
- Sem slider, ícones decorativos aleatórios, animação contínua, fotografias genéricas de clínica, notas de avaliações inventadas ou depoimentos sem auditoria.
- Movimento apenas em interações diretas (hover/focus); respeitar \`prefers-reduced-motion\`.

## Arquitetura e escopo

- \`src/pages/index.astro\` e \`src/styles/home-editorial.css\`: Home exclusivamente desta proposta.
- \`src/pages/o-medico.astro\` e \`src/styles/physician-editorial.css\`: apresentação do médico sem cards de currículo.
- \`src/styles/editorial-theme.css\`: tema compartilhado e cabeçalho; \`body.editorial-site\` limita os overrides à nova branch.
- \`src/layouts/SiteLayout.astro\`: tipografia, navegação e rodapé. As rotas anteriores continuam acessíveis.
- Conteúdos dos artigos médicos, exames, doenças oculares e tratamentos não são reescritos.
- Todos os dados de contato e registro profissional são herdados da versão existente.
- Preview permanece \`noindex,nofollow\` até autorização explícita para produção.

## Critérios editoriais

1. O site fala de necessidades do paciente e do histórico real do médico, não de “conteúdos reunidos no site”.
2. Somente CRM-MT 7823, RQE 3253, formação UFMG e áreas documentadas são apresentados como fatos.
3. Não prometer resultado cirúrgico, estabilização de doença, tempo de consulta, número de atendimentos, experiências de pacientes ou oferta de serviço sem validação.
4. Chamadas para WhatsApp indicam pedido de agendamento, não reserva confirmada.
5. A clínica é citada como local de atendimento, não como propriedade do médico.
6. Detalhes são servidos por páginas internas; a Home orienta e dá motivos claros para navegar.

## Operação

O projeto editorial tem integração GitHub → Cloudflare Pages independente; o build permanece o mesmo:

\`\`\`sh
node scripts/sync-legacy.mjs && node scripts/sync-doctor-media.mjs && yarn node scripts/prepare-doctor-media.mjs && yarn node scripts/optimize-assets.mjs && yarn astro build
\`\`\`

Raiz do build: \`site-v2\`; saída: \`dist\`. Usar Node 22, Yarn 4. Não editar os projetos Cloudflare oficiais ou o preview antigo.

## Antes da aprovação

- Revisar textos clínicos com Dr. Lucas; confirmar se exames/procedimentos exibidos correspondem à prática.
- Validar uso autorizado de fotografias da equipe de marketing.
- Conferir menus, WhatsApp, artigos, responsividade, acessibilidade e contraste.
- Não usar depoimentos de terceiros, rankings ou alegações de “tecnologia superior” sem confirmação e revisão jurídica.
