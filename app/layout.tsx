import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "cerealmilkdev — Développeur FullStack",
  description:
    "Portfolio de cerealmilkdev, développeur FullStack : Next.js, TypeScript, Node.js, Python, PostgreSQL. Projets, parcours et contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
