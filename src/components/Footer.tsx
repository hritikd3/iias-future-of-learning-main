"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-violet-500/10 py-16 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image 
              src="https://i.ibb.co/JjjQzzzB/Screenshot-2025-12-17-at-10-45-26-PM.png" 
              alt="IIAS Logo" 
              width={40} 
              height={40} 
              className="rounded-lg bg-white p-1"
            />
            <span className="font-heading font-bold text-xl tracking-tighter">IIAS</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Indore Institute of Advance Studies. Empowering the next generation of AI and Tech leaders.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-cyan-400">Courses</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link href="/courses/ai-gen-ai-agentic-ai" className="hover:text-cyan-400 transition-colors">AI • Gen AI • Agentic AI</Link></li>
            <li><Link href="/courses/full-stack-development" className="hover:text-cyan-400 transition-colors">Full-Stack Development</Link></li>
            <li><Link href="/courses/cyber-security" className="hover:text-cyan-400 transition-colors">Cyber Security</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-cyan-400">Quick Links</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link href="/courses" className="hover:text-cyan-400 transition-colors">All Courses</Link></li>
            <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-cyan-400">Contact</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <a href="tel:+919098272955" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                <Phone size={16} className="text-violet-400" />
                +91 90982 72955
              </a>
              <a href="https://www.instagram.com/iias_officials/" target="_blank" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                <Instagram size={16} className="text-violet-400" />
                @iias_officials
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-violet-400" />
                <span>Race Course Road, Indore</span>
              </div>
            </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-violet-500/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground relative z-10">
        <p>© 2026 Indore Institute of Advance Studies. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
