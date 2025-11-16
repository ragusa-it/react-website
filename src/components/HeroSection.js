// src/components/HeroSection.js
import React, { memo, useState } from 'react';
import { Section } from './Reusable';
import TerminalText from './TerminalText';

const HeroSection = memo(() => {
  const [line1Complete, setLine1Complete] = useState(false);
  const [line2Complete, setLine2Complete] = useState(false);

  return (
    <Section id="home" className="py-12 md:py-24 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Header */}
        <div className="border-4 border-green-500 bg-black p-6 md:p-8 mb-8 shadow-brutal-lg">
          <div className="flex items-center gap-2 mb-4 border-b-2 border-green-500 pb-2">
            <div className="w-3 h-3 bg-red-500"></div>
            <div className="w-3 h-3 bg-yellow-500"></div>
            <div className="w-3 h-3 bg-green-500"></div>
            <span className="font-mono text-green-500 text-sm ml-2">SYSTEM://RAGUSA.IT</span>
          </div>

          <div className="font-mono space-y-2">
            <div className="text-green-500">
              <TerminalText
                text="INITIALIZING SYSTEM..."
                speed={30}
                delay={500}
                prefix=""
                onComplete={() => setLine1Complete(true)}
              />
            </div>
            {line1Complete && (
              <div className="text-green-500">
                <TerminalText
                  text="USER: Melvin Ragusa | STATUS: ONLINE | ROLE: Full-Stack Developer"
                  speed={20}
                  delay={300}
                  prefix=""
                  onComplete={() => setLine2Complete(true)}
                />
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6">
          <h1
            className="glitch-text text-5xl md:text-8xl font-bold text-white mb-6 leading-tight font-mono uppercase tracking-tight text-glow-green-intense"
            data-text="CYBER DEV"
          >
            CYBER DEV
          </h1>

          <div className="border-4 border-white bg-black p-6 shadow-brutal-black-lg max-w-2xl mx-auto">
            <p className="text-lg md:text-2xl text-green-500 font-mono leading-relaxed">
              {'<'} React & Shopify Entwicklung {'/>'}<br />
              {'<'} Web-Applikationen & Automatisierung {'/>'}<br />
              {'<'} Performance & Sicherheit {'/>'}<br />
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8 animate-fade-in">
            <a
              href="#services"
              className="inline-block bg-green-500 text-black font-mono font-bold py-4 px-8 text-lg border-4 border-black shadow-brutal-black-lg hover:shadow-brutal-black transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] uppercase tracking-wider"
            >
              [ EXECUTE: SHOW_SERVICES ]
            </a>
          </div>

          {/* ASCII Art Decoration */}
          <div className="text-green-500 font-mono text-xs md:text-sm opacity-50 mt-8">
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
          </div>
        </div>
      </div>
    </Section>
  );
});

export default HeroSection;
