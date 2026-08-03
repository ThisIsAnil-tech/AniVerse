# Complete Guide: Obtaining All API Keys & Environment Variables

This document provides a step-by-step guide to acquiring and setting up all credentials and API keys in your `.env` file for the AniVerse AI Portfolio Platform.

---

## Environment Variable Overview

Your `.env` file contains variables for database connections, security secrets, storage providers, email dispatchers, and local LLM microservices.

```env
# Node.js API Gateway Configuration
PORT=5000
NODE_ENV=development
APP_NAME="AniVerse AI Portfolio Platform"
API_PREFIX=/api/v1
CORS_ORIGIN=*

# MongoDB Database Connection
MONGODB_URI=mongodb://localhost:27017/portfolio_db

# Authentication (JWT)
JWT_SECRET=super_secret_jwt_key_enterprise_portfolio_2026_change_in_prod
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=super_secret_refresh_jwt_key_enterprise_portfolio_2026
JWT_REFRESH_EXPIRES_IN=7d
ADMIN_INITIAL_EMAIL=admin@aniverse.io
ADMIN_INITIAL_PASSWORD=AdminSecurePassword123!

# Caching & Queue System
REDIS_URL=redis://localhost:6379
CACHE_DRIVER=memory # Options: memory, redis
QUEUE_DRIVER=memory # Options: memory, bull

# Storage Services
STORAGE_PROVIDER=mock # Options: mock, cloudinary, mega
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

MEGA_EMAIL=your_mega_email@domain.com
MEGA_PASSWORD=your_mega_password

# Email Dispatcher
EMAIL_PROVIDER=mock # Options: mock, resend, brevo
RESEND_API_KEY=re_123456789
BREVO_API_KEY=xkeysib-123456789
EMAIL_FROM="Portfolio Notifications <noreply@aniverse.io>"

# Python AI Microservice Integration
AI_SERVICE_URL=http://localhost:5001
AI_SERVICE_API_KEY=ai_service_internal_secret_key_2026

# Ollama local LLM settings
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=mistral:latest
```

---

## 1. MongoDB Database Connection (`MONGODB_URI`)

### Option A: Local MongoDB (Default)
If running MongoDB locally or via Docker Compose, use:
```env
MONGODB_URI=mongodb://localhost:27017/portfolio_db
```

### Option B: MongoDB Atlas (Cloud Database - Free)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and create a free account.
2. Build a **Free Shared Cluster (M0)**.
3. Under **Database Access**, create a database user and password.
4. Under **Network Access**, add `0.0.0.0/0` (allow access from anywhere).
5. Click **Connect** → **Drivers** and copy your connection string:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio_db?retryWrites=true&w=majority
```

---

## 2. JWT Secrets (`JWT_SECRET` & `JWT_REFRESH_SECRET`)

To generate strong random 256-bit secrets for production:

### Using Node.js CLI:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Copy the generated random strings into your `.env`:
```env
JWT_SECRET=e4b7c89a01f2...
JWT_REFRESH_SECRET=a8f9d3b1e2c4...
```

---

## 3. Cloudinary Image Storage (`CLOUDINARY_*`)

Cloudinary is used for optimizing and hosting profile pictures, project covers, and logos.

1. Sign up for a free account at [Cloudinary Sign Up](https://cloudinary.com/users/register_free).
2. Go to your **Cloudinary Dashboard**.
3. Copy the following credentials:
   - **Cloud Name** -> `CLOUDINARY_CLOUD_NAME`
   - **API Key** -> `CLOUDINARY_API_KEY`
   - **API Secret** -> `CLOUDINARY_API_SECRET`
4. Set provider in `.env`:
```env
STORAGE_PROVIDER=cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=1234567890
CLOUDINARY_API_SECRET=abcdefg12345
```
*(Note: If left as `STORAGE_PROVIDER=mock`, the application will simulate uploads without requiring Cloudinary keys)*.

---

## 4. MEGA Document Storage (`MEGA_EMAIL` & `MEGA_PASSWORD`)

MEGA is used for storing large documents, research paper PDFs, and resume archives.

1. Register a free 20GB storage account at [MEGA.nz Sign Up](https://mega.nz/register).
2. Confirm your email address.
3. Put your login credentials in `.env`:
```env
MEGA_EMAIL=your_email@domain.com
MEGA_PASSWORD=your_secure_password
```
*(Note: If left as `STORAGE_PROVIDER=mock`, document storage will run in local mock mode)*.

---

## 5. Resend Email Dispatcher (`RESEND_API_KEY`)

Resend sends transactional emails and newsletter subscription confirmations.

1. Sign up at [Resend.com](https://resend.com/signup).
2. Go to **API Keys** -> Click **Create API Key**.
3. Copy the API key starting with `re_`:
```env
EMAIL_PROVIDER=resend
RESEND_API_KEY=re_123456789abcdef
```

---

## 6. Brevo Email Dispatcher (`BREVO_API_KEY`)

Alternative email provider (formerly Sendinblue).

1. Sign up at [Brevo.com](https://www.brevo.com/).
2. Go to **SMTP & API** -> **API Keys** -> Click **Generate a new API key**.
3. Copy the key starting with `xkeysib-`:
```env
EMAIL_PROVIDER=brevo
BREVO_API_KEY=xkeysib-123456789abcdef
```
*(Note: If left as `EMAIL_PROVIDER=mock`, emails will print to the backend console without sending real network requests)*.

---

## 7. Ollama Local LLM (`OLLAMA_BASE_URL` & `OLLAMA_MODEL`)

Ollama runs the local AI model (Mistral or Llama) for the RAG Portfolio Chatbot without any external API costs.

1. Download & install Ollama from [Ollama.com](https://ollama.com/download).
2. Open your terminal and pull the Mistral model:
```bash
ollama pull mistral
```
3. Start the local Ollama server:
```bash
ollama serve
```
4. Verify your `.env` configuration:
```env
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=mistral:latest
```

---

## Summary Matrix

| Variable | Provider | Cost | Requirement | Mock Fallback |
| :--- | :--- | :--- | :--- | :--- |
| `MONGODB_URI` | MongoDB / Atlas | Free | Required | No |
| `JWT_SECRET` | System Generated | Free | Required | Yes (Default in dev) |
| `CLOUDINARY_*` | Cloudinary | Free Tier | Optional | Yes (`STORAGE_PROVIDER=mock`) |
| `MEGA_*` | MEGA.nz | Free 20GB | Optional | Yes (`STORAGE_PROVIDER=mock`) |
| `RESEND_API_KEY` | Resend.com | Free Tier | Optional | Yes (`EMAIL_PROVIDER=mock`) |
| `BREVO_API_KEY` | Brevo.com | Free Tier | Optional | Yes (`EMAIL_PROVIDER=mock`) |
| `OLLAMA_*` | Local Ollama | 100% Free | Required for AI | Yes (Fallback responses) |
