
import re
import base64
import os
import sys
import urllib.request
import hashlib
from mimetypes import guess_extension

def get_content_hash(data):
    """Calculates the SHA-256 hash of the given data and returns the first 16 hex characters."""
    h = hashlib.sha256(data)
    return h.hexdigest()[:16]

def is_caption_line(line):
    """Determines if a line is likely a caption."""
    stripped_line = line.strip()
    # A caption is a non-empty line that doesn't look like another element (like another image, a header, or html)
    return stripped_line and not stripped_line.startswith(('<', '!', '[', '#', '---'))

def process_markdown_file(markdown_file_path):
    """
    Processes markdown files line-by-line to convert image syntax into <figure> blocks.
    This approach is more robust for detecting captions on the following line.
    """
    if not os.path.exists(markdown_file_path):
        print(f"Error: File not found at {markdown_file_path}", file=sys.stderr)
        sys.exit(1)

    try:
        file_dir = os.path.dirname(markdown_file_path)
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
                    # Process image source if it's not a local path
                    if image_src.startswith('data:image') or image_src.startswith('http'):
                        image_data, ext = None, '.jpg'
                        if image_src.startswith('data:image'):
                            header, b64_data = image_src.split(',', 1)
                            img_type = re.search(r'image/([a-zA-Z+]+)', header).group(1)
                            ext, image_data = f'.{img_type}', base64.b64decode(b64_data)
                        else: # http
                            with urllib.request.urlopen(image_src) as response:
                                image_data = response.read()
                                content_type = response.info().get('Content-Type')
                                guessed_ext = guess_extension(content_type)
                                if guessed_ext: ext = guessed_ext
                        
                        if image_data:
                            file_hash = get_content_hash(image_data)
                            image_filename = f'{file_hash}{ext}'
                            relative_image_path = f'./{file_name_without_ext}/{image_filename}'
                            absolute_image_path = os.path.join(image_dir, image_filename)
                            if not os.path.exists(absolute_image_path):
                                with open(absolute_image_path, 'wb') as f:
                                    f.write(image_data)
                    
                    # Build the HTML figure block
                    figure_html = f'<figure>\n  <img src="{relative_image_path}" alt="{alt_text}"/>'
                    if caption_text:
                        figure_html += f'\n  <figcaption><em>{caption_text.strip("*_")}</em></figcaption>'
                    figure_html += '\n</figure>'
                    new_lines.append(figure_html + '\n')
                    total_processed_count += 1
                except Exception as e:
                    print(f"Warning: Could not process image '{alt_text}'. Re-adding original line. Error: {e}", file=sys.stderr)
                    new_lines.append(line) # Re-add original line on failure
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
        print(f"An unexpected error occurred: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python3 process_markdown.py <path_to_markdown_file>")
        sys.exit(1)
    
    markdown_file_to_process = sys.argv[1]
    process_markdown_file(markdown_file_to_process)
