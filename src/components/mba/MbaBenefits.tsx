"use client";

import { motion } from 'framer-motion';
import {
    Users2,
    Lightbulb,
    Target,
    Rocket
} from "lucide-react";

const benefits = [
    {
        title: "World Class Faculty",
        desc: "Learn from industry veterans and academic experts from around the globe.",
        icon: <Users2 size={24} />,
        color: "blue"
    },
    {
        title: "Innovative LMS",
        desc: "Experience a seamless digital platform for live & recorded lectures.",
        icon: <Lightbulb size={24} />,
        color: "orange"
    },
    {
        title: "Placement Assistance",
        desc: "Access a network of 500+ corporate partners for career growth.",
        icon: <Target size={24} />,
        color: "emerald"
    },
    {
        title: "Flexible Learning",
        desc: "Study at your own pace with weekend exams and 24/7 support.",
        icon: <Rocket size={24} />,
        color: "purple"
    }
];

export function MbaBenefits() {
    return (
        <section id="features" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                        The <span className="text-blue-600">IIAS Advantage</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Why thousands of professionals choose IIAS and our partner universities for their management education.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 relative group overflow-hidden"
                        >
                            <div className="mb-6 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
