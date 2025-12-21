"use client";
import Image from 'next/image';

function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20 bg-[#1a1a1a]">
      <div className="container-section">
        <h2 className="section-title text-white">Sobre Mí</h2>
        <p className="section-subtitle">Experiencia y Formación</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center">
          {/* Imagen */}
          <div className="relative flex items-center justify-center order-1 md:order-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#8e44ad] rounded-full filter blur-[100px] opacity-20"></div>

            <div className="relative z-10 bg-[#121212] p-4 rounded-lg shadow-xl transform rotate-2 w-full max-w-sm">
              <div className="aspect-[4/5] w-full rounded overflow-hidden relative">
                <Image
                  src="/resources/profile-2.jpg"
                  alt="Dr. Juan Martín Sztern"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-30"></div>
              </div>

              <div className="mt-3 p-3 bg-[#1a1a1a] rounded">
                <h4 className="text-[#8e44ad] font-semibold">Dr. Juan Martín Sztern</h4>
              </div>
            </div>
          </div>

          {/* Formación */}
          <div className="order-2 md:order-1">
            <div className="bg-[#121212] p-6 rounded-lg border-l-4 border-[#8e44ad]">
              <h3 className="text-xl font-semibold text-white mb-4">Formación Académica</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-[#8e44ad] mr-2">•</span>
                  <span>Especialista en ATM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8e44ad] mr-2">•</span>
                  <span>Diplomado en Ortodoncia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8e44ad] mr-2">•</span>
                  <span>Posgrado en Endodoncia mecanizada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8e44ad] mr-2">•</span>
                  <span>Posgrado de estética dental</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8e44ad] mr-2">•</span>
                  <span>Posgrado en rehabilitación en prótesis fija</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8e44ad] mr-2">•</span>
                  <span>Posgrado de cirugía</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8e44ad] mr-2">•</span>
                  <span>Profesor facultad de odontología UNLP</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;