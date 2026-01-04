"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Zap,
  Star,
  ChevronRight,
  Send,
} from "lucide-react";
import dynamic from "next/dynamic";

const ThreeBackground = dynamic(
  () =>
    import("@/components/ThreeBackground").then((mod) => ({
      default: mod.ThreeBackground,
    })),
  { ssr: false }
);

export default function AdmissionPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Select Course",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for your enquiry! Our counselors will contact you shortly."
    );
  };

  const courses = [
    {
      title: "B.Des in Fashion Technology",
      duration: "4 Years",
      highlight: "Global Exposure",
      description:
        "A comprehensive program focusing on design thinking, garment construction, and accessory design with international project opportunities.",
    },
    {
      title: "Masters in Fashion Technology",
      duration: "2 Years",
      highlight: "Advanced Research",
      description:
        "Focuses on advanced technological applications in fashion, supply chain management, and brand strategic planning.",
    },
    {
      title: "PG Diploma in Fashion Design",
      duration: "1 Year",
      highlight: "Industry Ready",
      description:
        "Intensive training program from conceptualization to final output, designed for quick industry entry.",
    },
  ];

  const certifications = [
    {
      title: "Adobe Creative Cloud",
      provider: "Global Recognition",
      icon: <Star className="text-orange-400" />,
    },
    {
      title: "3D Garment Simulation",
      provider: "CLO 3D / Browzwear",
      icon: <Zap className="text-yellow-400" />,
    },
    {
      title: "Fashion Branding",
      provider: "IIAS Certification",
      icon: <Award className="text-cyan-400" />,
    },
    {
      title: "Sustainable Design",
      provider: "ESG Standard",
      icon: <CheckCircle2 className="text-emerald-400" />,
    },
  ];

  return (
    <main className="min-h-screen text-white relative">
      <div className="gradient-blur-1" />
      <div className="gradient-blur-2" />
      <div className="gradient-blur-3" />
      <ThreeBackground />
      <Navbar />

      {/* Hero Section with Enquiry Form */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6 text-emerald-400 border border-emerald-400/20"
              >
                <Zap size={16} />
                <span>Admissions Open for 2026 Batch</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
              >
                Shape the Future of{" "}
                <span className="text-gradient">Fashion & Tech</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/70 mb-8 max-w-2xl"
              >
                Join Indore Institute of Advance Studies and embark on a journey
                of creativity, innovation, and global opportunities. India's
                premier destination for fashion technology.
              </motion.p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl">
                  <CheckCircle2 className="text-emerald-400" size={18} />
                  <span className="text-sm">100% Placement Support</span>
                </div>
                <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl">
                  <CheckCircle2 className="text-emerald-400" size={18} />
                  <span className="text-sm">Global Certifications</span>
                </div>
                <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl">
                  <CheckCircle2 className="text-emerald-400" size={18} />
                  <span className="text-sm">Industry-Led Mentors</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-[450px]"
            >
              <div className="glass-morphism p-8 rounded-3xl border border-white/10 relative">
                <div className="absolute -top-4 -right-4 bg-violet-600 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-xl rotate-12">
                  Apply Now!
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Get Free Counselling
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  Fill in your details and our experts will call you back.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-white/5 border-white/10 focus:border-cyan-500/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/5 border-white/10 focus:border-cyan-500/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-white/5 border-white/10 focus:border-cyan-500/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course">Interested Course</Label>
                    <select
                      id="course"
                      className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                    >
                      <option className="bg-[#0a0118]">
                        B.Des in Fashion Technology
                      </option>
                      <option className="bg-[#0a0118]">
                        Masters in Fashion Tech
                      </option>
                      <option className="bg-[#0a0118]">PG Diploma</option>
                      <option className="bg-[#0a0118]">
                        Certification Course
                      </option>
                    </select>
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 btn-gradient text-white font-bold rounded-xl mt-4"
                  >
                    Submit Enquiry <Send size={18} className="ml-2" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Excellence in{" "}
              <span className="text-gradient">Design Programs</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Industry-aligned curriculum designed to transform students into
              fashion leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl hover-card transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="text-violet-400" />
                </div>
                <div className="text-xs font-bold text-violet-400 mb-2 uppercase tracking-wider">
                  {course.highlight}
                </div>
                <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                <p className="text-white/60 mb-6 line-clamp-3">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-medium text-white/40">
                    Duration: {course.duration}
                  </span>
                  <Button
                    variant="ghost"
                    className="p-0 hover:bg-transparent text-cyan-400 group-hover:gap-2 transition-all"
                  >
                    Details <ChevronRight size={16} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 relative bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8">
                Who Can <span className="text-gradient">Join Us?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-emerald-400" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Undergraduate Programs
                    </h4>
                    <p className="text-white/60">
                      Minimum 50% in 12th Standard from any recognized board
                      (45% for reserved categories).
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-emerald-400" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Postgraduate Programs
                    </h4>
                    <p className="text-white/60">
                      Bachelor's degree in any discipline with minimum 50%
                      aggregate score.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-emerald-400" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Entrance Examination
                    </h4>
                    <p className="text-white/60">
                      Success in IIAS Entrance Test (IUET), followed by
                      Portfolio Review and Interview.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="glass p-10 rounded-3xl relative">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Users className="text-cyan-400" /> Admission Flow
                  </h3>
                  <div className="space-y-8">
                    {[
                      {
                        step: "01",
                        title: "Apply Online",
                        desc: "Fill the application form and pay registration fee.",
                      },
                      {
                        step: "02",
                        title: "Entrance Test",
                        desc: "Appear for our aptitude and creative assessment.",
                      },
                      {
                        step: "03",
                        title: "Portfolio Review",
                        desc: "Showcase your creative potential and ideas.",
                      },
                      {
                        step: "04",
                        title: "Join IIAS",
                        desc: "Confirm your seat and start your journey.",
                      },
                    ].map((flow, i) => (
                      <div key={i} className="flex gap-6 items-start">
                        <span className="text-3xl font-black text-white/10 leading-none">
                          {flow.step}
                        </span>
                        <div>
                          <h5 className="font-bold mb-1">{flow.title}</h5>
                          <p className="text-sm text-white/50">{flow.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Global <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Enhance your degree with globally recognized skills and
              credentials.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl text-center border border-white/5 hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
                  {cert.icon}
                </div>
                <h4 className="font-bold mb-1">{cert.title}</h4>
                <p className="text-xs text-white/40">{cert.provider}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 glass-morphism p-12 rounded-[3rem] text-center border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <h3 className="text-3xl font-bold mb-6">
              Ready to Start Your Creative Journey?
            </h3>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto">
              Don't wait for the future. Create it. Limited seats available for
              the 2026 Batch. Secure your spot in India's most innovative design
              school.
            </p>
            <Button
              size="lg"
              className="rounded-full h-16 px-12 btn-gradient text-white text-xl font-bold hover:scale-105 transition-transform"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Apply Now for 2026 <ArrowRight className="ml-3" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
