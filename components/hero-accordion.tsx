"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Scale, MousePointer2 } from "lucide-react";

const accordionItems = [
    {
        id: "expertise",
        title: "Expertise & Audit",
        description: "Analyse approfondie de votre contrat pour identifier toutes les garanties applicables et maximiser vos droits.",
        icon: <ShieldCheck className="w-6 h-6" />,
        bgImage: "/img/hero-image.jpg"
    },
    {
        id: "negotiation",
        title: "Négociation Active",
        description: "Gestion directe et proactive avec les assureurs pour obtenir les meilleures conditions d'indemnisation possibles.",
        icon: <Scale className="w-6 h-6" />,
        bgImage: "/img/negotiation-bg.png"
    },
    {
        id: "digital",
        title: "Suivi Digital",
        description: "Accès en temps réel à l'avancement de votre dossier via notre plateforme intuitive et sécurisée.",
        icon: <MousePointer2 className="w-6 h-6" />,
        bgImage: "/img/digital-bg.png"
    }
];

export function HeroAccordion() {
    const [expandedId, setExpandedId] = useState<string | null>("expertise");
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setExpandedId((prev) => {
                const currentIndex = accordionItems.findIndex((item) => item.id === prev);
                const nextIndex = (currentIndex + 1) % accordionItems.length;
                return accordionItems[nextIndex].id;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <div
            className="relative flex flex-col lg:flex-row h-[500px] lg:h-[680px] gap-2 lg:gap-2 animate-in slide-in-from-right duration-700"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {accordionItems.map((item) => {
                const isExpanded = expandedId === item.id;
                return (
                    <motion.div
                        key={item.id}
                        layout
                        onClick={() => setExpandedId(item.id)}
                        className={`relative cursor-pointer rounded-[32px] overflow-hidden border border-gray-100 flex transition-all duration-700 ${isExpanded
                            ? "flex-[3] shadow-2xl shadow-gray-400/20"
                            : "flex-1 hover:bg-gray-50 bg-white shadow-sm"
                            }`}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={item.bgImage}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-1000"
                            />
                            {/* Overlay */}
                            <div className={`absolute inset-0 transition-opacity duration-700 ${isExpanded ? "bg-black/30" : "bg-black/10 hover:bg-black/20"}`} />
                        </div>

                        {/* Combined Title and Content Container */}
                        <motion.div
                            layout
                            animate={{
                                padding: isExpanded ? "2.5rem" : "0rem",
                                justifyContent: isExpanded ? "flex-end" : "center",
                                alignItems: isExpanded ? "flex-start" : "center",
                            }}
                            className="absolute inset-0 z-20 flex flex-col"
                            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                        >
                            <motion.h3
                                layout
                                className="
                                    m-0 text-lg lg:text-3xl font-bold text-white uppercase tracking-wider whitespace-nowrap 
                                    origin-right absolute left-[25px] top-[25px]
                                "
                                animate={{
                                    top: isExpanded ? '25px' : "30%",
                                    transform: isExpanded ? "translateX(0px) rotate(0deg)" : "translateX(calc(-100% + 50px)) translateY(-100%) rotate(-90deg)",
                                }}
                                transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
                            >
                                {item.title}
                            </motion.h3>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
                                transition={{ duration: isExpanded ? 0.5 : 0, delay: isExpanded ? 0.5 : 0 }}
                                className="mt-8 max-w-md absolute bottom-4 left-4"
                            >
                                <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-8 font-medium">
                                    {item.description}
                                </p>
                                <button className="flex items-center gap-2 bg-white text-black px-4 py-1 rounded-full font-medium text-sm transition-all cursor-pointer w-fit shadow-lg">
                                    <span className="text-black translate-x-3">Détails</span>
                                    <div  className="w-10 h-10 bg-black rounded-full flex items-center justify-center translate-x-3">
                                        <ArrowRight className="w-4 h-4 -rotate-45 text-white transition-transform" />
                                    </div>
                                </button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
}
