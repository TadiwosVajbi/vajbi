import Link from 'next/link';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import type { Dictionary } from '@/app/dictionaries';

interface HeaderProps {
  lang: string;
  dict: Dictionary;
}

const Header = ({ lang, dict }: HeaderProps) => {
  return (
    <header className="bg-white shadow-md" suppressHydrationWarning>
      <div className="container mx-auto flex justify-between items-center">
        <Link href={`/${lang}`} className="flex items-center">
          <img
            src="/vexita_logo.png"
            alt="Vexita AB Logo"
            width={1536}
            height={400}
            className="h-20 w-auto py-2"
          />
        </Link>

        <nav className="flex items-center space-x-6">
          <Link href={`/${lang}`} className="text-gray-600 hover:text-gray-900">
            {dict.home}
          </Link>
          <Link href={`/${lang}/services`} className="text-gray-600 hover:text-gray-900">
            {dict.services}
          </Link>
          <Link href={`/${lang}/careers`} className="text-gray-600 hover:text-gray-900">
            {dict.careers}
          </Link>
          <Link href={`/${lang}/about`} className="text-gray-600 hover:text-gray-900">
            {dict.about}
          </Link>
          <Link href={`/${lang}/contact`} className="text-gray-600 hover:text-gray-900">
            {dict.contact}
          </Link>

          <LanguageSwitcher currentLang={lang} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
