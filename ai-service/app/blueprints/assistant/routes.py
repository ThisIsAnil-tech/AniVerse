from flask import Blueprint, request, jsonify, current_app

try:
    from app.services.llm.ollama import OllamaProvider
    from app.services.rag.vector_store import VectorStoreService
    from app.services.prompt.orchestrator import PromptOrchestrator
except ImportError:
    from ...services.llm.ollama import OllamaProvider
    from ...services.rag.vector_store import VectorStoreService
    from ...services.prompt.orchestrator import PromptOrchestrator

assistant_bp = Blueprint("assistant", __name__)

@assistant_bp.route("/chat", methods=["POST"])
def chat():
    data = request.get_json() or {}
    prompt = data.get("prompt", "")
    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400

    llm = OllamaProvider(
        base_url=current_app.config["OLLAMA_BASE_URL"],
        model_name=current_app.config["OLLAMA_MODEL"]
    )
    vector_store = VectorStoreService(persist_dir=current_app.config["CHROMA_PERSIST_DIR"])
    orchestrator = PromptOrchestrator(llm, vector_store)

    result = orchestrator.process_query(prompt)
    return jsonify(result), 200
