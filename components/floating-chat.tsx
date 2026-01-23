"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, X, Send } from "lucide-react";
import { useState } from "react";

export function FloatingChat() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-2 w-80 border border-gray-100"
                    >
                        {/* Header */}
                        <div className="bg-primary p-6 text-white">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg leading-none">Assistant IA</h3>
                                        <p className="text-white/70 text-xs mt-1">En ligne • Réponse instantanée</p>
                                    </div>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-6 space-y-4 bg-gray-50/50">
                            <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none mr-8">
                                <p className="text-neutral-600 text-sm">
                                    Bonjour ! Je suis votre assistant virtuel spécialisé en gestion de sinistres. Comment puis-je vous aider aujourd&apos;hui ?
                                </p>
                            </div>

                            <button
                                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3.5 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20 group"
                            >
                                <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                                Démarrer l&apos;IA
                            </button>
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest font-medium">
                                Propulsé par SINISTRE-RE AI
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen ? "bg-black text-white" : "bg-primary text-white ring-4 ring-primary/20"
                    }`}
            >
                {isOpen ? (
                    <X className="w-8 h-8" />
                ) : (
                    <div className="relative">
                        <Sparkles className="w-8 h-8" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                        </span>
                    </div>
                )}
            </motion.button>
        </div>
    );
}
