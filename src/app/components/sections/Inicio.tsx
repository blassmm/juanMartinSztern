"use client";
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '../ui/WhatsAppButton';

function Inicio() {
  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden bg-[#121212]">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] opacity-80"></div>

      {/* Purple accent light */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#8e44ad] rounded-full filter blur-[100px] opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#3498db] rounded-full filter blur-[120px] opacity-15"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-5 md:gap-6 lg:gap-7">
              <h1 className="text-4xl font-bold tracking-tight text-white leading-[1.12] md:text-5xl lg:text-6xl">
                Odontólogo Juan M. Sztern - Odontología Digital
              </h1>
              <div className="flex flex-col gap-1.5 md:gap-2">
                <h2 className="text-base font-medium leading-snug text-[#8e44ad] md:text-lg lg:text-xl">
                  Especialista en Patología Cráneo-Mandibular (ATM).
                </h2>
                <h2 className="text-base font-medium leading-snug text-[#8e44ad] md:text-lg lg:text-xl">
                  Diplomado en Ortodoncia
                </h2>
                <h2 className="text-base font-medium leading-snug text-[#8e44ad] md:text-lg lg:text-xl">
                  Servicio de Endodoncia (tratamiento de conducto)
                </h2>
                <h2 className="text-base font-medium leading-snug text-[#8e44ad] md:text-lg lg:text-xl">
                  Servicio de Rehabilitación, Implantes y Prótesis
                </h2>
              </div>

              <h3 className="max-w-xl text-base font-normal leading-relaxed text-gray-300/95 md:text-[1.0625rem] lg:text-lg lg:leading-8">
                Somos Odontología Digital Sztern, un centro odontológico en La Plata,
                ubicado en C. 54 545 entre 5 y 6, frente a Plaza San Martín. Brindamos
                tratamientos de implantes dentales, ortodoncia, alineadores, rehabilitación
                de articulación temporomandibular (ATM), estética dental, carillas y
                rehabilitación oral, con un enfoque integral estético y funcional,
                utilizando tecnología digital de vanguardia. Pueden encontrarnos en el
                centro de La Plata, frente a Plaza San Martín.
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 md:pt-8">
              <WhatsAppButton
                variant="button"
                buttonText="Agendar Consulta"
                position="static"
                customClass="font-semibold"
              />
              <Link href="/#servicios" className="border border-white hover:border-[#8e44ad] hover:bg-[#8e44ad]/10 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center">
                Conocer Servicios
              </Link>
            </div>

          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-start lg:justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Container for pop-up effect */}
              <div className="relative w-full h-full">
                {/* Background circle with gradient border */}
                <div className="absolute inset-0 rounded-full border-4 border-[#8e44ad]/30 bg-gradient-to-b from-[#121212] to-[#1a1a1a] overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#8e44ad]/30 z-10"></div>
                </div>

                {/* Doctor image with pop-up effect */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  {/* The image container with pop-up effect */}
                  <div className="relative w-full h-full transform transition-transform hover:scale-105 duration-500">
                    <Image
                      src="/resources/profile.jpg"
                      alt="Dr. Juan Martín Sztern"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-full"
                      priority
                    />
                    {/* Pop-up effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#8e44ad]/20 to-transparent mix-blend-overlay"></div>
                  </div>
                </div>

                {/* Decorative elements for pop-up effect */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#8e44ad] rounded-full filter blur-[20px] opacity-40"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#3498db] rounded-full filter blur-[15px] opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;