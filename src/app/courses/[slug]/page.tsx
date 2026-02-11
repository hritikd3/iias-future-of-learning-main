"use client"
import { getInitials } from "@/lib/getInitials";

import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { use } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { courses, iconMap } from "@/lib/courses-data"
import { Clock, Users, BarChart3, ArrowLeft, CheckCircle2, Calendar, MapPin, GraduationCap, BookOpen, Briefcase, Trophy, Laptop, CheckCircle, ChevronDown, Download, Rocket } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const course = courses.find((c) => c.slug === slug)

  if (!course) {
    notFound()
  }

  return (
    <main className="min-h-screen text-white relative">
      <div className="gradient-blur-1" />
      <div className="gradient-blur-2" />
      <div className="gradient-blur-3" />

      <Navbar />

      <section className="pt-24 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Courses
          </Link>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center border border-white/10 text-white shadow-lg shadow-cyan-500/10`}>
                    {iconMap[course.icon]}
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium text-sm">
                    Most Popular
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                  {course.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {course.longDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="h-14 px-8 rounded-full btn-gradient text-white text-lg">
                    Download Brochure <Download className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-white/10 hover:bg-white/5 text-lg">
                    View Syllabus
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Sticky Sidebar - Desktop */}
            <div className="lg:col-span-1 row-start-1 lg:row-start-auto">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-3xl p-6 sticky top-24 border-white/10 shadow-2xl shadow-black/50"
              >
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-sm text-muted-foreground mb-1">Program Fee</p>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold text-white">{course.price}</span>
                      <span className="text-sm text-cyan-400 mb-1">+ GST</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="w-5 h-5 text-cyan-500" />
                        <span>Duration</span>
                      </div>
                      <span className="font-semibold text-white">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-purple-500" />
                        <span>Mode</span>
                      </div>
                      <span className="font-semibold text-white">{course.mode}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <BarChart3 className="w-5 h-5 text-yellow-500" />
                        <span>Level</span>
                      </div>
                      <span className="font-semibold text-white">{course.level.split(' ')[0]}</span>
                    </div>
                  </div>

                  <Button className="w-full h-12 rounded-xl bg-white text-black hover:bg-cyan-50 font-bold text-lg">
                    Enroll Now
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Limited seats available for next batch
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">

              {/* Program Highlights / Outcomes */}
              <section>
                <h2 className="text-3xl font-bold font-heading mb-8 flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-yellow-500" /> What You Will Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.outcomes?.map((outcome, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors">
                      <div className="mt-1">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      </div>
                      <p className="text-neutral-300">{outcome}</p>
                    </div>
                  ))}
                  {course.highlights.map((highlight, index) => (
                    <div key={`high-${index}`} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors">
                      <div className="mt-1">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      </div>
                      <p className="text-neutral-300">{highlight}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tools & Technologies */}
              <section>
                <h2 className="text-3xl font-bold font-heading mb-8 flex items-center gap-3">
                  <Laptop className="w-8 h-8 text-blue-500" /> Tools You Will Master
                </h2>
                <div className="flex flex-wrap gap-4">
                  {course.tools?.map((tool, index) => (
                    <div key={index} className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all cursor-default">
                      <span className="font-semibold text-neutral-200">{tool}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Curriculum Accordion */}
              <section>
                <h2 className="text-3xl font-bold font-heading mb-8 flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-purple-500" /> Detailed Curriculum
                </h2>
                <div className="glass-card rounded-3xl p-1 overflow-hidden">
                  <Accordion type="single" collapsible className="w-full">
                    {course.curriculum.map((module, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/5 px-6 last:border-0">
                        <AccordionTrigger className="hover:no-underline py-6">
                          <div className="text-left">
                            <span className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">Module {index + 1}</span>
                            <span className="text-lg font-bold text-white">{module.module}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-6">
                          <div className="flex flex-wrap gap-2 mt-2">
                            {module.topics.map((topic, tIndex) => (
                              <span key={tIndex} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-sm border border-white/5">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                {topic}
                              </span>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </section>

              {/* Projects */}
              <section>
                <h2 className="text-3xl font-bold font-heading mb-8 flex items-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-500" /> Real-World Projects
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {course.projects?.map((project, index) => (
                    <div key={index} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Career Services */}
              <section className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-white/10">
                <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-cyan-400" /> Career Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3 text-2xl">📝</div>
                    <h4 className="font-bold mb-2">Resume Building</h4>
                    <p className="text-sm text-muted-foreground">Expert crafted resumes</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3 text-2xl">👔</div>
                    <h4 className="font-bold mb-2">Mock Interviews</h4>
                    <p className="text-sm text-muted-foreground">Practice with experts</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3 text-2xl">🚀</div>
                    <h4 className="font-bold mb-2">Job Referrals</h4>
                    <p className="text-sm text-muted-foreground">Direct connection to HRs</p>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              {course.faqs && (
                <section>
                  <h2 className="text-3xl font-bold font-heading mb-8 flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-green-500" /> Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {course.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index}`} className="glass-card border-white/5 px-6 rounded-xl data-[state=open]:border-cyan-500/30">
                          <AccordionTrigger className="text-lg font-medium hover:text-cyan-400 text-left hover:no-underline">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-base pb-4">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </section>
              )}

              {/* Lead Form Section */}
              <section className="glass-card p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold font-heading mb-4">Still have doubts?</h2>
                    <p className="text-muted-foreground mb-8 text-lg">
                      Talk to our academic counselors to get a personalized roadmap for your career.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-white">1:1 Career Counseling</p>
                          <p className="text-sm text-muted-foreground">Get expert guidance</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-white">Profile Evaluation</p>
                          <p className="text-sm text-muted-foreground">Know where you stand</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <form className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-1 block">Name</label>
                        <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Enter your name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-1 block">Email</label>
                        <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Enter your email" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-1 block">Phone</label>
                        <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Enter your number" />
                      </div>
                      <Button className="w-full h-12 rounded-xl btn-gradient text-white font-bold text-lg mt-2">
                        Request Callback
                      </Button>
                    </form>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      By submitting, you agree to our privacy policy.
                    </p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
