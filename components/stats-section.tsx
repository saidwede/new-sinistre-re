"use client";

import Image from "next/image";

const stats = [
    {
        value: "+50",
        label: "Partenaires stratégiques"
    },
    {
        value: "+15",
        label: "Sinistres évalués"
    },
    {
        value: "15",
        label: "Pays d'intervention"
    },
    {
        value: "+15",
        label: "Demande d'indemnisation"
    }
];

export function StatsSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Top Row: Heading and Image */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 items-center mb-24">
                    <div className="space-y-6 lg:col-span-2">
                        <h2 className="text-3xl md:text-3xl lg:text-4xl font- text-black leading-[1.15] tracking-tight">
                            Des particuliers aux professionnels aguerris, nous créons des plans sur mesure <span className="text-gray-400">conçus pour vous aider à débloquer votre plein potentiel et réussir vos démarches.</span>
                        </h2>
                    </div>

                    <div className="relative aspect-[16/9] lg:aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                        <Image
                            src="/img/stats.jpg"
                            alt="Expert SINISTRE-RE"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Bottom Row: Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="pt-8 border-t border-gray-200 space-y-2">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base  font-light tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
