import { getDictionary } from '../../dictionaries';
import AboutPageClient from './AboutPageClient';

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = ['en', 'sv'].includes(lang) ? lang : 'en';
  const dict = await getDictionary(validLang);

  return <AboutPageClient dict={dict} validLang={validLang} />;
}
