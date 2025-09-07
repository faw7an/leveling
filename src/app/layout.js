import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Solo Leveling",
  description: "Improve your skills with Solo Leveling",
  manifest: "/manifest.json",
  themeColor: "#1f2937",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Solo Leveling",
  },
  icons: {
    apple: "/icons/apple-icon-180.png",
  },
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