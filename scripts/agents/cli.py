import sys
import os

# Ensure we can import sibling modules when run as a script
if __name__ == "__main__" and __package__ is None:
    sys.path.append(os.path.dirname(os.path.abspath(__file__)))
    from article_creator import create_article
    from image_processor import process_images
    from utils import get_valid_input
else:
    from .article_creator import create_article
    from .image_processor import process_images
    from .utils import get_valid_input

def main():
    while True:
        print("\n=== Gatsby Article Agent ===")
        print("1. Create New Article") # Added back based on the if/elif structure
        print("2. Process external images in an article")
        print("3. Process chat message to update lists")
        print("4. Validate articles for missing links")
        print("5. Exit")
        
        choice = input("\nEnter your choice (1-5): ")
        
        if choice == '1':
            # Assuming create_article_interactive is a new function or a wrapper for create_article
            # For now, let's assume it's a new function that needs to be imported or defined.
            # If it's not defined, this will cause an error.
            # For the purpose of this edit, I will assume it's a placeholder for a future import/definition.
            # If the original create_article was meant to be used, the instruction should have kept it.
            # Given the instruction, I'll use create_article_interactive.
            # To make it syntactically correct, I'll add a placeholder import for now.
            try:
                from .article_creator import create_article_interactive
            except ImportError:
                # Fallback or error handling if not found
                print("Error: create_article_interactive not found. Using create_article.")
                create_article()
            else:
                create_article_interactive()
        elif choice == '2':
            # Similar assumption for process_images_interactive
            try:
                from .image_processor import process_images_interactive
            except ImportError:
                print("Error: process_images_interactive not found. Using original process_images.")
                file_path = get_valid_input("Enter path to markdown file: ")
                process_images(file_path)
            else:
                process_images_interactive()
        elif choice == '3':
            # New function, assuming it needs to be imported or defined
            try:
                from .chat_processor import process_chat_interactive
            except ImportError:
                print("Error: process_chat_interactive not found. Please implement it.")
            else:
                process_chat_interactive()
        elif choice == '4':
            from validator import validate_articles
            validate_articles("src/markdown-pages")
            input("\nPress Enter to continue...")
        elif choice == '5':
            print("Goodbye!")
            sys.exit(0)
        else:
            print("Invalid option. Please try again.")

if __name__ == "__main__":
    main()
