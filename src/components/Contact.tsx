"use client"

import { motion } from "framer-motion"
import { Phone, Instagram, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold font-heading"
              >
                Let&apos;s Build the <br />
                <span className="text-gradient">Future Together</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-muted-foreground text-lg max-w-md"
              >
                Have questions about our courses or enrollment? Reach out to us and our experts will get back to you.
              </motion.p>
            </div>

            <div className="space-y-6">
              <motion.a 
                href="tel:+919174171579"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-violet-500 transition-all">
                  <Phone size={22} className="text-cyan-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Call Us</p>
                  <span className="text-lg font-bold">+91 91 74171 579</span>
                </div>
              </motion.a>

              <motion.a 
                href="https://www.instagram.com/iias_officials/"
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-500 transition-all">
                  <Instagram size={22} className="text-pink-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Instagram</p>
                  <span className="text-lg font-bold">@iias_officials</span>
                </div>
              </motion.a>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center">
                  <MapPin size={22} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Visit Us</p>
                  <p className="text-lg font-bold">Indore, Madhya Pradesh</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-12 rounded-[2rem]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Name</label>
                  <Input placeholder="John Doe" className="bg-white/5 border-violet-500/20 h-12 rounded-xl focus:border-cyan-500/50 focus:ring-cyan-500/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email</label>
                  <Input placeholder="john@example.com" className="bg-white/5 border-violet-500/20 h-12 rounded-xl focus:border-cyan-500/50 focus:ring-cyan-500/20" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Course of Interest</label>
                <Input placeholder="e.g. Generative AI" className="bg-white/5 border-violet-500/20 h-12 rounded-xl focus:border-cyan-500/50 focus:ring-cyan-500/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Message</label>
                <Textarea placeholder="How can we help you?" className="bg-white/5 border-violet-500/20 min-h-[150px] rounded-xl focus:border-cyan-500/50 focus:ring-cyan-500/20" />
              </div>
              <Button size="lg" className="w-full h-14 rounded-xl btn-gradient text-white text-lg group">
                Send Message
                <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
