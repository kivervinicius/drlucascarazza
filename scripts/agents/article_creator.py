import os
import shutil
from datetime import datetime
try:
    from .utils import slugify, get_valid_input
except ImportError:
    from utils import slugify, get_valid_input

MARKDOWN_PAGES_DIR = os.path.join(os.getcwd(), 'src', 'markdown-pages')

import argparse

def create_article(title=None, source_file=None):
    if not title:
        print("\n--- Create New Article ---")
        title = get_valid_input("Enter article title: ")
    
    slug = slugify(title)
    
    # Optional: Source markdown file
    if source_file is None:
        source_file = input("Enter path to source markdown file (optional, press Enter to skip): ").strip()
    
    # Destination paths
    filename = f"{slug}.markdown"
    dest_path = os.path.join(MARKDOWN_PAGES_DIR, filename)
    image_dir = os.path.join(MARKDOWN_PAGES_DIR, slug)
    
    if os.path.exists(dest_path):
        print(f"Error: Article already exists at {dest_path}")
        return dest_path

    # Create image directory
    if not os.path.exists(image_dir):
        os.makedirs(image_dir)
        print(f"Created image directory: {image_dir}")

    content = ""
    # Header logic
    frontmatter = f"""---
slug: "/{slug}"
title: "{title}"
---
<style>
    @media (max-width: 850px) {{
        .blog-post-content img {{
            width: 100%;
        }}
    }}
</style>

## Próximo Tópico
"""
    
    if source_file:
        if os.path.exists(source_file):
            with open(source_file, 'r', encoding='utf-8') as f:
                content = f.read()
            # Remove existing frontmatter if present (primitive check)
            if content.startswith('---'):
                parts = content.split('---', 2)
                if len(parts) >= 3:
                    content = parts[2].strip()
        else:
            print(f"Warning: Source file {source_file} not found. Creating empty article.")

    final_content = frontmatter + "\n" + content
    
    with open(dest_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print(f"Successfully created article: {dest_path}")
    return dest_path

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Create a new Gatsby article.")
    parser.add_argument("--title", help="Article title")
    parser.add_argument("--source", help="Source markdown file path")
    
    args = parser.parse_args()
    
    create_article(title=args.title, source_file=args.source)
