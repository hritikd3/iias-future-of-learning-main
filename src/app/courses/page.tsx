"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { courses, iconMap } from "@/lib/courses-data"
import { Clock, Users, BarChart3, ArrowRight } from "lucide-react"

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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-cyan-400 mb-6">
              Our Programs
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Elite <span className="text-gradient">Tech Programs</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Industry-aligned curriculum designed by experts to transform you into a top-tier tech professional.
              Choose your path and start your journey today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/courses/${course.slug}`}>
                  <Card className={`glass-card h-full border-white/5 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(45,212,191,0.1)] group cursor-pointer`}>
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 border border-white/10 text-white group-hover:scale-110 transition-transform`}>
                        {iconMap[course.icon]}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 font-heading">{course.title}</h3>
                      <p className="text-muted-foreground mb-6 flex-grow">{course.description}</p>
                      
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {course.tags.slice(0, 3).map((tag, tIndex) => (
                            <span key={tIndex} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-white/5">
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BarChart3 size={14} />
                            <span>{course.level.split(' ')[0]}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-end">
                          <span className="text-cyan-400 flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                            View Details <ArrowRight size={16} />
                          </span>
                        </div>
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
