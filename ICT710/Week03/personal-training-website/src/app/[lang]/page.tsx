import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import Link from "next/link";
import React from "react";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-blue-900 text-white min-h-[90vh] flex items-center justify-center pt-24 pb-20">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900 to-transparent z-10"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Unleash Your <span className="text-brand-orange-500">True Potential</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Transform your body, mind, and life with expert coaching, personalized programs, and a supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/${lang}/services`}>
                <Button size="lg" className="w-full sm:w-auto text-lg font-bold">Start Your Journey</Button>
              </Link>
              <Link href={`/${lang}/contact`}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white/10 hover:text-white text-lg font-bold">Free Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Selling Points Section */}
      <section className="py-24 bg-white dark:bg-brand-blue-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-brand-blue-900 dark:text-white">Why Choose Energetic Fit?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">We don't just provide workouts. We provide a complete lifestyle transformation tailored specifically to you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Personalized Approach",
                desc: "Every body is different. We craft programs tailored strictly to your goals, abilities, and lifestyle.",
                icon: "🎯"
              },
              {
                title: "Expert Guidance",
                desc: "Train with certified professionals who bring science-backed methods to ensure you see real results safely.",
                icon: "💡"
              },
              {
                title: "Unwavering Support",
                desc: "We are with you every step of the way, providing motivation, accountability, and nutritional guidance.",
                icon: "🤝"
              }
            ].map((feature, i) => (
              <div key={i} className="text-center group p-8 rounded-2xl hover:bg-brand-blue-50 dark:hover:bg-brand-blue-900/50 transition-colors duration-300">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-brand-blue-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-brand-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to make a change?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-brand-orange-100">
            Don't wait for Monday. Don't wait for the new year. The best time to start is exactly right now.
          </p>
          <Link href={`/${lang}/contact`}>
            <Button size="lg" className="bg-white text-brand-orange-600 hover:bg-gray-100 hover:text-brand-orange-700 text-lg font-bold shadow-xl">
              Book Your Free Session
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
