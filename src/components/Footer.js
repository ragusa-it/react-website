// src/components/Footer.js
import React, { memo } from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = memo(({ onImpressumClick }) => {
    const githubUrl = 'https://github.com/ragusa-it';

    return (
        <footer className="bg-black border-t-4 border-green-500 relative z-10">
            <div className="container mx-auto py-8 px-6">
                {/* Terminal Footer Header */}
                <div className="border-b-2 border-green-500 pb-4 mb-6">
                    <div className="font-mono text-green-500 text-sm">
                        <span className="text-white">root@ragusa:~$</span> cat footer.txt
                    </div>
                </div>

                {/* Footer Content */}
                <div className="grid md:grid-cols-3 gap-6 font-mono text-sm">
                    {/* System Info */}
                    <div className="border-l-4 border-green-500 pl-4">
                        <div className="text-green-500 mb-2 uppercase font-bold">[ SYSTEM_INFO ]</div>
                        <div className="text-gray-400 space-y-1">
                            <div>VERSION: 2.0.0</div>
                            <div>BUILD: {new Date().getFullYear()}</div>
                            <div>STATUS: <span className="text-green-500 animate-pulse">ONLINE</span></div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-l-4 border-green-500 pl-4 text-center md:text-left">
                        <div className="text-green-500 mb-2 uppercase font-bold">[ COPYRIGHT ]</div>
                        <div className="text-gray-400">
                            &copy; {new Date().getFullYear()}<br />
                            Melvin Ragusa<br />
                            Ragusa IT-Consulting
                        </div>
                    </div>

                    {/* Links */}
                    <div className="border-l-4 border-green-500 pl-4">
                        <div className="text-green-500 mb-2 uppercase font-bold">[ LINKS ]</div>
                        <div className="space-y-2">
                            <button
                                onClick={onImpressumClick}
                                className="block text-gray-400 hover:text-green-500 hover:bg-green-500 hover:bg-opacity-10 border-2 border-transparent hover:border-green-500 px-2 py-1 transition-all text-left w-full"
                            >
                                {'>'} IMPRESSUM
                            </button>
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="flex items-center gap-2 text-gray-400 hover:text-green-500 hover:bg-green-500 hover:bg-opacity-10 border-2 border-transparent hover:border-green-500 px-2 py-1 transition-all"
                            >
                                <FaGithub size={18} />
                                {'>'} GITHUB
                            </a>
                        </div>
                    </div>
                </div>

                {/* ASCII Art Divider */}
                <div className="text-green-500 font-mono text-xs opacity-20 mt-8 text-center">
                    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                </div>

                {/* Terminal Cursor */}
                <div className="text-green-500 font-mono text-sm mt-4 text-center">
                    <span className="animate-terminal-blink">█</span>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
