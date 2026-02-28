"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const designPartners = [
  { name: "Tata Elxsi", logo: "https://companieslogo.com/img/orig/TATAELXSI.NS-a2e870d8.png?t=1720244494" },
  { name: "IDEO", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/IDEO_logo_2.png" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
  { name: "Ogilvy", logo: "https://chorasbelcanto.lt/wp-content/uploads/2019/07/OGILVY-logo-BLACK.png" },
  { name: "Landor & Fitch", logo: "https://ifdalivestorage.blob.core.windows.net/user-uploads/profile/156990/55e007fd-246c-43fd-906d-53c0d13fa8c5/landorandfitch_logo_stacked_rgb-03.png" },
  { name: "Leo Burnett", logo: "https://www.clipartmax.com/png/middle/326-3267969_leo-burnett-leo-burnett-agency-logo-png.png" },
  { name: "Dentsu", logo: "https://cdn.freebiesupply.com/logos/large/2x/dentsu-logo-black-and-white.png" },
  { name: "Nykaa", logo: "https://companieslogo.com/img/orig/NYKAA.NS_BIG.D-e000fe47.png?t=1752557278" },
  { name: "Myntra", logo: "https://www.trueblueadvisory.com/wp-content/uploads/2022/03/myntra-logo-big.png" },
  { name: "Titan", logo: "https://1000logos.net/wp-content/uploads/2023/10/Titan-Logo.png" },
];

const techPartners = [
  { name: "TCS", logo: "https://i.logos-download.com/113971/29583-s1280-794fe2ef6d1227957d3a7ac75642f397.png/Tata_Consultancy_Services_Logo_2020-s1280.png" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Capgemini", logo: "https://companieslogo.com/img/orig/CAP.PA_BIG.D-679c041e.png?t=1720244491" },
  { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
  { name: "Deloitte", logo: "https://res.cloudinary.com/dew98my68/image/upload/v1772194232/deloitte_wii5hp.avif" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b6550832964d7946698af3/1656116508390/microsoft+logo+white.png?format=1500w" },
  { name: "Siemens", logo: "https://res.cloudinary.com/dew98my68/image/upload/v1772194240/siemens_gupgqw.avif" },
  { name: "Paytm", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" },
  { name: "Honeywell", logo: "https://res.cloudinary.com/dew98my68/image/upload/v1772194234/honeywell_dhag7x.avif" },
  { name: "Sequoia", logo: "https://res.cloudinary.com/dew98my68/image/upload/v1772194240/sequoia_irekqw.avif" },
  { name: "Practo", logo: "https://res.cloudinary.com/dew98my68/image/upload/v1772194240/practo_gz0dz6.avif" },
  { name: "Qualcomm", logo: "https://res.cloudinary.com/dew98my68/image/upload/v1772194240/qualcomm_wbjlj6.avif" },
  { name: "Freshworks", logo: "https://res.cloudinary.com/dew98my68/image/upload/v1772194233/freshworks_fjlmf9.avif" },
  { name: "Zoho", logo: "https://www.zoho.com/branding/images/monocrome-white.png" },
  { name: "Cred", logo: "https://res.cloudinary.com/dew98my68/image/upload/v1772194232/credclub_exxuui.avif" },

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
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
              Our <span className="text-gradient">Hiring Network</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Collaborating with 200+ top industry leaders to provide exceptional placement and internship opportunities.
            </p>
          </motion.div>

          <div className="relative group">
            {/* Edge Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="space-y-8">
              <div>
                <h3 className="text-center text-[10px] font-bold uppercase tracking-[0.5em] text-blue-500/50 mb-8">
                  Design & Creative Partners
                </h3>
                <Marquee gradient={false} speed={50} pauseOnHover={true}>
                  {designPartners.map((partner, i) => (
                    <div
                      key={i}
                      className="mx-12 px-4 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>

              <div>
                <h3 className="text-center text-[10px] font-bold uppercase tracking-[0.5em] text-purple-500/50 mb-8">
                  Technology & Digital Corporate Network
                </h3>
                <Marquee
                  gradient={false}
                  speed={45}
                  direction="right"
                  pauseOnHover={true}
                >
                  {techPartners.map((partner, i) => (
                    <div
                      key={i}
                      className="mx-12 px-4 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
