
import type { Metadata } from "next";
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

export const metadata: Metadata = {
    verification: {
    google: "65gO8lp52E6dklphgLX90fy90B0ubgMmy9COHoy9UZQ",
  },
  metadataBase: new URL(
    "https://edwardeddie10.github.io/edward-portfolio/"
  ),

  title: "Edward Unukpo | Engineering & Technology Leadership",

  description:
    "Engineering and technology leader specializing in cloud platforms, DevOps, SRE, developer experience, and digital transformation. Driving engineering excellence, scalable platforms, and business outcomes.",

  keywords: [
    "Edward Unukpo",
    "Engineering Leadership",
    "Technology Leadership",
    "Platform Engineering",
    "Cloud Engineering",
    "DevOps",
    "Site Reliability Engineering",
    "Developer Experience",
    "Digital Transformation",
    "Engineering Excellence",
  ],

  openGraph: {
    title: "Edward Unukpo | Engineering & Technology Leadership",
    description:
      "Engineering leadership, cloud modernization, developer platforms, and strategic technology transformation.",
    url: "https://edwardeddie10.github.io/edward-portfolio/",
    siteName: "Edward Unukpo | Leadership Portfolio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}