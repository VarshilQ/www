import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { metaInfo } from "@/lib/meta";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const myFont = localFont({
  variable: "--font-myFont",
  display: "swap",
  src: [
    {
      path: "../assets/fonts/Jazmin-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Jazmin-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Jazmin-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Jazmin-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const myAltFont = localFont({
  variable: "--font-myAltFont",
  display: "swap",
  src: [
    {
      path: "../assets/fonts/JazminAlt-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/JazminAlt-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/JazminAlt-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/JazminAlt-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

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
