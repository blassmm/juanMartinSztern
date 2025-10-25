import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Juan Martín Sztern | Especialista en Odontología",
  description: "Profesional especializado en tratamientos odontológicos avanzados. Consulta con el Dr. Juan Martín Sztern para recibir atención personalizada y de calidad.",
  keywords: ["odontología", "dentista", "salud dental", "tratamientos dentales", "Dr. Juan Martín Sztern"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
