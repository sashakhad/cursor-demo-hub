import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const ebGaramond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cursor Curious",
  description: "A clean, markdown-powered blog for developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script id="theme-init" strategy="beforeInteractive">{`
        (function(){
          try {
            var stored = localStorage.getItem('theme');
            var mql = window.matchMedia('(prefers-color-scheme: dark)');
            var theme = stored || (mql.matches ? 'dark' : 'light');
            var root = document.documentElement;
            root.setAttribute('data-theme', theme);
            root.classList.toggle('dark', theme === 'dark');
          } catch(e) {}
        })();
      `}</Script>
      <body className={ebGaramond.className}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
