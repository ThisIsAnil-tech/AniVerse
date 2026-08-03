class IntentClassifier:
    """Classifies user queries to optimize RAG prompt construction."""
    
    INTENTS = {
        "skills": ["skill", "stack", "technology", "language", "framework", "tool", "react", "python", "node", "docker"],
        "experience": ["experience", "job", "work", "company", "career", "role", "history", "degree", "education"],
        "projects": ["project", "build", "demo", "app", "portfolio", "github", "code", "architecture"],
        "contact": ["contact", "email", "hire", "talk", "connect", "reach", "message"],
        "research": ["research", "paper", "patent", "publication", "journal", "thesis"],
    }

    @classmethod
    def classify(cls, query: str) -> str:
        query_lower = query.lower()
        for intent, keywords in cls.INTENTS.items():
            if any(word in query_lower for word in keywords):
                return intent
        return "general"
