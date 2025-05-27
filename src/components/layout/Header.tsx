'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  lang: string;
}

const Header = ({ lang }: HeaderProps) => {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={`/${lang}`} className="flex items-center">
          <Image
            src="/Vajbi_logo.png"
            alt="Vajbi Logo"
            width={180}
            height={60}
            priority
            className="h-16 w-auto"
          />
        </Link>

        <nav className="flex items-center space-x-6">
          <Link href={`/${lang}`} className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href={`/${lang}/services`} className="text-gray-600 hover:text-gray-900">
            Services
          </Link>
          <Link href={`/${lang}/case-studies`} className="text-gray-600 hover:text-gray-900">
            Case Studies
          </Link>
          <Link href={`/${lang}/about`} className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href={`/${lang}/contact`} className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>

          <div className="flex items-center space-x-2 ml-4">
            <Link
              href={redirectedPathName('en')}
              className={`px-2 py-1 rounded ${
                lang === "en" ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              EN
            </Link>
            <Link
              href={redirectedPathName('sv')}
              className={`px-2 py-1 rounded ${
                lang === "sv" ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              SV
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
