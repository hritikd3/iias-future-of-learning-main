"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { courses, iconMap } from "@/lib/courses-data"
import { Clock, Users, BarChart3, ArrowRight, Linkedin, CheckCircle, Trophy, Briefcase, GraduationCap, ChevronRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const mentors = [
  {
    name: "Mahendra Singh Chouhan",
    role: "Trainer",
    image: "https://i.ibb.co/rKgfJGJY/Whats-App-Image-2026-02-02-at-13-04-33.jpg",
    linkedin: "https://www.linkedin.com/in/mahendrachouhan/",
    description: "Experienced Lead Data Scientist/Solution Architect with 15+ years in IT and 10+ years in data science and AI/ML domains. Proven expertise in designing scalable, reliable technical architectures."
  },
  {
    name: "Raunak Patni",
    role: "Data Analyst",
    image: "https://i.ibb.co/rGmVH1cm/Whats-App-Image-2026-02-02-at-13-04-33-2.jpg",
    linkedin: "https://www.linkedin.com/in/alankar-kharbadikar/",
    description: "Skilled in data analysis, machine learning, and statistical modeling to drive insights from complex datasets. Leveraging data to develop analytical insights for business decision making."
  },
  {
    name: "Alankar Kharbadikar",
    role: "Mentor",
    image: "https://i.ibb.co/hFQhKvXM/Whats-App-Image-2026-02-02-at-13-04-33-1.jpg",
    linkedin: "https://www.linkedin.com/in/alankar-kharbadikar/",
    description: "AI/ML Engineer at Magnifi by Videoverse"
  },
  {
    name: "Hrshit Gandhi",
    role: "Senior Data Scientist",
    image: "https://i.ibb.co/7xQdW52r/Whats-App-Image-2026-02-02-at-13-10-05-1.jpg",
    linkedin: "https://www.linkedin.com/in/harsheetgandhi/",
    description: "Senior Data Scientist"
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
                        <div className="flex items-center justify-between text-sm mb-4">
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Clock size={16} className="text-cyan-500" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Trophy size={16} className="text-cyan-500" />
                            <span>Certification</span>
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
                Learn from industry veterans who have shaped the future of technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mentors.map((mentor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card h-full border-white/5 hover:border-cyan-400/30 transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="relative w-full h-80 overflow-hidden">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                          <a
                            href={mentor.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                          >
                            <Linkedin size={20} />
                          </a>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-grow bg-white/5 backdrop-blur-sm">
                        <h3 className="text-lg font-bold font-heading mb-1">{mentor.name}</h3>
                        {mentor.role && (
                          <p className="text-cyan-400 text-sm font-medium mb-3">{mentor.role}</p>
                        )}
                        {mentor.description && (
                          <p className="text-muted-foreground text-sm line-clamp-4">
                            {mentor.description}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                  {[
                    { q: "Who can join these courses?", a: "Our courses are designed for everyone - from beginners with zero coding knowledge to experienced professionals looking to upskill." },
                    { q: "Do you provide placement assistance?", a: "Yes, we provide 100% placement support including resume building, mock interviews, and direct referrals to our hiring partners." },
                    { q: "Are the classes live or recorded?", a: "We follow a hybrid model with live instructor-led sessions for doubts and interactive learning, supported by high-quality recorded content." },
                    { q: "What if I miss a class?", a: "All live sessions are recorded and available in your dashboard for lifetime access." }
                  ].map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="glass-card border-white/5 px-6 rounded-xl data-[state=open]:border-cyan-500/30">
                      <AccordionTrigger className="text-lg font-medium hover:text-cyan-400 text-left">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base">
                        {faq.a}
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
