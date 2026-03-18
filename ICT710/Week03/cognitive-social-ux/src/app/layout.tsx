import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cognitive Social UX | Week 03 Demo",
  description:
    "A Next.js demo exploring cognitive UX, emotional trust, social interaction, and A/B testing in healthcare interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
