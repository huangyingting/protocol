import type { Metadata, Viewport } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfdfe" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1020" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://protocol-explorer-alpha.vercel.app"),
  title: "Protocol Explorer · Learn how the internet works",
  description:
    "Watch the internet work, packet by packet. Interactive lessons on HTTP, HTTPS, TCP, UDP, IP, DNS, DHCP, ICMP, SMTP, POP3, IMAP, FTP, SSH and TLS, with every packet decoded byte by byte. In English, Spanish, Portuguese, French, German, Turkish, Indonesian, Japanese, Chinese (Simplified and Traditional), Korean, Hindi, Arabic and Hebrew.",
  authors: [{ name: "Dilum Sanjaya" }],
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "16x16 32x32 48x48" },
      { url: `${basePath}/favicon.svg`, type: "image/svg+xml" },
    ],
    apple: `${basePath}/apple-touch-icon.png`,
  },
  manifest: `${basePath}/site.webmanifest`,
  openGraph: {
    type: "website",
    siteName: "Protocol Explorer",
    title: "Protocol Explorer · Learn how the internet works",
    description:
      "Watch the internet work, packet by packet: interactive lessons from DNS and TCP to TLS, with every packet decoded byte by byte.",
    url: "https://protocol-explorer-alpha.vercel.app/",
    images: [
      {
        url: `${basePath}/og.png`,
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Protocol Explorer: a network diagram with a TLS Server Hello packet travelling from the internet to a laptop's router.",
      },
    ],
    locale: "en_US",
    alternateLocale: [
      "es_ES",
      "pt_BR",
      "fr_FR",
      "de_DE",
      "tr_TR",
      "id_ID",
      "ja_JP",
      "zh_CN",
      "zh_TW",
      "ko_KR",
      "hi_IN",
      "ar_AR",
      "he_IL",
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@DilumSanjaya",
    title: "Protocol Explorer · Learn how the internet works",
    description:
      "Watch the internet work, packet by packet: interactive lessons from DNS and TCP to TLS, with every packet decoded byte by byte.",
    images: [
      {
        url: `${basePath}/og.png`,
        alt: "Protocol Explorer: a network diagram with a TLS Server Hello packet travelling from the internet to a laptop's router.",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Protocol Explorer",
  url: "https://protocol-explorer-alpha.vercel.app/",
  description:
    "Interactive lessons on how internet protocols work, with every packet decoded byte by byte.",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  inLanguage: [
    "en",
    "es",
    "pt-BR",
    "fr",
    "de",
    "tr",
    "id",
    "ja",
    "zh-CN",
    "zh-TW",
    "ko",
    "hi",
    "ar",
    "he",
  ],
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: {
    "@type": "Person",
    name: "Dilum Sanjaya",
    url: "https://x.com/DilumSanjaya",
  },
};

const themeInitScript = `
try {
  const saved = localStorage.getItem('protocol-explorer:theme');
  const dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.documentElement.classList.toggle('dark', dark);
} catch {
  document.documentElement.dataset.theme = 'light';
}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {children}
        <noscript>
          <p
            style={{
              margin: "40px",
              font: "16px/1.5 ui-monospace, monospace",
              color: "#00238a",
            }}
          >
            Protocol Explorer animates packets as they travel the network, so it
            needs JavaScript. Please turn it on to start the lessons.
          </p>
        </noscript>
      </body>
    </html>
  );
}
