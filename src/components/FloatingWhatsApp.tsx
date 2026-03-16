"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919136084736";
const WHATSAPP_MESSAGE = encodeURIComponent(
    "Hello! I'm interested in knowing more about IIAS courses. Can you help me?"
);

export function FloatingWhatsApp() {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const [hasShownOnce, setHasShownOnce] = useState(false);

    // Auto-show tooltip after 8 seconds, once
    useEffect(() => {
        if (hasShownOnce) return;
        const timer = setTimeout(() => {
            setIsTooltipOpen(true);
            setHasShownOnce(true);
        }, 8000);
        return () => clearTimeout(timer);
    }, [hasShownOnce]);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

    return (
        <div className="fixed left-4 bottom-6 z-[90] flex flex-col items-start gap-3">
            {/* Tooltip Card */}
            <AnimatePresence>
                {isTooltipOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: -20, scale: 0.92 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -20, scale: 0.92 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        className="relative bg-[#0f0f0f] border border-white/10 rounded-2xl p-5 w-72 shadow-2xl shadow-black/60"
                    >
                        {/* Close */}
                        <button
                            onClick={() => setIsTooltipOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors p-1"
                        >
                            <X size={14} />
                        </button>

                        {/* Header */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/30">
                                {/* WhatsApp SVG icon */}
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-white text-sm leading-tight">Chat with us! 👋</p>
                                <p className="text-gray-400 text-xs">IIAS Counselling Team</p>
                            </div>
                        </div>

                        {/* Body */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            Get instant answers about our courses, fees, and admission process. Fast response guaranteed!
                        </p>

                        {/* Status */}
                        <div className="flex items-center gap-1.5 mb-4">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-green-400 text-xs font-semibold">Usually replies in minutes</span>
                        </div>

                        {/* CTA */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsTooltipOpen(false)}
                            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold py-3 rounded-xl transition-all text-sm"
                        >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Start Conversation
                        </a>

                        {/* Arrow pointing down-left to button */}
                        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-[#0f0f0f] border-b border-l border-white/10 rotate-[-45deg]" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main WhatsApp Button */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring", damping: 15, stiffness: 200 }}
                className="relative"
            >
                {/* Ripple pulse */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-10" style={{ animationDelay: "0.5s" }} />

                <button
                    onClick={() => setIsTooltipOpen((prev) => !prev)}
                    className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] flex items-center justify-center shadow-xl shadow-green-500/40 transition-all duration-200 hover:scale-110 active:scale-95"
                    aria-label="Chat on WhatsApp"
                >
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>

                    {/* Notification dot */}
                    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full border-2 border-black flex items-center justify-center">
                        <span className="text-[8px] font-black text-white leading-none">1</span>
                    </span>
                </button>
            </motion.div>
        </div>
    );
}
