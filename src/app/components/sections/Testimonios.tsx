"use client";
import { useState, useRef, useEffect } from 'react';

function Testimonios() {
  const testimonios = [
    {
      id: 1,
      nombre: 'Nicolás Racero',
      texto: 'Pudo recuperar su confianza al sonreír con su tratamiento de ortodoncia.',
      video: '/testimonios/1-Nicolás-Racero.webm',
    },
    {
      id: 2,
      nombre: 'Catalina Altieri',
      texto: 'Tenía mucho dolor, debido a un trastorno de articulación temporomandibular.',
      video: '/testimonios/2-Catalina-Altieri.webm',
    },
    {
      id: 3,
      nombre: 'Santiago Paoli',
      texto: 'Mejoró su sonrisa utilizando nuestros alineadores digitales.',
      video: '/testimonios/3-Santiago-Paoli.webm',
    },
    {
      id: 4,
      nombre: 'Mariana Arias',
      texto: 'Se realizó un tratamiento de conducto debido a un dolor muy fuerte en una pieza dentaria.',
      video: '/testimonios/4-Mariana Arias.webm',
    },
  ];

  const [activeTestimonio, setActiveTestimonio] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [activeTestimonio]);

  return (
    <section id="testimonios" className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-[#8e44ad] rounded-full filter blur-[100px] opacity-10"></div>
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-[#3498db] rounded-full filter blur-[100px] opacity-10"></div>

      <div className="container-section relative z-10">
        <h2 className="section-title text-white">Testimonios</h2>
        <p className="section-subtitle">Lo que dicen nuestros pacientes</p>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-[#121212] rounded-xl overflow-hidden shadow-lg border border-gray-800">
            {/* Video principal */}
            <div className="relative w-full aspect-[9/16] sm:aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-contain bg-black"
                controls
                autoPlay
                muted
                playsInline
              >
                <source src={testimonios[activeTestimonio].video} type="video/webm" />
                Tu navegador no soporta videos.
              </video>
            </div>

            {/* Info y controles */}
            <div className="p-4 md:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-lg font-semibold">{testimonios[activeTestimonio].nombre}</h3>
                  <p className="text-gray-400 text-sm truncate">{testimonios[activeTestimonio].texto}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    {testimonios.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonio(index)}
                        className={`w-2 h-2 rounded-full transition-all ${activeTestimonio === index ? 'bg-[#8e44ad] w-4' : 'bg-gray-600'}`}
                        aria-label={`Ver testimonio ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-1">
                    <button
                      onClick={() => setActiveTestimonio((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1))}
                      className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-white hover:border-[#8e44ad] hover:bg-[#8e44ad]/10 transition-all"
                      aria-label="Testimonio anterior"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setActiveTestimonio((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1))}
                      className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-white hover:border-[#8e44ad] hover:bg-[#8e44ad]/10 transition-all"
                      aria-label="Siguiente testimonio"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
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