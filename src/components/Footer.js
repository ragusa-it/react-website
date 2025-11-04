// src/components/Footer.js
import React, { memo } from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = memo(({ onImpressumClick }) => {
    const githubUrl = 'https://github.com/ragusa-it';

    return (
        <footer className="bg-black/80 backdrop-blur-md border-t border-green-500/20 relative z-10">
            <div className="container mx-auto py-6 px-6 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Melvin Ragusa | Ragusa IT-Consulting. Alle Rechte vorbehalten.</p>
                <div className="flex justify-center items-center space-x-6 mt-4">
                    <button onClick={onImpressumClick} className="text-sm hover:text-green-500 underline transition-colors duration-300 cursor-none hover:text-glow-green">
                        Impressum
                    </button>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className="text-gray-400 hover:text-green-500 transition-all duration-300 hover:glow-green"
                    >
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
