import type { Metadata } from "next";
import { Onest } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
});

const clientInitializer = `
  try {
    const savedTheme = localStorage.getItem("vt-sase-theme");
    document.documentElement.dataset.theme =
      savedTheme === "light" ? "light" : "dark";
  } catch {
    document.documentElement.dataset.theme = "dark";
  }

  // Reveal hides a section until its observer shows it, so it must only arm
  // where the observer can actually run. Set before first paint, or the
  // sections would flash in and then be hidden again.
  document.documentElement.dataset.js = "on";
`;

export const metadata: Metadata = {
  title: "VT SASE",
  description:
    "Society of Asian Scientists and Engineers — Virginia Tech chapter.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={onest.variable}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: clientInitializer }} />
      </head>
      <body>
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
