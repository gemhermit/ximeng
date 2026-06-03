import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import Preloader from '@/components/Preloader';
import ScrollToTop from '@/components/ScrollToTop';
import { LanguageProvider } from '@/lib/i18n';

// Lazy load pages for performance optimization
const LandingPage = lazy(() => import('@/components/LandingPage'));
const Solutions = lazy(() => import('@/pages/Solutions'));
const SolutionDetail = lazy(() => import('@/pages/SolutionDetail'));
const Cases = lazy(() => import('@/pages/Cases'));
const CaseDetail = lazy(() => import('@/pages/CaseDetail'));
const Careers = lazy(() => import('@/pages/Careers'));
const JobDetail = lazy(() => import('@/pages/JobDetail'));
const Contact = lazy(() => import('@/pages/Contact'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Terms = lazy(() => import('@/pages/Terms'));
const Sitemap = lazy(() => import('@/pages/Sitemap'));

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const timer = setTimeout(() => {
        setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const routes = (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/solutions/:id" element={<SolutionDetail />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/cases/:slug" element={<CaseDetail />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/careers/:id" element={<JobDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/sitemap" element={<Sitemap />} />

      <Route path="/en" element={<LandingPage />} />
      <Route path="/en/solutions" element={<Solutions />} />
      <Route path="/en/solutions/:id" element={<SolutionDetail />} />
      <Route path="/en/cases" element={<Cases />} />
      <Route path="/en/cases/:slug" element={<CaseDetail />} />
      <Route path="/en/careers" element={<Careers />} />
      <Route path="/en/careers/:id" element={<JobDetail />} />
      <Route path="/en/contact" element={<Contact />} />
      <Route path="/en/privacy" element={<Privacy />} />
      <Route path="/en/terms" element={<Terms />} />
      <Route path="/en/sitemap" element={<Sitemap />} />

      <Route path="/en/*" element={<Navigate to="/en" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      <LanguageProvider>
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
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            {routes}
          </Suspense>
        </main>
        
        <Footer />
      </div>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
