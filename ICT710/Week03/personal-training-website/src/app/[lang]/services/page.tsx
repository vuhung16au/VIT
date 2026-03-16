import { ServiceCard } from "@/components/ui/ServiceCard";
import React from "react";

export const metadata = {
    title: "Our Services | Energetic Fit",
    description: "Explore our personal training, group fitness, and online coaching services tailored to your goals.",
};

export default async function ServicesPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    return (
        <div className="min-h-screen py-16 bg-gray-50 dark:bg-brand-blue-900">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-blue-900 dark:text-white">
                        Transformative <span className="text-brand-orange-500">Programs</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Choose the path that fits your lifestyle, preferences, and goals. We offer flexible options to ensure your success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <ServiceCard
                        lang={lang}
                        title="Personal Training Sessions"
                        description="One-on-one training sessions tailored exclusively to your individual fitness goals. Get 100% of the coach's attention, custom form correction, and a program built around your unique biomechanics."
                        price="$80 / session"
                        icon={
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        }
                    />
                    <ServiceCard
                        lang={lang}
                        title="Group Fitness Classes"
                        description="High-energy group classes designed to motivate and challenge participants in a community setting. Perfect for those who thrive on shared energy and friendly competition."
                        price="$25 / class"
                        icon={
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        }
                    />
                    <ServiceCard
                        lang={lang}
                        title="Online Coaching"
                        description="Virtual coaching sessions and programming for clients who prefer remote training or have busy travel schedules. Includes full app access, video form checks, and weekly check-ins."
                        price="$199 / month"
                        icon={
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        }
                    />
                </div>
            </div>
        </div>
    );
}
