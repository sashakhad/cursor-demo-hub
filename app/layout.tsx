import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import ThemeToggle from "./components/ThemeToggle";
import "./globals.css";

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
      <body className={ebGaramond.className}>
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
        {children}
        <ThemeToggle />
        <Analytics />
      </body>
    </html>
  );
}
