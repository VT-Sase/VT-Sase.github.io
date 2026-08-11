import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "VT SASE",
  description:
    "Society of Asian Scientists and Engineers — Virginia Tech chapter.",
};

/**
 * Wraps every page. Anything that should appear site-wide (navbar, footer,
 * fonts) belongs here — not in the individual pages.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
