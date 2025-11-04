// src/components/HeroSection.js
import React, { memo } from 'react';
import { Section } from './Reusable';

const HeroSection = memo(() => (
  <Section id="home" className="py-12 md:py-24">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-xl md:text-2xl text-green-500 font-mono mb-2 animate-slide-in-left text-glow-green">
        Melvin Ragusa | Inhaber & Webentwickler
      </h2>
      <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4 leading-tight animate-scale-in text-glow-green-intense">
        React & Shopify Entwicklung, Automatisierung
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-slide-in-right">
       Ihr Experte für Maßgeschneiderte Web-Applikationen und performante Online-Shops
      </p>
      <div className="text-center animate-fade-in">
        <a href="#services" className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-110 duration-300 inline-block glow-green-intense hover:animate-glow cursor-none">
          Meine Leistungen entdecken
        </a>
      </div>
    </div>
  </Section>
));

export default HeroSection;
