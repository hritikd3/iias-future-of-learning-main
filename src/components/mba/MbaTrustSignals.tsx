"use client";

import Image from "next/image";
import { motion } from 'framer-motion';

const approvals = [
    { name: "NAAC A++", logo: "https://i.ibb.co/hRS5fZ3p/3-r283rw1jqsbe9fl2qep288eu3wv4n5ysaxx4ha7boo.webp" }, 
    { name: "AICTE", logo: "https://i.ibb.co/dJ2pNbBf/2-r283rt816a7jalp66vh6ir4gbr9102nlajyo1gbi7c.webp" },
    { name : "UGC NET", logo: "https://i.ibb.co/XTDd6C9/Alumni-1-r2f4f25tfyx2gwcdbufqr3kks7xgsx5s3uqnrspcrs.webp"},
    { name: "AIU", logo: "https://i.ibb.co/NMZDzT4/5-r283s1okvsj473cvth4tn6zlo83bxcl6bpu1cxyync.webp" },
    { name: "NIRF", logo: "https://i.ibb.co/Psx2qf2H/NIRF512-x-512-px-r1jem3wr4rc761kudi5a7agiwf0478cp18f0f1fbhk.webp" },
    { name: "WES", logo: "https://i.ibb.co/ymLR78GS/4-r283ryv2baf989gz9xwxxpp7w2h8a99zbbvkx43560.webp" }
];

export function MbaTrustSignals() {
    return (
        <section id="approvals" className="py-20 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Accreditations & Recognition</p>
                    <h2 className="text-3xl font-extrabold text-slate-900">Globally <span className="text-blue-600">Recognized</span> Certifications</h2>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20 opacity-100 hover:opacity-100 transition-opacity">
                    {approvals.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            className="flex flex-col items-center hover:grayscale-0 transition-all"
                        >
                            <Image
                                src={item.logo}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="object-contain h-16 w-auto"
                            />
                            <span className="text-[12px] font-bold text-slate-400 mt-2 uppercase tracking-widest">{item.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
