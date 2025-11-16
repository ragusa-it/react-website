import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const debounce = (func, delay) => {
            let timeout;
            return (...args) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), delay);
            };
        };
        
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        const debouncedHandleScroll = debounce(handleScroll, 50);

        window.addEventListener('scroll', debouncedHandleScroll);
        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
        };
    }, []);

    const headerClass = isScrolled
        ? 'bg-black border-b-4 border-green-500'
        : 'bg-black/80 border-b-2 border-green-500/50';

    const navLinkClass = "text-green-500 hover:text-white hover:bg-green-500 hover:bg-opacity-20 px-3 py-2 border-2 border-transparent hover:border-green-500 transition-all duration-200 font-mono uppercase text-sm tracking-wider";

    return (
        <header className={`sticky top-0 z-50 transition-all duration-200 ${headerClass}`}>
            <div className="container mx-auto flex justify-between items-center p-4 max-w-7xl">
                {/* Logo/Brand */}
                <a href="#home" className="overflow-hidden group">
                    <div className="border-2 border-green-500 bg-black p-2 group-hover:border-white transition-all">
                        <img
                            src="/logo.svg"
                            alt="Ragusa IT-Consulting Logo"
                            className="h-10 w-auto transition-transform duration-300 ease-in-out group-hover:scale-110"
                            onError={(e) => {
                                e.currentTarget.src = 'https://placehold.co/160x40/000000/22c55e?text=RAGUSA.IT&font=monospace';
                                e.currentTarget.onerror = null;
                            }}
                        />
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-2">
                    <a href="#about" className={navLinkClass}>ABOUT</a>
                    <a href="#services" className={navLinkClass}>SERVICES</a>
                    <a href="#portfolio" className={navLinkClass}>PROJECTS</a>
                    <a href="#testimonials" className={navLinkClass}>REVIEWS</a>
                    <a href="#contact" className={navLinkClass}>CONTACT</a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`transition-all duration-300 ease-in-out overflow-hidden md:hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="bg-black border-t-2 border-green-500">
                    <nav className="flex flex-col p-4 space-y-2">
                        <a
                            href="#about"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-green-500 hover:bg-green-500 hover:text-black px-4 py-3 border-2 border-green-500 font-mono uppercase text-sm tracking-wider transition-all"
                        >
                            ABOUT
                        </a>
                        <a
                            href="#services"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-green-500 hover:bg-green-500 hover:text-black px-4 py-3 border-2 border-green-500 font-mono uppercase text-sm tracking-wider transition-all"
                        >
                            SERVICES
                        </a>
                        <a
                            href="#portfolio"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-green-500 hover:bg-green-500 hover:text-black px-4 py-3 border-2 border-green-500 font-mono uppercase text-sm tracking-wider transition-all"
                        >
                            PROJECTS
                        </a>
                        <a
                            href="#testimonials"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-green-500 hover:bg-green-500 hover:text-black px-4 py-3 border-2 border-green-500 font-mono uppercase text-sm tracking-wider transition-all"
                        >
                            REVIEWS
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-green-500 hover:bg-green-500 hover:text-black px-4 py-3 border-2 border-green-500 font-mono uppercase text-sm tracking-wider transition-all"
                        >
                            CONTACT
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;