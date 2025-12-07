"use client";
import WhatsAppButton from '../ui/WhatsAppButton';

function Terapias() {
  const servicios = [
    {
      id: 4,
      title: 'Tratamiento Articular (ATM)',
      description: 'Tratamiento especializado para problemas de la articulación temporomandibular y trastornos craneomandibulares.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      color: 'bg-black',
      textColor: 'text-white',
      borderColor: 'border-gray-700',
      bgColor: 'bg-black',
    },
    {
      id: 1,
      title: 'Implantes Dentales',
      description: 'Soluciones permanentes para reemplazar dientes perdidos con tecnología de vanguardia y materiales de la más alta calidad.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
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
              className={`p-6 rounded-lg border border-gray-800 hover:border-[#8e44ad] transition-all duration-300 ${servicio.id === 4 ? 'bg-black' : 'bg-[#1a1a1a]'
                }`}
            >
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${servicio.bgColor}`}>
                <div className={`${servicio.id === 4 ? 'text-white' : 'text-[#8e44ad]'}`}>
                  {servicio.icon}
                </div>
              </div>

              <h3 className={`text-xl font-semibold mb-3 ${servicio.id === 4 ? 'text-white' : 'text-white'}`}>
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