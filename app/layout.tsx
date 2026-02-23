import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Content Engine for Certify360 – AI Support for Design Teams",
  description:
    "Structure course content once; generate format-ready drafts with built-in quality checks. AI-assisted workflow for marketing and design teams within Certify360.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-surface text-[#171717]`}>
        {children}
      </body>
    </html>
  );
}
