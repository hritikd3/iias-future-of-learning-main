"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import gsap from "gsap"

const stats = [
  { value: "5000+", label: "Students Trained" },
  { value: "95%", label: "Placement Rate" },
  { value: "50+", label: "Industry Partners" },
  { value: "15+", label: "Years Experience" },
]

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current.querySelectorAll(".word"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      )
    }

    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.querySelectorAll(".stat-item"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.8, ease: "power2.out" }
      )
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Admissions Open for 2026</span>
          </motion.div>

          <h1
            ref={headingRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
          >
            <span className="word inline-block">Indore</span>{" "}
            <span className="word inline-block">Institute</span>{" "}
            <span className="word inline-block">of</span>{" "}
            <span className="word inline-block text-gradient">Advance</span>{" "}
            <span className="word inline-block text-gradient">Studies</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            Transform your career with cutting-edge courses in{" "}
            <span className="text-white font-semibold">AI</span>,{" "}
            <span className="text-gradient font-semibold">Development</span>,
            and{" "}
            <span className="text-gradient font-semibold">Cyber Security</span>.{" "}
            Join Central India&apos;s premier tech academy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Link href="/courses">
              <Button
                size="lg"
                className="rounded-full h-14 px-8 btn-gradient text-white text-lg group"
              >
                Explore Courses
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+919174171579">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-6 border-violet-500/30 hover:bg-violet-500/10 text-lg"
              >
                <Phone size={20} className="mr-2" />
                +91 91741 71579
              </Button>
            </a>
          </motion.div>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-item stat-card rounded-2xl p-6 text-center transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
