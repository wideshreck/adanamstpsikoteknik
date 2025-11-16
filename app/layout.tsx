import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Adana MST Psikoteknik | Psikoteknik Belgesi ve Test Merkezi",
  description: "Adana'da Sağlık Bakanlığı onaylı psikoteknik test merkezi. B, C, D, E sınıfı sürücü belgesi ve SRC belgesi için aynı gün rapor. Uzman psikologlar eşliğinde güvenilir hizmet.",
  keywords: "adana psikoteknik, psikoteknik test adana, psikoteknik belgesi, src belgesi, sürücü belgesi psikoteknik, psikoteknik raporu, adana psikoteknik merkezi",
  authors: [{ name: "Adana MST Psikoteknik" }],
  creator: "Adana MST Psikoteknik",
  publisher: "Adana MST Psikoteknik",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#0f172a',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://adanamstpsikoteknik.com',
    title: 'Adana MST Psikoteknik | Psikoteknik Belgesi ve Test Merkezi',
    description: 'Adana\'da Sağlık Bakanlığı onaylı psikoteknik test merkezi. Aynı gün rapor garantisi ile profesyonel hizmet.',
    siteName: 'Adana MST Psikoteknik',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adana MST Psikoteknik | Psikoteknik Belgesi ve Test Merkezi',
    description: 'Adana\'da Sağlık Bakanlığı onaylı psikoteknik test merkezi. Aynı gün rapor garantisi.',
  },
  alternates: {
    canonical: 'https://adanamstpsikoteknik.com',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "name": "Adana MST Psikoteknik Değerlendirme Merkezi",
        "description": "Adana'da Sağlık Bakanlığı onaylı psikoteknik test merkezi. Sürücü belgesi ve SRC belgesi için profesyonel psikoteknik değerlendirme hizmeti.",
        "url": "https://adanamstpsikoteknik.com",
        "telephone": "+905558943872",
        "email": "adanamstpsikoteknik@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Emek, 41004. Sk. No:8 Kat:1 İç Kapı No:1",
          "addressLocality": "Seyhan",
          "addressRegion": "Adana",
          "postalCode": "01280",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "36.99412258563745",
          "longitude": "35.29933938982019"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "19:00"
          }
        ],
        "priceRange": "$$",
        "image": "https://adanamstpsikoteknik.com/logo.png"
      },
      {
        "@type": "LocalBusiness",
        "name": "Adana MST Psikoteknik",
        "image": "https://adanamstpsikoteknik.com/logo.png",
        "@id": "https://adanamstpsikoteknik.com",
        "url": "https://adanamstpsikoteknik.com",
        "telephone": "+905558943872",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Emek, 41004. Sk. No:8 Kat:1",
          "addressLocality": "Seyhan",
          "addressRegion": "Adana",
          "postalCode": "01280",
          "addressCountry": "TR"
        }
      }
    ]
  };

  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
