import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/cookie-banner";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Breaz | Groei via marketing, sales en business development",
  description: "Breaz is jouw strategische partner in marketing, sales en business development. Wij helpen bedrijven groeien via inzicht, strategie en customer intimacy.",
  keywords: [
    "marketing",
    "sales",
    "business development",
    "groei",
    "strategie",
    "customer intimacy",
    "België",
  ],
  authors: [{ name: "Breaz" }],
  creator: "Breaz",
  publisher: "Breaz",
  metadataBase: new URL("https://www.breaz-it.be"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://www.breaz-it.be",
    title: "Breaz | Groei via marketing, sales en business development",
    description: "Breaz helpt bedrijven groeien via strategie, content, sales en business development met een menselijke aanpak.",
    siteName: "Breaz",
    images: [
      {
        url: "/og-breaz.jpg",
        width: 1200,
        height: 630,
        alt: "Breaz - Groei via marketing, sales en business development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breaz | Groei via marketing, sales en business development",
    description: "Breaz helpt bedrijven groeien via strategie, content, sales en business development met een menselijke aanpak.",
    images: ["/og-breaz.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
