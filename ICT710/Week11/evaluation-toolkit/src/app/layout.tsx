import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evaluation Toolkit | Week 11 Demo",
  description:
    "A design evaluation toolkit for heuristic review, cognitive walkthroughs, analytics inspection, checklists, and comparative evaluation.",
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
