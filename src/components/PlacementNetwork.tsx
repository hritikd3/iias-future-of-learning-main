"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const designPartners = [
  "Tata Elxsi",
  "IDEO India",
  "Accenture Song",
  "Landor & Fitch",
  "Ogilvy India",
  "Wunderman Thompson",
  "Leo Burnett",
  "Dentsu Creative",
  "Design Factory India",
  "Raymond Design Studio",
  "Aditya Birla Fashion & Retail Ltd.",
  "Myntra Design Team",
  "Ajio Design & Styling",
  "Pepperfry Design Studio",
  "Urban Ladder Design Team",
  "Nykaa Creative Studio",
  "Titan Design Studio",
  "Reliance Retail Design",
  "Shoppers Stop Visual Merchandising",
  "Studio Lotus",
  "Elephant Design",
  "Lollypop Design Studio",
  "FoxyMoron",
  "Future Group Creative",
  "Red Chillies Creative Services",
];

const techPartners = [
  "Tata Consultancy Services (TCS)",
  "Infosys",
  "Wipro",
  "Accenture",
  "IBM India",
  "Capgemini",
  "Cognizant",
  "Tech Mahindra",
  "HCL Technologies",
  "Deloitte Digital",
  "PwC Technology Services",
  "Amazon Web Services",
  "Google Partner Network",
  "Microsoft Partner Network",
  "Flipkart Tech",
  "Paytm",
  "PhonePe",
  "Zomato Tech",
  "Swiggy Instamart Tech",
  "Razorpay",
  "Freshworks",
  "Zoho Corporation",
  "Byju’s Technology Team",
  "Practo",
  "Infosys BPM Digital",
];

export const PlacementNetwork = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Placement Assistance & <br />
              Industry Exposure Network
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Our career support ecosystem includes collaboration, exposure, and
              hiring opportunities across top organizations in design, fashion,
              digital, and technology domains.
            </p>

            <div className="grid sm:grid-cols-1 gap-4 mb-8">
              {[
                "Industry exposure",
                "Hiring ecosystem",
                "Career opportunities across",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm"
                >
                  <CheckCircle2 className="text-blue-500 w-6 h-6 shrink-0" />
                  <span className="text-lg font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Industry Exposure"
                width={800}
                height={600}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-2">
                  Real-world Readiness
                </p>
                <h3 className="text-2xl font-bold">
                  Bridging Education & Industry
                </h3>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>

        {/* Partners Marquees */}
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold font-heading text-center mx-auto"
          >
            Our <span className="text-gradient">Partners</span>
          </motion.h2>
          <div>
            <h3 className="text-center text-sm font-bold uppercase tracking-[0.3em] text-white/30 mb-8">
              🎨 Design Industry Partners
            </h3>
            <Marquee gradient={false} speed={40} pauseOnHover={true}>
              {designPartners.map((partner, i) => (
                <div
                  key={i}
                  className="mx-8 text-xl md:text-2xl font-semibold text-white/40 hover:text-white transition-colors cursor-default"
                >
                  {partner}
                </div>
              ))}
            </Marquee>
          </div>

          <div>
            <h3 className="text-center text-sm font-bold uppercase tracking-[0.3em] text-white/30 mb-8">
              💻 Technology & Digital Partners
            </h3>
            <Marquee
              gradient={false}
              speed={35}
              direction="right"
              pauseOnHover={true}
            >
              {techPartners.map((partner, i) => (
                <div
                  key={i}
                  className="mx-8 text-xl md:text-2xl font-semibold text-white/40 hover:text-white transition-colors cursor-default"
                >
                  {partner}
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};
