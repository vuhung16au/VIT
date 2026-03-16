import { TestimonialCard } from "@/components/ui/TestimonialCard";
import React from "react";

export const metadata = {
    title: "Testimonials | Energetic Fit",
    description: "Read success stories from our clients who have transformed their lives.",
};

export default function TestimonialsPage() {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Online Coaching Client",
            content: "I've tried every fad diet and generic workout plan out there. Working with Energetic Fit was the first time I actually understood the science behind my body. I've lost 30lbs and kept it off for 2 years now.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Personal Training Client",
            content: "As a busy executive, I barely had time to think about fitness. My trainer built a routine that fit perfectly into my 45-minute lunch breaks. My energy levels have skyrocketed.",
            rating: 5
        },
        {
            name: "Jessica Alvez",
            role: "Group Fitness Member",
            content: "The energy in the group classes is absolutely unmatched! I always pushed myself harder than I thought possible because of the amazing community and instructors.",
            rating: 5
        },
        {
            name: "David Dubois",
            role: "Rehab & PT Client",
            content: "After my knee surgery, I was terrified to lift weights again. The team developed a bulletproof rehab program that honestly made me stronger than I was before the injury.",
            rating: 4
        },
        {
            name: "Priya Patel",
            role: "Personal Training Client",
            content: "The attention to detail regarding my form and nutrition was eye-opening. They don't just train you; they educate you so you can eventually sustain it yourself.",
            rating: 5
        },
        {
            name: "Alex Thompson",
            role: "Online Coaching Client",
            content: "Even from 3 states away, the accountability is real! The weekly video check-ins and form reviews made me feel like my coach was right there in the gym with me.",
            rating: 5
        }
    ];

    return (
        <div className="min-h-screen py-16 bg-white dark:bg-brand-blue-900">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-blue-900 dark:text-white">
                        Client <span className="text-brand-orange-500">Success Stories</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Don't just take our word for it. Read what our dedicated community members have to say about their journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((t, idx) => (
                        <TestimonialCard
                            key={idx}
                            name={t.name}
                            role={t.role}
                            content={t.content}
                            rating={t.rating}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
