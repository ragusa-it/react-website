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
        {/* Section Header */}
        <div className="text-center mb-12">
            <div className="inline-block border-4 border-green-500 bg-black px-8 py-4 shadow-brutal-lg">
                <h2 className="text-3xl md:text-5xl font-bold font-mono text-green-500 uppercase tracking-wider">
                    [ PROJECTS.LOG ]
                </h2>
            </div>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {projectsData.map((p, index) => (
                <div
                    key={p.title}
                    className="border-4 border-green-500 bg-black shadow-brutal-lg animate-scale-in overflow-hidden"
                    style={{animationDelay: `${index * 0.15}s`}}
                >
                    {/* Project Header */}
                    <div className="bg-green-500 border-b-4 border-green-500 p-3">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-black"></div>
                            <div className="w-3 h-3 bg-black"></div>
                            <div className="w-3 h-3 bg-black"></div>
                            <span className="font-mono font-bold text-black text-sm ml-2">
                                PROJECT_{String(index + 1).padStart(2, '0')}.HTML
                            </span>
                        </div>
                    </div>

                    {/* Image Container */}
                    <div className="border-b-4 border-green-500 bg-black p-4">
                        <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Link zu ${p.title}`}
                            className="block border-4 border-white shadow-brutal-black-lg overflow-hidden group"
                        >
                            <LazyImage
                                src={p.imgSrc}
                                alt={p.title}
                                className="w-full h-64 md:h-80 object-contain bg-black group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </a>
                    </div>

                    {/* Content */}
                    <div className="p-6 font-mono">
                        {/* Title as command */}
                        <div className="mb-4">
                            <span className="text-green-500">root@portfolio:~$</span>{' '}
                            <span className="text-white">cat project_info.txt</span>
                        </div>

                        <div className="border-l-4 border-green-500 pl-4 space-y-3">
                            <h3
                                className="glitch-text text-lg font-bold text-white"
                                data-text={p.title.toUpperCase()}
                            >
                                {p.title.toUpperCase()}
                            </h3>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                <span className="text-green-500">//</span> {p.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {p.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="bg-green-500 text-black font-bold text-xs px-3 py-1 border-2 border-black"
                                    >
                                        #{tag.toUpperCase()}
                                    </span>
                                ))}
                            </div>

                            {/* Link */}
                            <div className="pt-3">
                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-black border-2 border-green-500 text-green-500 px-4 py-2 text-xs hover:bg-green-500 hover:text-black transition-all"
                                >
                                    [ VIEW_PROJECT ]
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Section>
));

export default PortfolioSection;
