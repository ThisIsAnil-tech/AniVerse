#!/bin/bash
echo "=== Starting AniVerse Enterprise AI Portfolio Platform Services ==="
docker-compose up -d
echo "Services launched via Docker Compose!"
echo "Node.js Backend Gateway running at: http://localhost:5000"
echo "Flask AI Service running at: http://localhost:5001"
