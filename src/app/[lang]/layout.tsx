import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vajbi IT Consulting",
  description: "Your trusted partner for innovative technology solutions",
};

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  // Make sure we're using the same language value consistently
  // by making this an async function and awaiting the params

  // Validate the language to ensure it's one we support
  const validLang = ['en', 'sv'].includes(lang) ? lang : 'en';

  return (
    <html lang={validLang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header lang={validLang} />
        <div className="flex-grow flex flex-col">
          {children}
        </div>
        <Footer lang={validLang} />
      </body>
    </html>
  );
}
