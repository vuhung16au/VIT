import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Requirements Hub | Week 08 Demo",
  description:
    "A requirements engineering demo that turns personas into functional requirements, user stories, use cases, and prioritization decisions.",
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
