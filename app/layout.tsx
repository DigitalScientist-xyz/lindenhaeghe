import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Whitepaper Factory – AI Support for Certify360 Design Teams",
  description:
    "From course page to compliant whitepaper in minutes. AI-assisted workflow for marketing and design teams within Certify360.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-[#171717]`}>
        {children}
      </body>
    </html>
  );
}
