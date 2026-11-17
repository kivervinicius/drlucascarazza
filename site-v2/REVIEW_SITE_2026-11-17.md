# Revisão editorial e otimização de mídia — 17/11/2026

## Diagnóstico de produção do preview (antes das correções)

- `/media/doctor/hero.png`: **HTTP 404**; não havia PNG neste caminho.
- `/media/doctor/hero.webp`: foto opaca 1254 × 1254, 155.102 bytes. Não era uma imagem recortada/transparente.
- O PNG `assets/doctor/user-provided/portrait-black.png` possui fundo preto **incorporado**, sem alfa. Não é adequado tentar recuperar a transparência apenas mudando o formato.
- O retrato `assets/doctor/originals/hero.webp` possui alfa legítimo (768 × 903). Fonte adotada para o hero transparente.
- Fotos herdadas do Gatsby no repositório com até ~3 MB por JPG e PNGs originais com mais de 2 MB. A cópia `sync-legacy.mjs` não efetuava otimização.
- A Home repetia as mesmas 3 fotos usadas na galeria e repetia artigos que já existem em `/conteudos/`.
- O template dos 18 artigos exibia um aviso genérico antes do texto, interrompendo a leitura.

## Correção de fotos

- `scripts/prepare-doctor-media.mjs`: gera `/media/doctor/hero-cutout.webp` e `/media/doctor/hero.png` **com transparência real**, partindo do original WebP com canal alfa, sem geração por IA nem remoção artificial de fundo.
- Usa foto quadrada real fornecida pelo cliente como `/media/doctor/consultation.webp` na galeria.
- Gera `/media/doctor/portrait-neutral.webp` a partir do retrato original de fundo claro, sem alterações fisionômicas.
- A foto de fundo preto continua preservada como original, mas deixa de ser usada no destaque do site.
- CSS remove sobreposições antigas que forçavam fundo preto e `object-fit:cover` no retrato transparente; a moldura do hero usa relação próxima à fotografia de origem.
- Toda imagem gerada deriva de fonte real e versionada, sem chamadas ao WordPress na publicação.

## Otimização de imagens do site

- O script `scripts/optimize-dist.mjs`, executado **após** o Astro build, cria WebP reduzido para fotos `.jpg/.jpeg/.png` maiores do acervo legado.
- Corrige referências dos HTML/CSS/JS gerados para os arquivos WebP menores.
- Mantém URLs originais como fallback para arquivos já compartilhados; não modifica as fotos do acervo fonte.
- Emite relatório em `/media-optimization-report.json` com contagem de imagens e redução efetiva em bytes.
- Limita a 1600 pixels a dimensão máxima dos derivados gerais. Não reduz a resolução da fotografia original versionada.
- `hero.png` permanece como PNG compatível com o endereço solicitado, preservando canal alfa; a Home usa WebP, mais eficiente.

## Revisão de texto e UX, fora dos artigos

- Home: introdução objetiva, áreas apresentadas como assuntos de atuação e conteúdo, não promessas sobre todos os procedimentos.
- Removeu Home duplicada com galeria e dicas repetidas. Galeria permanece na página do local de atendimento; todos os artigos continuam em `/conteudos/`.
- Página O médico: apresentação da formação e qualificações concretas.
- Exames/Tratamentos: descrições indicam materiais informativos e pedem confirmação de disponibilidade.
- Contato: clareza sobre WhatsApp, telefone e local.
- Galeria histórica: textos não afirmam que todas as imagens representam a clínica atual ou o Dr. Lucas em atendimento.
- FAQ: não divulgar convênios ou formas de pagamento sem confirmação.
- Template editorial: remove aviso destacado antes de cada artigo; nota discreta posterior permanece. Conteúdo dos 18 artigos não foi reescrito.
- CTA WhatsApp: texto esclarece canal de contato, sem prometer agendamento instantâneo.

## Pendências antes de migrar para o domínio oficial

- Homologação clínica das áreas, exames e procedimentos que são efetivamente realizados.
- Validação pelo consultório do CRM/RQE, telefone, localização e informações de convênio.
- Garantir autorização de uso dos retratos da equipe de marketing.
- Auditoria em navegadores, dispositivos e links, com revisão visual final.
- Medir Core Web Vitals em campo; redução de payload no build não equivale automaticamente à melhora de LCP no usuário real.

## Infra

Cloudflare Pages, projeto de **homologação** `drlucascarazza-preview`, branch `refactor/astro-2026`. Nenhuma alteração de DNS, domínio personalizado ou projeto oficial.

Como a Cloudflare usa Yarn 4 Plug'n'Play, os scripts que importam `sharp` devem ser executados via `yarn node`, não `node` isolado:

```sh
node scripts/sync-legacy.mjs && node scripts/sync-doctor-media.mjs && yarn node scripts/prepare-doctor-media.mjs && yarn astro build && yarn node scripts/optimize-dist.mjs
```
