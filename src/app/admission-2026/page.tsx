"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm" ;
import {
  CheckCircle2,
  Award,
  BookOpen,
  GraduationCap,
  Clock,
  Star,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Placement Rate", value: "98%" },
  { label: "Industry Partners", value: "200+" },
  { label: "Average Package", value: "8.5 LPA" },
  { label: "Student Satisfaction", value: "4.9/5" },
];

const eligibility = [
  {
    title: "Educational Qualification",
    desc: "Passed 10+2 or equivalent in any stream from a recognized board.",
  },
  {
    title: "Minimum Marks",
    desc: "At least 50% aggregate marks in the qualifying examination.",
  },
  { title: "Age Limit", desc: "Minimum 17 years as of December 31, 2025." },
  {
    title: "Selection Process",
    desc: "Based on merit followed by a personal interview/portfolio review.",
  },
];

const modules = [
  "Fundamentals of Design & Visualization",
  "Digital Illustration & Styling",
  "Textile Science & Fabrication",
  "Garment Construction & Pattern Making",
  "Fashion Marketing & Retail Management",
  "Portfolio Development & Professional Practice",
];

export default function AdmissionPage() {
  return (
    <main className="min-h-screen text-white bg-[#050505]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-6">
                  Admissions Open 2026
                </span>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  Design Your Future <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Join the 2026 Batch
                  </span>
                </h1>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
                  Unlock your creative potential with our industry-led
                  certificate programs. Master the skills that global brands
                  demand and launch your career in weeks, not years.
                </p>

                <div className="flex flex-wrap gap-6 mb-12">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                      <Zap className="text-yellow-500 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-tighter">
                        Fast Track
                      </p>
                      <p className="font-bold text-lg">Industry-Ready</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                      <Star className="text-blue-500 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-tighter">
                        Certified
                      </p>
                      <p className="font-bold text-lg">Global Recognition</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-2/5 w-full"
            >
              <EnquiryForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-blue-400 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Program Curriculum</h2>
              <p className="text-gray-400">
                A comprehensive journey from fundamentals to professional
                expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <BookOpen className="text-blue-500" /> Key Modules
                </h3>
                <ul className="space-y-4">
                  {modules.map((m, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <CheckCircle2 className="text-green-500 w-5 h-5 shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-600 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">
                  <Award size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-6">Course Highlights</h3>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-center gap-3">
                    <Clock className="w-5 h-5" /> 1 Year Fast-track Duration
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5" /> 1-on-1 Mentorship
                  </li>
                  <li className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5" /> Project-based Learning
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5" /> Global Certifications
                  </li>
                </ul>
                <button className="mt-10 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                  Download Prospectus
                </button>
              </div>
            </div>

            {/* Eligibility */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Eligibility Criteria</h2>
              <p className="text-gray-400">
                Everything you need to know before you apply.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {eligibility.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-colors"
                >
                  <h4 className="text-lg font-bold mb-2 text-blue-400">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974&auto=format&fit=crop"
                  alt="Design Class"
                  width={300}
                  height={400}
                  className="rounded-2xl"
                />
                <Image
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop"
                  alt="Work in Progress"
                  width={300}
                  height={400}
                  className="rounded-2xl translate-y-8"
                />
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">
                Why Start Your Journey Here?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Global Exposure",
                    desc: "Collaborations with international design houses and tech giants.",
                  },
                  {
                    title: "Modern Facilities",
                    desc: "State-of-the-art labs and creative studios for hands-on experience.",
                  },
                  {
                    title: "Placement Guarantee",
                    desc: "Dedicated placement cell with 100% assistance for the last 5 years.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
