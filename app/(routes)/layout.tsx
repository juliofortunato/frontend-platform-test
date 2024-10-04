import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

const articulatCF = localFont({
  src: [
    {
      path: "../../public/assets/fonts/ArticulatCF-Normal.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/ArticulatCF-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-articulat",
});

export const metadata: Metadata = {
  title: "MUSE.ai",
  description: "The best song library for music enthusiasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${articulatCF.className} antialiased`}>{children}</body>
    </html>
  );
}
