"use client";

import Link from "next/link";

interface FooterProps {
  lang: string;
}

const Footer = ({ lang }: FooterProps) => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/about`} className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/careers`} className="hover:text-gray-300">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/blog`} className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/docs`} className="hover:text-gray-300">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/faq`} className="hover:text-gray-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/privacy`} className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/terms`} className="hover:text-gray-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
