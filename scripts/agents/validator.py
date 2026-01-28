import os
import re
import sys

def check_missing_links(content, filename):
    """
    Checks for phrases indicating a link that are not actually linked.
    """
    # Patterns that suggest a link should be present
    # We look for "clique [wn]esse link", "veja aqui", "nesse link", etc.
    # checking if they are NOT inside [...]() or <a href>
    
    suspicious_patterns = [
        r'(?i)\bclique\s+(?:aqui|n?esse\s+link)\b',
        r'(?i)\bveja\s+(?:aqui|n?esse\s+link)\b',
        r'(?i)\bacess(?:e|ar)\s+(?:aqui|n?esse\s+link)\b',
        r'(?i)\bno\s+link\s+abaixo\b',
        r'(?i)\bpelo\s+link\b',
    ]
    
    issues = []
    
    # Remove valid markdown links to avoid false positives in checking
    # We replace [text](url) with just "LINK" to simplify
    clean_content = re.sub(r'\[([^\]]+)\]\([^)]+\)', 'LINK', content)
    # Also Remove HTML links
    clean_content = re.sub(r'<a\s+[^>]+>.*?</a>', 'LINK', clean_content, flags=re.DOTALL)

    lines = clean_content.split('\n')
    for i, line in enumerate(lines):
        for pattern in suspicious_patterns:
            if re.search(pattern, line):
                # Double check to ensure we didn't just strip the valid link next to it
                # If the original line had a link right after the pattern, it might be valid.
                # But our clean_content replaced links. So if "clique aqui" remains, it's likely unlinked.
                
                # Exception: "clique no LINK" is valid (was [clique no link](url))
                # If the replacement logic worked, "clique no LINK" means "clique no [text](url)"
                
                # Let's refine: The pattern must match in the CLEANED content.
                # If "clique aqui" exists in clean content, it means it wasn't part of a link structure.
                
                issues.append({
                    "line": i + 1,
                    "message": f"Possible missing link detected: '{re.search(pattern, line).group(0)}'",
                    "context": line.strip()[:60] + "..."
                })
    return issues

def validate_articles(directory):
    total_issues = 0
    print(f"🔍 Scanning articles in {directory} for potential issues...\n")
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith((".md", ".markdown")):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    issues = check_missing_links(content, file)
                    
                    if issues:
                        print(f"📄 {file}:")
                        for issue in issues:
                            print(f"  ❌ Line {issue['line']}: {issue['message']}")
                            print(f"     Context: {issue['context']}")
                        print("")
                        total_issues += len(issues)
                        
                except Exception as e:
                    print(f"Error reading {file}: {e}")

    if total_issues == 0:
        print("✅ No missing link issues found! Great job.")
    else:
        print(f"⚠️ Found {total_issues} potential missing links.")

if __name__ == "__main__":
    target_dir = "src/markdown-pages"
    if len(sys.argv) > 1:
        target_dir = sys.argv[1]
    
    validate_articles(target_dir)
