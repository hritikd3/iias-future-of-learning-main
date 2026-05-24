"use client";

import { motion } from 'framer-motion';

const stats = [
    { label: "Active Students", value: "25k+" },
    { label: "Corporate Partners", value: "500+" },
    { label: "Average Hike", value: "40%" },
    { label: "Course Rating", value: "4.8/5" }
];

export function MbaStats() {
    return (
        <section className="py-20 bg-blue-600">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl lg:text-5xl font-montserrat font-extrabold text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-blue-100 font-poppins font-semibold uppercase tracking-widest text-xs">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
