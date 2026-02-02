"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Link, Plus } from "lucide-react";

const claims = [
    {
        title: "Assurance Automobile",
        image: "/img/car2.jpg",
    },
    {
        title: "Assurance Vie",
        image: "/img/death.jpg",
    },
    {
        title: "Assurance Maladie",
        image: "/img/healthcare2.jpg",
    },
    {
        title: "Assurance Risques en Chantier",
        image: "/img/work2.jpg",
    }
];

export function CoveredClaims() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center space-y-4 mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
                        Nos sinistres couverts
                    </h2>
                    <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
                        Une expertise spécialisée pour chaque type de dommage, garantissant une défense optimale de vos intérêts.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {claims.map((claim, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative aspect-4/5 rounded-[32px] overflow-hidden group cursor-pointer shadow-xl"
                        >
                            {/* Background Image */}
                            <Image
                                src={claim.image}
                                alt={claim.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

                            {/* Central Plus Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md  flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/30">
                                    <Plus className="w-8 h-8 text-white stroke-[1px]" />
                                </div>
                            </div>

                            {/* Bottom Title */}
                            <div className="absolute bottom-8 left-0 w-full px-6 text-left">
                                <h3 className="text-2xl font-semibold text-white tracking-tight drop-shadow-lg">
                                    {claim.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 flex font-bold text-primary justify-center"
                >
                    <span>Voir tous les sinistres</span>
                    <ArrowRight className="w-6 h-6 ml-2" />
                </motion.div>
            </div>
        </section>
    );
}
