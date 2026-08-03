const API_BASE_URL = '/api/v1';

async function fetchJson(endpoint, options = {}) {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(`[API Error] ${endpoint}:`, err);
    return { success: false, error: err.message };
  }
}

export const api = {
  // CMS Content Modules
  getContent: (moduleName) => fetchJson(`/content/${moduleName}`),
  
  // Universal Search
  search: (query) => fetchJson(`/search?q=${encodeURIComponent(query)}`),
  getSearchSuggestions: (query) => fetchJson(`/search/suggestions?q=${encodeURIComponent(query)}`),

  // AI Assistant Chatbot
  askAI: (prompt, sessionId) => fetchJson('/ai/chat', {
    method: 'POST',
    body: JSON.stringify({ prompt, sessionId }),
  }),
  getAIHealth: () => fetchJson('/ai/health'),

  // Subscriptions
  subscribe: (email, name) => fetchJson('/subscribers', {
    method: 'POST',
    body: JSON.stringify({ email, name }),
  }),

  // Analytics Overview
  getDashboardAnalytics: () => fetchJson('/analytics/dashboard'),

  // System Settings
  getSettings: () => fetchJson('/settings'),
};
