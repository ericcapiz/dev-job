import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dev Jobs",
    template: "%s | Dev Jobs",
  },
  description: "Search jobs that are looking for developers like yourself!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${inter.className} min-w-[350px]`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  );
}
