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
  title: "MakeItAI | Custom AI Solutions Tailored for Every Industry",
  description: "We craft bespoke AI solutions designed for your unique industry challenges. From healthcare to finance, retail to manufacturing—custom-built systems that deliver results.",
  keywords: ["AI solutions", "custom AI", "industry AI", "enterprise AI", "AI consulting", "machine learning", "automation"],
  authors: [{ name: "MakeItAI" }],
  openGraph: {
    title: "MakeItAI | Custom AI Solutions Tailored for Every Industry",
    description: "Bespoke AI solutions designed for your unique industry challenges.",
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
