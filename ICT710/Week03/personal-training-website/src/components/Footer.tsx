import React from 'react';
import Link from 'next/link';

interface FooterProps {
    lang: string;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
    return (
        <footer className="bg-brand-blue-900 text-gray-100 mt-20">
            <div className="container mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-orange-500 to-brand-orange-400 mb-4">
                            Energetic Fit
                        </h3>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Empowering you to reach your fitness goals with expert guidance, energized programs, and undeniable results.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Media Links placeholder */}
                            <a href="#" className="w-10 h-10 rounded-full bg-brand-blue-800 flex items-center justify-center hover:bg-brand-orange-500 transition-colors">
                                <span className="sr-only">Facebook</span>
                                FB
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-brand-blue-800 flex items-center justify-center hover:bg-brand-orange-500 transition-colors">
                                <span className="sr-only">Instagram</span>
                                IG
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-brand-blue-800 flex items-center justify-center hover:bg-brand-orange-500 transition-colors">
                                <span className="sr-only">Twitter</span>
                                TW
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-brand-blue-800 flex items-center justify-center hover:bg-brand-orange-500 transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                IN
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href={`/${lang}`} className="text-gray-400 hover:text-brand-orange-500 transition-colors">Home</Link></li>
                            <li><Link href={`/${lang}/services`} className="text-gray-400 hover:text-brand-orange-500 transition-colors">Services</Link></li>
                            <li><Link href={`/${lang}/testimonials`} className="text-gray-400 hover:text-brand-orange-500 transition-colors">Testimonials</Link></li>
                            <li><Link href={`/${lang}/contact`} className="text-gray-400 hover:text-brand-orange-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>123 Fitness Ave, NY 10001</li>
                            <li>info@energeticfit.com</li>
                            <li>+1 (555) 123-4567</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Energetic Fit. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-4">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
