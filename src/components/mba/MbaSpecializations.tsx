"use client";

import { motion } from 'framer-motion';
import {
    BarChart3,
    Briefcase,
    Heart,
    Building2,
    Globe2,
    Cpu,
    TrendingUp,
    ShieldCheck
} from "lucide-react";

const specializations = [
    {
        title: "Business Analytics",
        icon: <BarChart3 className="text-blue-600" size={32} />,
        desc: "Master data-driven decision making & predictive modeling."
    },
    {
        title: "Marketing Management",
        icon: <Globe2 className="text-orange-500" size={32} />,
        desc: "Lead modern marketing strategies in a digital world."
    },
    {
        title: "Financial Management",
        icon: <TrendingUp className="text-emerald-500" size={32} />,
        desc: "Understand global markets and corporate finance structure."
    },
    {
        title: "HR Management",
        icon: <Heart className="text-pink-500" size={32} />,
        desc: "Build and manage high-performing organizational teams."
    },
    {
        title: "Operations Management",
        icon: <Briefcase className="text-purple-500" size={32} />,
        desc: "Optimize supply chains and business process excellence."
    },
    {
        title: "IT & Systems",
        icon: <Cpu className="text-cyan-500" size={32} />,
        desc: "Bridge the gap between technology and business strategy."
    },
    {
        title: "Project Management",
        icon: <Building2 className="text-indigo-500" size={32} />,
        desc: "Deliver complex projects on time and within budget."
    },
    {
        title: "Retail Management",
        icon: <ShieldCheck className="text-blue-500" size={32} />,
        desc: "Master the dynamics of modern retail and e-commerce."
    }
];

export function MbaSpecializations() {
    return (
        <section id="specializations" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                        New Age <span className="text-blue-600">Specializations</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Choose a major that aligns with your career goals and industry demands.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {specializations.map((spec, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-slate-50 group-hover:bg-blue-50 transition-colors inline-block text-blue-600">
                                {spec.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{spec.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{spec.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
