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
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Dr. Juan Martín Sztern
              <span className="block text-[#8e44ad] mt-2">Especialista en Patología Cráneo-Mandibular (ATM)</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-lg">
              Tratamientos personalizados con enfoque integral, estético y funcional,
              utilizando tecnología de vanguardia para brindar la mejor atención a cada paciente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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

            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#8e44ad] flex items-center justify-center text-white text-sm">
                  JM
                </div>
                <div className="w-10 h-10 rounded-full bg-[#3498db] flex items-center justify-center text-white text-sm">
                  DR
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm">
                  +
                </div>
              </div>
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-white">+1,000 pacientes</span> confían en nosotros
              </p>
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