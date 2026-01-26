import os
import re
import sys
import hashlib
import base64
import urllib.request
from mimetypes import guess_extension
try:
    from .utils import get_valid_input
except ImportError:
    from utils import get_valid_input

def get_content_hash(data):
    """Calculates the SHA-256 hash of the given data and returns the first 16 hex characters."""
    h = hashlib.sha256(data)
    return h.hexdigest()[:16]

def is_caption_line(line):
    """Determines if a line is likely a caption."""
    stripped_line = line.strip()
    return stripped_line and not stripped_line.startswith(('<', '!', '[', '#', '---'))

def process_images(markdown_file_path):
    """
    Processes markdown files line-by-line to convert image syntax into <figure> blocks.
    Downloads external images and saves them locally.
    """
    if not os.path.exists(markdown_file_path):
        print(f"Error: File not found at {markdown_file_path}")
        return

    try:
        file_dir = os.path.dirname(markdown_file_path)
        # Assuming file structure ../markdown-pages/slug.markdown
        # Image dir should be ../markdown-pages/slug/
        file_name_without_ext = os.path.splitext(os.path.basename(markdown_file_path))[0]
        image_dir = os.path.join(file_dir, file_name_without_ext)

        if not os.path.exists(image_dir):
            os.makedirs(image_dir)
            print(f"Created directory: {image_dir}")

        with open(markdown_file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        new_lines = []
        i = 0
        total_processed_count = 0
        
        while i < len(lines):
            line = lines[i]
            # Match standard markdown image syntax: ![alt](src)
            match = re.match(r'^\s*!\[(.*?)\]\((.*?)\)\s*$', line.strip())

            if match:
                alt_text, image_src = match.groups()
                caption_text = None
                
                # Check next line for a caption
                if (i + 1) < len(lines) and is_caption_line(lines[i+1]):
                    caption_text = lines[i+1].strip()
                    i += 1 # Consume caption line

                try:
                    relative_image_path = image_src
                    
                    # Logic to handle external images (http/data uri)
                    if image_src.startswith('data:image') or image_src.startswith('http'):
                        image_data, ext = None, '.jpg'
                        
                        if image_src.startswith('data:image'):
                            header, b64_data = image_src.split(',', 1)
                            # Extract extension from data URI header
                            img_type_match = re.search(r'image/([a-zA-Z+]+)', header)
                            if img_type_match:
                                img_type = img_type_match.group(1)
                                # Map common types to extensions if needed, or use as is
                                ext = f'.{img_type}'
                            image_data = base64.b64decode(b64_data)
                        else: # http/https
                            # Add simple user-agent to avoid some 403s
                            req = urllib.request.Request(
                                image_src, 
                                data=None, 
                                headers={
                                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
                                }
                            )
                            with urllib.request.urlopen(req) as response:
                                image_data = response.read()
                                content_type = response.info().get('Content-Type')
                                guessed_ext = guess_extension(content_type)
                                if guessed_ext: 
                                    ext = guessed_ext

                        if image_data:
                            file_hash = get_content_hash(image_data)
                            image_filename = f'{file_hash}{ext}'
                            
                            # Save to local directory
                            absolute_image_path = os.path.join(image_dir, image_filename)
                            relative_image_path = f'./{file_name_without_ext}/{image_filename}'
                            
                            if not os.path.exists(absolute_image_path):
                                with open(absolute_image_path, 'wb') as f:
                                    f.write(image_data)
                                print(f"Downloaded/Saved image: {image_filename}")
                            else:
                                print(f"Image already exists: {image_filename}")
                    
                    # Build the HTML figure block
                    figure_html = f'<figure>\n  <img src="{relative_image_path}" alt="{alt_text}"/>'
                    if caption_text:
                        figure_html += f'\n  <figcaption><em>{caption_text.strip("*_")}</em></figcaption>'
                    figure_html += '\n</figure>'
                    
                    new_lines.append(figure_html + '\n')
                    total_processed_count += 1

                except Exception as e:
                    print(f"Warning: Could not process image '{alt_text}'. Re-adding original line. Error: {e}")
                    new_lines.append(line)
            else:
                new_lines.append(line)
            i += 1
        
        if total_processed_count > 0:
            with open(markdown_file_path, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
            print(f"Processing complete for {markdown_file_path}.")
            print(f"{total_processed_count} blocks were converted to <figure> format.")
        else:
            print("No new markdown images found to format.")

    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    path = input("Enter path to markdown file: ")
    process_images(path)
