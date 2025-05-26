"use client";

import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

const SEO = ({
  title = "Vajbi - Home for IT consultants",
  description = "A modern website built with Next.js, TypeScript, and Tailwind CSS",
  canonical = "https://vajbi.se",
  ogImage = "https://vajbi.se/og-image.jpg",
}: SEOProps) => {
  const siteTitle = `${title} | Vajbi`;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Favicon */}
      <link rel="icon" href="/Vajbi_logo.png" />
    </Head>
  );
};

export default SEO;
