import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prototype Evolution | Week 09 Demo",
  description:
    "A prototyping demo that shows the journey from paper sketches to high-fidelity interactive doctor-booking prototypes.",
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
