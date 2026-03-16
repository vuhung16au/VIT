'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface FloatingNavProps {
    lang: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ lang }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: `/${lang}` },
        { name: 'Services', href: `/${lang}/services` },
        { name: 'Testimonials', href: `/${lang}/testimonials` },
        { name: 'Contact', href: `/${lang}/contact` },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
                    ? 'py-4 bg-white/80 dark:bg-brand-blue-900/80 backdrop-blur-md shadow-md'
                    : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link
                    href={`/${lang}`}
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-orange-500 to-brand-orange-600"
                >
                    Energetic Fit
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-brand-blue-900 dark:text-gray-100 font-medium hover:text-brand-orange-500 dark:hover:text-brand-orange-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={`/${lang}/contact`}
                        className="px-6 py-2 rounded-full bg-brand-orange-500 text-white font-medium hover:bg-brand-orange-600 hover:-translate-y-1 transition-all duration-300 shadow-md"
                    >
                        Book Now
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-brand-blue-900 dark:text-gray-100 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-brand-blue-900 shadow-lg py-4 px-6 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg text-brand-blue-900 dark:text-gray-100 font-medium hover:text-brand-orange-500"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={`/${lang}/contact`}
                        className="text-center px-6 py-3 rounded-full bg-brand-orange-500 text-white font-medium shadow-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Book Now
                    </Link>
                </div>
            )}
        </header>
    );
};
