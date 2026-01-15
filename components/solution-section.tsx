"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Shield, Users, LineChart } from "lucide-react";

const solutions = [
    {
        icon: <Shield className="w-8 h-8 text-black" />,
        title: "Audit proactif",
        description: "Identification des risques et optimisation de vos contrats d'assurance."
    },
    {
        icon: <LineChart className="w-8 h-8 text-black" />,
        title: "Plateforme de gestion",
        description: "Suivi digital, transparent et en temps réel de tous vos dossiers de sinistres."
    },
    {
        icon: <Users className="w-8 h-8 text-black" />,
        title: "Équipe d'experts",
        description: "Une expertise technique rigoureuse, totalement libre de tout conflit d'intérêt."
    },
    {
        icon: <CheckCircle2 className="w-8 h-8 text-black" />,
        title: "Défense active",
        description: "Une négociation ferme et déterminée pour faire valoir l'intégralité de vos droits."
    }
];

export function SolutionSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 "
                >
                    <div className="text-primary text-center font-bold tracking-widest uppercase text-sm">Notre solution</div>
                    <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-neutral-900 mb-14">
                        Nous défendons vos intérêts, <br />
                        <span className="text-primary">de A à Z</span>
                    </h2>
                    {/* <p className="text-center text-xl text-neutral-500">
                        Une approche globale et personnalisée pour transformer un sinistre en une indemnisation optimale.
                    </p> */}
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Reassuring Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: -30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative h-full rounded-[20px] overflow-hidden shadow-2xl order-2 lg:order-1"
                    >
                        <Image
                            src="/img/solution-expert.png"
                            alt="Expert Team Defending Your Interests"
                            fill
                            className="object-cover"
                        />
                        {/* Subtle Professional Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-transparent"></div>
                    </motion.div>

                    {/* Right Column: Solution Content */}
                    <div className="space-y-12 order-1 lg:order-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {solutions.map((solution, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className="space-y-4 group"
                                >
                                    <div className="p-4 bg-black/5 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-black/10 transition-all">
                                        {solution.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900">{solution.title}</h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed">
                                        {solution.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bold Outro Statement */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="p-8 rounded-[32px] bg-neutral-900 text-white flex items-center gap-6 shadow-xl shadow-neutral-950/10"
                        >
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-8 h-8 text-white" />
                            </div>
                            <p className="text-xl md:text-2xl font-bold">
                                Objectif : <span className="text-red-300">Indemnisation juste</span> et complète.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
