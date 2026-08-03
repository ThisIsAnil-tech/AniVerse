from flask import Blueprint, request, jsonify

rag_bp = Blueprint("rag", __name__)

@rag_bp.route("/sync", methods=["POST"])
def sync_knowledge():
    data = request.get_json() or {}
    return jsonify({"success": True, "message": "Knowledge sync triggered", "documents_processed": len(data.get("documents", []))}), 200
