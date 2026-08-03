import React, { useState } from 'react';
import { Bot, Send, Sparkles, X, User } from 'lucide-react';
import { api } from '../services/api';

export default function AIChatDrawer({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    { sender: 'assistant', text: "Hello! I am Anil's AI Portfolio Assistant. Ask me anything about his technical stack, work experience, research papers, or projects!" },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const res = await api.askAI(input);
    const aiText = res.data?.answer || res.answer || "I'm currently operating in offline mode. Please ensure the Flask AI microservice is running.";
    const citations = res.data?.citations || [];

    setMessages((prev) => [...prev, { sender: 'assistant', text: aiText, citations }]);
    setLoading(false);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      width: '420px',
      height: '580px',
      zIndex: 300,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
    }} className="glass-panel">
      {/* Header */}
      <div style={{
        padding: '16px 20px',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(0, 242, 254, 0.05)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'var(--primary-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
          }}>
            <Bot size={18} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '700' }}>AniVerse RAG Assistant</h4>
            <span style={{ fontSize: '0.75rem', color: 'var(--primary-accent)', fontWeight: '600' }}>● Powered by Mistral & ChromaDB</span>
          </div>
        </div>
        <button onClick={onClose} style={{ color: 'var(--text-muted)' }}>
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1,
        padding: '16px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            maxWidth: '85%',
            padding: '12px 16px',
            borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
            background: msg.sender === 'user' ? 'var(--secondary-accent)' : 'rgba(255,255,255,0.05)',
            border: msg.sender === 'user' ? 'none' : '1px solid var(--border-color)',
            fontSize: '0.9rem',
            lineHeight: 1.5,
          }}>
            <div>{msg.text}</div>
            {msg.citations && msg.citations.length > 0 && (
              <div style={{ marginTop: '8px', paddingTop: '6px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.75rem', color: 'var(--primary-accent)' }}>
                Sources: {msg.citations.join(', ')}
              </div>
            )}
          </div>
        ))}
        {loading && <div style={{ color: 'var(--text-subtle)', fontSize: '0.85rem' }}>Thinking...</div>}
      </div>

      {/* Input */}
      <form onSubmit={handleSend} style={{
        padding: '12px 16px',
        borderTop: '1px solid var(--border-color)',
        display: 'flex',
        gap: '8px',
      }}>
        <input
          type="text"
          placeholder="Ask a question about Anil..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border-color)',
            borderRadius: '20px',
            padding: '10px 16px',
            color: '#fff',
            outline: 'none',
            fontSize: '0.9rem',
          }}
        />
        <button type="submit" style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          background: 'var(--primary-accent)',
          color: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
