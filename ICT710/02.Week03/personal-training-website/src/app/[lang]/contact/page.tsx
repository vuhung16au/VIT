import { Button } from "@/components/ui/Button";
import React from "react";

export const metadata = {
    title: "Contact Us | Energetic Fit",
    description: "Get in touch with Energetic Fit to start your transformative personal training journey.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen py-16 bg-gray-50 dark:bg-brand-blue-900">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-blue-900 dark:text-white">
                        Let's Get <span className="text-brand-orange-500">Started</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Have questions or ready to book your first session? Fill out the form below or reach out directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="bg-brand-blue-900 text-white p-10 rounded-2xl shadow-xl h-full flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange-500 rounded-full opacity-10 -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-green-500 rounded-full opacity-10 -ml-10 -mb-10 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 mr-4 text-brand-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-bold text-lg">Our Location</h4>
                                        <p className="text-gray-300 mt-1">123 Fitness Ave, Suite 400<br />New York, NY 10001</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 mr-4 text-brand-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-bold text-lg">Email Us</h4>
                                        <p className="text-gray-300 mt-1">info@energeticfit.com</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 mr-4 text-brand-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-bold text-lg">Call Us</h4>
                                        <p className="text-gray-300 mt-1">+1 (555) 123-4567</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-12 relative z-10">
                            <h4 className="font-bold text-lg mb-4">Follow Our Journey</h4>
                            <div className="flex space-x-4">
                                {/* Social Media Links */}
                                <a href="#" className="w-12 h-12 rounded-full bg-brand-blue-800 flex items-center justify-center hover:bg-brand-orange-500 hover:scale-110 transition-all duration-300 shadow-md">FB</a>
                                <a href="#" className="w-12 h-12 rounded-full bg-brand-blue-800 flex items-center justify-center hover:bg-brand-orange-500 hover:scale-110 transition-all duration-300 shadow-md">IG</a>
                                <a href="#" className="w-12 h-12 rounded-full bg-brand-blue-800 flex items-center justify-center hover:bg-brand-orange-500 hover:scale-110 transition-all duration-300 shadow-md">TW</a>
                                <a href="#" className="w-12 h-12 rounded-full bg-brand-blue-800 flex items-center justify-center hover:bg-brand-orange-500 hover:scale-110 transition-all duration-300 shadow-md">IN</a>
                            </div>
                        </div>
                    </div>

                    {/* Booking / Contact Form */}
                    <div className="bg-white dark:bg-brand-blue-800 p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-brand-blue-700">
                        <h2 className="text-3xl font-bold mb-6 text-brand-blue-900 dark:text-white">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-brand-blue-600 bg-white dark:bg-brand-blue-900 text-brand-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange-500 transition-colors" placeholder="John" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-brand-blue-600 bg-white dark:bg-brand-blue-900 text-brand-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange-500 transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-brand-blue-600 bg-white dark:bg-brand-blue-900 text-brand-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange-500 transition-colors" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Service of Interest</label>
                                <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-brand-blue-600 bg-white dark:bg-brand-blue-900 text-brand-blue-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange-500 transition-colors appearance-none cursor-pointer">
                                    <option>Personal Training Sessions</option>
                                    <option>Group Fitness Classes</option>
                                    <option>Online Coaching</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-brand-blue-600 bg-white dark:bg-brand-blue-900 text-brand-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange-500 transition-colors resize-none" placeholder="Tell us about your goals..."></textarea>
                            </div>

                            <Button type="button" fullWidth size="lg">Send Message</Button>
                            <p className="text-center text-sm text-gray-500 mt-4">
                                Prefer to book directly? <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="text-brand-orange-500 font-medium hover:underline">Use our Booking Form</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
