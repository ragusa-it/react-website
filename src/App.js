// src/App.js
import React, { useState, useCallback, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import FancyCursor from './components/FancyCursor';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ImpressumModal from './components/ImpressumModal';
import MatrixRain from './components/MatrixRain';
import CRTOverlay from './components/CRTOverlay';
import { LoaderCircle } from 'lucide-react';

// Lazy-load components
const AboutSection = React.lazy(() => import('./components/AboutSection'));
const ServicesSection = React.lazy(() => import('./components/ServicesSection'));
const PortfolioSection = React.lazy(() => import('./components/PortfolioSection'));
const TestimonialsSection = React.lazy(() => import('./components/TestimonialsSection'));
const ContactSection = React.lazy(() => import('./components/ContactSection'));

// Fallback component for Suspense
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen bg-black">
    <LoaderCircle className="animate-spin text-green-500 glow-green" size={48} />
  </div>
);

export default function App() {
  const [impressumVisible, setImpressumVisible] = useState(false);
  const openImpressum = useCallback(() => setImpressumVisible(true), []);
  const closeImpressum = useCallback(() => setImpressumVisible(false), []);

  return (
    <ThemeProvider>
      <div className="text-gray-300 font-sans leading-relaxed tracking-wide bg-black min-h-screen overflow-x-hidden">
        {/* Matrix Rain Background */}
        <MatrixRain />

        {/* CRT Monitor Effects */}
        <CRTOverlay />

        {/* Fancy Cursor */}
        <FancyCursor />

        {/* Main Content */}
        <Suspense fallback={<LoadingFallback />}>
          <div className="relative z-10">
            <Header />
            <main className="container mx-auto px-6">
              <HeroSection />
              <AboutSection />
              <ServicesSection />
              <PortfolioSection />
              <TestimonialsSection />
              <ContactSection />
            </main>
            <Footer onImpressumClick={openImpressum} />
          </div>
        </Suspense>

        {/* Impressum Modal */}
        {impressumVisible && <ImpressumModal onClose={closeImpressum} />}
      </div>
    </ThemeProvider>
  );
}
