"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Send,
  GraduationCap,
  BookOpen,
  Award,
  Users,
} from "lucide-react";
import { sendEnquiryAction } from "@/app/actions";
import { courses } from "@/lib/courses-data";
import { toast } from "sonner";

export const EnquiryForm = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: courses[0]?.title || "Digital Product Design",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const result = await sendEnquiryAction(formData);
      if (result.success) {
        setStatus("success");
        toast.success("Enquiry sent successfully!");
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
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
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
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-blue-400 hover:text-blue-300 text-sm font-medium"
          >
            Send another enquiry
          </button>
        </motion.div>
      ) : (
        <>
          <h3 className="text-2xl font-bold mb-6 text-center">
            Enquire Now for 2026
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-400 mb-1 block">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-400 mb-1 block">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-400 mb-1 block">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-400 mb-1 block">
                Course of Interest
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors appearance-none scrollbar-hide text-white"
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                "Processing..."
              ) : (
                <>
                  Claim My Seat <Send className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-[10px] text-center text-gray-500 mt-4 uppercase tracking-widest">
              Limited Seats Available for 2026 Batch
            </p>
          </form>
        </>
      )}
    </div>
  );
};
