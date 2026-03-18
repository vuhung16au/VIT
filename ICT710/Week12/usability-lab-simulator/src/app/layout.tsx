import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Usability Lab Simulator | Week 12 Demo",
  description:
    "A usability testing simulator covering planning, recruiting, conducting, analyzing, and reporting moderated usability tests.",
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
