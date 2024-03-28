import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Links MM Locações",
  description: "Locação de equipamentos para içamento e movimentações de cargas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex items-center justify-center bg-gradient-to-br from-yellow-200 from-5% via-yellow-600 via-10% to-red-600 to-90%">
          {children}
        </main>
      </body>
    </html>
  );
}
