import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, Space_Grotesk } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Intro, { introScript } from "@/components/layout/Intro";
import Cursor from "@/components/layout/Cursor";
import ScrollReset from "@/components/layout/ScrollReset";
import JsonLd from "@/components/layout/JsonLd";
import RevealEngine from "@/components/motion/RevealEngine";
import ParallaxEngine from "@/components/motion/ParallaxEngine";

import { brand } from "@/config/brand";
import { seo } from "@/config/seo";
import { websiteJsonLd, professionalServiceJsonLd } from "@/lib/jsonLd";

// Apenas os pesos realmente usados: o display existe em 600 e nada mais.
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-inter-tight",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: { default: seo.title, template: seo.titleTemplate },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: brand.fullName,
  authors: [{ name: brand.person }],
  creator: brand.person,
  publisher: brand.fullName,
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/brand/favicon.svg",
    apple: "/brand/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: brand.url,
    siteName: brand.fullName,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F2ED",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${interTight.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        {/* Roda antes da primeira pintura: decide a abertura sem flash. */}
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body>
        <JsonLd data={[websiteJsonLd(), professionalServiceJsonLd()]} />

        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo
        </a>

        <Intro />
        <Header />

        <main id="conteudo">{children}</main>

        <Footer />

        <ScrollReset />
        <RevealEngine />
        <ParallaxEngine />
        <Cursor />
      </body>
    </html>
  );
}
