"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AlertCircle, Clock, TrendingDown, UserX } from "lucide-react";

const problems = [
    {
        icon: <AlertCircle className="w-8 h-8 text-white" />,
        title: "Procédures complexes",
        description: "Un labyrinthe administratif conçu pour décourager les plus persévérants."
    },
    {
        icon: <Clock className="w-8 h-8 text-white" />,
        title: "Délais interminables",
        description: "Des mois d'attente qui mettent à mal votre trésorerie et votre patience."
    },
    {
        icon: <TrendingDown className="w-8 h-8 text-white" />,
        title: "Offres d'indemnisation minimisées",
        description: "Des propositions chiffrées bien en-deçà de la réalité de vos préjudices."
    },
    {
        icon: <UserX className="w-8 h-8 text-white" />,
        title: "Manque d'accompagnement réel",
        description: "Le sentiment d'être seul face à une machine bureaucratique impersonnelle."
    }
];

export function ProblemSection() {
    return (
        <section className="py-24 bg-neutral-950 text-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header Context */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 space-y-4 text-center lg:text-left"
                >
                    <span className="text-white font-bold tracking-widest uppercase text-sm">Le constat</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-4xl">
                        Face aux assurances, <br />
                        <span className="text-white/40 font-light">le rapport de force est déséquilibré</span>
                    </h2>
                </motion.div>

                {/* Bento Grid Layout - Illustration on the Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Problem Points Tiles (Left Side) */}
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-[20px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between group h-full"
                        >
                            <div className="p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                                {problem.icon}
                            </div>
                            <div className="mt-8 space-y-3">
                                <h3 className="text-2xl font-bold tracking-tight  transition-colors line-clamp-2">
                                    {problem.title}
                                </h3>
                                <p className="text-neutral-400 text-base leading-relaxed line-clamp-3">
                                    {problem.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Right-Side Large Illustration - Now narrower on large screens */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-2 lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1 relative rounded-[20px] overflow-hidden group shadow-2xl min-h-[320px] lg:min-h-full"
                    >
                        <Image
                            src="/img/problem-impact.png"
                            alt="Insurance Power Imbalance"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
