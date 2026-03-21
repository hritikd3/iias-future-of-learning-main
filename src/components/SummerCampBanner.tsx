"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CalendarDays } from "lucide-react";

export function SummerCampBanner() {
    const [dismissed, setDismissed] = useState(false);

    return (
        <AnimatePresence>
            {!dismissed && (
                <motion.div
                    initial={{ y: -60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full z-[80] relative"
                >
                    <div className="relative bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 overflow-hidden">
                        {/* Animated shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]" />

                        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
                            {/* Content */}
                            <div className="flex items-center gap-2.5 flex-wrap justify-center flex-1 text-center">
                                <span className="flex items-center gap-1.5 bg-white/20 rounded-full px-2.5 py-0.5 text-white text-[11px] font-bold uppercase tracking-wider shrink-0">
                                    <Sparkles size={11} />
                                    New
                                </span>

                                <p className="text-white text-sm font-semibold leading-tight">
                                    🏕️ Register for our{" "}
                                    <strong className="font-extrabold text-yellow-300">2026 Summer Camp</strong>
                                    {" "}— Free Workshop &amp; Counselling Included!
                                </p>

                                <span className="hidden sm:flex items-center gap-1 text-white/80 text-xs shrink-0">
                                    <CalendarDays size={13} />
                                    Starts April 1st
                                </span>

                                <button
                                    onClick={() =>
                                        window.dispatchEvent(new CustomEvent("toggle-enquiry-popup"))
                                    }
                                    className="shrink-0 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xs px-4 py-1.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-yellow-400/30"
                                >
                                    Register Free →
                                </button>
                            </div>

                            {/* Close */}
                            <button
                                onClick={() => setDismissed(true)}
                                className="shrink-0 text-white/60 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
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
