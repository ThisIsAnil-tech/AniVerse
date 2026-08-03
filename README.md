# AniVerse — Production-Grade AI-Powered Portfolio & CMS Platform

AniVerse is a personal portfolio website, content management system (CMS), research repository, and AI-powered assistant platform engineered with a clean decoupled microservices architecture.

---

## System Architecture

```
[ React + Vite Frontend (Port 3000) ]
                 |
                 v
  [ Node.js Express Gateway (Port 5000) ]
     |            |            |
     v            v            v
 [MongoDB]     [Redis]   [Python Flask AI Service (Port 5001)]
                                    |
                                    v
                          [ChromaDB / Ollama LLM]
```

> **Security Rule**: The frontend NEVER communicates directly with the Python Flask AI Service. Every request passes through the Node.js API Gateway (`/api/v1/ai/*`).

---

## Tech Stack Overview

- **Frontend**: React 18, Vite, Vanilla CSS Design System with Glassmorphism, Lucide Icons.
- **API Gateway**: Node.js 20+, Express.js, JWT Auth, Bcrypt, Rate Limiting, Helmet.
- **Database**: MongoDB 7.0+ (35+ Mongoose models with audit trail plugin).
- **AI Microservice**: Python 3.11, Flask, ChromaDB Vector DB, SentenceTransformers, Ollama (Mistral 7B).
- **External Providers**: Cloudinary (Images), MEGA (PDFs/Archives), Resend / Brevo (Transactional Email).
- **Caching & Queues**: Redis, Bull / Agenda, In-Memory fallbacks.
- **Containerization**: Docker & Docker Compose.

---

## Directory Structure

```
AniVerse/
├── docker-compose.yml              # Container orchestrator
├── Dockerfile.node                 # Node.js multi-stage build
├── Dockerfile.flask                # Flask multi-stage build
├── .env.example                    # Environment variables template
├── .env                            # Active environment file
├── API_GET.md                      # Detailed guide to get all API keys
├── README.md                       # Master platform documentation
├── backend/                        # Node.js Express API Gateway
├── ai-service/                     # Python Flask RAG Microservice
├── frontend/                       # React + Vite Frontend UI
├── docs/                           # Architectural & API manuals
└── scripts/                        # Utility setup & launch scripts
```

---

## Quick Start Guide

### 1. Clone & Setup Environment
```bash
# Copy environment template
cp .env.example .env
```
*(Refer to [`API_GET.md`](file:///c:/Users/ThisIsAnil/OneDrive/Desktop/AniVerse/API_GET.md) for detailed instructions on acquiring keys for `.env`)*

### 2. Launching via Docker Compose (Recommended)
```bash
chmod +x scripts/setup.sh scripts/start.sh scripts/stop.sh

# Run automated setup
./scripts/setup.sh

# Launch all services
./scripts/start.sh
```

### 3. Local Development Mode

#### Node.js Backend Gateway (Port 5000)
```bash
cd backend
npm install
npm run seed  # Seed initial admin & sample data
npm run dev
```

#### Python Flask AI Service (Port 5001)
```bash
cd ai-service
python -m venv venv
source venv/bin/activate  # Or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app/create_app.py
```

#### React Frontend Application (Port 3000)
```bash
cd frontend
npm install
npm run dev
```

---

## Verification & Testing
- Backend Gateway Tests: `cd backend && npm test`
- AI Microservice Tests: `cd ai-service && pytest`

---

## Documentation Links
- [API Key Acquisition Guide](file:///c:/Users/ThisIsAnil/OneDrive/Desktop/AniVerse/API_GET.md)
- [Architecture Guide](file:///c:/Users/ThisIsAnil/OneDrive/Desktop/AniVerse/docs/ARCHITECTURE.md)
- [API Reference Manual](file:///c:/Users/ThisIsAnil/OneDrive/Desktop/AniVerse/docs/API_GUIDE.md)
- [Database Schema Guide](file:///c:/Users/ThisIsAnil/OneDrive/Desktop/AniVerse/docs/DATABASE.md)
- [Security & Compliance Guide](file:///c:/Users/ThisIsAnil/OneDrive/Desktop/AniVerse/docs/SECURITY.md)
- [AI Microservice & RAG Guide](file:///c:/Users/ThisIsAnil/OneDrive/Desktop/AniVerse/docs/AI_GUIDE.md)
