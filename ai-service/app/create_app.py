from flask import Flask
from .config import Config
from .blueprints.health.routes import health_bp
from .blueprints.assistant.routes import assistant_bp
from .blueprints.rag.routes import rag_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    app.register_blueprint(health_bp)
    app.register_blueprint(assistant_bp, url_prefix="/assistant")
    app.register_blueprint(rag_bp, url_prefix="/rag")

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=5001, debug=True)
