import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit, Satisfy } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Big Picture Pediatric Dentistry | Houston, TX",
  description: "Compassionate pediatric dental care for children in Houston and Clear Lake, Texas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} ${satisfy.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
