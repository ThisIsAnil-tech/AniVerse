# Operations & Maintenance Manual

## Emergency Backup & Recovery
```bash
# Export MongoDB collection backup
mongodump --uri="mongodb://localhost:27017/portfolio_db" --out=./backups/$(date +%Y%m%d)

# Restore MongoDB database
mongorestore --uri="mongodb://localhost:27017/portfolio_db" ./backups/20260804
```

## System Monitoring Checklist
- **Node.js API Gateway**: `http://localhost:5000/health`
- **Flask AI Service**: `http://localhost:5001/health`
- **Ollama LLM Daemon**: `ollama list` or `http://localhost:11434/api/tags`
