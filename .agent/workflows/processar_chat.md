---
description: Processar mensagens do Dr. Lucas para automação
---

# Processar Conversa

Este workflow permite que você processe conversas coladas no chat para executar ações automáticas.

**Instruções:**
1. Copie a conversa do Dr. Lucas.
2. Cole no terminal da seguinte forma (ou peça ao agente para executar):

```bash
python3 scripts/agents/chat_processor.py "TEXTO DA CONVERSA"
```

O agente irá identificar as intenções e executar:
- Criação de artigos (`article_creator.py`)
- Atualização da lista de doenças
- Atualização de botões de tratamento

// turbo
3. Verificar se as alterações foram feitas corretamente.
