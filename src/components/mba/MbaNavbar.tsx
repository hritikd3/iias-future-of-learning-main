"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function MbaNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                style={{ top: 'calc(var(--banner-height, 0px))' }}
                className={`fixed left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/mbaprogram" className="flex items-center gap-3">
                        <Image
                            src="https://i.ibb.co/JjjQzzzB/Screenshot-2025-12-17-at-10-45-26-PM.png"
                            alt="IIAS Logo"
                            width={40}
                            height={40}
                            className="rounded-lg object-contain bg-white p-1"
                        />
                        <div className="flex flex-col leading-none">
                            <span className="font-montserrat font-extrabold text-xl tracking-tighter text-blue-900">
                                IIAS
                            </span>
                            <span className="text-[10px] font-poppins font-medium text-blue-600 uppercase tracking-widest">
                                Future of Learning
                            </span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">Features</Link>
                        <Link href="#specializations" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">Specializations</Link>
                        <Link href="#approvals" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">Approvals</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            onClick={() => {
                                const el = document.getElementById('enquiry-form');
                                el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="hidden sm:flex rounded-full bg-blue-600 hover:bg-blue-700 text-white font-montserrat font-bold px-8 shadow-lg shadow-blue-200"
                        >
                            Apply Now
                        </Button>
                        <button
                            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-20 left-4 right-4 z-40 bg-white shadow-2xl rounded-2xl p-6 md:hidden border border-slate-100"
                    >
                        <div className="flex flex-col gap-4">
                            <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-slate-700 py-2 border-b border-slate-50">Features</Link>
                            <Link href="#specializations" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-slate-700 py-2 border-b border-slate-50">Specializations</Link>
                            <Link href="#approvals" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-slate-700 py-2 border-b border-slate-50">Approvals</Link>
                            <Button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    const el = document.getElementById('enquiry-form');
                                    el?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="mt-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold py-6"
                            >
                                Apply Now
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
