"use client";

import { useState } from "react";
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";
import { CheckCircle2, Send, ShieldCheck, Mail, Phone, User, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendEnquiryAction } from "@/app/actions";
import { toast } from "sonner";

export function MbaEnquiryForm() {
    const router = useRouter();
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        course: "Online MBA (Multi-University)",
        age: "",
        experience: "Working Professional",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Simple validation
        if (formData.phone.length !== 10) {
            toast.error("Please enter a valid 10-digit phone number");
            return;
        }

        setStatus("submitting");
        try {
            const result = await sendEnquiryAction(formData);
            if (result.success) {
                setStatus("success");
                toast.success("Application submitted successfully!");
                router.push("/thank-you");
            } else {
                setStatus("idle");
                toast.error(result.error || "Submission failed");
            }
        } catch (error) {
            setStatus("idle");
            toast.error("Something went wrong. Please try again.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div id="enquiry-form" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Start Your <span className="text-blue-600">Global Journey</span> Today
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            Fill out the form to get a <span className="font-bold text-blue-600">FREE counseling session</span> with our experts and learn how our partner universities can transform your career trajectory.
                        </p>

                        <div className="space-y-6">
                            {[
                                "Instant Admission Support",
                                "Personalized Course Selection",
                                "Education Loan Assistance",
                                "100% Placement Guidance"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                        <CheckCircle2 size={16} className="text-green-600" />
                                    </div>
                                    <span className="font-semibold text-slate-700">{text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 flex items-start gap-4">
                            <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">Privacy Guaranteed</p>
                                <p className="text-sm text-slate-500">Your data is secure with us. We only use it to provide educational assistance.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-950/5 border border-slate-100 relative"
                    >
                        {status === "success" ? (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                                <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Received!</h3>
                                <p className="text-slate-500">Our counselor will call you within 24 hours.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-slate-900">Apply for Admission</h3>
                                    <p className="text-sm text-slate-500">Limited priority slots available</p>
                                </div>

                                <div className="relative">
                                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-slate-900 font-medium"
                                    />
                                </div>

                                <div className="relative">
                                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-slate-900 font-medium"
                                    />
                                </div>

                                <div className="relative">
                                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="10-Digit Mobile Number"
                                        required
                                        maxLength={10}
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-slate-900 font-medium"
                                    />
                                </div>

                                <div className="relative">
                                    <GraduationCap size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <select
                                        name="experience"
                                        required
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-slate-900 font-medium appearance-none"
                                    >
                                        <option value="Working Professional">Working Professional</option>
                                        <option value="Final Year Student">Final Year Student</option>
                                        <option value="Business Owner">Business Owner</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2"
                                >
                                    {status === "submitting" ? "Processing..." : (
                                        <>
                                            Submit Application <Send size={18} />
                                        </>
                                    )}
                                </Button>

                                <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest mt-4">
                                    By clicking, you agree to our terms & privacy policy
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
