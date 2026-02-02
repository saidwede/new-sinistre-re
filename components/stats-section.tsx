"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    {
        value: 50,
        prefix: "+",
        label: "Partenaires stratégiques"
    },
    {
        value: 15,
        prefix: "+",
        label: "Sinistres évalués"
    },
    {
        value: 15,
        label: "Pays d'intervention"
    },
    {
        value: 15,
        prefix: "+",
        label: "Demande d'indemnisation"
    }
];

function Counter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });

    useEffect(() => {
        if (inView) {
            animate(count, target, { duration: 2, ease: "easeOut" });
        }
    }, [inView, count, target]);

    return (
        <span ref={ref}>
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

export function StatsSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Top Row: Heading and Image */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6 lg:col-span-2"
                    >
                        <h2 className="text-3xl md:text-3xl lg:text-4xl font-normal text-black leading-[1.15] tracking-tight">
                            Des particuliers aux professionnels aguerris, nous créons des plans sur mesure <span className="text-gray-400">conçus pour vous aider à débloquer votre plein potentiel et réussir vos démarches.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative aspect-[16/9] lg:aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/img/force.jpg"
                            alt="Expert SINISTRE-RE"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>

                {/* Bottom Row: Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="pt-8 border-t border-gray-200 space-y-2"
                        >
                            <div className="text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight">
                                <Counter target={stat.value} prefix={stat.prefix} />
                            </div>
                            <div className="text-sm md:text-base font-light tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
