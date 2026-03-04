"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="w-20 h-20 bg-violet-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-violet-500/20">
                        <Shield className="w-10 h-10 text-violet-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Privacy Policy</h1>
                    <p className="text-gray-400">Last updated: March 05, 2026</p>
                </motion.div>

                <div className="prose prose-invert max-w-none space-y-12 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p>
                            Welcome to the Indore Institute of Advance Studies ("IIAS", "we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website indoreinstitute.in, including any other media form, media channel, mobile website, or mobile application related or connected thereto.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                        <p>
                            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, such as through enquiry forms, brochure downloads, or contacting us directly.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Personal Data:</strong> Name, email address, phone number, and educational background.</li>
                            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on our site.</li>
                            <li><strong>Marketing Data:</strong> Your preferences in receiving marketing from us.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                        <p> We use the information we collect for various purposes, including:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To provide and maintain our Service.</li>
                            <li>To notify you about changes to our Service.</li>
                            <li>To provide customer support and handle enquiries.</li>
                            <li>To gather analysis or valuable information so that we can improve our Service.</li>
                            <li>To provide you with news, special offers, and general information about other goods, services, and events which we offer.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Google Ads & Analytics</h2>
                        <p>
                            We use Google Ads and Google Analytics to track visitor interaction and improve our marketing efforts. Google uses cookies to serve ads based on a user's prior visits to our website. You may opt out of personalized advertising by visiting Ads Settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                        <p>
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                        <p>
                            If you have questions or comments about this Privacy Policy, please contact us at:
                        </p>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-4">
                            <p className="font-bold text-white">Indore Institute of Advance Studies</p>
                            <p>Email: support@indoreinstitute.in</p>
                            <p>Address: Race Course Road, Indore, Madhya Pradesh</p>
                            <p>Phone: +91 9174171579</p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
