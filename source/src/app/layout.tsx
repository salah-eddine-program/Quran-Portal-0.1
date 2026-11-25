import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "بوابة القرآن الكريم",
  description: "بوابة عربية تجمع المصحف والتلاوات والتفسير والمكتبة والإذاعة والتقويم.",
  icons: { icon: `${basePath}/assets/images/icon.svg` },
  manifest: `${basePath}/manifest.webmanifest`,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#102f27",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
    <body>{children}</body>
    </html>
  );
}
