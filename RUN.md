# AniVerse Execution & Startup Guide (`RUN.md`)

This guide provides step-by-step instructions for launching all microservices of the **AniVerse AI Portfolio Platform**.

---

## System Requirements

Before running the platform, ensure you have installed:
- **Node.js**: `v20.x` or higher (`node -v`)
- **Python**: `v3.11` or higher (`python --version`)
- **MongoDB**: Community Server `v7.0+` or Docker
- **Ollama**: Downloaded from [ollama.com](https://ollama.com)

---

## Method 1: Docker Compose (Recommended — One Command)

Docker orchestrates all services (`backend`, `ai-service`, `mongodb`, `redis`, and `ollama`) automatically.

```bash
# 1. Start all containerized microservices
docker-compose up -d

# 2. Check running container status
docker-compose ps

# 3. Seed initial admin account and sample portfolio content
cd backend && npm run seed
```

### Access Points:
- **React Frontend**: `http://localhost:3000`
- **Node.js API Gateway**: `http://localhost:5000`
- **Python Flask AI Microservice**: `http://localhost:5001`

*(To stop all containers: `docker-compose down` or `./scripts/stop.sh`)*

---

## Method 2: Local Development (Separate Terminals)

Run each service locally in its own terminal window.

### Step 1: Start MongoDB
Ensure your local MongoDB service is running on port `27017` (or use Docker: `docker run -d -p 27017:27017 mongo:7.0`).

---

### Step 2: Node.js Backend API Gateway (Port 5000)

Open **Terminal 1**:
```powershell
cd C:\Users\ThisIsAnil\OneDrive\Desktop\AniVerse\backend

# Install dependencies (if not already installed)
npm install

# Seed initial admin & sample projects into MongoDB
npm run seed

# Start API Gateway dev server
npm run dev
```
*Output:* `[Server] AniVerse AI Portfolio Platform listening on port 5000`

---

### Step 3: React + Vite Frontend UI (Port 3000)

Open **Terminal 2**:
```powershell
cd C:\Users\ThisIsAnil\OneDrive\Desktop\AniVerse\frontend

# Install dependencies (if not already installed)
npm install

# Start Vite React dev server
npm run dev
```
*Output:* `Vite dev server running at http://localhost:3000`

---

### Step 4: Python Flask AI Microservice (Port 5001)

Open **Terminal 3**:
```powershell
cd C:\Users\ThisIsAnil\OneDrive\Desktop\AniVerse\ai-service

# Create virtual environment (first time only)
python -m venv venv

# Activate virtual environment
# On Windows PowerShell:
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

# Install Python requirements
pip install -r requirements.txt

# Start Flask AI Microservice
python app/create_app.py
```
*Output:* `[AI Microservice] Flask server listening on http://0.0.0.0:5001`

---

### Step 5: Ollama Local LLM (Port 11434)

Ollama runs automatically as a background service on Windows when installed.

To verify Ollama:
Open **Terminal 4**:
```powershell
# Verify Mistral model is downloaded
ollama list

# If mistral is not listed, pull it:
ollama pull mistral
```

---

## Verification & Testing Checklist

Once all services are running:

1. **Open Frontend**: Navigate to `http://localhost:3000` in your web browser.
2. **Test Universal Search**: Click the search icon in the navigation bar to search across portfolio items.
3. **Test RAG AI Chatbot**: Click the **AI Assistant** button in the top header and type a question (e.g., *"What are Anil's skills?"*).
4. **Backend Health Check**: Open `http://localhost:5000/health`.
5. **AI Microservice Health Check**: Open `http://localhost:5001/health`.

---

## Troubleshooting Guide

| Issue | Solution |
| :--- | :--- |
| `ImportError: attempted relative import...` | Make sure you run `python app/create_app.py` directly from inside the `ai-service` directory. |
| `Error: listen tcp 127.0.0.1:11434` | Ollama is already running in the background! You do not need to run `ollama serve` again. |
| `source : The term 'source' is not recognized` | `source` is a Linux command. On Windows PowerShell, use `.\venv\Scripts\activate` to activate Python virtual environment. |
| `MongoDB connection refused` | Ensure MongoDB is running on port 27017 (`net start MongoDB` on Windows or `docker run -d -p 27017:27017 mongo:7.0`). |
