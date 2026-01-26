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
        print("1. Create New Article")
        print("2. Process Article Images")
        print("3. Exit")
        
        choice = input("Select an option (1-3): ").strip()
        
        if choice == '1':
            create_article()
        elif choice == '2':
            file_path = get_valid_input("Enter path to markdown file: ")
            process_images(file_path)
        elif choice == '3':
            print("Exiting...")
            sys.exit(0)
        else:
            print("Invalid option. Please try again.")

if __name__ == "__main__":
    main()
