import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design System Studio | Week 10 Demo",
  description:
    "A design language and design system demo exploring tokens, typography, colors, layout, icons, motion, and reusable UI components.",
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
