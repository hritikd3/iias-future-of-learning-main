"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-cyan-500/20">
                        <FileText className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Terms & Conditions</h1>
                    <p className="text-gray-400">Last updated: March 05, 2026</p>
                </motion.div>

                <div className="prose prose-invert max-w-none space-y-12 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                        <p>
                            By accessing our website at indoreinstitute.in, you agree to be bound by these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials (information or software) on Indore Institute of Advance Studies' website for personal, non-commercial transitory viewing only.
                        </p>
                        <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by IIAS at any time.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
                        <p>
                            The materials on IIAS's website are provided on an 'as is' basis. IIAS makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Enrollment & Fees</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Course enrollment is subject to availability and meeting the eligibility criteria.</li>
                            <li>Fees once paid are generally non-refundable, except as specifically mentioned in our refund policy provided at the time of admission.</li>
                            <li>IIAS reserves the right to modify course structures, timings, or instructors if necessary.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Modifications</h2>
                        <p>
                            IIAS may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
                        <p>
                            If you have any questions regarding these Terms & Conditions, please contact us:
                        </p>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-4">
                            <p className="font-bold text-white">Indore Institute of Advance Studies</p>
                            <p>Email: support@indoreinstitute.in</p>
                            <p>Phone: +91 9174171579</p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
