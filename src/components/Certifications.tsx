"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Globe, Rocket } from "lucide-react";

const points = [
  {
    title: "Global Recognition",
    description:
      "Get certified by world-renowned institutions and gain an edge in the global job market.",
    icon: Globe,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Career Growth",
    description:
      "Unlock high-paying career opportunities with certifications that industry leaders trust.",
    icon: Briefcase,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Expert Mentorship",
    description:
      "Learn from industry experts who guide you through every step of your certification journey.",
    icon: Award,
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Hands-on Projects",
    description:
      "Apply your learning to real-world scenarios with projects designed by tech professionals.",
    icon: Rocket,
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

export const Certifications = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/60">
            Unlock exclusive Career Opportunities{" "}
            <br className="hidden md:block" />
            with global certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our certification programs are designed to transform your career and
            help you stand out in the competitive tech landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-2xl border border-white/10 bg-gradient-to-br ${point.color} backdrop-blur-sm group transition-all duration-300 hover:border-white/20`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <point.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {point.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
};
