import React from 'react';

interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    rating?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, rating = 5 }) => {
    return (
        <div className="bg-white dark:bg-brand-blue-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-brand-blue-700 relative">
            <div className="text-brand-orange-500 absolute top-8 right-8 opacity-20 hover:opacity-100 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
            </div>

            <div className="flex mb-4 space-x-1">
                {[...Array(rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-brand-orange-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-8 italic relative z-10">"{content}"</p>

            <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 dark:bg-brand-blue-700 rounded-full flex items-center justify-center text-brand-blue-900 dark:text-white font-bold text-lg mr-4">
                    {name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-brand-blue-900 dark:text-white">{name}</h4>
                    <span className="text-sm text-brand-green-500 font-medium">{role}</span>
                </div>
            </div>
        </div>
    );
};
