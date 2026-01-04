"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const partners = [
  "Microsoft",
  "Google",
  "AWS",
  "IBM",
  "Oracle",
  "Cisco",
  "Meta",
  "Intel",
  "Salesforce",
  "Adobe",
];

export const Partners = () => {
  return (
    <section className="py-20 bg-white/5 backdrop-blur-md border-y border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          <p className="text-gray-400">
            Collaborating with global tech giants to bring you the best in
            education.
          </p>
        </motion.div>
      </div>

      <Marquee
        gradient={true}
        gradientColor="transparent"
        speed={50}
        pauseOnHover={true}
        className="py-4"
      >
        {partners.map((partner, index) => (
          <div
            key={index}
            className="mx-12 text-2xl font-bold text-white/40 hover:text-white transition-colors cursor-default whitespace-nowrap"
          >
            {partner}
          </div>
        ))}
      </Marquee>
    </section>
  );
};
