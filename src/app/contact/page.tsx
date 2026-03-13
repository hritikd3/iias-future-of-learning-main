"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Phone, Mail, Instagram, MapPin, Send, Clock, MessageCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    value: "+91 91 74171 579",
    href: "tel:+919174171579",
    description: "Mon-Sat, 9AM-7PM"
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    title: "Instagram",
    value: "@iias_officials",
    href: "https://www.instagram.com/iias_officials/",
    description: "Follow us for updates"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    value: "Indore, MP",
    href: "#",
    description: "Madhya Pradesh, India"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    value: "Mon - Sat",
    href: "#",
    description: "9:00 AM - 7:00 PM"
  },
]

const faqs = globalFAQs;

import { useState } from "react";
import { sendContactAction } from "@/app/actions";
import { toast } from "sonner";
import { globalFAQs } from "@/lib/faq-data";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    age: "",
    experience: "Not doing anything looking for career opportunity",
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
      const result = await sendContactAction({
        fullName: formData.fullName,
        email: formData.email,
        course: formData.course,
        message: `Phone: ${formData.phone}\n\n${formData.message}`,
        age: formData.age,
        experience: formData.experience,
      });

      if (result.success) {
        setStatus("success");
        toast.success("Message sent successfully!");
        setFormData({ fullName: "", email: "", phone: "", course: "", message: "", age: "", experience: "Not doing anything looking for career opportunity" });
        setTimeout(() => setStatus("idle"), 3000);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen text-white relative">
      <div className="gradient-blur-1" />
      <div className="gradient-blur-2" />
      <div className="gradient-blur-3" />

      <Navbar />

      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-cyan-400 mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Let's Start Your <span className="text-gradient">Tech Journey</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our courses or want to schedule a campus visit?
              We're here to help you take the first step towards your dream career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-8 md:p-10 min-h-[500px] flex flex-col justify-center"
            >
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-cyan-400 w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-8">
                    Thank you for reaching out. We have received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    <MessageCircle className="w-6 h-6 text-cyan-400" />
                    <h2 className="text-2xl font-bold font-heading">Send us a Message</h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                        <Input
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-cyan-400/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                        <Input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-cyan-400/50"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Phone Number</label>
                        <Input
                          name="phone"
                          required
                          maxLength={10}
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number (10 digits)"
                          className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-cyan-400/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Your Age</label>
                        <Input
                          type="number"
                          name="age"
                          required
                          min="1"
                          max="100"
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="21"
                          className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-cyan-400/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Your Experience</label>
                      <select
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 h-12 rounded-xl px-4 outline-none focus:border-cyan-400/50 transition-colors text-muted-foreground appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-gray-900">Select Your Experience</option>
                        <option value="working professional - Technical role" className="bg-gray-900">Working professional - Technical role</option>
                        <option value="Working professional - non technical role" className="bg-gray-900">Working professional - non technical role</option>
                        <option value="College student - Final year" className="bg-gray-900">College student - Final year</option>
                        <option value="College student - 1st to final year" className="bg-gray-900">College student - 1st to final year</option>
                        <option value="Not doing anything looking for career opportunity" className="bg-gray-900">Not doing anything & looking for career opportunity</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Course of Interest</label>
                      <Input
                        name="course"
                        required
                        value={formData.course}
                        onChange={handleChange}
                        placeholder="e.g. AI & Gen AI"
                        className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-cyan-400/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Your Message</label>
                      <Textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your learning goals..."
                        className="bg-white/5 border-white/10 min-h-[150px] rounded-xl focus:border-cyan-400/50"
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
                </>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card rounded-2xl p-6 group hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-1">{info.title}</h3>
                    <p className="font-bold text-lg mb-1">{info.value}</p>
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-card rounded-2xl p-6 overflow-hidden"
              >
                <h3 className="font-bold text-lg mb-4">Find Us</h3>
                <div className="aspect-video rounded-xl overflow-hidden bg-white/5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717921398!2d75.69905224999999!3d22.7242379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold font-heading text-center mb-12">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main >
  )
}
