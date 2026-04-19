import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Media Lab | الذكاء الصنعي التوليدي",
  description:
    "موقع ثابت تعليمي يشرح تطبيقات الذكاء الصنعي التوليدي في أنظمة الوسائط المتعددة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
