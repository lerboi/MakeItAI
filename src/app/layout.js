import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "MakeItAI | Intelligent AI Agents That Never Forget",
  description: "Enterprise AI solutions with specialized memory architecture. Long-memory chatbots, autonomous agentic workflows, and data-to-intelligence pipelines.",
  keywords: ["AI agents", "machine learning", "chatbots", "automation", "enterprise AI", "vector embeddings"],
  authors: [{ name: "MakeItAI" }],
  openGraph: {
    title: "MakeItAI | Intelligent AI Agents That Never Forget",
    description: "Enterprise AI solutions with specialized memory architecture.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
