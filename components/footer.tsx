"use client";

import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-secondary text-white pt-24 pb-12 border-t border-white/10 max-w-full overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:flex justify-between gap-12 lg:gap-24 pb-20 border-b border-white/5">
                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-5 space-y-10">
                        {/* <div className="flex items-center gap-3">
                            <img src="/img/logo2.png" alt="" />
                        </div> */}

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-primary transition-all">
                                    <MapPin className="w-5 h-5 text-white/60 group-hover:text-white" />
                                </div>
                                <div className="space-y-1 pt-1">
                                    <p className="text-sm text-white/40 font-medium uppercase tracking-wider">Adresse</p>
                                    <p className="text-white font-medium">Cotonou, Bénin</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-primary transition-all">
                                    <Phone className="w-5 h-5 text-white/60 group-hover:text-white" />
                                </div>
                                <div className="space-y-1 pt-1">
                                    <p className="text-sm text-white/40 font-medium uppercase tracking-wider">Téléphone</p>
                                    <p className="text-white font-medium">+229 21 00 00 00</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-primary transition-all">
                                    <Mail className="w-5 h-5 text-white/60 group-hover:text-white" />
                                </div>
                                <div className="space-y-1 pt-1">
                                    <p className="text-sm text-white/40 font-medium uppercase tracking-wider">Email</p>
                                    <p className="text-white font-medium">contact@sinistre-re.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-16">
                        {/* Column 1 */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-white">Services</h4>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Suivis</Link></li>
                                <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Gestion de sinistre</Link></li>
                                <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-white">Société</h4>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-white/60 hover:text-white transition-colors">À propos</Link></li>
                                <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Blog</Link></li>
                                <li><Link href="#" className="text-white/60 hover:text-white transition-colors">FAQ</Link></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-white">Légal</h4>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Confidentialité</Link></li>
                                <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Conditions d&apos;utilisation</Link></li>
                                <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Mentions Légales</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-white/40 text-sm order-2 md:order-1">
                        © {new Date().getFullYear()} SINISTRE-RE. Tous droits réservés.
                    </p>

                    <div className="flex items-center gap-6 order-1 md:order-2">
                        <Link href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-all group border border-white/5">
                            <Facebook className="w-5 h-5 text-white/60 group-hover:text-white" />
                        </Link>
                        <Link href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-all group border border-white/5">
                            <Instagram className="w-5 h-5 text-white/60 group-hover:text-white" />
                        </Link>
                        <Link href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-all group border border-white/5">
                            <Twitter className="w-5 h-5 text-white/60 group-hover:text-white" />
                        </Link>
                        <Link href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-all group border border-white/5">
                            <Linkedin className="w-5 h-5 text-white/60 group-hover:text-white" />
                        </Link>
                    </div>

                    <div className="order-3">
                        <div className="flex items-center gap-3">
                            <img src="/img/logo2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
