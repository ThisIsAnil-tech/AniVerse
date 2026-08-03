# System Architecture Guide

## Overview
AniVerse uses a modern decoupled microservice architecture:

```
[ Client Interface / React ]
             |
             v
 [ Node.js Express Gateway ] (Port 5000)
    |            |            |
    v            v            v
[MongoDB]     [Redis]   [Python Flask AI Microservice] (Port 5001)
                                 |
                                 v
                       [ChromaDB / Ollama LLM]
```

## Principles
1. **SOLID Design**: Single responsibility services, open-closed provider interfaces, Liskov substitution, interface segregation, and dependency inversion.
2. **Layered Structure**: Controller Layer -> Service Layer -> Repository Layer -> Mongoose Database.
3. **Provider Pattern**: Abstracted Storage, Email, Cache, Queue, and AI services with Mock implementations for zero-dependency local development.
4. **Strict Isolation**: Frontend never connects directly to Flask. All AI requests pass through Node.js API gateway.
