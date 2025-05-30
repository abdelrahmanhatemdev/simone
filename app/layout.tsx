import type { Metadata } from "next";
import {Rajdhani, Cormorant_Garamond} from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400"]
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["700", "400"]
});

export const metadata: Metadata = {
  title: "Polo Simone",
  description: "Polo Siomone is a creative interior design brand redefining modern living through bold aesthetics and thoughtful craftsmanship. We blend art, architecture, and emotion to create timeless spaces that speak your style. From concept to execution, every detail reflects a curated balance of innovation, comfort, and elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${rajdhani.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
