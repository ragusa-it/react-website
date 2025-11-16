// src/components/ServicesSection.js
import React, { memo } from "react";
import { ShoppingCart, Code, Zap } from "lucide-react";
import { Section } from './Reusable';

const servicesData = [
    {
        icon: Code,
        title: "WEBENTWICKLUNG",
        cmd: "init_webapp.sh",
        description: "Maßgeschneiderte Web-Applikationen mit React und Tailwind CSS. Modern, performant und perfekt auf Ihre individuellen Anforderungen zugeschnitten.",
        hex: "0x01"
    },
    {
        icon: ShoppingCart,
        title: "SHOPIFY_SETUP",
        cmd: "deploy_shop.sh",
        description: "Professionelles Setup und Optimierung Ihres Shopify Stores. Von der Konfiguration bis zum individuellen Theme – für einen erfolgreichen E-Commerce-Start.",
        hex: "0x02"
    },
    {
        icon: Zap,
        title: "AUTOMATISIERUNG",
        cmd: "automate_flow.sh",
        description: "Leistungsstarke Automatisierung von Workflows und Geschäftsprozessen zur Steigerung der Produktivität und Reduzierung des manuellen Aufwands.",
        hex: "0x03"
    }
];

const ServicesSection = memo(() => (
    <Section id="services">
        {/* Section Header */}
        <div className="text-center mb-12">
            <div className="inline-block border-4 border-green-500 bg-black px-8 py-4 shadow-brutal-lg">
                <h2 className="text-3xl md:text-5xl font-bold font-mono text-green-500 uppercase tracking-wider">
                    [ SERVICES.EXE ]
                </h2>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
                const Icon = service.icon;
                return (
                    <div
                        key={service.title}
                        className="brutal-card p-6 animate-scale-in scan-effect"
                        style={{animationDelay: `${index * 0.1}s`}}
                    >
                        {/* Service Header */}
                        <div className="border-b-2 border-green-500 pb-3 mb-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-mono text-xs text-green-500">{service.hex}</span>
                                <Icon size={32} className="text-green-500" />
                            </div>
                            <h3 className="text-xl font-mono font-bold text-white">
                                {service.title}
                            </h3>
                        </div>

                        {/* Command Line */}
                        <div className="mb-4 font-mono text-sm text-green-500 bg-black/50 border-2 border-green-500/30 p-2">
                            $ ./{service.cmd}
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm leading-relaxed font-mono">
                            <span className="text-green-500">{'>'}</span> {service.description}
                        </p>

                        {/* Status Indicator */}
                        <div className="mt-4 pt-4 border-t-2 border-green-500/30">
                            <div className="flex items-center gap-2 font-mono text-xs text-green-500">
                                <span className="w-2 h-2 bg-green-500 animate-pulse"></span>
                                STATUS: READY
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* Footer ASCII */}
        <div className="text-center mt-12 font-mono text-green-500 text-xs opacity-30">
          ████████████████████████████████████████████████████████
        </div>
    </Section>
));

export default ServicesSection;
