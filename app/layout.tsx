import type { Metadata } from "next";
import { Playfair_Display } from 'next/font/google';

import "./globals.css";


const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' })

export const metadata: Metadata = {
    title: "JhoeJie Wedding Photo Album | Beautiful Civil Wedding Memories",
    description: "Explore the JhoeJie Wedding Photo Album featuring heartfelt moments from our civil wedding on December 27, 2024. Cherish memories with family and friends in this special collection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.className} antialiased`}
      >
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}
