import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shop | Mettā Muse",
  description:
    "Explore handmade artisan, electronics, and jewelry products from around the world. Shop sustainable fashion and unique crafts.",
  keyword: [
    "handmade",
    "artisans",
    "sustainable fashion",
    "electronics",
    "jewelry",
    "ethical shopping",
    "Mettā Muse",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
