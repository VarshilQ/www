import localFont from "next/font/local";

// export const sans = Inter({
//   variable: "--font-sans",
//   subsets: ["latin"],
// });

export const sans = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    {
      path: "../assets/fonts/SKPayidar-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/SKPayidar-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/SKPayidar-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/SKPayidar-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/SKPayidar-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/SKPayidar-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
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