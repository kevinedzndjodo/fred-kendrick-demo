import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Fred Kendrick — Makeup Artist | Beauty Expert | Educator | Yaoundé, Cameroon",
  description:
    "Fred Kendrick is a professional makeup artist, beauty expert, and educator based in Yaoundé, Cameroon. Specializing in bridal, editorial, celebrity, and event makeup. Book a session or join the next training class.",
  keywords: [
    "Fred Kendrick",
    "makeup artist Cameroon",
    "makeup artist Yaoundé",
    "bridal makeup Cameroon",
    "editorial makeup",
    "beauty expert",
    "makeup training",
    "makeup academy Cameroon",
  ],
  openGraph: {
    title: "Fred Kendrick — Makeup Artist | Beauty Expert | Educator",
    description:
      "Professional makeup artist based in Yaoundé, Cameroon. Bridal, editorial, celebrity makeup & training.",
    url: "https://fredkendrick.com",
    siteName: "Fred Kendrick",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fred Kendrick — Makeup Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fred Kendrick — Makeup Artist | Beauty Expert | Educator",
    description:
      "Professional makeup artist based in Yaoundé, Cameroon.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} font-sans antialiased bg-[#0a0a0a] text-[#f5f0eb]`}
      >
        {children}
      </body>
    </html>
  );
}
