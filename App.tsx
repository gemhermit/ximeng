
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';

import LandingPage from './components/LandingPage';
import Solutions from './pages/Solutions';
import Cases from './pages/Cases';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Sitemap from './pages/Sitemap';

const gsap = (window as any).gsap;
const ScrollTrigger = (window as any).ScrollTrigger;

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const timer = setTimeout(() => {
        setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative w-full overflow-hidden bg-slate-950 text-white selection:bg-blue-500/30">
        <Cursor />
        <Preloader loading={loading} />
        <ScrollToTop />
        
        {/* Background Ambience - Static blobs for performance */}
        <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-900/10 blur-[100px] rounded-full"></div>
        </div>

        <Navbar />
        
        <main className="relative z-10">
          <Routes>
             <Route path="/" element={<LandingPage />} />
             <Route path="/solutions" element={<Solutions />} />
             <Route path="/cases" element={<Cases />} />
             <Route path="/careers" element={<Careers />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/privacy" element={<Privacy />} />
             <Route path="/terms" element={<Terms />} />
             <Route path="/sitemap" element={<Sitemap />} />
             {/* Catch-all route: Redirects any unknown paths (like /home) back to Landing Page */}
             <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
