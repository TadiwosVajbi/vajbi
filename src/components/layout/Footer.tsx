import Link from 'next/link';
import type { Dictionary } from '@/app/dictionaries';

interface FooterProps {
  lang: string;
  dict: Dictionary;
}

const Footer = ({ lang, dict }: FooterProps) => {
  return (
    <footer className="bg-gray-800 text-white" suppressHydrationWarning>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{dict.company}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/about`} className="hover:text-gray-300">
                  {dict.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="hover:text-gray-300">
                  {dict.contact}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/careers`} className="hover:text-gray-300">
                  {dict.careers}
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{dict.services}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/services`} className="hover:text-gray-300">
                  {dict.ourServices}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{dict.contact}</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">info@vexita.se</span>
              </li>
              <li>
                <span className="text-gray-300">+46 (0) 10 140 67 00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 Vexita AB. {dict.allRightsReserved}.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
