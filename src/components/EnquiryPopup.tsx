"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { sendEnquiryAction } from "@/app/actions";
import { courses } from "@/lib/courses-data";
import { toast } from "sonner";

export const EnquiryPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        course: courses[0]?.title || "Digital Product Design",
    });

    useEffect(() => {
        // Check if user has already seen the popup in this session
        const hasSeenPopup = sessionStorage.getItem("hasSeenEnquiryPopup");

        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem("hasSeenEnquiryPopup", "true");
            }, 5000); // 5 second delay

            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        const handleToggle = () => setIsOpen((prev) => !prev);
        window.addEventListener("toggle-enquiry-popup", handleToggle);
        return () => window.removeEventListener("toggle-enquiry-popup", handleToggle);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const result = await sendEnquiryAction(formData);
            if (result.success) {
                setStatus("success");
                toast.success("Enquiry sent successfully!");
                // Auto close after success
                setTimeout(() => setIsOpen(false), 3000);
            } else {
                setStatus("idle");
                toast.error(result.error || "Failed to send enquiry");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("idle");
            toast.error("An unexpected error occurred");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all z-10"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 md:p-10">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="text-green-500 w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                                    <p className="text-gray-400">
                                        Our admission counselor will contact you shortly.
                                    </p>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="text-center mb-8">
                                        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                                            Limited Seats Available
                                        </span>
                                        <h3 className="text-3xl font-bold font-heading text-white">
                                            Register Your <span className="text-gradient">Interest</span>
                                        </h3>
                                        <p className="text-gray-400 mt-2">
                                            Take the first step towards your dream tech career in 2026.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                name="fullName"
                                                required
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-blue-500/50 transition-colors text-white"
                                                placeholder="Full Name"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-blue-500/50 transition-colors text-white"
                                                placeholder="Email Address"
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-blue-500/50 transition-colors text-white"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                        <div>
                                            <select
                                                name="course"
                                                value={formData.course}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-blue-500/50 transition-colors text-white appearance-none"
                                            >
                                                {courses.map((course) => (
                                                    <option key={course.slug} className="bg-gray-900" value={course.title}>
                                                        {course.title}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed group shadow-xl shadow-blue-600/20"
                                        >
                                            {status === "submitting" ? (
                                                "Sending..."
                                            ) : (
                                                <>
                                                    Apply Now <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                        <p className="text-[10px] text-center text-gray-500 mt-4 uppercase tracking-[0.2em]">
                                            Secure your priority admission status
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
