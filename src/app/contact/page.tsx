"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Phone, Mail, Instagram, MapPin, Send, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    value: "+91 91 74171 579",
    href: "tel:+919174171579",
    description: "Mon-Sat, 9AM-7PM"
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    title: "Instagram",
    value: "@iias_officials",
    href: "https://www.instagram.com/iias_officials/",
    description: "Follow us for updates"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    value: "Indore, MP",
    href: "#",
    description: "Madhya Pradesh, India"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    value: "Mon - Sat",
    href: "#",
    description: "9:00 AM - 7:00 PM"
  },
]

const faqs = [
  {
    question: "What are the eligibility criteria for courses?",
    answer: "Most of our courses are open to graduates and working professionals. Some advanced courses may require basic programming knowledge."
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes! We have a dedicated placement cell with 95%+ placement rate. We partner with 50+ companies across India."
  },
  {
    question: "Are there any EMI options available?",
    answer: "Yes, we offer flexible EMI options with 0% interest for most courses. Contact us for detailed payment plans."
  },
  {
    question: "What is the batch size?",
    answer: "We maintain small batch sizes of 15-20 students to ensure personalized attention and better learning outcomes."
  },
]

export default function ContactPage() {
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
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Let's Start Your <span className="text-gradient">Tech Journey</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our courses or want to schedule a campus visit? 
              We're here to help you take the first step towards your dream career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <MessageCircle className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold font-heading">Send us a Message</h2>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                    <Input 
                      placeholder="John Doe" 
                      className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-cyan-400/50" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                    <Input 
                      placeholder="john@example.com" 
                      className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-cyan-400/50" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Phone Number</label>
                    <Input 
                      placeholder="+91 98765 43210" 
                      className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-cyan-400/50" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Course of Interest</label>
                    <Input 
                      placeholder="e.g. AI & Gen AI" 
                      className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-cyan-400/50" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Your Message</label>
                  <Textarea 
                    placeholder="Tell us about your learning goals..." 
                    className="bg-white/5 border-white/10 min-h-[150px] rounded-xl focus:border-cyan-400/50" 
                  />
                </div>
                <Button size="lg" className="w-full h-14 rounded-xl btn-gradient text-white text-lg group">
                  Send Message
                  <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card rounded-2xl p-6 group hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-1">{info.title}</h3>
                    <p className="font-bold text-lg mb-1">{info.value}</p>
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-card rounded-2xl p-6 overflow-hidden"
              >
                <h3 className="font-bold text-lg mb-4">Find Us</h3>
                <div className="aspect-video rounded-xl overflow-hidden bg-white/5">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717921398!2d75.69905224999999!3d22.7242379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold font-heading text-center mb-12">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
