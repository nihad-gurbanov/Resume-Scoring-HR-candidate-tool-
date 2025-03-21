# Resume Scoring API

## Overview

The Resume Scoring API is a machine learning-based service that processes job requirement documents and resumes to compute similarity scores. It extracts text from various document formats, translates non-English content into English, and uses NLP techniques to measure the relevance of resumes to a given job description.

## Features

- **Document Processing**: Supports PDF, DOCX, PNG, JPG, and JPEG formats.
- **OCR for Image-Based Resumes**: Uses Tesseract OCR to extract text from images.
- **Language Detection & Translation**: Detects and translates Azerbaijani, Turkish, and Russian text into English using Google Translate API.
- **Text Preprocessing**: Performs lemmatization and stop-word removal using SpaCy.
- **Semantic Similarity Calculation**: Uses SentenceTransformer to compute the similarity between job descriptions and resumes.
- **Swagger Documentation**: Provides API documentation for testing and integration.

## Requirements

- Python 3.8+

### Dependencies (install via `requirements.txt`)

- Flask
- Flask-CORS
- Flasgger
- Requests
- PyMuPDF
- pytesseract
- python-docx
- Pillow
- langdetect
- spacy
- sentence-transformers

### Translation API Key

Replace `YourAPIKey` in `translate_text()` with a valid Google Translate API key.

## Installation & Setup

1. Open WSL Terminal (or alternative terminal based on your OS)
2. Navigate to the Root Directory of the Project
    ```sh
    cd /path/to/project
    ```
3. Create & Activate Virtual Environment

    For Linux/macOS:
    ```sh
    python3 -m venv venv
    source venv/bin/activate
    ```

    For Windows:
    ```sh
    python -m venv venv
    venv\Scripts\activate
    ```

4. Install Required Dependencies
    ```sh
    pip install -r requirements.txt
    ```

5. Run the API Service
    ```sh
    python3 app_with_log_and_matching.py
    ```

## API Endpoints

### Upload Job Requirements and Resumes

- **Endpoint**: `POST /upload`
- **Request**: Multipart form-data containing:
  - `requirements` (Job description file in DOCX, PDF, or Image format)
  - `resumes_zip` (ZIP file containing resumes in DOCX, PDF, or Image format)
- **Response**: JSON object with similarity scores for each resume.

### Download Processed Files

- **Endpoint**: `GET /uploads/<filename>`
- **Request**: `filename` (Processed job description or resume file)
- **Response**: The requested file for download.

## Logs

The application logs all operations, including file processing, translation, and similarity scoring. Logs help diagnose issues and track execution flow.

## Notes

- Ensure `pytesseract` is correctly installed and its path is set in `pytesseract.pytesseract.tesseract_cmd`.
- The processing logic includes translation for supported non-English languages.
- The results are sorted in descending order based on similarity scores.

## Future Enhancements

- Support for additional document formats (e.g., TXT, RTF).
- Improve text preprocessing for better accuracy.
- Deploy as a Docker container for easier scalability.
