"use client";
import Image from 'next/image';
import { useState } from 'react';

function Testimonios() {
  const testimonios = [
    {
      id: 1,
      nombre: 'Carlos Rodríguez',
      ocupacion: 'Ingeniero',
      texto: 'El Dr. Juan Martín transformó mi sonrisa por completo. Su profesionalismo y atención personalizada hicieron que me sintiera cómodo durante todo el tratamiento de implantes.',
      imagen: '/avatar1.png',
    },
    {
      id: 2,
      nombre: 'Laura Gómez',
      ocupacion: 'Profesora',
      texto: 'Después de años de miedo al dentista, la terapia de desbloqueo emocional del Dr. Juan Martín me ayudó a superar mi ansiedad. Ahora puedo acudir a mis revisiones sin problema.',
      imagen: '/avatar2.png',
    },
    {
      id: 3,
      nombre: 'Martín Fernández',
      ocupacion: 'Empresario',
      texto: 'Los resultados de mi tratamiento de estética dental superaron todas mis expectativas. El Dr. Juan Martín es un verdadero artista y su equipo es excepcional.',
      imagen: '/avatar3.png',
    },
    {
      id: 4,
      nombre: 'Ana Martínez',
      ocupacion: 'Abogada',
      texto: 'Gracias al Dr. Juan Martín, mi ortodoncia fue mucho más cómoda y rápida de lo que esperaba. Su conocimiento y tecnología de vanguardia marcan la diferencia.',
      imagen: '/avatar4.png',
    },
  ];

  const [activeTestimonio, setActiveTestimonio] = useState(0);

  return (
    <section id="testimonios" className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-[#8e44ad] rounded-full filter blur-[100px] opacity-10"></div>
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-[#3498db] rounded-full filter blur-[100px] opacity-10"></div>

      <div className="container-section relative z-10">
        <h2 className="section-title text-white">Testimonios</h2>
        <p className="section-subtitle">Lo que dicen nuestros pacientes</p>

        <div className="mt-12">
          <div className="bg-[#121212] rounded-xl p-6 md:p-10 shadow-lg border border-gray-800">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <div className="aspect-square w-full max-w-[300px] mx-auto bg-gray-800 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-[#8e44ad]/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#8e44ad]">
                          {testimonios[activeTestimonio].nombre.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-[#8e44ad] rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                    </svg>
                  </div>
                </div>

                <div className="mt-8 text-center md:text-left">
                  <h3 className="text-white text-xl font-semibold">{testimonios[activeTestimonio].nombre}</h3>
                  <p className="text-[#8e44ad]">{testimonios[activeTestimonio].ocupacion}</p>
                </div>
              </div>

              <div className="w-full md:w-2/3 flex flex-col justify-between">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#8e44ad" viewBox="0 0 24 24" className="w-12 h-12 opacity-20">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>

                  <p className="text-gray-300 text-lg mt-4 italic">
                    "{testimonios[activeTestimonio].texto}"
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex gap-2">
                    {testimonios.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonio(index)}
                        className={`w-3 h-3 rounded-full ${activeTestimonio === index ? 'bg-[#8e44ad]' : 'bg-gray-700'
                          }`}
                        aria-label={`Ver testimonio ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveTestimonio((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1))}
                      className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white hover:border-[#8e44ad] hover:bg-[#8e44ad]/10 transition-all"
                      aria-label="Testimonio anterior"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setActiveTestimonio((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1))}
                      className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white hover:border-[#8e44ad] hover:bg-[#8e44ad]/10 transition-all"
                      aria-label="Siguiente testimonio"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonios;