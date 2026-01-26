import os
import shutil
import unittest
from .article_creator import create_article
from .image_processor import process_images
from unittest.mock import patch

class TestArticleAgents(unittest.TestCase):
    def setUp(self):
        # Setup temporary directories for testing
        self.test_dir = os.path.join(os.getcwd(), 'tmp_test_agents')
        if not os.path.exists(self.test_dir):
            os.makedirs(self.test_dir)
            
        self.test_md_path = os.path.join(self.test_dir, 'test-article.markdown')
        self.test_img_dir = os.path.join(self.test_dir, 'test-article')
        
    def tearDown(self):
        if os.path.exists(self.test_dir):
            shutil.rmtree(self.test_dir)

    def test_image_processing_external(self):
        # Create a dummy markdown file with a data URI image (red dot)
        data_uri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
        content = f"""---
title: Test Article
---
# Hello World

![Test Image]({data_uri})
Test caption below
"""
        with open(self.test_md_path, 'w') as f:
            f.write(content)
            
        # Run processor
        print(f"Processing {self.test_md_path}...")
        process_images(self.test_md_path)
        
        # Check if file content was updated
        with open(self.test_md_path, 'r') as f:
            new_content = f.read()
            
        self.assertIn('<figure>', new_content)
        self.assertIn('<figcaption><em>Test caption below</em></figcaption>', new_content)
        
        # Check if image dir was created
        self.assertTrue(os.path.exists(self.test_img_dir))
        
        # Check if an image file exists in it
        files = os.listdir(self.test_img_dir)
        self.assertTrue(len(files) > 0)
        self.assertTrue(files[0].endswith('.png'))

    @patch('builtins.input')
    def test_article_creation_style(self, mock_input):
        # Mock inputs: Title, Source File (empty for skip)
        mock_input.side_effect = ['Test Style Article', '']
        
        # We need to temporarily change the MARKDOWN_PAGES_DIR in article_creator 
        # to our test dir to avoid cluttering the real project
        import scripts.agents.article_creator as ac
        original_dir = ac.MARKDOWN_PAGES_DIR
        ac.MARKDOWN_PAGES_DIR = self.test_dir
        
        try:
            created_path = ac.create_article()
            
            self.assertTrue(os.path.exists(created_path))
            
            with open(created_path, 'r') as f:
                content = f.read()
                
            # Check for the style block
            self.assertIn('<style>', content)
            self.assertIn('.blog-post-content img', content)
            self.assertIn('## Introdução', content)
            
        finally:
            ac.MARKDOWN_PAGES_DIR = original_dir

if __name__ == '__main__':
    unittest.main()
