from ..llm.ollama import OllamaProvider
from ..rag.vector_store import VectorStoreService

class PromptOrchestrator:
    def __init__(self, llm_provider: OllamaProvider, vector_store: VectorStoreService):
        self.llm = llm_provider
        self.vector_store = vector_store

    def process_query(self, user_query: str):
        docs = self.vector_store.similarity_search(user_query, top_k=2)
        context_str = "\n".join([f"- {d['content']}" for d in docs])
        citations = [d['source'] for d in docs]

        system_prompt = "You are an AI Assistant for Anil's personal portfolio website. Use the provided context to answer questions about Anil's work, experience, and projects."
        prompt = f"Context:\n{context_str}\n\nUser Question: {user_query}\n\nAnswer concisely based on the context above:"

        answer = self.llm.generate(prompt, system_prompt=system_prompt)
        return {
            "answer": answer,
            "citations": citations,
            "context_used": context_str
        }
