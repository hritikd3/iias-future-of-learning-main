"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, FileText, X } from "lucide-react";
import { sendEnquiryAction } from "@/app/actions";
import { courses } from "@/lib/courses-data";
import { toast } from "sonner";

export const BrochurePopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        course: courses[0]?.title || "Digital Product Design",
        age: "",
        experience: "Seeking for Career Opportunities",
    });
    const [brochureLink, setBrochureLink] = useState("");

    useEffect(() => {
        const handleToggle = (e: Event) => {
            const customEvent = e as CustomEvent;
            if (customEvent.detail?.course) {
                setFormData(prev => ({ ...prev, course: customEvent.detail.course }));
            }
            if (customEvent.detail?.brochureLink) {
                setBrochureLink(customEvent.detail.brochureLink);
            }
            setIsOpen((prev) => !prev);
        };
        window.addEventListener("toggle-brochure-popup", handleToggle);
        return () => window.removeEventListener("toggle-brochure-popup", handleToggle);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validations
        const nameRegex = /^[a-zA-Z\s.]+$/;
        if (!formData.fullName.trim() || formData.fullName.length < 3) {
            toast.error("Please enter a valid full name");
            return;
        }

        if (!nameRegex.test(formData.fullName)) {
            toast.error("Name should only contain letters and spaces");
            return;
        }

        // Sanitize phone
        const sanitizedPhone = formData.phone.replace(/[\s\-\+\(\)]/g, "").replace(/^91/, "");

        if (sanitizedPhone.length !== 10 || !/^\d+$/.test(sanitizedPhone)) {
            toast.error("Please enter a valid 10-digit mobile number");
            return;
        }

        if (/^(.)\1+$/.test(sanitizedPhone) || sanitizedPhone === "1234567890") {
            toast.error("Please enter a valid indian mobile number");
            return;
        }

        if (!/^[6-9]/.test(sanitizedPhone)) {
            toast.error("Please enter a valid Indian mobile number starting with 6-9");
            return;
        }

        setStatus("submitting");

        try {
            // We use the same enquiry action but specifically for brochure leads
            const result = await sendEnquiryAction({
                ...formData,
                fullName: `${formData.fullName} (Brochure Lead)`
            });

            if (result.success) {
                setStatus("success");

                if (brochureLink) {
                    // Open the specific course brochure directly
                    toast.success("Opening your brochure now...");
                    window.open(brochureLink, "_blank");
                } else {
                    // Fallback: redirect to WhatsApp to request brochure
                    toast.success("Redirecting you to WhatsApp to receive your brochure...");
                    const whatsappMsg = encodeURIComponent(`hello i was checking this course ${formData.course} and i want the brochure of it`);
                    window.open(`https://wa.me/919136084736?text=${whatsappMsg}`, "_blank");
                }

                // Auto close after success
                setTimeout(() => {
                    setIsOpen(false);
                    setStatus("idle");
                }, 3000);
            } else {
                setStatus("idle");
                toast.error(result.error || "Failed to process request");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("idle");
            toast.error("An unexpected error occurred");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                    {/* Overlay - Click to close */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-[#0a0a0a] border border-blue-500/30 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all z-10"
                            aria-label="Close modal"
                        >
                            <X size={16} />
                        </button>

                        <div className="p-6 md:p-8">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="text-green-500 w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-white">Request Received!</h3>
                                    <p className="text-gray-400 text-base">
                                        Redirecting you to WhatsApp to receive your brochure...
                                    </p>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="text-center mb-6">
                                        <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                                            <FileText className="text-cyan-400 w-6 h-6" />
                                        </div>
                                        <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] font-bold uppercase tracking-[0.2em] mb-2">
                                            📄 Get Full Curriculum Details
                                        </span>
                                        <h3 className="text-2xl font-extrabold font-heading text-white leading-tight">
                                            Join <span className="text-gradient">Free Counselling</span>
                                        </h3>
                                        <p className="text-gray-400 mt-2 text-xs leading-relaxed">
                                            Get the complete brochure for <strong className="text-white">{formData.course}</strong> — syllabus, fees, placement data, and more.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-3">
                                            <input
                                                type="text"
                                                name="fullName"
                                                required
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-colors text-white text-base placeholder:text-gray-600"
                                                placeholder="Your Full Name"
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-colors text-white text-base placeholder:text-gray-600"
                                                placeholder="Email Address"
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                maxLength={10}
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-colors text-white text-base placeholder:text-gray-600"
                                                placeholder="Phone Number (10 digits)"
                                            />
                                            <input
                                                type="number"
                                                name="age"
                                                required
                                                min="1"
                                                max="100"
                                                value={formData.age}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-colors text-white text-base placeholder:text-gray-600"
                                                placeholder="Your Age"
                                            />
                                            <select
                                                name="experience"
                                                required
                                                value={formData.experience}
                                                onChange={handleChange}
                                                className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-colors text-white text-base appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled className="bg-[#0a0a0a]">Select Your Current Status</option>
                                                <option value="working professional - Technical role" className="bg-[#0a0a0a]">Working professional - Technical role</option>
                                                <option value="Working professional - Non technical role" className="bg-[#0a0a0a]">Working professional - Non technical role</option>
                                                <option value="College student - Final year" className="bg-[#0a0a0a]">College student - Final year</option>
                                                <option value="College student - 1st to final year" className="bg-[#0a0a0a]">College student - 1st to final year</option>
                                                <option value="Seeking for Career Opportunities" className="bg-[#0a0a0a]">Seeking for Career Opportunities</option>
                                            </select>
                                            {/* Hidden course select to maintain logic but show consistency */}
                                            <div className="hidden">
                                                <select
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleChange}
                                                >
                                                    {courses.map((course) => (
                                                        <option key={course.slug} value={course.title}>
                                                            {course.title}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed group shadow-2xl shadow-blue-600/30 text-lg mt-2"
                                        >
                                            {status === "submitting" ? (
                                                "Preparing..."
                                            ) : (
                                                <>
                                                    Get Brochure <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
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
