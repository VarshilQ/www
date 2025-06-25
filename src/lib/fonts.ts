import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const myFont = localFont({
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

export const myAltFont = localFont({
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