import type { Metadata } from "next";
import { Rajdhani, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["700", "400"],
});

export const metadata: Metadata = {
  title: `Paolo Simone | Italian Furniture Agency`,
 description:
    "Paolo Siomone is a creative interior design brand redefining modern living through bold aesthetics and thoughtful craftsmanship. We blend art, architecture, and emotion to create timeless spaces that speak your style. From concept to execution, every detail reflects a curated balance of innovation, comfort, and elegance.",
 icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" className="scroll-smooth">
        <body
          className={`${rajdhani.variable} ${cormorantGaramond.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </Providers>
  );
}
