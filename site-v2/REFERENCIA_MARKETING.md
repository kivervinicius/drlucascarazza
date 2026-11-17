# Referência de marketing e decisão editorial — Dr. Lucas Carazza

**Data da auditoria:** 16/11/2026. **Status:** implementado na branch de homologação, sujeito a revisão médica e de direitos autorais.

## Fontes

- Referência de marketing fornecida pelo cliente: https://floralwhite-rhinoceros-901309.hostingersite.com/dr-lucas-carazza/
- Site original: https://drlucascarazza.com.br/
- Fonte de credenciais e contato: https://www.doctoralia.com.br/perfil/lucas-carazza
- Associação Mato-Grossense de Oftalmologia: https://www.amomt.com.br/oftalmologistas.php
- Manual CFM: https://publicidademedica.cfm.org.br/manual/

## Insights do site feito pelo marketing

**Incorporar na experiência:**
1. Retratos reais do profissional como elemento dominante da Home e da biografia.
2. Apresentação por áreas de atuação (córnea, ceratocone, refrativa, catarata, glaucoma e lentes de contato).
3. Identificação CRM-MT 7823 / RQE 3253 junto à apresentação.
4. Fluxo explicativo: consulta e avaliação → orientação → plano individualizado → acompanhamento. Não afirmar que todos passam por procedimentos.
5. Linguagem humana, com CTA visível e localização precisa.
6. Aproveitar o conteúdo médico já presente na aplicação antiga: 18 artigos, 27 exames e 9 tratamentos.

**Não copiar sem revisão:**
- Marketing usa expressões como "devolver a visão", "procedimento seguro" e "catarata premium": inadequadas como promessa geral; substituir por descrição neutra.
- O termo "especialista" deve referir-se à especialidade registrada (oftalmologia); as demais competências devem ser apresentadas como "áreas de atuação" e formação.
- Seção de avaliações de Google/Trustindex só deverá aparecer após revisão da origem, consentimentos e adequação ao CFM (frequência, sobriedade e ausência de comparações indevidas). Não importar depoimentos sem essa homologação.
- Repetição de "Cirurgia de Catarata Premium" na referência é erro editorial; não reproduzir.
- O número de WhatsApp presente no hyperlink da referência está aparentemente incompleto: `556596276197`. O número mantido no site é `5565996276197` (65 99627-6197), consistente com a associação de oftalmologia.
- Imagens de Google, Doctoralia e diretórios externos não devem ser copiadas automaticamente. Sujeitas a direitos autorais e revisão de origem.

## Imagens versionadas a partir do material da equipe de marketing

**Status atualizado:** as oito imagens estão no GitHub e o build não acessa mais o WordPress.

| Uso | Original preservado | WebP tratado e publicado | Processamento não generativo |
| --- | --- | --- | --- |
| Hero principal | `assets/doctor/originals/hero.webp` (768×903) | `public/media/doctor/hero.webp` | Corte de 32px transparentes no topo, exposição +3,5%, contraste leve |
| Retrato em consultório | `assets/doctor/originals/portrait.webp` (1656×2560) | `public/media/doctor/portrait.webp` (1120×1614) | Enquadramento mais próximo, luz +9% |
| Retrato com vestimenta cirúrgica | `assets/doctor/originals/portrait-secondary.webp` (768×1327) | `public/media/doctor/portrait-secondary.webp` (768×1257) | Corte de área superior sem pessoa, luz +5,5% |
| Logo oficial da equipe de marketing | `assets/doctor/originals/brand.webp` (768×336) | `public/media/doctor/brand.webp` (728×280) | Apenas recorte de transparência externa; arte inalterada |

**Fontes:**
- `/wp-content/uploads/2026/02/IMG_4763.webp`
- `/wp-content/uploads/2026/06/IMG_4841-scaled.webp`
- `/wp-content/uploads/2026/02/IMG_4844.webp`
- `/wp-content/uploads/2026/02/Logo-Dr-Lucas-Carazza-B.webp`

Host de origem: `https://floralwhite-rhinoceros-901309.hostingersite.com`.

A identidade e as vestimentas do Dr. Lucas foram preservadas. As imagens são retratos reais e não são gerações por IA. Como são fotografias fornecidas na referência da equipe de marketing, registrar a autorização formal de uso e autoria antes de lançar o site definitivo.

**Contraste de marca:** logo com lettering branco e fundo transparente. A correção correta é colocar o cabeçalho em azul-marinho `#1D374E`, sem aplicar filtro ou modificar a logo.

## Hierarquia de informação adotada

- Home: Dr. Lucas, CRM/RQE, atuação, formação, processo de consulta, artigos, local de atendimento resumido e contato.
- O médico: trajetória, qualificações e retratos profissionais.
- Exames, Doenças, Tratamentos e Conteúdos: manter as páginas e os 18 slugs anteriores.
- Local de atendimento (rota histórica `/sobre-a-clinica/`): apenas localização e contato. Sem enfatizar imagens ou atribuir propriedade do Instituto da Visão ao médico.
- Contato: WhatsApp e telefone confirmados nas fontes, mapa e localização.
- Não replicar a landing page WordPress como "segundo site": incorporar o melhor do marketing ao site institucional único.

## Próximas etapas de qualidade e manutenção

1. Aprovação do médico para fotografias e alegações profissionais; obter originais em alta resolução (ideal largura > 1500 px para o hero em telas retina).
2. Executar testes automatizados de URLs, assets, fotos, acessibilidade, responsividade, links e build.
3. Implementar edição de conteúdo com fluxo de aprovação clínica (por PR, sem CMS ou autenticação de pacientes).
4. Criar matriz de SEO/URLs atuais, metadados por conteúdo e sitemap; evitar perda de tráfego.
5. Se houver analytics, registrar somente eventos agregados de navegação e cliques de CTA, sem dados de saúde.
6. Revisão jurídica da publicidade médica CFM 2.336/2023 antes de publicar no domínio oficial.
