import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Persona First | Week 07 Demo",
  description:
    "A persona-driven redesign demo showing how Sarah, Robert, and Maya each need different booking experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
