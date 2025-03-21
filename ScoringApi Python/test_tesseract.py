from PIL import Image
import pytesseract

# Update this path to the location of an image on your system
image_path = 'Screenshot_1.png'

# Set the path to tesseract executable
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Perform OCR
text = pytesseract.image_to_string(Image.open(image_path))
print("Extracted Text:", text)