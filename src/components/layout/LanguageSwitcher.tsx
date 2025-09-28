import Link from 'next/link';

interface LanguageSwitcherProps {
  currentLang: string;
}

const LanguageSwitcher = ({ currentLang }: LanguageSwitcherProps) => {
  return (
    <div className="flex items-center space-x-2 ml-4">
      <Link
        href="/en"
        className={`px-2 py-1 rounded ${
          currentLang === "en" ? "bg-gray-200" : "hover:bg-gray-100"
        }`}
      >
        EN
      </Link>
      <Link
        href="/sv"
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
