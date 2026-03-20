import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Solklart | Solceller i Raseborg & södra Finland",
  description: "Din lokala expert på solenergi i Raseborg och södra Finland. Vi erbjuder kompletta lösningar för solceller, batterilager och laddstationer.",
  keywords: "solceller, solenergi, Raseborg, Finland, batterilager, elbilsladdning, förnybar energi",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
