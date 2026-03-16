import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles =
        'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
        primary:
            'bg-brand-orange-500 text-white hover:bg-brand-orange-600 hover:shadow-lg focus:ring-brand-orange-500',
        secondary:
            'bg-brand-green-500 text-white hover:bg-brand-green-600 hover:shadow-lg focus:ring-brand-green-500',
        outline:
            'border-2 border-brand-blue-600 text-brand-blue-600 hover:bg-brand-blue-50 focus:ring-brand-blue-600 dark:border-brand-blue-500 dark:text-brand-blue-400 dark:hover:bg-brand-blue-900/50',
        ghost:
            'text-brand-blue-600 hover:bg-brand-blue-50 hover:text-brand-blue-700 focus:ring-brand-blue-600 dark:text-brand-blue-400 dark:hover:bg-brand-blue-900/50',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const widthStyle = fullWidth ? 'w-full' : '';

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
