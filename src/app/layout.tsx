import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vexita AB',
  description: 'Your trusted partner for innovative technology solutions',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
