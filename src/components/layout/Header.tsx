import Link from 'next/link';
import { getDictionary } from '../../app/dictionaries';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';

interface HeaderProps {
  lang: string;
}

const Header = async ({ lang }: HeaderProps) => {
  const dict = await getDictionary(lang);

  return (
    <header className="bg-white shadow-md" suppressHydrationWarning>
      <div className="container mx-auto flex justify-between items-center">
        <Link href={`/${lang}`} className="flex items-center">
          <img
            src="/vexita_it_logo_with_trademark.png"
            alt="Vexita IT Logo"
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
