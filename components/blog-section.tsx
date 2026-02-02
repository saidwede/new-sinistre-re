"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const blogPosts = [
    {
        category: "Expertise",
        title: "Comment déchiffrer les garanties complexes de votre contrat d'assurance",
        description: "Apprenez à identifier les clauses cachées qui pourraient limiter votre indemnisation en cas de sinistre majeur.",
        image: "/img/analyse.jpg"
    },
    {
        category: "Conseil",
        title: "Les 5 étapes cruciales à suivre immédiatement après un sinistre",
        description: "Ce que vous faites dans les premières 24 heures peut déterminer le succès ou l'échec de votre demande d'indemnisation.",
        image: "/img/man_stair.jpg"
    },
    {
        category: "Gestion",
        title: "Pourquoi l'expert de votre compagnie n'est pas forcément votre allié",
        description: "Comprendre le rôle de l'expert d'assurance et pourquoi un contre-expertise est souvent indispensable.",
        image: "/img/sensitive.jpg"
    }
];

export function BlogSection() {
    return (
        <section className="py-24 bg-[#F0F0F0]">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header Context */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="mb-16 space-y-4 text-center"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Expertise & Conseils</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-black">
                        Mieux comprendre <br />
                        <span className="text-black/40 font-light">vos droits et vos contrats</span>
                    </h2>
                    <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
                        Découvrez nos derniers articles pour naviguer sereinement dans le monde complexe de l&apos;assurance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="border-6 shadow-lg border-neutral-100 rounded-[24px]">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white border-2 border-white rounded-[20px] overflow-hidden transition-all duration-500 group cursor-pointer h-full"
                            >
                                {/* Card Image */}
                                <div className="relative aspect-4/3 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent"></div>
                                    {/* Category Badge */}
                                    <div className="absolute top-6 right-6">
                                        <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold text-black shadow-sm">
                                            {post.category}
                                        </div>
                                    </div>

                                </div>

                                {/* Card Content */}
                                <div className="p-5 space-y-4">
                                    <h3 className="text-xl font-semibold text-black leading-tight transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-neutral-500 leading-relaxed font-medium">
                                        {post.description}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
