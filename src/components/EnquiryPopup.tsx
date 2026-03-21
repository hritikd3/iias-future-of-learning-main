"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Zap, ShieldCheck, Users } from "lucide-react";
import { sendEnquiryAction } from "@/app/actions";
import { courses } from "@/lib/courses-data";
import { toast } from "sonner";

const MAX_SHOW_COUNT = 3;
const STORAGE_KEY = "enquiryPopupCount";

export const EnquiryPopup = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        course: courses[0]?.title || "Data Science & AI",
        age: "",
        experience: "",
    });

    const showCountRef = useRef(0);

    const getShowCount = () => {
        try {
            return parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
        } catch {
            return 0;
        }
    };

    const tryShowPopup = () => {
        const count = getShowCount();
        if (count < MAX_SHOW_COUNT) {
            setIsOpen(true);
            const newCount = count + 1;
            showCountRef.current = newCount;
            try {
                localStorage.setItem(STORAGE_KEY, String(newCount));
            } catch {
                // ignore storage errors
            }
        }
    };

    useEffect(() => {
        // Trigger 1: Initial page load after 5 seconds
        const initialTimer = setTimeout(() => {
            tryShowPopup();
        }, 5000);

        // Trigger 2: After 60 seconds of presence (idle timer)
        const idleTimer = setTimeout(() => {
            if (!isOpen) {
                tryShowPopup();
            }
        }, 60000);

        // Trigger 3: Scroll depth — show after user scrolls 40% of page
        const handleScroll = () => {
            const scrollDepth = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            if (scrollDepth > 0.4 && !isOpen) {
                tryShowPopup();
                window.removeEventListener("scroll", handleScroll);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Trigger 4: Exit intent — mouse leaves top of viewport
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 5) {
                tryShowPopup();
            }
        };
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            clearTimeout(initialTimer);
            clearTimeout(idleTimer);
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Manual toggle from Navbar or course buttons
    useEffect(() => {
        const handleToggle = (e: Event) => {
            const customEvent = e as CustomEvent;
            if (customEvent.detail?.course) {
                setFormData(prev => ({ ...prev, course: customEvent.detail.course }));
            }
            setIsOpen((prev) => !prev);
        };
        window.addEventListener("toggle-enquiry-popup", handleToggle);
        return () => window.removeEventListener("toggle-enquiry-popup", handleToggle);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const nameRegex = /^[a-zA-Z\s.]+$/;
        if (!formData.fullName.trim() || formData.fullName.length < 3) {
            toast.error("Please enter a valid full name");
            return;
        }
        if (!nameRegex.test(formData.fullName)) {
            toast.error("Name should only contain letters and spaces");
            return;
        }

        const sanitizedPhone = formData.phone.replace(/[\s\-\+\(\)]/g, "").replace(/^91/, "");
        if (sanitizedPhone.length !== 10 || !/^\d+$/.test(sanitizedPhone)) {
            toast.error("Please enter a valid 10-digit mobile number");
            return;
        }
        if (/^(.)\1+$/.test(sanitizedPhone) || sanitizedPhone === "1234567890") {
            toast.error("Please enter a valid Indian mobile number");
            return;
        }
        if (!/^[6-9]/.test(sanitizedPhone)) {
            toast.error("Please enter a valid Indian mobile number starting with 6-9");
            return;
        }

        setStatus("submitting");

        try {
            const result = await sendEnquiryAction(formData);
            if (result.success) {
                setStatus("success");
                toast.success("Enquiry sent! Our counselor will call you shortly.");
                // After success, prevent further auto-shows
                try { localStorage.setItem(STORAGE_KEY, String(MAX_SHOW_COUNT)); } catch { }
                router.push("/thank-you");
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
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden"
                    >
                        {/* Glow accent */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all z-10"
                        >
                            <X size={18} />
                        </button>

                        <div className="p-8 md:p-10">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-10"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="text-green-400 w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-white">You're All Set! 🎉</h3>
                                    <p className="text-gray-400">
                                        Our expert counselor will call you within <strong className="text-white">24 hours</strong> to craft your personalised learning roadmap. Watch out for our call!
                                    </p>
                                </motion.div>
                            ) : (
                                <>
                                    {/* Trust badges */}
                                    <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
                                        <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                                            <ShieldCheck size={14} /> 100% Free
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs text-blue-400 font-medium">
                                            <Users size={14} /> 1000+ Students Enrolled
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs text-yellow-400 font-medium">
                                            <Zap size={14} /> Limited Seats
                                        </span>
                                    </div>

                                    {/* Heading */}
                                    <div className="text-center mb-7">
                                        <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                                            🎯 Book Your Spot Today
                                        </span>
                                        <h3 className="text-3xl font-extrabold font-heading text-white leading-tight">
                                            Join <span className="text-gradient">Free Counselling</span>
                                        </h3>
                                        <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                                            Talk to an expert, get a personalized career roadmap, and <strong className="text-white">discover which course can 3x your salary</strong> — all for free.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-3">
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50 transition-colors text-white placeholder:text-gray-500"
                                            placeholder="Your Full Name"
                                        />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50 transition-colors text-white placeholder:text-gray-500"
                                                placeholder="Email Address"
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                maxLength={10}
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50 transition-colors text-white placeholder:text-gray-500"
                                                placeholder="Phone (10 digits)"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <input
                                                type="number"
                                                name="age"
                                                required
                                                min="1"
                                                max="100"
                                                value={formData.age}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50 transition-colors text-white placeholder:text-gray-500"
                                                placeholder="Your Age"
                                            />
                                            <select
                                                name="experience"
                                                required
                                                value={formData.experience}
                                                onChange={handleChange}
                                                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50 transition-colors text-white appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled className="bg-gray-900">Your Current Status</option>
                                                <option value="working professional - Technical role" className="bg-gray-900">Working professional - Technical role</option>
                                                <option value="working professional - Non technical role" className="bg-gray-900">Working professional - Non technical role</option>
                                                <option value="college student - Final year" className="bg-gray-900">College student - Final year</option>
                                                <option value="college student - 1st to final year" className="bg-gray-900">College student - 1st to final year</option>
                                                <option value="Seeking for Career Opportunities" className="bg-gray-900">Seeking for Career Opportunities</option>
                                            </select>
                                        </div>
                                        <select
                                            name="course"
                                            value={formData.course}
                                            onChange={handleChange}
                                            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50 transition-colors text-white appearance-none"
                                        >
                                            {courses.map((course) => (
                                                <option key={course.slug} className="bg-gray-900" value={course.title}>
                                                    {course.title}
                                                </option>
                                            ))}
                                        </select>
                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-cyan-600/20 text-base mt-1"
                                        >
                                            {status === "submitting" ? (
                                                "Booking Your Counselling..."
                                            ) : (
                                                <>
                                                    Book My Free Session <Send className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                        <p className="text-[10px] text-center text-gray-500 pt-1 uppercase tracking-[0.15em]">
                                            ✅ No spam. No cost. 100% Confidential.
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
