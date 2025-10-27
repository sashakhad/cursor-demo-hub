import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ThemeSelector from "./components/ThemeSelector";

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
      <head>
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function(){
            try {
              var stored = localStorage.getItem('theme');
              var theme = stored || 'light';
              var root = document.documentElement;
              root.setAttribute('data-theme', theme);
              root.classList.toggle('dark', theme === 'dark');
            } catch(e) {}
          })();
        `}</Script>
      </head>
      <body className={ebGaramond.className}>
        <ThemeSelector />
        {children}
      </body>
    </html>
  );
}
