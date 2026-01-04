"use client"

import dynamic from "next/dynamic"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Courses } from "@/components/Courses"
import { Certifications } from "@/components/Certifications";
import { Partners } from "@/components/Partners" ;
import { Testimonials } from "@/components/Testimonials"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

const ThreeBackground = dynamic(() => import("@/components/ThreeBackground").then(mod => ({ default: mod.ThreeBackground })), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen text-white relative">
      <div className="gradient-blur-1" />
      <div className="gradient-blur-2" />
      <div className="gradient-blur-3" />
      <ThreeBackground />
      <Navbar />
      <Hero />
      <Courses />
      <Certifications />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
