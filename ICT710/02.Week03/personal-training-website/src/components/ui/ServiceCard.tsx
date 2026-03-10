import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    price: string;
    icon: React.ReactNode;
    lang: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, icon, lang }) => {
    return (
        <div className="group bg-white dark:bg-brand-blue-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100 dark:border-brand-blue-700 hover:-translate-y-2 flex flex-col h-full">
            <div className="w-16 h-16 rounded-xl bg-brand-orange-50 dark:bg-brand-blue-900 flex items-center justify-center text-brand-orange-500 mb-6 group-hover:scale-110 group-hover:bg-brand-orange-500 group-hover:text-white transition-all duration-300">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-brand-blue-900 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{description}</p>
            <div className="flex items-end justify-between mt-auto pt-6 border-t border-gray-100 dark:border-brand-blue-700">
                <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">Starting from</span>
                    <span className="text-2xl font-bold text-brand-green-500">{price}</span>
                </div>
                <Link
                    href={`/${lang}/contact`}
                    className="px-5 py-2.5 rounded-full bg-brand-blue-50 text-brand-blue-600 font-medium hover:bg-brand-blue-600 hover:text-white transition-colors dark:bg-brand-blue-900 dark:text-brand-blue-300 dark:hover:bg-brand-blue-500 dark:hover:text-white"
                >
                    Book Now
                </Link>
            </div>
        </div>
    );
};
