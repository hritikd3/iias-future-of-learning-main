"use client";

import Image from "next/image";
import { motion } from 'framer-motion';

const universities = [
    {
        name: "NMIMS",
        logo: "https://i.ibb.co/XrF65ZQg/nmims-1.webp"
    },
    {
        name: "SAGE University",
        logo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ3lss2DXQfts17XIw5OLCqCla-sjSJkQFHCg6uS2x3f6jfX1zS"
    },
    {
        name: "Oriental University",
        logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png"
    },
    {
        name: "Prestige University",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKdyNG5oADapZX4CXzyo4RTJrXq5qyDNK8w&s"
    },
    {
        name: "Medi-Caps University",
        logo: "https://iazmddxlwhbhgwdrfqbo.supabase.co/storage/v1/object/public/college-assets/logos/0.7357250115792726.png"
    },
    {
        name: "Symbiosis University",
        logo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROsXCGOpOasMA4H9w6jtFn9r1wYzo0-I6iNvZ_SAdUSWoTjIfY"
    },
    {
        name: "Acropolis University",
        logo: "https://media.licdn.com/dms/image/v2/D560BAQGquDIJ47PWBg/company-logo_200_200/B56ZWOP7SWHQAI-/0/1741848294872?e=2147483647&v=beta&t=yiP205OnQL4udtHnosyzaSfGKGrofGy4Bj1-bGbmwTk"
    }
];

export function MbaPartners() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-4"
                    >
                        Our Partnerships
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-montserrat"
                    >
                        Online & Distance <span className="text-blue-600">Education Universities</span>
                    </motion.h2>
                    <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                        Explore the Information for higher Education through Distance/Online University in India
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
                    {universities.map((uni, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center justify-center w-32 h-32 md:w-40 md:h-40 grayscale hover:grayscale-0"
                        >
                            <div className="relative w-full h-full p-2">
                                <Image
                                    src={uni.logo}
                                    alt={uni.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
