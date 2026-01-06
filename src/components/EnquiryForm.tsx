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

export const EnquiryForm = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
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
                required
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
                required
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
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-400 mb-1 block">
                Course of Interest
              </label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors appearance-none">
                <option className="bg-gray-900">Digital Product Design</option>
                <option className="bg-gray-900">
                  Fashion Design & Merchandising
                </option>
                <option className="bg-gray-900">
                  Full Stack Web Development
                </option>
                <option className="bg-gray-900">AI & Machine Learning</option>
              </select>
            </div>
            <button
              disabled={status === "submitting"}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
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
