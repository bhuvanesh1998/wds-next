import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const SITE_URL = 'https://widescreen.co.in';
const GA_ID = 'G-9ELMZZT521';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Widescreen Digital Solutions — UI/UX & AI Product Design Studio',
    template: '%s | Widescreen Digital Solutions',
  },
  description:
    'Widescreen Digital Solutions is an AI-oriented product design studio in India specialising in UX design, UI design, web development, mobile app design, and digital transformation. We build beautiful, scalable digital products.',
  keywords: [
    'UX design India',
    'UI design studio',
    'AI product design',
    'digital transformation agency',
    'product design studio India',
    'web design India',
    'mobile app design',
    'SaaS design',
    'design agency Chennai',
    'UI/UX freelancer India',
    'Next.js development',
    'React design system',
    'Figma design',
    'brand identity design',
    'e-commerce design',
    'Widescreen Digital Solutions',
  ],
  authors: [{ name: 'Widescreen Digital Solutions', url: SITE_URL }],
  creator: 'Widescreen Digital Solutions',
  publisher: 'Widescreen Digital Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Widescreen Digital Solutions',
    title: 'Widescreen Digital Solutions — UI/UX & AI Product Design Studio',
    description:
      'AI-oriented product design studio specialising in UX, UI, web & mobile — built for scale.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Widescreen Digital Solutions' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Widescreen Digital Solutions — UI/UX & AI Product Design Studio',
    description: 'AI-oriented product design studio specialising in UX, UI, web & mobile.',
    images: ['/og-image.png'],
    creator: '@widescreenin',
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
        />
        {/* JSON-LD Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Widescreen Digital Solutions',
              url: SITE_URL,
              logo: `${SITE_URL}/logo-white.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-70927-01804',
                email: 'info@widescreen.in',
                contactType: 'customer service',
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        {children}
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}</Script>
      </body>
    </html>
  );
}
