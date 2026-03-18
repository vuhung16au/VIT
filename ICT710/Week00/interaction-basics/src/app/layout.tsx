import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interaction Basics | Week 00 Demo",
  description:
    "A small Week 00 Next.js app that demonstrates feedback, validation, visible choices, and confirmation states through a consultation-booking interaction.",
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
