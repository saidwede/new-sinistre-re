"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Languages, ChevronDown, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
    { code: "FR", label: "Français", flag: "/img/flags/fr.svg" },
    { code: "EN", label: "English", flag: "/img/flags/gb.svg" },
    { code: "BJ", label: "Bénin", flag: "/img/flags/bj.svg" },
];

const menuItems = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/entreprises" },
    { label: "Suivi", href: "/sinistre" },
    { label: "Audit", href: "/particuliers" },
];

export default function TopBar() {
    const [currentLang, setCurrentLang] = useState(languages[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Disable scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-16 md:h-32 bg-white md:bg-transparent">
            <div className="container mx-auto h-full px-4 flex items-center justify-between relative">
                {/* Left: Mobile Menu Button & Logo */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex flex-col gap-1.5 p-2 md:hidden z-60 relative"
                        aria-label="Toggle menu"
                    >
                        <motion.div
                            animate={isMenuOpen ? { rotate: 45, y: 8, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
                            className="h-0.5 bg-black rounded-full"
                        />
                        <motion.div
                            animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0, width: "18px" }}
                            className="h-0.5 bg-black rounded-full"
                        />
                        <motion.div
                            animate={isMenuOpen ? { rotate: -45, y: -8, width: "24px" } : { rotate: 0, y: 0, width: "12px" }}
                            className="h-0.5 bg-black rounded-full"
                        />
                    </button>

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/img/logo.png" alt="Logo" width={50} height={50} className="w-10 h-10 md:w-12 md:h-12" />
                        </Link>
                    </div>
                </div>

                {/* Center: Desktop Menus and Language Switch */}
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-4xl py-4 px-8 border border-white/20 shadow-sm">
                    <div className="flex items-center gap-6 text-md text-black font-medium">
                        {menuItems.map((item) => (
                            <Link key={item.label} href={item.href} className="hover:text-primary transition-colors">
                                {item.label}
                            </Link>
                        ))}
                        <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                            Contact
                        </div>
                    </div>

                    <div className="h-4 w-px bg-gray-200" />

                    {/* Language Switch Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-2 text-sm font-medium text-black cursor-pointer hover:text-primary transition-colors px-2 py-1 rounded-lg hover:bg-gray-50 transition-all"
                        >
                            <Languages className="w-4 h-4" />
                            <span className="hidden lg:inline">{currentLang.code}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                    className="absolute top-full mt-2 left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 overflow-hidden origin-top z-50"
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setCurrentLang(lang);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-gray-50 flex items-center gap-3 ${currentLang.code === lang.code ? "text-primary bg-primary/5 font-semibold" : "text-gray-600"
                                                }`}
                                        >
                                            <div className="relative w-6 h-4 flex-shrink-0 rounded-[2px] overflow-hidden border border-gray-100 shadow-sm">
                                                <Image
                                                    src={lang.flag}
                                                    alt={`${lang.label} flag`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="leading-tight">{lang.label}</span>
                                                <span className="text-[10px] opacity-50 uppercase tracking-wider">{lang.code}</span>
                                            </div>
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>

                {/* Right: Action Button */}
                <div className="flex items-center">
                    <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                        <span>Déclarer un sinistre</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Menu Content */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-white z-50 md:hidden shadow-2xl flex flex-col p-6 pt-24"
                        >
                            <nav className="flex flex-col gap-6">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-2xl font-semibold text-black hover:text-primary transition-colors flex items-center justify-between group"
                                        >
                                            {item.label}
                                            <ChevronDown className="w-5 h-5 -rotate-90 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: menuItems.length * 0.1 }}
                                    className="text-2xl font-semibold text-black hover:text-primary transition-colors cursor-pointer"
                                >
                                    Contact
                                </motion.div>
                            </nav>

                            <div className="mt-auto pt-10 border-t border-gray-100">
                                <p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-widest">Langue</p>
                                <div className="grid grid-cols-1 gap-3">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setCurrentLang(lang);
                                                setIsMenuOpen(false);
                                            }}
                                            className={`flex items-center gap-4 p-3 rounded-xl transition-all ${currentLang.code === lang.code ? "bg-primary/5 text-primary border border-primary/10" : "hover:bg-gray-50 text-gray-600"}`}
                                        >
                                            <div className="relative w-8 h-5 rounded-[2px] overflow-hidden border border-gray-100">
                                                <Image src={lang.flag} alt={lang.label} fill className="object-cover" />
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <span className="font-semibold">{lang.label}</span>
                                                <span className="text-[10px] uppercase opacity-50">{lang.code}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
