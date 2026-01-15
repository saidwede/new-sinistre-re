"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Languages, ChevronDown, PlusCircle } from "lucide-react";
import Image from "next/image";

const languages = [
    { code: "FR", label: "Français", flag: "/img/flags/fr.svg" },
    { code: "EN", label: "English", flag: "/img/flags/gb.svg" },
    { code: "BJ", label: "Bénin", flag: "/img/flags/bj.svg" },
];

export default function TopBar() {
    const [currentLang, setCurrentLang] = useState(languages[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-32">
            <div className="container mx-auto h-full px-4 flex items-center justify-between">
                {/* Left: Logo */}
                <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/img/logo.png" alt="Logo" width={50} height={50} />
                    </Link>
                </div>

                {/* Center: Menus and Language Switch */}
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-4xl py-4 px-8">
                    <div className="flex items-center gap-6 text-md text-black font-medium">
                        <Link href="/" className="hover:text-primary transition-colors">
                            Accueil
                        </Link>
                        <Link href="/entreprises" className="hover:text-primary transition-colors">
                            Services
                        </Link>
                        <Link href="/sinistre" className="hover:text-primary transition-colors">
                            Suivi
                        </Link>
                        <Link href="/particuliers" className="hover:text-primary transition-colors">
                            Audit
                        </Link>
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

                        {isDropdownOpen && (
                            <div className="absolute top-full mt-2 left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top">
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
                            </div>
                        )}
                    </div>
                </nav>

                {/* Right: Action Button */}
                <div className="flex items-center">
                    <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                        <span>Déclarer un sinistre</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
