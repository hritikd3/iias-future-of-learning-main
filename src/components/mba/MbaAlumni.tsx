"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { Quote } from "lucide-react";

const alumni = [
    {
        name: "Neha Sharma",
        role: "Marketing Manager",
        company: "Tech Mahindra",
        image: "https://i.ibb.co/G4rG9hT/alumni1.webp",
        quote: "The Online MBA program through IIAS gave me the flexibility to learn while I worked. The curriculum is extremely relevant to industry needs.",
        logo: "https://i.ibb.co/hRS5fZ3p/3-r283rw1jqsbe9fl2qep288eu3wv4n5ysaxx4ha7boo.webp"
    },
    {
        name: "Rahul Varma",
        role: "Analytics Lead",
        company: "Deloitte",
        image: "https://i.ibb.co/v4m0s9L/alumni2.webp",
        quote: "Transitioning to a leadership role was possible because of the strategic insights I gained. The network here is phenomenal.",
        logo: "https://i.ibb.co/dJ2pNbBf/2-r283rt816a7jalp66vh6ir4gbr9102nlajyo1gbi7c.webp"
    },
    {
        name: "Priya Singh",
        role: "Product Manager",
        company: "Amazon",
        image: "https://i.ibb.co/9G0pD7v/alumni3.webp",
        quote: "The program reputation and the quality of the online platform exceed expectations. It's a true career accelerator for tech professionals.",
        logo: "https://i.ibb.co/NMZDzT4/5-r283s1okvsj473cvth4tn6zlo83bxcl6bpu1cxyync.webp"
    }
];

export function MbaAlumni() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-4"
                    >
                        Success Stories
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-montserrat"
                    >
                        Our Alumni Work at <span className="text-blue-600">Top Global Companies</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {alumni.map((person, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col"
                        >
                            <Quote size={40} className="text-blue-100 mb-6" />
                            <p className="text-slate-600 font-poppins italic mb-8 flex-1 leading-relaxed">
                                "{person.quote}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-100">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{person.name}</h4>
                                    <p className="text-xs text-slate-500">{person.role} @ {person.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
