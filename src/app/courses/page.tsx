"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { courses, iconMap } from "@/lib/courses-data"
import { Clock, Users, BarChart3, ArrowRight, Linkedin, CheckCircle, Trophy, Briefcase, GraduationCap, ChevronRight, Award, Star, ShieldCheck, BadgeCheck } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { globalFAQs } from "@/lib/faq-data"

const mentors = [
  {
    name: "Mahendra Singh Chouhan",
    role: "Lead Data Scientist & Solution Architect",
    image: "https://i.ibb.co/rKgfJGJY/Whats-App-Image-2026-02-02-at-13-04-33.jpg",
    linkedin: "https://www.linkedin.com/in/mahendrachouhan/",
    experience: "15+ Years",
    expertise: ["Machine Learning", "System Architecture", "Cloud AI", "GenAI"],
    company: "IIT Indore Alumni",
    description: "With over 15 years of industry experience spanning enterprise IT and advanced data science, Mahendra heads the technical curriculum at IIAS. He has architected AI solutions for Fortune 500 clients and led cross-functional engineering teams at scale. His expertise spans the full ML lifecycle — from data engineering and model development to production deployment on AWS. At IIAS, he brings a practitioner's mindset to the classroom, ensuring every student graduates with job-ready, real-world skills."
  },
  {
    name: "Raunak Patni",
    role: "Senior Data Analyst",
    image: "https://i.ibb.co/rGmVH1cm/Whats-App-Image-2026-02-02-at-13-04-33-2.jpg",
    linkedin: "https://www.linkedin.com/in/alankar-kharbadikar/",
    experience: "6+ Years",
    expertise: ["Power BI", "Python", "Statistical Modeling", "SQL"],
    company: "Data Analytics Specialist",
    description: "Raunak is a seasoned data professional with deep expertise in business analytics, statistical inference, and BI tooling. He specializes in transforming raw, unstructured datasets into actionable executive insights using Python, SQL, and Power BI. With 6+ years of experience across fintech and e-commerce sectors, he mentors students on the art of asking the right business questions — and then answering them with data. His sessions are known for their clarity, practical case studies, and interview-focused approach."
  },
  {
    name: "Alankar Kharbadikar",
    role: "AI/ML Engineer",
    image: "https://i.ibb.co/hFQhKvXM/Whats-App-Image-2026-02-02-at-13-04-33-1.jpg",
    linkedin: "https://www.linkedin.com/in/alankar-kharbadikar/",
    experience: "4+ Years",
    expertise: ["Deep Learning", "Computer Vision", "NLP", "TensorFlow"],
    company: "Magnifi by Videoverse",
    description: "Alankar is an AI/ML Engineer at Magnifi by Videoverse, where he builds cutting-edge computer vision and natural language processing solutions powering AI-driven video intelligence at scale. With a strong foundation in deep learning frameworks including TensorFlow and PyTorch, he brings an engineering-first approach to AI education. At IIAS, he guides students through project-based learning on neural networks, model optimization, and real-world AI deployment — bridging the gap between textbook theory and production-grade implementation."
  },
  {
    name: "Hrshit Gandhi",
    role: "Senior Data Scientist",
    image: "https://i.ibb.co/7xQdW52r/Whats-App-Image-2026-02-02-at-13-10-05-1.jpg",
    linkedin: "https://www.linkedin.com/in/harsheetgandhi/",
    experience: "7+ Years",
    expertise: ["Generative AI", "LLMs", "Data Engineering", "MLOps"],
    company: "Industry Expert",
    description: "Hrshit is a Senior Data Scientist with over 7 years of cross-industry experience in building intelligent systems and scalable data pipelines. He is a recognized practitioner in Generative AI, having built and deployed large language model applications in production environments. His mentorship at IIAS covers the end-to-end data science lifecycle — including feature engineering, model selection, hyperparameter tuning, and MLOps best practices. He is particularly passionate about helping students transition into high-paying Data Science and AI roles through structured portfolio building."
  }
]

export default function CoursesPage() {
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
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-cyan-400 mb-6 border border-cyan-500/20">
              Future-Ready Skills
            </span>
            <h1 className="text-4xl md:text-7xl font-bold font-heading mb-8 leading-tight">
              Master the Skills that <br />
              <span className="text-gradient">Drive the Future</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 10,000+ learners mastering Data Science, AI, and Full Stack Development.
              Industry-aligned curriculum designed to launch your tech career.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link href="#courses">
                <Button size="lg" className="rounded-full h-14 px-8 btn-gradient text-white text-lg shadow-lg shadow-cyan-500/20">
                  Explore Courses <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 border-white/10 hover:bg-white/5 text-lg">
                  Talk to Counselor
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-y border-white/5 py-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-1">10k+</h3>
                <p className="text-sm text-cyan-400">Learners Trained</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-1">100+</h3>
                <p className="text-sm text-cyan-400">Hiring Partners</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-1">4.8/5</h3>
                <p className="text-sm text-cyan-400">Average Rating</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-1">90%</h3>
                <p className="text-sm text-cyan-400">Placement Rate</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-32"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-card border-white/5 p-6 hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Live Industry Projects</h3>
                <p className="text-muted-foreground">Work on real-world problem statements from day one. Build a portfolio that speaks for itself.</p>
              </Card>
              <Card className="glass-card border-white/5 p-6 hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">1:1 Mentorship</h3>
                <p className="text-muted-foreground">Get personalized guidance from industry experts at Microsoft, Amazon, and Google.</p>
              </Card>
              <Card className="glass-card border-white/5 p-6 hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Placement Support</h3>
                <p className="text-muted-foreground">Dedicated career support with resume building, mock interviews, and job referrals.</p>
              </Card>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-32 mb-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-cyan-400 mb-6 border border-cyan-500/20">
                    Career Success
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                    Not Just Learning, <br />
                    <span className="text-gradient">Career Transformation</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 text-neutral-300">
                    Our dedicated placement cell works tirelessly to help you land your dream job. From resume building to mock interviews, we&apos;ve got you covered.
                  </p>

                  <div className="space-y-6">
                    {[
                      { title: "Resume Building", desc: "Expert guidance to craft a resume that stands out to recruiters." },
                      { title: "Mock Interviews", desc: "Practice with industry experts to crack technical & HR rounds." },
                      { title: "Job Referrals", desc: "Direct access to our network of 100+ hiring partners." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                          <CheckCircle className="w-6 h-6 text-cyan-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl" />
                  <div className="relative glass-card p-8 border-white/10 rounded-3xl">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Highest Package", value: "24 LPA" },
                        { label: "Average Package", value: "8.5 LPA" },
                        { label: "Hiring Partners", value: "100+" },
                        { label: "Career Hike", value: "120%" }
                      ].map((stat, i) => (
                        <div key={i} className="text-center p-6 bg-white/5 rounded-2xl border border-white/5">
                          <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                          <p className="text-sm text-cyan-400">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>


          </motion.div>

          <div id="courses" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/courses/${course.slug}`}>
                  <Card className={`glass-card h-full border-white/5 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(45,212,191,0.1)] group cursor-pointer flex flex-col`}>
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center border border-white/10 text-white group-hover:scale-110 transition-transform`}>
                          {iconMap[course.icon]}
                        </div>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-400">
                          {course.level.split(' ')[0]}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 font-heading group-hover:text-cyan-400 transition-colors">{course.title}</h3>
                      <p className="text-muted-foreground mb-6 line-clamp-2">{course.description}</p>

                      <div className="space-y-4 mb-6 flex-grow">
                        <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {course.highlights.slice(0, 3).map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto pt-6 border-t border-white/5">
                        <div className="flex items-center justify-between text-sm mb-6">
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Clock size={16} className="text-cyan-500" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="text-right">
                            {course.originalPrice && (
                              <span className="text-xs text-muted-foreground line-through decoration-red-500/50 block mb-0.5">
                                {course.originalPrice}
                              </span>
                            )}
                            <div className="flex items-center gap-1 font-bold text-white">
                              <span className="text-lg">{course.price}</span>
                              <span className="text-[10px] text-cyan-400">+ GST</span>
                            </div>
                          </div>
                        </div>
                        <Button className="w-full rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-white border border-white/10 transition-all group-hover:border-cyan-500/50">
                          View Curriculum <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-32 mb-20"
          >
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-cyan-400 mb-6">
                Expert Guidance
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                Meet Your <span className="text-gradient">Mentors</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our mentors are active industry professionals — not just educators. Every concept they teach comes from real projects, real companies, and real challenges.
              </p>
            </div>

            {/* Mentor stats strip */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-14">
              {[
                { value: "30+", label: "Combined Years of Experience" },
                { value: "4+", label: "Industry Experts & Practitioners" },
                { value: "100+", label: "Students Mentored" },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-2xl py-5 px-3 text-center">
                  <p className="text-2xl md:text-3xl font-extrabold text-gradient mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mentors.map((mentor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card h-full border-white/5 hover:border-cyan-400/30 transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        {/* Photo */}
                        <div className="relative w-full sm:w-48 shrink-0 h-52 sm:h-auto overflow-hidden">
                          <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/60 to-transparent" />
                          {/* Experience badge */}
                          <div className="absolute bottom-3 left-3 sm:bottom-auto sm:top-3">
                            <span className="px-2 py-1 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[10px] font-bold">
                              {mentor.experience}
                            </span>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div>
                              <h3 className="text-xl font-bold font-heading leading-tight">{mentor.name}</h3>
                              <p className="text-cyan-400 text-sm font-semibold mt-0.5">{mentor.role}</p>
                              <p className="text-gray-500 text-xs mt-0.5">{mentor.company}</p>
                            </div>
                            <a
                              href={mentor.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-600/40 transition-colors shrink-0"
                            >
                              <Linkedin size={16} />
                            </a>
                          </div>

                          {/* Expertise chips */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {mentor.expertise.map((tag, ti) => (
                              <span key={ti} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-5">
                            {mentor.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* === CERTIFICATION SECTION === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-24 relative"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-violet-500/5 to-yellow-500/5 rounded-3xl blur-3xl -z-10" />

            <div className="glass-card rounded-3xl overflow-hidden border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                {/* Left — Text Content */}
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  {/* Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400/20 to-amber-500/20 border border-yellow-500/30 flex items-center justify-center">
                      <Award className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span className="text-yellow-400 text-sm font-bold uppercase tracking-widest">Industry Recognized</span>
                  </div>

                  {/* Heading */}
                  <h2 className="text-4xl md:text-5xl font-extrabold font-heading leading-tight mb-5">
                    Earn a Certificate & <br />
                    <span className="text-gradient">Employers Trust</span>
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    On successful completion of your program, you receive a <strong className="text-white">joint certification</strong> from Indore Institute of Advance Studies — recognized by our 5+ hiring partners across India.
                  </p>

                  {/* Key points */}
                  <ul className="space-y-4 mb-10">
                    {[
                      { icon: <BadgeCheck className="w-5 h-5 text-cyan-400 shrink-0" />, text: "Recognized by 5+ top companies & startups" },
                      { icon: <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />, text: "Shareable on LinkedIn with verifiable credential ID" },
                      { icon: <Star className="w-5 h-5 text-yellow-400 shrink-0" />, text: "Co-certified with our industry partner network" },
                      { icon: <Trophy className="w-5 h-5 text-violet-400 shrink-0" />, text: "Awarded on passing assessment & capstone project" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                        {item.icon}
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent("toggle-enquiry-popup"))}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-bold px-7 py-4 rounded-full transition-all transform hover:scale-[1.03] shadow-xl shadow-yellow-500/20 text-sm w-fit"
                  >
                    <GraduationCap className="w-5 h-5" />
                    Enroll & Get Certified
                  </button>
                </div>

                {/* Right — Certificate Image */}
                <div className="relative flex items-center justify-center bg-gradient-to-br from-white/3 to-transparent p-8 md:p-12 lg:min-h-[480px]">
                  {/* Decorative rotating ring */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[420px] h-[420px] rounded-full border border-white/5 animate-spin" style={{ animationDuration: "30s" }} />
                    <div className="absolute w-[320px] h-[320px] rounded-full border border-cyan-500/10 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />
                  </div>

                  {/* Certificate mockup */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 w-full max-w-md"
                  >
                    {/* Glow behind certificate */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-yellow-500/20 blur-3xl rounded-2xl" />
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10 ring-2 ring-yellow-400/20">
                      <img
                        src="https://i.ibb.co/pDKh2LR/Modern-Vintage-Certificate-of-Achievement.png"
                        alt="IIAS Certificate of Completion"
                        className="w-full h-auto object-cover"
                      />
                      {/* Shine overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                    </div>
                    {/* Floating badge */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex flex-col items-center justify-center shadow-lg shadow-yellow-500/40 z-20"
                    >
                      <Star className="w-6 h-6 text-black fill-black" />
                      <span className="text-[8px] font-black text-black uppercase leading-none mt-0.5">Certified</span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-10 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {globalFAQs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="glass-card border-white/5 px-6 rounded-xl data-[state=open]:border-cyan-500/30">
                    <AccordionTrigger className="text-lg font-medium hover:text-cyan-400 text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-20 text-center glass-card rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold font-heading mb-4">
              Not sure which course to choose?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our counselors to understand which program aligns best with your career goals.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full h-14 px-8 btn-gradient text-white text-lg">
                Book Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
