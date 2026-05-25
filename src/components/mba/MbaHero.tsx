"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star, ArrowRight } from "lucide-react";

export function MbaHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                            <Star size={14} className="fill-blue-700" />
                            Courses from Top Global Universities
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-montserrat font-extrabold text-blue-950 leading-tight mb-6">
                            Upskill. Upgrade. <span className="text-blue-600">Uninterrupted.</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                            Partnered with <span className="font-bold text-slate-800">Leading UGC-Recognized Universities</span>, we bring you world-class Online MBA programs designed for working professionals to future-proof their careers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Button
                                onClick={() => {
                                    const el = document.getElementById('enquiry-form');
                                    el?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-8 text-lg shadow-xl shadow-blue-200 group"
                            >
                                Get Started Now
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    window.dispatchEvent(new CustomEvent("toggle-brochure-popup", {
                                        detail: {
                                            course: "NMIMS Online MBA",
                                            brochureLink: "https://drive.google.com/your-brochure-link-here"
                                        }
                                    }));
                                }}
                                className="rounded-full border-2 border-slate-200 hover:bg-slate-50 text-slate-700 font-bold h-14 px-8 text-lg"
                            >
                                Download Brochure
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-6">
                            {[
                                "NAAC A++ Accredited",
                                "UGC-DEB Recognized",
                                "100% Online Lectures"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                                    <CheckCircle2 size={18} className="text-green-500" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative">
                            <Image
                                src="https://i.ibb.co/YTFdK092/banner-image-BKYu8-QH-1.png"
                                alt="Online MBA Excellence"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 from-blue-900/40 to-transparent" />
                        </div>

                        {/* Stats Card */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 font-bold text-xl">40%</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Average</p>
                                    <p className="text-sm font-bold text-slate-800 leading-tight">Salary Hike Post-MBA</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
