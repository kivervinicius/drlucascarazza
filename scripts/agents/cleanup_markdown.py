import os
import re

def cleanup_files(directory):
    count = 0
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith((".md", ".markdown")):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Robust regex:
                # Matches:
                # 1. Start with optional ** or #, then "Veja também" (case insensitive)
                # 2. Match anything until the end of the file or until the "back to main page" link
                # 3. Specifically target the known structure:
                #    **Veja também** ... links ... [⇦ voltar a pagina principal](/)
                
                pattern = r'(?i)(\s*(?:##|\*\*)\s*Veja também[\s\S]*?(?:voltar a p[áa]gina principal|⇦).*?$)'
                
                new_content = re.sub(pattern, '', content, flags=re.DOTALL)
                
                # Also generic "Próximo Tópico" cleanup if present at end
                new_content = re.sub(r'(?i)\s*##?\s*Próximo Tópico[\s\S]*$', '', new_content)
                
                if content != new_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content.strip() + "\n")
                    print(f"Cleaned {file}")
                    count += 1
    print(f"Total files cleaned: {count}")

cleanup_files("src/markdown-pages")
