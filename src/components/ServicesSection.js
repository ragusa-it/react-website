// src/components/ServicesSection.js
import React, { memo } from "react";
import { ShoppingCart, Code, Zap } from "lucide-react";
import { Section, SectionCard } from './Reusable';

const servicesData = [
    { icon: Code, title: "Webentwicklung", description: "Maßgeschneiderte Web-Applikationen mit React und Tailwind CSS. Modern, performant und perfekt auf Ihre individuellen Anforderungen zugeschnitten." },
    { icon: ShoppingCart, title: "Shopify Store Setup", description: "Professionelles Setup und Optimierung Ihres Shopify Stores. Von der Konfiguration bis zum individuellen Theme – für einen erfolgreichen E-Commerce-Start." },
    { icon: Zap, title: "Automatisierung", description: "Leistungsstarke Automatisierung von Workflows und Geschäftsprozessen zur Steigerung der Produktivität und Reduzierung des manuellen Aufwands." }
];

const ServicesSection = memo(() => (
    <Section id="services">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 text-glow-green animate-slide-up">Meine Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
                const Icon = service.icon;
                return (
                    <SectionCard key={service.title} className="max-w-5xl !p-8 flex flex-col items-center text-center animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                        <Icon size={40} className="text-green-500 mb-4 glow-green animate-float" style={{animationDelay: `${index * 0.2}s`}} />
                        <h3 className="text-2xl font-bold text-white mb-3 text-glow-green">{service.title}</h3>
                        <p className="text-gray-300">{service.description}</p>
                    </SectionCard>
                );
            })}
        </div>
    </Section>
));

export default ServicesSection;
