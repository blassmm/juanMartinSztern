"use client";
import Inicio from "./sections/Inicio";
import SobreMi from "./sections/SobreMi";
import Terapias from "./sections/Terapias";
import Testimonios from "./sections/Testimonios";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <main className="pt-16">
        <Inicio />
        <SobreMi />
        <Terapias />
        <Testimonios />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/592213523273?text=Hola%20Juan%20Martin!%20te%20escribo%20porque%20me%20intereso..."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 z-50"
          aria-label="Contactar por WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M12 3.8C16.53 3.8 20.2 7.47 20.2 12C20.2 16.53 16.53 20.2 12 20.2C10.34 20.2 8.81 19.7 7.54 18.82L4.2 19.74L5.12 16.4C4.24 15.13 3.74 13.6 3.74 12C3.74 7.47 7.47 3.8 12 3.8M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
          </svg>
        </a>
      </main>
      <Footer />
    </>
  )
}
export default Main