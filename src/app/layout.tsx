import "./globals.css";
import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "./providers";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-english",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GenMedia AI",
  description:
    "Static educational multimedia website about generative AI and its applications in images, audio, and video.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${cairo.variable} ${inter.variable}`}
    >
      <body suppressHydrationWarning>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}