import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Solo Leveling",
  description: "Improve your skills with Solo Leveling",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Solo Leveling",
    startupImage: [
      {
        url: "/icons/icon-96x96.png",
        media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
  },
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/apple-touch-icon.png", // This adds the apple-touch-icon
  },
  other: {
    "apple-mobile-web-app-status-bar": "#1f2937", 
  },
};

export const viewport = {
  themeColor: "#1f2937",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
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
