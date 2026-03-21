"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Home, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ThankYouPage() {
    return (
        <main className="min-h-screen text-white relative">
            <div className="gradient-blur-1" />
            <div className="gradient-blur-2" />
            <div className="gradient-blur-3" />

            <Navbar />

            <section className="pt-32 pb-20 px-6 relative z-10 flex items-center justify-center min-h-[80vh]">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", damping: 15, stiffness: 200 }}
                        className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30"
                    >
                        <CheckCircle2 className="text-green-500 w-12 h-12" />
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-extrabold font-heading mb-6"
                    >
                        Thank You for <span className="text-gradient">Enquiring!</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-muted-foreground mb-12"
                    >
                        Your request has been received. Our expert admission counselor will contact you within <strong className="text-white">24 hours</strong> to discuss your career goals.
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link href="/">
                            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full transition-all border border-white/10 group">
                                <Home size={20} />
                                Back to Home
                            </button>
                        </Link>
                        <a
                            href="https://wa.me/919174171579"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white px-8 py-4 rounded-full transition-all shadow-xl shadow-green-500/20 group"
                        >
                            <MessageCircle size={20} />
                            Chat on WhatsApp
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-16 p-8 glass-card rounded-3xl border border-white/10 max-w-lg mx-auto"
                    >
                        <p className="text-sm text-muted-foreground">
                            While you wait, feel free to explore our latest curriculum updates or follow us on Instagram for daily tech insights.
                        </p>
                        <div className="mt-4 flex justify-center gap-6">
                            <Link href="/courses" className="text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-4">View Courses</Link>
                            <a href="https://instagram.com/iias_officials" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-4">Instagram</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
