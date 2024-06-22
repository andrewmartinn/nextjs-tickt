import Navbar from "@/components/common/Navbar";
import { lexend } from "@/styles/fonts";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tickt | Discover Events",
  description: "Discover Events and Book Tickets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Navbar />
        <main className="min-h-screen text-white">{children}</main>
      </body>
    </html>
  );
}
