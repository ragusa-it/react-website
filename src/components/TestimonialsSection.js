// src/components/TestimonialsSection.js
import React, { memo } from 'react';
import { Section } from './Reusable';

const testimonialsData = [
    { quote: "Melvin hat unsere kreative Vision perfekt in eine moderne, reaktive Website übersetzt. Die Zusammenarbeit war unkompliziert und das Ergebnis spricht für sich.", name: "Tarek B.", company: "Studio 31 Media", id: "0x4A7B" }
];

const TestimonialsSection = memo(() => (
    <Section id="testimonials">
        {/* Section Header */}
        <div className="text-center mb-12">
            <div className="inline-block border-4 border-green-500 bg-black px-8 py-4 shadow-brutal-lg">
                <h2 className="text-3xl md:text-5xl font-bold font-mono text-green-500 uppercase tracking-wider">
                    [ FEEDBACK.DB ]
                </h2>
            </div>
        </div>

        <div className="max-w-3xl mx-auto">
            {testimonialsData.map((t, index) => (
                <div
                    key={t.name}
                    className="border-4 border-white bg-black shadow-brutal-black-lg p-8 animate-fade-in"
                    style={{animationDelay: `${index * 0.2}s`}}
                >
                    {/* Terminal Header */}
                    <div className="font-mono text-green-500 mb-6 flex items-center justify-between border-b-2 border-green-500 pb-3">
                        <div>
                            <span className="text-white">user@testimonials:~$</span> cat review_{t.id}.txt
                        </div>
                        <span className="text-xs opacity-50">{t.id}</span>
                    </div>

                    {/* Quote */}
                    <div className="mb-6 border-l-4 border-green-500 pl-6">
                        <div className="text-gray-300 font-mono text-base leading-relaxed mb-2">
                            <span className="text-green-500 text-2xl">"</span>
                            {t.quote}
                            <span className="text-green-500 text-2xl">"</span>
                        </div>
                    </div>

                    {/* Attribution */}
                    <div className="flex items-center justify-between pt-4 border-t-2 border-green-500/30">
                        <div className="font-mono">
                            <div className="text-green-500 font-bold">
                                --author: {t.name}
                            </div>
                            <div className="text-gray-400 text-sm">
                                --organization: {t.company}
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="text-green-500 text-xs font-mono">
                                [VERIFIED]
                            </div>
                            <div className="w-3 h-3 bg-green-500 animate-pulse"></div>
                        </div>
                    </div>

                    {/* ASCII Art Divider */}
                    <div className="text-green-500 font-mono text-xs opacity-20 mt-6 text-center">
                        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                    </div>
                </div>
            ))}
        </div>
    </Section>
));

export default TestimonialsSection;
