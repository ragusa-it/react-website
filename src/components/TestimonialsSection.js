// src/components/TestimonialsSection.js
import React, { memo } from 'react';
import { Section, SectionCard } from './Reusable';

const testimonialsData = [
    { quote: "Melvin hat unsere kreative Vision perfekt in eine moderne, reaktive Website übersetzt. Die Zusammenarbeit war unkompliziert und das Ergebnis spricht für sich.", name: "Tarek B.", company: "Studio 31 Media" }
];

const TestimonialsSection = memo(() => (
    <Section id="testimonials">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 text-glow-green animate-slide-up">Was meine Kunden sagen</h2>
        <div className="max-w-2xl mx-auto flex justify-center">
            {testimonialsData.map((t, index) => (
                <SectionCard key={t.name} className="w-full !p-6 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                    <p className="text-gray-300 italic text-lg">"{t.quote}"</p>
                    <p className="text-right mt-4 font-bold text-green-500 text-glow-green">- {t.name}, <span className="text-gray-400 font-normal">{t.company}</span></p>
                </SectionCard>
            ))}
        </div>
    </Section>
));

export default TestimonialsSection;
