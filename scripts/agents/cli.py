import sys
import os

# Ensure we can import sibling modules when run as a script
if __name__ == "__main__" and __package__ is None:
    sys.path.append(os.path.dirname(os.path.abspath(__file__)))
    from article_creator import create_article
    from image_processor import process_images
    from chat_processor import main as process_chat
    from validator import validate_articles
    from utils import get_valid_input
else:
    from .article_creator import create_article
    from .image_processor import process_images
    from .chat_processor import main as process_chat
    from .validator import validate_articles
    from .utils import get_valid_input

def main():
    while True:
        print("\n" + "="*30)
        print("   DR. LUCAS AGENT CLI")
        print("="*30)
        print("1. Criar novo artigo (Markdown)")
        print("2. Processar imagens externas em um artigo")
        print("3. Processar mensagem do Chat (atualizar listas)")
        print("4. Validar artigos (links ausentes)")
        print("5. Sair")
        print("-" * 30)
        
        choice = input("Escolha uma opção (1-5): ").strip()
        
        try:
            if choice == '1':
                create_article()
            elif choice == '2':
                file_path = get_valid_input("Digite o caminho do arquivo markdown: ")
                process_images(file_path)
            elif choice == '3':
                process_chat()
            elif choice == '4':
                validate_articles("src/markdown-pages")
                input("\nPressione Enter para continuar...")
            elif choice == '5':
                print("Até logo!")
                sys.exit(0)
            else:
                print("Opção inválida. Tente novamente.")
        except Exception as e:
            print(f"\n❌ Ocorreu um erro: {e}")
            input("\nPressione Enter para continuar...")

if __name__ == "__main__":
    main()
