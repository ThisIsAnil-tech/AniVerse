from ..llm.ollama import OllamaProvider
from ..rag.vector_store import VectorStoreService

try:
    from app.services.intent.classifier import IntentClassifier
except ImportError:
    from ..intent.classifier import IntentClassifier

class PromptOrchestrator:
    def __init__(self, llm_provider: OllamaProvider, vector_store: VectorStoreService):
        self.llm = llm_provider
        self.vector_store = vector_store

    def process_query(self, user_query: str):
        intent = IntentClassifier.classify(user_query)
        docs = self.vector_store.similarity_search(user_query, top_k=3)
        context_str = "\n".join([f"- [{d.get('source', 'Portfolio')}] {d['content']}" for d in docs])
        citations = list(set([d.get('source', 'Portfolio') for d in docs]))

        system_prompt = (
            f"You are an expert AI Portfolio Assistant for Anil (Intent detected: {intent.upper()}). "
            "Use the provided context to answer questions accurately. Be professional, concise, and informative."
        )
        prompt = f"Context Information:\n{context_str}\n\nUser Question: {user_query}\n\nAnswer:"

        answer = self.llm.generate(prompt, system_prompt=system_prompt)
        return {
            "intent": intent,
            "answer": answer,
            "citations": citations,
            "context_used": context_str
        }
