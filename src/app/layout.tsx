import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Juan Martín Sztern | Odontólogo Especialista en ATM y Ortodoncia - La Plata",
  description: "Dr. Juan Martín Sztern, odontólogo especialista en Patología Cráneo-Mandibular (ATM) y Diplomado en Ortodoncia. Profesor UNLP. Tratamientos dentales personalizados en La Plata, Argentina.",
  keywords: [
    "Juan Martín Sztern",
    "Juan Martin Sztern",
    "Dr Sztern",
    "odontólogo La Plata",
    "dentista La Plata",
    "especialista ATM",
    "ortodoncia La Plata",
    "patología cráneo mandibular",
    "endodoncia",
    "estética dental",
    "prótesis dental",
    "UNLP odontología"
  ],
  authors: [{ name: "Dr. Juan Martín Sztern" }],
  creator: "Dr. Juan Martín Sztern",
  publisher: "Dr. Juan Martín Sztern",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Dr. Juan Martín Sztern - Odontología",
    title: "Dr. Juan Martín Sztern | Odontólogo Especialista en ATM y Ortodoncia",
    description: "Odontólogo especialista en Patología Cráneo-Mandibular (ATM) y Diplomado en Ortodoncia. Profesor UNLP. Tratamientos dentales personalizados.",
    images: [
      {
        url: "/resources/profile.jpg",
        width: 800,
        height: 800,
        alt: "Dr. Juan Martín Sztern - Odontólogo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Juan Martín Sztern | Odontólogo Especialista",
    description: "Especialista en ATM y Ortodoncia. Profesor UNLP. Tratamientos dentales personalizados en La Plata.",
    images: ["/resources/profile.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    // Agregar cuando tengas el código de Google Search Console
    // google: "tu-codigo-de-verificacion",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Dr. Juan Martín Sztern",
              "description": "Odontólogo especialista en Patología Cráneo-Mandibular (ATM) y Diplomado en Ortodoncia. Profesor de la Facultad de Odontología UNLP.",
              "image": "/resources/profile.jpg",
              "jobTitle": "Odontólogo - Especialista en ATM",
              "worksFor": {
                "@type": "Organization",
                "name": "Facultad de Odontología UNLP"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Universidad Nacional de La Plata"
              },
              "knowsAbout": [
                "Patología Cráneo-Mandibular",
                "ATM",
                "Ortodoncia",
                "Endodoncia",
                "Estética Dental",
                "Prótesis Fija",
                "Cirugía Dental"
              ],
              "medicalSpecialty": "Dentistry"
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
