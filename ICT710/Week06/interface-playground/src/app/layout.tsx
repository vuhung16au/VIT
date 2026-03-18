import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interface Playground | Week 06 Demo",
  description:
    "A multi-modal doctor booking demo comparing CLI, GUI, touch, voice, gesture, and interface evolution.",
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
