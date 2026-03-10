import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Energetic Fit | Personal Training",
  description: "Transform your life with our expert personal training sessions, group fitness classes, and online coaching.",
  keywords: "personal training, fitness, workout programs, health and wellness, online booking, multilingual support",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang} className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-brand-blue-900 bg-background dark:bg-brand-blue-900 dark:text-gray-100 min-h-screen flex flex-col`}>
        <FloatingNav lang={lang} />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
