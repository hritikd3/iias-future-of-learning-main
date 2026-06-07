"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Award } from "lucide-react";
import Link from "next/link";

export function SummerCampBanner() {
    const [dismissed, setDismissed] = useState(true); // Default to true to avoid flash
    const [isClient, setIsClient] = useState(false);
    const bannerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsClient(true);
        const isDismissed = localStorage.getItem("nmimsMbaBannerDismissed");
        if (!isDismissed) {
            setDismissed(false);
        }
    }, []);

    useEffect(() => {
        if (!dismissed && bannerRef.current) {
            const height = bannerRef.current.offsetHeight;
            document.documentElement.style.setProperty('--banner-height', `${height}px`);
        } else {
            document.documentElement.style.setProperty('--banner-height', '0px');
        }
    }, [dismissed]);

    const handleDismiss = () => {
        setDismissed(true);
        localStorage.setItem("nmimsMbaBannerDismissed", "true");
    };

    if (!isClient) return null;

    return (
        <AnimatePresence>
            {!dismissed && (
                <motion.div
                    ref={bannerRef}
                    initial={{ y: -65, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -65, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full z-[100] fixed top-0 left-0 border-b border-blue-500/20"
                >
                    <div className="relative overflow-hidden py-3 px-4 min-h-[50px] flex items-center justify-between">
                        {/* Background Cover Image with Blur/Overlay */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center" 
                            style={{ 
                                backgroundImage: `url('https://media.licdn.com/dms/image/v2/C511BAQEQLevtaKkXfA/company-background_10000/company-background_10000/0/1584037072441/nmims_distance_learning_cover?e=2147483647&v=beta&t=K9KV6cnieA_P2Fj-cFMkzAFAsaK6MpatI0nknOP_2oc')` 
                            }} 
                        />
                        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />

                        <div className="max-w-7xl mx-auto w-full relative z-10 flex items-center justify-between gap-4">
                            {/* Banner Content */}
                            <div className="flex items-center gap-3 flex-wrap justify-center flex-1 text-center">
                                <span className="flex items-center gap-1 bg-amber-500/25 border border-amber-400 text-amber-300 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider shrink-0">
                                    <Award size={11} className="fill-amber-300/20" />
                                    UGC-DEB Approved
                                </span>

                                <p className="text-white text-xs sm:text-sm font-medium leading-tight">
                                    🎓 Admissions Open for{" "}
                                    <strong className="font-extrabold text-blue-400">NMIMS Online MBA (Narsee Monjee)</strong>
                                    {" "}— India's Premier NAAC A++ Accredited Management Program.
                                </p>

                                <button
                                    onClick={() =>
                                        window.dispatchEvent(new CustomEvent("toggle-brochure-popup", {
                                            detail: { course: "NMIMS Online MBA" }
                                        }))
                                    }
                                    className="shrink-0 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs px-4 py-1.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md shadow-blue-500/20 cursor-pointer"
                                >
                                    Apply Now &rarr;
                                </button>
                            </div>

                            {/* Close */}
                            <button
                                onClick={handleDismiss}
                                className="shrink-0 text-white/50 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                                aria-label="Dismiss banner"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
