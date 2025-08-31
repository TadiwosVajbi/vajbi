import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  lang: string;
}

const Header = ({ lang }: HeaderProps) => {
  return (
    <header className="bg-white shadow-md" suppressHydrationWarning>
      <div className="container mx-auto flex justify-between items-center">
        <Link href={`/${lang}`} className="flex items-center">
          <Image
            src="/vexita_it_logo_with_trademark.png"
            alt="Vexita IT Logo"
            width={1536}
            height={400}
            className="h-20 w-auto py-2"
            priority
          />
        </Link>

        <nav className="flex items-center space-x-6">
          <Link href={`/${lang}`} className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href={`/${lang}/services`} className="text-gray-600 hover:text-gray-900">
            Services
          </Link>
          <Link href={`/${lang}/careers`} className="text-gray-600 hover:text-gray-900">
            Careers
          </Link>
          <Link href={`/${lang}/about`} className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href={`/${lang}/contact`} className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>

          <div className="flex items-center space-x-2 ml-4">
            <Link
              href={`/en`}
              className={`px-2 py-1 rounded ${
                lang === "en" ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              EN
            </Link>
            <Link
              href={`/sv`}
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
