"use client";
import WhatsAppButton from '../ui/WhatsAppButton';

function Terapias() {
  const servicios = [
    {
      id: 4,
      title: 'Tratamiento Articular (ATM)',
      description: 'Tratamiento especializado para problemas de la articulación temporomandibular y trastornos craneomandibulares.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
          {/* Molar con flechas de movimiento */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-1.2 0-2.3.3-3 1-.7.7-1.2 1.8-1.4 3-.2 1.2-.1 2.5.2 3.5.3 1 .8 2 1.2 3 .4 1 .6 2 .8 3 .2 1 .2 2.2.2 3.5 0 1 .5 2 2 2s2-1 2-2c0-1.3 0-2.5.2-3.5.2-1 .4-2 .8-3 .4-1 .9-2 1.2-3 .3-1 .4-2.3.2-3.5-.2-1.2-.7-2.3-1.4-3-.7-.7-1.8-1-3-1z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8l2 2M4 12l2-2M20 8l-2 2M20 12l-2-2" />
        </svg>
      ),
      color: 'bg-[#8e44ad]',
      textColor: 'text-[#8e44ad]',
      borderColor: 'border-[#8e44ad]',
      bgColor: 'bg-[#8e44ad]/10',
    },
    {
      id: 1,
      title: 'Implantes Dentales',
      description: 'Soluciones permanentes para reemplazar dientes perdidos con tecnología de vanguardia y materiales de la más alta calidad.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
          {/* Corona del diente */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 3c0 0 1-1 4-1s4 1 4 1c0 0 1 2 1 4s-.5 3.5-1 4.5c-.5 1-1 1.5-1 1.5H9s-.5-.5-1-1.5c-.5-1-1-2.5-1-4.5s1-4 1-4z" />
          {/* Tornillo implante */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 13h4v2h-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 15l1.5 1.5h3L15 15" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 17l.8.8h2.4l.8-.8" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 18l.5.5h2l.5-.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 19v2M13 19v2" />
        </svg>
      ),
      color: 'bg-[#8e44ad]',
      textColor: 'text-[#8e44ad]',
      borderColor: 'border-[#8e44ad]',
      bgColor: 'bg-[#8e44ad]/10',
    },
    {
      id: 2,
      title: 'Estética Dental',
      description: 'Mejora tu sonrisa con tratamientos personalizados como carillas, blanqueamiento y restauraciones de alta estética.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
          {/* Diente brillante */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2c-1.2 0-2.3.3-3 1-.7.7-1.2 1.8-1.4 3-.2 1.2-.1 2.5.2 3.5.3 1 .8 2 1.2 3 .4 1 .6 2 .8 3 .2 1 .2 2.2.2 3.5 0 1 .5 2 2 2s2-1 2-2c0-1.3 0-2.5.2-3.5.2-1 .4-2 .8-3 .4-1 .9-2 1.2-3 .3-1 .4-2.3.2-3.5-.2-1.2-.7-2.3-1.4-3-.7-.7-1.8-1-3-1z" />
          {/* Brillos */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 4l1.5-1.5M20 6h2M18 8l1.5 1.5" />
          <circle cx="19" cy="6" r="0.5" fill="currentColor" />
        </svg>
      ),
      color: 'bg-[#8e44ad]',
      textColor: 'text-[#8e44ad]',
      borderColor: 'border-[#8e44ad]',
      bgColor: 'bg-[#8e44ad]/10',
    },
    {
      id: 3,
      title: 'Ortodoncia Avanzada',
      description: 'Alineación dental con las técnicas más modernas, incluyendo brackets estéticos y alineadores transparentes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
          {/* Tres dientes con brackets */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 4c-.8 0-1.5.8-1.5 2s.2 2.2.5 3c.3.8.5 1.5.5 2.5V15c0 .5.3 1 1 1s1-.5 1-1v-3.5c0-1 .2-1.7.5-2.5.3-.8.5-1.8.5-3S5.8 4 5 4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-.8 0-1.5.8-1.5 2s.2 2.2.5 3c.3.8.5 1.5.5 2.5V15c0 .5.3 1 1 1s1-.5 1-1v-4.5c0-1 .2-1.7.5-2.5.3-.8.5-1.8.5-3s-.7-2-1.5-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 4c-.8 0-1.5.8-1.5 2s.2 2.2.5 3c.3.8.5 1.5.5 2.5V15c0 .5.3 1 1 1s1-.5 1-1v-3.5c0-1 .2-1.7.5-2.5.3-.8.5-1.8.5-3S19.8 4 19 4z" />
          {/* Brackets */}
          <rect x="4" y="8" width="2" height="2" rx="0.3" strokeWidth={1} />
          <rect x="11" y="7" width="2" height="2" rx="0.3" strokeWidth={1} />
          <rect x="18" y="8" width="2" height="2" rx="0.3" strokeWidth={1} />
          {/* Alambre */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 9h5M13 8h5" />
        </svg>
      ),
      color: 'bg-[#8e44ad]',
      textColor: 'text-[#8e44ad]',
      borderColor: 'border-[#8e44ad]',
      bgColor: 'bg-[#8e44ad]/10',
    },
    {
      id: 5,
      title: 'Rehabilitación Oral',
      description: 'Recupera la funcionalidad y estética de tu boca con tratamientos integrales personalizados.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
          {/* Molar con dos raíces */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 2c-1 0-2 .5-2.5 1.5S4 5.5 4 7c0 1.5.3 2.8.8 3.8.5 1 1 2 1.2 3.2.2 1 .3 2.2.3 3.5 0 1.5.5 2.5 1.7 2.5s1.7-1 1.7-2.5V14" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 2c1 0 2 .5 2.5 1.5S20 5.5 20 7c0 1.5-.3 2.8-.8 3.8-.5 1-1 2-1.2 3.2-.2 1-.3 2.2-.3 3.5 0 1.5-.5 2.5-1.7 2.5s-1.7-1-1.7-2.5V14" />
          {/* Corona conectada */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 2c1.5 0 3 .5 5 .5s3.5-.5 5-.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.7 14h4.6" />
          {/* Herramienta dental */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4" />
        </svg>
      ),
      color: 'bg-[#8e44ad]',
      textColor: 'text-[#8e44ad]',
      borderColor: 'border-[#8e44ad]',
      bgColor: 'bg-[#8e44ad]/10',
    },
    {
      id: 6,
      title: 'Odontología Preventiva',
      description: 'Cuidados preventivos para mantener una buena salud bucal y prevenir problemas futuros.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
          {/* Diente con escudo */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-1.2 0-2.3.3-3 1-.7.7-1.2 1.8-1.4 3-.2 1.2-.1 2.5.2 3.5.3 1 .8 2 1.2 3 .4 1 .6 2 .8 3 .2 1 .2 2.2.2 3.5 0 1 .5 2 2 2s2-1 2-2c0-1.3 0-2.5.2-3.5.2-1 .4-2 .8-3 .4-1 .9-2 1.2-3 .3-1 .4-2.3.2-3.5-.2-1.2-.7-2.3-1.4-3-.7-.7-1.8-1-3-1z" />
          {/* Check dentro */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5 9l1.5 1.5 3-3" />
        </svg>
      ),
      color: 'bg-[#8e44ad]',
      textColor: 'text-[#8e44ad]',
      borderColor: 'border-[#8e44ad]',
      bgColor: 'bg-[#8e44ad]/10',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-[#121212]">
      <div className="container-section">
        <h2 className="section-title text-white">Servicios Odontologicos</h2>
        <p className="section-subtitle">Tratamientos Especializados</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="p-6 rounded-lg border border-gray-800 hover:border-[#8e44ad] transition-all duration-300 bg-[#1a1a1a]"
            >
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${servicio.bgColor}`}>
                <div className="text-[#8e44ad]">
                  {servicio.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white">
                {servicio.title}
              </h3>

              <p className="text-gray-300">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <WhatsAppButton
            variant="button"
            buttonText="Agendar Consulta"
            position="static"
            customClass="font-semibold"
          />
        </div>
      </div>
    </section>
  );
}

export default Terapias;