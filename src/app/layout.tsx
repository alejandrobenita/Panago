import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PANAGO — Five Flagship Projects",
  description:
    "90-day growth framework for PANAGO: loyalty, delivery arbitrage, predictive AI, franchise local marketing, and TikTok creator network — prepared for leadership discussion.",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh bg-void font-sans antialiased">
        <a
          href="#top"
          className="fixed left-4 top-0 z-[100] -translate-y-full rounded-b-md bg-white px-4 py-2 text-sm font-medium text-void shadow-lg transition-transform duration-200 focus:translate-y-0 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white/40"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
