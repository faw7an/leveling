import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Solo Leveling",
  description: "Improve your skills with Solo Leveling",
  manifest: "/manifest.json",
  themeColor: "#1f2937",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Solo Leveling",
  },
  icons: {
    icon: "/icons/manifest-icon-192.maskable.png",
    apple: "/icons/apple-icon-180.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 "
    >
      <body className="text-white">{children}</body>
    </html>
  );
}