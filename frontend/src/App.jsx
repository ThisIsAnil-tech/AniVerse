import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UniversalSearchModal from './components/UniversalSearchModal';
import AIChatDrawer from './components/AIChatDrawer';
import AdminLayout from './components/admin/AdminLayout';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isAdminView, setIsAdminView] = useState(false);

  if (isAdminView) {
    return <AdminLayout onBackToSite={() => setIsAdminView(false)} />;
  }

  return (
    <div className="app-layout">
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)} 
        onToggleAI={() => setIsAIOpen((prev) => !prev)} 
        onToggleAdmin={() => setIsAdminView(true)}
      />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />

      {/* Global Search Overlay Modal */}
      <UniversalSearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      {/* Persistent AI RAG Assistant Drawer */}
      <AIChatDrawer 
        isOpen={isAIOpen} 
        onClose={() => setIsAIOpen(false)} 
      />
    </div>
  );
}
