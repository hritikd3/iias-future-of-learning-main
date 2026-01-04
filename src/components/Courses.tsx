"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Brain, Cpu, Shield, Layers, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const courses = [
  {
    slug: "ai-gen-ai-agentic-ai",
    title: "AI • Gen AI • Agentic AI",
    description: "Master the cutting edge of artificial intelligence. From Large Language Models to autonomous agents.",
    icon: <Brain className="w-8 h-8" />,
    gradient: "from-violet-500 to-purple-600",
    tags: ["LLMs", "Neural Networks", "Agents"]
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    description: "Build scalable modern web applications using the latest technologies and industry best practices.",
    icon: <Layers className="w-8 h-8" />,
    gradient: "from-cyan-500 to-teal-600",
    tags: ["React", "Node.js", "Next.js"]
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    description: "Protect digital assets and master the art of ethical hacking and secure systems design.",
    icon: <Shield className="w-8 h-8" />,
    gradient: "from-rose-500 to-pink-600",
    tags: ["Ethical Hacking", "Networks", "Security"]
  },
]

export function Courses() {
  return (
    <section id="courses" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold font-heading"
          >
            Elite <span className="text-gradient">Tech Programs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Industry-aligned curriculum designed by experts to transform you into a top-tier tech professional.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Link href={`/courses/${course.slug}`}>
                <Card className="glass-card h-full cursor-pointer group transition-all duration-300 hover:border-cyan-500/30">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-6 text-white`}>
                      {course.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 font-heading group-hover:text-gradient transition-all">{course.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{course.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {course.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="text-xs font-medium px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm group-hover:gap-3 transition-all">
                      Learn More <ArrowRight size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <Link href="/courses">
            <Button size="lg" variant="outline" className="rounded-full border-violet-500/30 hover:bg-violet-500/10">
              View All Courses
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
