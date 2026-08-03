class VectorStoreService:
    def __init__(self, persist_dir: str):
        self.persist_dir = persist_dir
        self.documents = [
            {"id": "doc1", "content": "Anil is a Senior Full Stack & AI Engineer with expertise in Node.js, Flask, MongoDB, and RAG architectures.", "source": "Resume"},
            {"id": "doc2", "content": "AniVerse AI Portfolio is built using Node.js API Gateway, Python Flask AI microservice, and ChromaDB.", "source": "Project Portfolio"}
        ]

    def similarity_search(self, query: str, top_k: int = 2):
        query_lower = query.lower()
        results = []
        for doc in self.documents:
            if any(word in doc["content"].lower() for word in query_lower.split()):
                results.append(doc)
        return results if results else self.documents[:top_k]
