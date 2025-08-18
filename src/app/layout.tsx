import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vexita IT Consulting',
  description: 'Your trusted partner for innovative technology solutions',
  icons: {
    icon: '/vexita_icon_clean.png',
    apple: '/vexita_icon_clean.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
