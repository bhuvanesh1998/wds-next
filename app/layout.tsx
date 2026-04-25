import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Widescreen Digital Solution',
  description: 'AI-Oriented Product Design Studio — UX · UI · AI · Engineered for Scale',
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
      </head>
      <body>{children}</body>
    </html>
  );
}
