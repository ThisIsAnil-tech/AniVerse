from flask import Blueprint, jsonify

health_bp = Blueprint("health", __name__)

@health_bp.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "UP", "service": "AniVerse AI Microservice"}), 200

@health_bp.route("/ready", methods=["GET"])
def ready():
    return jsonify({"status": "READY"}), 200

@health_bp.route("/live", methods=["GET"])
def live():
    return jsonify({"status": "ALIVE"}), 200
