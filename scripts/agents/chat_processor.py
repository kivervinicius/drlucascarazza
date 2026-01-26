import sys
import re
import os
from datetime import datetime

# Import sibling modules
try:
    from .article_creator import create_article
    from .utils import get_valid_input
except ImportError:
    # Fix for running as script
    sys.path.append(os.path.dirname(os.path.abspath(__file__)))
    from article_creator import create_article
    from utils import get_valid_input

def parse_chat(chat_text):
    """
    Parses chat text to identify intents.
    Returns a list of intents/actions.
    """
    lines = chat_text.split('\n')
    intents = []
    
    for line in lines:
        # Normalize line
        line_lower = line.lower()
        
        # Intent: Create New Article
        if "novo artigo" in line_lower:
            intents.append({
                "type": "create_article",
                "context": line
            })
            
        # Intent: Update Diseases List
        if "doenças" in line_lower and ("novo tópico" in line_lower or "ordem alfabética" in line_lower):
            intents.append({
                "type": "update_diseases",
                "context": line
            })
            
        # Intent: Update Treatments Button
        if "tto" in line_lower or "cirurgias" in line_lower:
            if "botão" in line_lower or "catarata" in line_lower:
                intents.append({
                    "type": "update_treatments",
                    "context": line
                })
                
    return intents

def update_diseases_list(title=None, slug=None, category_index=None):
    data_path = os.path.join(os.getcwd(), 'src', 'components', 'doencas-oculares', 'data.js')
    
    if not os.path.exists(data_path):
        print(f"Error: Could not find {data_path}")
        return

    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    categories = re.findall(r'export const (\w+) = \[', content)
    
    if category_index is None:
        print("\nAvailable Categories in Doenças Oculares:")
        for i, cat in enumerate(categories):
            print(f"{i + 1}. {cat}")
        
        try:
            category_index = int(input("Select category to add to (number): ")) - 1
        except ValueError:
            print("Invalid input.")
            return

    if category_index < 0 or category_index >= len(categories):
        print("Invalid category selection.")
        return
    
    target_cat = categories[category_index]
    
    if not title:
        title = get_valid_input("Enter Article Title for the list: ")
    if not slug:
        slug = get_valid_input("Enter Article Slug (e.g., /meu-artigo): ")
        
    if not slug.startswith('/'):
        slug = '/' + slug
        
    new_id = str(int(datetime.now().timestamp()))
    
    link_str = f'createLink("{slug}", "{title}")'
    
    new_item = f"""
  {{
    id: {new_id},
    name: "{title}",
    nikName: {link_str},
  }},"""
  
    pattern = re.compile(f'(export const {target_cat} = \[)(.*?)(\];)', re.DOTALL)
    
    match = pattern.search(content)
    if match:
        start_block = match.group(1)
        body = match.group(2)
        end_block = match.group(3)
        
        new_section = start_block + body + new_item + "\n" + end_block
        
        new_content = content.replace(match.group(0), new_section)
        
        with open(data_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        print(f"Successfully added '{title}' to '{target_cat}' in data.js")
    else:
        print("Error: Could not parse the selected category block.")

def update_treatments_list(item_index=None, button_text=None, button_url=None):
    data_path = os.path.join(os.getcwd(), 'src', 'components', 'Tratamentos', 'index.jsx')
    
    if not os.path.exists(data_path):
        print(f"Error: Could not find {data_path}")
        return

    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    item_pattern = re.compile(r'name:\s*["`](.*?)["`]', re.DOTALL)
    items = item_pattern.findall(content)
    
    if not items:
        print("Could not find any treatment items.")
        return

    if item_index is None:
        print("\nAvailable Treatment Items:")
        for i, item in enumerate(items):
            print(f"{i + 1}. {item}")
        
        try:
            item_index = int(input("Select item to add button to (number): ")) - 1
        except ValueError:
            print("Invalid input.")
            return

    if item_index < 0 or item_index >= len(items):
        print("Invalid item selection.")
        return
        
    selected_name = items[item_index]
    
    if not button_text:
        button_text = get_valid_input("Enter Button Text: ")
    if not button_url:
        button_url = get_valid_input("Enter Button URL (e.g., /novo-artigo): ")
    
    link_html = f'<br/><a class="btn btn-primary mt-2" href="{button_url}" target="_blank" rel="noopener noreferrer">{button_text}</a>'
    
    safe_name = re.escape(selected_name)
    desc_pattern = re.compile(f'(name:\s*["`]{safe_name}["`].*?description:\s*)(["`])(.*?)\\2', re.DOTALL)
    
    match = desc_pattern.search(content)
    
    if match:
        pre_desc = match.group(1)
        quote = match.group(2)
        existing_desc = match.group(3)
        
        new_desc_content = existing_desc + link_html
        new_desc = f'`{new_desc_content}`'
        new_block = f'{pre_desc}{new_desc}'
        
        new_doc = content.replace(match.group(0), new_block)
        
        with open(data_path, 'w', encoding='utf-8') as f:
            f.write(new_doc)
            
        print(f"Successfully added button to '{selected_name}'")
        
    else:
        print("Could not find the description field for this item.")

def handle_intents(intents, auto=False):
    print(f"\nFound {len(intents)} potential actions from chat.")
    
    for i, intent in enumerate(intents):
        print(f"\n--- Action {i+1}: {intent['type']} ---")
        print(f"Context: {intent['context'].strip()}")
        
        if intent['type'] == 'create_article':
            if auto:
                print("Auto-executing article creation...")
                # In a real scenario, we'd need to extract the title from context used regex or LLM
                # For now, we still likely need partial input unless we add extraction logic.
                # Let's prompt if not provided, basically normal flow but skipping the "Do you want to run" question.
                create_article()
            else:
                confirm = input("Do you want to run the Article Creator now? (y/n): ").lower()
                if confirm == 'y':
                    create_article()
                
        elif intent['type'] == 'update_diseases':
            if auto:
                 print("Auto-executing update diseases...")
                 update_diseases_list()
            else:
                confirm = input("Do you want to update the 'Doenças Oculares' list now? (y/n): ").lower()
                if confirm == 'y':
                    update_diseases_list()
            
        elif intent['type'] == 'update_treatments':
            if auto:
                print("Auto-executing update treatments...")
                update_treatments_list()
            else:
                confirm = input("Do you want to add a button to 'Tratamentos' list now? (y/n): ").lower()
                if confirm == 'y':
                    update_treatments_list()

def main():
    print("Paste the chat conversation below (Press Ctrl+D or Ctrl+Z on new line to finish):")
    contents = []
    while True:
        try:
            line = input()
        except EOFError:
            break
        contents.append(line)
        
    chat_text = "\n".join(contents)
    intents = parse_chat(chat_text)
    
    if intents:
        # In interactive mode, auto is always False
        handle_intents(intents, auto=False)
    else:
        print("No actionable intents found.")

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Process chat conversation for actions.")
    parser.add_argument("chat_text", nargs="?", help="The chat text to process")
    parser.add_argument("--auto", action="store_true", help="Automatically execute actions without confirmation")
    
    args = parser.parse_args()
    
    if args.chat_text:
        intents = parse_chat(args.chat_text)
        handle_intents(intents, auto=args.auto)
    else:
        main()
