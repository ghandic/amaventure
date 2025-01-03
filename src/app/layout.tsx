import "./globals.css";

import cn from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Home | Amaventure`,
  description: `A adventure into one of Nepals most beautiful mountains - Ama Dablam.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/amaventure/favicon/favicon.ico" />
        {/* <meta name="theme-color" content="#000" /> */}
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(inter.className, "bg-[#e6ecf1]")}
      >
        {/* <ThemeSwitcher /> */}
        <div className="min-h-screen">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
