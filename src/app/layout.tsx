import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { metaInfo } from "@/lib/meta";
import { myAltFont, myFont, sans } from "@/lib/fonts";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: metaInfo.home.title,
  description: metaInfo.home.description,
  keywords: metaInfo.home.keywords,
  metadataBase: new URL("https://varshilpatel.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
      </head>
      <body
        className={`dark ${myFont.variable} ${myAltFont.variable} ${sans.variable} antialiased`}
      >
        {/* Header section */}
        <Header />
        {/* Below header section */}
        <div className="w-full h-20 bg-background" />
        {children}
        {/* Footer section */}
        <Footer />
      </body>
    </html>
  );
}
