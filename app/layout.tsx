import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Deekup",
    default: "Deekup — Fine Dining. Your Price.",
  },
  description:
    "Deekup connects food lovers with premium restaurants offering exclusive discounted dining slots. Book a top-tier restaurant experience for less.",
  keywords: ["fine dining", "restaurant discounts", "dining deals", "restaurant bookings", "Deekup"],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Deekup",
    title: "Deekup — Fine Dining. Your Price.",
    description:
      "Discover premium restaurant experiences at exclusive prices. Deekup fills off-peak tables with food lovers who want the full experience for less.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deekup — Fine Dining. Your Price.",
    description:
      "Discover premium restaurant experiences at exclusive prices.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
