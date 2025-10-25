"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-[#121212]/95 backdrop-blur-sm shadow-lg py-3"
            : "bg-transparent py-5"
            }`}>
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white">Dr. Juan Martín</span>
                </Link>

                <nav className="hidden md:flex gap-6">
                    <Link href="/#inicio" className="text-white hover:text-[#8e44ad] transition font-medium">Inicio</Link>
                    <Link href="/#sobre-mi" className="text-white hover:text-[#8e44ad] transition font-medium">Sobre Mí</Link>
                    <Link href="/#servicios" className="text-white hover:text-[#8e44ad] transition font-medium">Servicios</Link>
                    <Link href="/#testimonios" className="text-white hover:text-[#8e44ad] transition font-medium">Testimonios</Link>
                    <Link href="/contacto" className="text-white hover:text-[#8e44ad] transition font-medium">Contacto</Link>
                </nav>

                <button className="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    )
}
export default Header