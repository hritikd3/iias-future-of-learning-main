"use client"

import { motion } from "framer-motion"
import { Phone, Mail, Instagram, MapPin, Send, Clock, MessageCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendContactAction } from "@/app/actions";
import { toast } from "sonner";

export function Contact() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    age: "",
    experience: "Seeking for Career Opportunities",
  });

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
      const result = await sendContactAction(formData);
      if (result.success) {
        setStatus("success");
        toast.success("Message sent successfully!");
        setFormData({ fullName: "", email: "", phone: "", course: "", message: "", age: "", experience: "Seeking for Career Opportunities" });
        router.push("/thank-you");
      } else {
        setStatus("idle");
        toast.error(result.error || "Failed to send message");
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
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold font-heading"
              >
                Let&apos;s Build the <br />
                <span className="text-gradient">Future Together</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-muted-foreground text-lg max-w-md"
              >
                Have questions about our courses or enrollment? Reach out to us and our experts will get back to you.
              </motion.p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="tel:+919174171579"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-violet-500 transition-all">
                  <Phone size={22} className="text-cyan-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Call Us</p>
                  <span className="text-lg font-bold">+91 91 74171 579</span>
                </div>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/iias_officials/"
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-500 transition-all">
                  <Instagram size={22} className="text-pink-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Instagram</p>
                  <span className="text-lg font-bold">@iias_officials</span>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center">
                  <MapPin size={22} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Visit Us</p>
                  <p className="text-lg font-bold">Indore, Madhya Pradesh</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-12 rounded-[2rem] min-h-[400px] flex flex-col justify-center"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-green-500 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-8">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex items-center gap-2 mx-auto"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Name</label>
                    <Input
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-white/5 border-violet-500/20 h-12 rounded-xl focus:border-cyan-500/50 focus:ring-cyan-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Email</label>
                    <Input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-white/5 border-violet-500/20 h-12 rounded-xl focus:border-cyan-500/50 focus:ring-cyan-500/20"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Phone Number</label>
                    <Input
                      name="phone"
                      required
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      className="bg-white/5 border-violet-500/20 h-12 rounded-xl focus:border-cyan-500/50 focus:ring-cyan-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Your Age</label>
                    <Input
                      type="number"
                      name="age"
                      required
                      min="1"
                      max="100"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="21"
                      className="bg-white/5 border-violet-500/20 h-12 rounded-xl focus:border-cyan-500/50 focus:ring-cyan-500/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Your Experience</label>
                  <select
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-violet-500/20 h-12 rounded-xl px-4 outline-none focus:border-cyan-500/50 transition-colors text-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-gray-900">Select Your Current Status</option>
                    <option value="working professional - Technical role" className="bg-gray-900">Working professional - Technical role</option>
                    <option value="Working professional - Non technical role" className="bg-gray-900">Working professional - Non technical role</option>
                    <option value="College student - Final year" className="bg-gray-900">College student - Final year</option>
                    <option value="College student - 1st to final year" className="bg-gray-900">College student - 1st to final year</option>
                    <option value="Seeking for Career Opportunities" className="bg-gray-900">Seeking for Career Opportunities</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Course of Interest</label>
                  <Input
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    placeholder="e.g. Generative AI"
                    className="bg-white/5 border-violet-500/20 h-12 rounded-xl focus:border-cyan-500/50 focus:ring-cyan-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Message</label>
                  <Textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="bg-white/5 border-violet-500/20 min-h-[150px] rounded-xl focus:border-cyan-500/50 focus:ring-cyan-500/20"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  size="lg"
                  className="w-full h-14 rounded-xl btn-gradient text-white text-lg group disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending..." : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
