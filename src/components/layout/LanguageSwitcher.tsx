'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LanguageSwitcherProps {
  currentLang: string;
}

const LanguageSwitcher = ({ currentLang }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  
  // Extract the path after the language prefix
  const getPathForLanguage = (newLang: string) => {
    // Remove the current language prefix from the pathname
    const pathWithoutLang = pathname.replace(`/${currentLang}`, '') || '/';
    
    // If it's just the root, return the new language root
    if (pathWithoutLang === '/') {
      return `/${newLang}`;
    }
    
    // Otherwise, replace with new language prefix
    return `/${newLang}${pathWithoutLang}`;
  };

  return (
    <div className="flex items-center space-x-2 ml-4">
      <Link
        href={getPathForLanguage('en')}
        className={`px-2 py-1 rounded ${
          currentLang === "en" ? "bg-gray-200" : "hover:bg-gray-100"
        }`}
      >
        EN
      </Link>
      <Link
        href={getPathForLanguage('sv')}
        className={`px-2 py-1 rounded ${
          currentLang === "sv" ? "bg-gray-200" : "hover:bg-gray-100"
        }`}
      >
        SV
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
