"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const steps = [
    {
        number: 1,
        title: "Évaluation initiale",
        description: "Analyse approfondie de votre dossier, de votre contrat d'assurance et de vos garanties réelles pour définir la meilleure stratégie d'indemnisation."
    },
    {
        number: 2,
        title: "Technique & Chiffrage",
        description: "Expertise contradictoire sur le terrain et évaluation précise de l'ensemble de vos dommages directs et immatériels par nos spécialistes."
    },
    {
        number: 3,
        title: "Négociation & Règlement",
        description: "Défense opiniâtre de vos intérêts face à la compagnie pour obtenir l'indemnisation maximale à laquelle vous avez droit."
    }
];

export function ProcessSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight text-center">
                    Notre parcours d&apos;expertise <br />
                    <span className="text-secondary text-2xl md:text-4xl font-light">en 3 étapes clés</span>
                </h2>
            </div>
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-5/4 rounded-[40px] overflow-hidden shadow-2xl hidden lg:block"
                    >
                        <Image
                            src="/img/process.jpg"
                            alt="SINISTRE-RE Expertise Process"
                            fill
                            className="object-cover"
                        />
                        {/* Decorative Overlay */}
                        <div className="absolute inset-0 bg-linear-to-tr from-secondary/20 to-transparent"></div>
                    </motion.div>

                    {/* Right Column: Stepper & CTA */}
                    <div className="space-y-16">
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-6 top-8 bottom-8 w-px bg-blue-100 md:left-8"></div>

                            <div className="space-y-12">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="relative pl-16 md:pl-24 group cursor-default"
                                        onMouseEnter={() => setActiveIndex(index)}
                                    >
                                        {/* Circle Number */}
                                        <div className={`absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold transition-all duration-300 border-4 border-white z-10 
                                            ${activeIndex === index ? "bg-secondary text-white shadow-xl scale-110" : "bg-neutral-50 text-neutral-300"}`}>
                                            {step.number}
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-3">
                                            <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300
                                                ${activeIndex === index ? "text-black" : "text-neutral-400"}`}>
                                                {step.title}
                                            </h3>
                                            <p className={`text-base md:text-lg leading-relaxed max-w-xl transition-colors duration-300
                                                ${activeIndex === index ? "text-neutral-600" : "text-neutral-300"}`}>
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex justify-end"
                        >
                            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-black to-primary text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                                <span className="translate-x-1">Démarrer mon dossier</span>
                                <div  className="w-10 h-10 bg-white rounded-full flex items-center justify-center translate-x-3">
                                    <ArrowRight className="w-4 h-4 -rotate-45 text-black group-hover:translate-x-1 transition-transform" />
                                </div>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
