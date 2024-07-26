import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Organisms/navbar/Navbar";
import FooterNav from "@/src/components/Organisms/footer/FooterNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DentistCare",
  description: "¡Cuidamos de tu sonrisa!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`w-auto ${inter.className}`}>
        <Navbar />
        {children}
        <FooterNav />
      </body>
    </html>
  );
}
