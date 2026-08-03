import requests
from .base import BaseLLMProvider

class OllamaProvider(BaseLLMProvider):
    def __init__(self, base_url: str, model_name: str):
        self.base_url = base_url
        self.model_name = model_name

    def generate(self, prompt: str, system_prompt: str = None) -> str:
        try:
            payload = {
                "model": self.model_name,
                "prompt": prompt,
                "stream": False
            }
            if system_prompt:
                payload["system"] = system_prompt

            response = requests.post(f"{self.base_url}/api/generate", json=payload, timeout=30)
            if response.status_code == 200:
                return response.json().get("response", "")
            return f"Ollama error status {response.status_code}"
        except Exception as e:
            return f"Ollama fallback response (Connection error: {str(e)})"
