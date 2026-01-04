"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Rahul Verma",
    role: "AI Engineer at TechCorp",
    content: "The IIAS Gen AI course is honestly outstanding. I learned practical skills like Next.js and building AI agents, and it directly helped me land a role at a startup. Joining this course was one of the best decisions I’ve made."
    // avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Sneha Kapoor",
    role: "Full-Stack Developer",
    content: "I come from a non-technical background, but the mentors explained everything so clearly that coding now feels manageable and even enjoyable. I’ve successfully secured a placement, and I’m truly grateful to the entire IIAS team for their support."
    // avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Aditya Singh",
    role: "Cyber Security Analyst",
    content: "Ethical Hacking ke liye Indore mein isse better jagah nahi hai. Lab sessions bohot intense aur practical hote hain. Knowledge depth kamaal ki hai."
    // avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Priyanka Joshi",
    role: "Data Scientist",
    content: "Data Science seekhne ka sapna IIAS ki wajah se pura hua. Curriculum bilkul industry-ready hai aur placement support bhi top-notch hai. Highly recommended!"
    // avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Vivek Rathore",
    role: "Cloud Architect",
    content: "The level of Cloud Engineering training here is exceptional. Complex topics like Docker and Kubernetes were taught in a very simple and practical way. This program has played a major role in shaping my career"
    // avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Ananya Sharma",
    role: "UI/UX Designer",
    content: "UI/UX design course ne mera perspective hi badal diya. Yahan focus sirf theory pe nahi, portfolio build karne pe hota hai. Best faculty in Indore!"
    // avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop"
  }
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="glass-card p-8 rounded-3xl space-y-6 relative overflow-hidden group hover:border-cyan-500/30 transition-all h-full">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-violet-500/20" />
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="text-cyan-400" fill="currentColor" />
        ))}
      </div>
      <p className="text-lg text-white/90 leading-relaxed italic">
        &ldquo;{testimonial.content}&rdquo;
      </p>
      <div className="flex items-center gap-4 pt-4 border-t border-violet-500/10">
        <Avatar className="w-12 h-12 border-2 border-cyan-500/30">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback className="bg-violet-500/20 text-white">{testimonial.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-bold text-white">{testimonial.name}</h4>
          <p className="text-xs text-cyan-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const itemsPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }, [totalPages])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }, [totalPages])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  )

  return (
    <section id="testimonials" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold font-heading"
          >
            What Our <span className="text-gradient">Students Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Join hundreds of successful graduates who have launched their tech careers with IIAS.
          </motion.p>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className={`grid gap-8 ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <TestimonialCard key={`${currentIndex}-${index}`} testimonial={testimonial} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-cyan-400 w-6"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
