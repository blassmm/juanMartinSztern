"use client";
import Inicio from "./sections/Inicio";
import SobreMi from "./sections/SobreMi";
import Terapias from "./sections/Terapias";
import Testimonios from "./sections/Testimonios";
import Footer from "./Footer";
import WhatsAppButton from "./ui/WhatsAppButton";

function Main() {
  return (
    <>
      <main className="pt-16">
        <Inicio />
        <SobreMi />
        <Terapias />
        <Testimonios />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </main>
      <Footer />
    </>
  )
}
export default Main