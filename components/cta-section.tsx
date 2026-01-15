"use client";

import { Phone } from "lucide-react";

export function CtaSection() {
    return (
        <section className="relative w-full overflow-hidden" 
            style={{
                background: "radial-gradient(50% 50% at 50% 50%, #0B2289 0%, #0B2239 100%)"
            }}
        >
            <div className="py-32"
                style={{
                    backgroundImage: "url(https://framerusercontent.com/images/f3nL13iNp1N7Pg6x37FzVgzg.png)",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "left top",
                    backgroundSize: "1200px auto",
                }}
            >
                <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-tight text-center md:text-left">
                        Besoin d&apos;assistance immédiate ?
                    </h2>

                    <a
                        href="tel:01234567890"
                        className="flex items-center gap-3 bg-white text-secondary px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 group"
                    >
                        Appelez-nous 01234567890
                    </a>
                </div>
            </div>
        </section>
    );
}
