"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
    {
        question: "Que faire si je ne comprends pas mon contrat d'assurance ?",
        answer: "Notre équipe d'experts juridiques analyse votre contrat d'assurance pour identifier les garanties, exclusions et clauses importantes. Nous vous expliquons en termes simples vos droits et obligations, et vous conseillons sur les améliorations possibles de votre couverture."
    },
    {
        question: "Comment savoir si mon sinistre est indemnisable ?",
        answer: "Nous étudions les circonstances de votre sinistre au regard de votre contrat d'assurance. Notre expertise nous permet de déterminer rapidement si votre sinistre entre dans le cadre de vos garanties et d'évaluer le montant d'indemnisation auquel vous pouvez prétendre."
    },
    {
        question: "Combien coûtent vos services ?",
        answer: "Nos tarifs varient selon la complexité du dossier et le type de service demandé. Nous proposons une première consultation gratuite pour évaluer votre situation. Nos honoraires sont transparents et convenus à l'avance, avec possibilité de paiement au succès pour certaines prestations."
    },
    {
        question: "Comment fonctionne le service Cash Protection ?",
        answer: "Le service Cash Protection vous garantit une avance immédiate sur votre indemnisation en cas de sinistre couvert. Cette avance vous permet de faire face aux frais urgents en attendant le règlement définitif de votre assureur. Le service est disponible 24h/24 et 7j/7."
    },
    {
        question: "Dans quels pays intervenez-vous ?",
        answer: "SINISTRES-RE intervient dans 15 pays d'Afrique, notamment au Bénin, Côte d'Ivoire, Sénégal, Mali, Burkina Faso, Niger, Togo, Ghana, Guinée, Sierra Leone, Liberia, Gambie, Guinée-Bissau, Cap-Vert et Mauritanie. Notre réseau d'experts locaux nous permet d'offrir un service de proximité."
    }
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto md:px-16 px-8 max-w-4xl">
                <div className="text-center md:mb-16 mb-8">
                    <h2 className="text-xl md:text-xl font-light text-secondary mb-4">
                        FAQ
                    </h2>
                    <p className="text-black text-4xl md:text-5xl">
                        Tout ce que vous devez savoir
                    </p>
                </div>

                <div className="">
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FaqItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
    return (
        <div className="border-b border-gray-300">
            <button
                onClick={onClick}
                className="w-full py-8 flex items-center justify-between text-left group"
            >
                <span className="text-2xl font-light text-black cursor-pointer group-hover:text-inherit">
                    {question}
                </span>

                {/* Plus/Minus Icon */}
                <div className="cursor-pointer relative w-3 h-3 flex items-center bg-neutral-100 p-4 rounded-lg justify-center">
                    <motion.div
                        className="absolute w-3 h-0.5 bg-current rounded-full"
                        animate={{ rotate: 0 }}
                    />
                    <motion.div
                        className="absolute w-3 h-0.5 bg-current rounded-full"
                        initial={false}
                        animate={{ rotate: isOpen ? 0 : 90 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 text-md font-light  text-gray-800 leading-relaxed max-w-3xl">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
