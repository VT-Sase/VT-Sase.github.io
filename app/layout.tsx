import type { Metadata } from "next";
import { Instrument_Sans, Onest } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
});

const themeInitializer = `
  try {
    const savedTheme = localStorage.getItem("vt-sase-theme");
    document.documentElement.dataset.theme =
      savedTheme === "light" ? "light" : "dark";
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
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
      className={`${instrumentSans.variable} ${onest.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />
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
