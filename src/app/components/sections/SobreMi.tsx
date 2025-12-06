"use client";
import Image from 'next/image';

function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20 bg-[#1a1a1a]">
      <div className="container-section">
        <h2 className="section-title text-white">Sobre Mí</h2>
        <p className="section-subtitle">Experiencia y Formación</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <div className="bg-[#121212] p-6 rounded-lg border-l-4 border-[#8e44ad]">
              <h3 className="text-xl font-semibold text-white mb-3">Mi Filosofía</h3>
              <p className="text-gray-300">
                Mi enfoque se basa en una atención integral, estética y funcional, donde cada paciente
                recibe un tratamiento adaptado a sus necesidades específicas. Creo en
                la importancia de la comunicación clara y la educación del paciente
                para lograr los mejores resultados.
              </p>
            </div>

            <div className="bg-[#121212] p-6 rounded-lg border-l-4 border-[#8e44ad]">
              <h3 className="text-xl font-semibold text-white mb-3">Formación Académica</h3>
              <ul className="text-gray-300 space-y-2">
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
                  <span>Posgrado de estetica dental</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8e44ad] mr-2">•</span>
                  <span>Posgrado en rehabilitacion en protesis fija</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8e44ad] mr-2">•</span>
                  <span>Posgrado de cirugia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8e44ad] mr-2">•</span>
                  <span>Profesor facultad de odontologia UNLP</span>
                </li>
              </ul>
            </div>

            
          </div>

          <div className="relative h-full min-h-[400px] flex items-center justify-center">
            <div className="absolute top-0 -left-10 w-72 h-72 bg-[#8e44ad] rounded-full filter blur-[100px] opacity-20"></div>

            <div className="relative z-10 bg-[#121212] p-4 rounded-lg shadow-xl transform rotate-3 w-full max-w-md">
              <div className="aspect-[3/4] w-full rounded overflow-hidden relative">
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

              <div className="mt-4 p-4 bg-[#1a1a1a] rounded">
                <h4 className="text-[#8e44ad] font-semibold">Dr. Juan Martín Sztern</h4>

                <div className="mt-3 flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8e44ad]/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#8e44ad" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#8e44ad]/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#8e44ad" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#8e44ad]/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#8e44ad" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#121212] p-6 rounded-lg text-center">
            <div className="text-[#8e44ad] text-4xl font-bold mb-2">10+</div>
            <p className="text-white">Años de Experiencia</p>
          </div>
          <div className="bg-[#121212] p-6 rounded-lg text-center">
            <div className="text-[#8e44ad] text-4xl font-bold mb-2">300+</div>
            <p className="text-white">Pacientes Satisfechos</p>
          </div>

          <div className="bg-[#121212] p-6 rounded-lg text-center">
            <div className="text-[#8e44ad] text-4xl font-bold mb-2">100%</div>
            <p className="text-white">Compromiso con la Calidad</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;