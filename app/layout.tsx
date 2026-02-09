import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({ 
  subsets: ["latin"],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Stratpace Advisory',
    default: 'Stratpace Advisory | Strategic Intelligence & Growth',
  },
  description: "A premium, minimal, editorial advisory firm providing market intelligence, strategic foresight, and capital allocation guidance.",
  metadataBase: new URL('https://stratpace.com'),
  openGraph: {
    title: 'Stratpace Advisory',
    description: 'Clarity in a complex market.',
    siteName: 'Stratpace Advisory',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.variable} font-sora bg-background min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}