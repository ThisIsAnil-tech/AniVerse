#!/bin/bash
echo "=== Setting up AniVerse Enterprise AI Portfolio Platform ==="
if [ ! -f .env ]; then
  cp .env.example .env
  echo "Copied .env.example to .env"
fi

echo "Installing Node.js dependencies..."
cd backend && npm install && cd ..

echo "Setting up Python AI microservice virtual environment..."
cd ai-service
python -m venv venv || python3 -m venv venv
source venv/bin/activate || source venv/Scripts/activate
pip install -r requirements.txt
cd ..

echo "=== Setup complete! Execute ./scripts/start.sh to run the project. ==="
