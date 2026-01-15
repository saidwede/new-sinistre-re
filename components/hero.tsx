"use client";

import Image from "next/image";
import { HeroAccordion } from "./hero-accordion";

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-white py-12 lg:py-20">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Side: Text and Branding */}
                <div className="relative z-10 space-y-10 animate-in slide-in-from-left duration-700">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 text-secondary text-sm font-semibold tracking-wide uppercase">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            #1 Gestion de Sinistre en Afrique
                        </div>

                        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-black leading-[1.1] tracking-tight">
                            Obtenez <br />
                            l’indemnisation <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-primary">
                                que vous méritez
                            </span>
                        </h1>

                        <p className="text-md text-black max-w-lg leading-relaxed font-">
                            Nos experts vous accompagnent à chaque étape pour défendre vos intérêts et maximiser votre indemnisation face aux assurances.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-black to-primary text-white font-medium text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 group">
                            Déclarer un sinistre
                        </button>
                        <button className="px-8 py-4 rounded-full border-1 border-gray-300 text-black font-medium text-sm hover:bg-gray-50 transition-all active:scale-95">
                            Faire un suivi
                        </button>
                    </div>

                    <div className="pt-8 flex items-center gap-6">
                        <div className="flex -space-x-3 overflow-hidden">
                            {['cm', 'cf', 'cg', 'ci', 'ga', 'gq', 'ml', 'ne', 'bf', 'bj'].map((code) => (
                                <div key={code} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden relative shadow-sm hover:z-10 transition-all duration-300 hover:scale-110">
                                    <Image
                                        src={`/img/flags/${code}.svg`}
                                        alt={`${code} flag`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 font-medium">
                            <span className="text-secondary font-bold">+500 dossiers</span> réglés en Afrique
                        </p>
                    </div>
                </div>

                {/* Right Side: Animated Accordion */}
                <HeroAccordion />
            </div>
        </section>
    );
}
