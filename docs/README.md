# AniVerse Enterprise AI-Powered Portfolio Platform

AniVerse is a high-performance, enterprise-grade AI portfolio & content management platform built using a microservices architecture.

## Platform Features
- **Personal Portfolio Website & Blog CMS**: 25+ dynamic portfolio content modules (Projects, Blogs, Skills, Experience, Research, Patents, Awards).
- **Node.js API Gateway**: Centralized JWT Authentication, Role-Based Access Control, Rate Limiting, File Manager, Universal Search, and Analytics.
- **Python Flask AI Microservice**: RAG Pipeline powered by ChromaDB vector store and local Ollama Mistral LLM model for domain-specific assistant capabilities.
- **Provider Pattern**: Abstracted storage (Cloudinary, MEGA, Mock), email (Resend, Brevo, Mock), AI, Caching (Redis, Memory), and Queuing (Bull, InMemory).
- **Enterprise Security**: Helmet headers, CORS policies, XSS/NoSQL injection prevention, bcrypt password hashing (12 rounds).

## Microservice Architecture
`React Frontend -> Node.js Express Gateway (Port 5000) -> Python Flask AI Microservice (Port 5001) -> ChromaDB & Ollama`

> **Note:** The frontend never communicates directly with Flask. Every request passes through the Node.js API Gateway.

## Quick Start Guide
```bash
# Clone the repository
git clone https://github.com/your-username/aniverse-portfolio.git
cd aniverse-portfolio

# Copy environment template
cp .env.example .env

# Run setup script
chmod +x scripts/setup.sh scripts/start.sh scripts/stop.sh
./scripts/setup.sh

# Launch platform via Docker Compose
./scripts/start.sh
```

## Running Tests
- Backend Tests: `cd backend && npm test`
- Flask AI Tests: `cd ai-service && pytest`
