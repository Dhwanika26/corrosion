import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Header } from "@/sections/Header";  // Import Header component
import { Footer } from "@/sections/Footer";  // Import Footer component

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#DDCBCA]")}>
        <Header /> {/* Add Header here */}
        <main>{children}</main> {/* Main content */}
        <Footer /> {/* Add Footer here */}
      </body>
    </html>
  );
}
