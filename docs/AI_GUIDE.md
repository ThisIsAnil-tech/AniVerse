# AI Microservice & RAG Pipeline Guide

## Architecture
The AI Service is implemented in Python Flask with Blueprint modularity:
- **Embedding Generation**: Sentence Transformers (`all-MiniLM-L6-v2`).
- **Vector Storage**: ChromaDB vector store.
- **LLM Orchestration**: Local Ollama model (`mistral:latest` or `llama3`).
- **RAG Retriever**: Similarity search top-K contextual lookup.
- **Citations**: Source tracking and document attribution.
