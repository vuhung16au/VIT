import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feedback Forge | Week 05 Demo",
  description:
    "A data gathering demo with questionnaires, interview scheduling, observation analytics, and triangulated insights for doctor booking UX.",
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
