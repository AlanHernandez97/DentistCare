import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBarDesktop from "@/src/components/Organisms/navbar/Desktop/NavBarDesktop";
import FooterNav from "@/src/components/Organisms/footer/FooterNav";
import Navbar from "@/src/components/Organisms/navbar/NavBar";

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
      <body className={`w-full ${inter.className}`}>
        <Navbar />
        {children}
        <FooterNav />
      </body>
    </html>
  );
}
