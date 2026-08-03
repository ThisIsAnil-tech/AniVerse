import sys
import os

# Add parent directory to sys.path for direct execution
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

try:
    from app.config import Config
    from app.blueprints.health.routes import health_bp
    from app.blueprints.assistant.routes import assistant_bp
    from app.blueprints.rag.routes import rag_bp
except ImportError:
    from config import Config
    from blueprints.health.routes import health_bp
    from blueprints.assistant.routes import assistant_bp
    from blueprints.rag.routes import rag_bp

from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    app.register_blueprint(health_bp)
    app.register_blueprint(assistant_bp, url_prefix="/assistant")
    app.register_blueprint(rag_bp, url_prefix="/rag")

    return app

if __name__ == "__main__":
    app = create_app()
    print("[AI Microservice] Flask server listening on http://0.0.0.0:5001")
    app.run(host="0.0.0.0", port=5001, debug=True)
