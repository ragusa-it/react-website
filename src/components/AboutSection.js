// src/components/AboutSection.js
import React, { memo } from 'react';
import { Section } from './Reusable';
import profilePicture from '../images/profile-picture.webp';

const AboutSection = memo(() => (
    <Section id="about">
        <div className="max-w-5xl mx-auto border-4 border-green-500 bg-black shadow-brutal-lg animate-fade-in">
            {/* Terminal Title Bar */}
            <div className="border-b-4 border-green-500 p-4 bg-green-500">
                <h2 className="text-2xl font-mono font-bold text-black uppercase tracking-wider">
                  [ USER_PROFILE.SYS ]
                </h2>
            </div>

            <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    {/* Profile Image Section */}
                    <div className="md:w-1/3">
                        <div className="border-4 border-white bg-black p-2 shadow-brutal-black animate-scale-in">
                            <img
                                src={profilePicture}
                                alt="Melvin Ragusa"
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                loading="lazy"
                            />
                        </div>

                        {/* ID Card Style */}
                        <div className="mt-6 border-2 border-green-500 bg-black p-4 font-mono text-sm">
                            <div className="text-green-500 space-y-1">
                                <div>ID: MR-2024-DEV</div>
                                <div>NAME: Melvin_Ragusa</div>
                                <div>ROLE: Full-Stack_Dev</div>
                                <div>LOC: Dortmund_DE</div>
                                <div>STATUS: <span className="animate-pulse">● ACTIVE</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Terminal Content */}
                    <div className="md:w-2/3 font-mono">
                        <div className="space-y-4">
                            {/* Command Prompt Header */}
                            <div className="text-green-500 mb-6">
                                <span className="text-white">root@ragusa:~$</span> cat about.txt
                            </div>

                            {/* Bio Content in Terminal Style */}
                            <div className="border-l-4 border-green-500 pl-4 space-y-4 text-gray-300">
                                <p className="leading-relaxed">
                                  <span className="text-green-500">//</span> Als freiberuflicher Entwickler aus Dortmund realisiere ich performante Web-Applikationen mit React und umsatzstarke Shopify Stores.
                                </p>

                                <p className="leading-relaxed">
                                  <span className="text-green-500">//</span> Mein Ziel: Ihre Marke perfekt präsentieren, Prozesse optimieren und Ihren digitalen Erfolg nachhaltig steigern.
                                </p>

                                <div className="pt-4 border-t-2 border-green-500/30">
                                  <div className="text-green-500 mb-2">CORE_COMPETENCIES:</div>
                                  <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div>▸ React.js Development</div>
                                    <div>▸ Shopify E-Commerce</div>
                                    <div>▸ Web Automation</div>
                                    <div>▸ Performance Optimization</div>
                                  </div>
                                </div>
                            </div>

                            {/* Blinking Cursor */}
                            <div className="text-green-500">
                                <span className="animate-terminal-blink">█</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
));

export default AboutSection;
