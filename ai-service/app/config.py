import os

class Config:
    ENV = os.getenv("FLASK_ENV", "development")
    PORT = int(os.getenv("PORT", 5001))
    OLLAMA_BASE_URL = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
    OLLAMA_MODEL = os.getenv("OLLAMA_MODEL", "mistral:latest")
    API_KEY = os.getenv("AI_SERVICE_API_KEY", "ai_service_internal_secret_key_2026")
    CHROMA_PERSIST_DIR = os.getenv("CHROMA_PERSIST_DIR", "./chroma_db")
