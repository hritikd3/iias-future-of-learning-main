"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Users, Award, BookOpen, Target, CheckCircle2, Heart, Rocket, Shield } from "lucide-react"

const stats = [
  { label: "Students Trained", value: "5000+", icon: <Users className="w-6 h-6" /> },
  { label: "Courses Offered", value: "25+", icon: <BookOpen className="w-6 h-6" /> },
  { label: "Industry Partners", value: "50+", icon: <Award className="w-6 h-6" /> },
  { label: "Placement Rate", value: "95%", icon: <Target className="w-6 h-6" /> },
]

const values = [
  {
    title: "Innovation First",
    description: "We stay ahead of the curve by constantly updating our curriculum with the latest industry trends and technologies.",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    title: "Hands-on Learning",
    description: "Theory meets practice through real-world projects, live coding sessions, and industry simulations.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Expert Mentorship",
    description: "Learn from industry professionals who bring years of experience from top tech companies.",
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: "Career Focus",
    description: "Our placement cell works tirelessly to connect you with the best opportunities in the industry.",
    icon: <Shield className="w-6 h-6" />
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">
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
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-cyan-400 mb-6">
              About IIAS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Shaping the <span className="text-gradient">Future of Tech</span> Education
            </h1>
            <p className="text-lg text-muted-foreground">
              Indore Institute of Advance Studies (IIAS) is a premier technology training institute dedicated to 
              bridging the gap between academic knowledge and industry requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="stat-card rounded-2xl p-6 text-center transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center text-cyan-400">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden glass border border-white/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&h=1200&auto=format&fit=crop"
                alt="Our Story"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Born in the heart of Indore, IIAS started with a simple but powerful observation: while tech was evolving rapidly, education remained stagnant. We saw brilliant students struggling to find work because they lacked the practical, real-world skills that modern companies actually needed.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                What began as a small classroom project has now grown into Indore's leading hub for advanced tech studies. We don't just teach code; we build careers, foster innovation, and create a community of creators who are ready to lead the global tech revolution from right here in Madhya Pradesh.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-6 relative z-10 bg-violet-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                  Director & <span className="text-gradient-purple">Founder</span>
                </h2>
                <h3 className="text-2xl font-bold text-white mb-6">Varsha Kingrani</h3>
                <p className="text-muted-foreground text-lg leading-relaxed italic border-l-4 border-cyan-400 pl-6">
                  "With over 15 years of leadership experience in hospitality, business development, sales, marketing, and education management, Varsha Kingrani founded the institute with a vision to bridge the gap between education and employment in Madhya Pradesh."
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="glass-card p-6 rounded-2xl">
                  <h4 className="text-cyan-400 font-bold mb-2">Location</h4>
                  <p className="text-white/80">Race Course Road, Indore</p>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                  <h4 className="text-cyan-400 font-bold mb-2">Contact</h4>
                  <p className="text-white/80">+91 90982 72955</p>
                  <p className="text-white/80">support@indoreinstitute.in</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-3xl rotate-6 blur-2xl opacity-20 animate-pulse" />
                <div className="relative h-full w-full rounded-3xl overflow-hidden border-2 border-white/10 glass shadow-2xl">
                  <Image
                    src="https://i.ibb.co/h1xYjS8h/569336041-18509730343068001-832828489189896719-n.jpg"
                    alt="Varsha Kingrani - Founder of IIAS"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                Our <span className="text-gradient-purple">Mission</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower aspiring tech professionals with cutting-edge skills in AI, Full-Stack Development, 
                and Cyber Security through industry-aligned curriculum and hands-on training.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe that everyone deserves access to quality tech education. Our mission is to democratize 
                learning and create opportunities for students from all backgrounds to excel in the tech industry.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
