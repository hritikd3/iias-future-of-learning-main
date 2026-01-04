"use client"

import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { use } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { courses, iconMap } from "@/lib/courses-data"
import { Clock, Users, BarChart3, ArrowLeft, CheckCircle2, Calendar, MapPin, GraduationCap } from "lucide-react"

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
      
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/courses" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 border border-white/10 text-white`}>
                  {iconMap[course.icon]}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">{course.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{course.longDescription}</p>
                <div className="flex flex-wrap gap-3">
                  {course.tags.map((tag, index) => (
                    <span key={index} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-card rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold font-heading mb-6">Program Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold font-heading mb-6">Curriculum</h2>
                <div className="space-y-6">
                  {course.curriculum.map((module, index) => (
                    <div key={index} className="border-l-2 border-violet-500/30 pl-6">
                      <h3 className="font-bold text-lg mb-3">
                        <span className="text-cyan-400 mr-2">Module {index + 1}:</span>
                        {module.module}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, tIndex) => (
                          <span key={tIndex} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold font-heading mb-6">Meet Your Instructor</h2>
                <div className="flex items-center gap-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-violet-500/30">
                    <Image
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{course.instructor.name}</h3>
                    <p className="text-muted-foreground">{course.instructor.role}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-3xl p-8 sticky top-32"
              >


                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-semibold">{course.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-sm text-muted-foreground">Mode</div>
                      <div className="font-semibold">{course.mode}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                    <BarChart3 className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-sm text-muted-foreground">Level</div>
                      <div className="font-semibold">{course.level}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-sm text-muted-foreground">Certificate</div>
                      <div className="font-semibold">Industry Recognized</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button size="lg" className="w-full h-14 rounded-xl btn-gradient text-white text-lg">
                    Enroll Now
                  </Button>
                  <Link href="/contact" className="block">
                    <Button size="lg" variant="outline" className="w-full h-14 rounded-xl border-violet-500/30 hover:bg-violet-500/10">
                      Request Callback
                    </Button>
                  </Link>
                </div>

                <p className="text-xs text-center text-muted-foreground mt-6">
                  Next batch starting soon. Limited seats available.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
