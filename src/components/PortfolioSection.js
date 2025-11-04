// src/components/PortfolioSection.js
import React, { memo, useState, useRef, useEffect } from "react";
import { Section, SectionCard } from './Reusable';
import studio31Img from "../images/Studio31.webp";

const projectsData = [
    { title: "Digitale Präsenz für ein Kreativstudio", description: "Entwicklung der Website für ein Kreativstudio, um die Kernbereiche Sound, Visuals, Web3 und Marketing überzeugend darzustellen.", imgSrc: studio31Img, tags: ["React", "Webentwicklung"], link: "https://studio31.xyz/" }
];

// Optimized LazyImage component with intersection observer
const LazyImage = memo(({ src, alt, className, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={imgRef} className={className}>
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    onLoad={() => setIsLoaded(true)}
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.3s ease'
                    }}
                    {...props}
                />
            )}
        </div>
    );
});

const PortfolioSection = memo(() => (
    <Section id="portfolio">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 text-glow-green animate-slide-up">Meine Arbeiten</h2>
        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {projectsData.map((p, index) => (
                <SectionCard key={p.title} className="flex flex-col animate-scale-in" style={{animationDelay: `${index * 0.15}s`}}>
                    <div className="overflow-hidden rounded-t-lg border-b border-green-500/20 bg-black flex items-center justify-center">
                        <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`Link zu ${p.title}`} className="cursor-none block w-full">
                            <LazyImage
                                src={p.imgSrc}
                                alt={p.title}
                                className="w-full h-64 md:h-80 object-contain hover:scale-110 transition-transform duration-500 cursor-none"
                            />
                        </a>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2 text-glow-green">{p.title}</h3>
                        <p className="text-gray-300 text-sm mb-4 flex-grow">{p.description}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {p.tags.map(tag => <span key={tag} className="bg-green-900/30 border border-green-500/30 text-green-400 text-xs font-mono px-2 py-1 rounded glow-green">{tag}</span>)}
                        </div>
                    </div>
                </SectionCard>
            ))}
        </div>
    </Section>
));

export default PortfolioSection;
