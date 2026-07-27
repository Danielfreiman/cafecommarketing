import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cafe-com-marketing.sites.openai.com"),
  title: {
    default: "Café com Marketing | Conteúdo que fica na memória",
    template: "%s | Café com Marketing",
  },
  description:
    "Estratégia, conteúdo e produção audiovisual para marcas que querem ser vistas, lembradas e compartilhadas.",
  keywords: [
    "agência de marketing digital",
    "produção audiovisual",
    "social media",
    "conteúdo para redes sociais",
    "vídeos para marcas",
    "São Paulo",
  ],
  authors: [{ name: "Café com Marketing" }],
  creator: "Café com Marketing",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Café com Marketing",
    title: "Café com Marketing — Conteúdo que faz aparecer",
    description:
      "Estratégia para saber o que falar. Criatividade para ninguém ignorar.",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Café com Marketing — Sua marca precisa aparecer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Café com Marketing — Conteúdo que faz aparecer",
    description:
      "Estratégia, conteúdo e produção audiovisual para marcas que não querem passar despercebidas.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0829C7",
  colorScheme: "light",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Café com Marketing",
  url: "https://cafe-com-marketing.sites.openai.com",
  logo: "https://cafe-com-marketing.sites.openai.com/favicon.svg",
  sameAs: ["https://instagram.com/seucafecomarketing"],
  email: "oi@cafecommarketing.com.br",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${sans.variable} ${serif.variable}`}>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}


