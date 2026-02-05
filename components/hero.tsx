"use client"

import { ArrowDown, Download, FolderOpen, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Image - Left Side */}
            <div className="relative animate-in fade-in slide-in-from-left-8 duration-700 flex-shrink-0">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-teal-400/20 rounded-full blur-2xl" />
                {/* Border ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
                {/* Main image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50 glow">
                  <Image
                    src="/profile photo.jpeg"
                    alt="Akshay Lad - Full Stack Developer"
                    fill
                    className="object-cover object-[center_15%]"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-bounce" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-teal-300 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Greeting */}
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
                <span className="text-foreground">Hi, I&apos;m </span>
                <span className="text-gradient">Akshay Lad</span>
              </h1>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                Full Stack Developer
              </h2>

              {/* Subtitle */}
              <p className="text-lg text-muted-foreground mb-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-450">
                Computer Science Undergraduate | Web Developer | Problem Solver
              </p>

              {/* Tagline */}
              <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
                Passionate about building efficient applications and solving real-world problems with code.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 animate-in fade-in slide-in-from-bottom-14 duration-700 delay-600">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 glow-sm hover:glow"
                >
                  <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                  Download Resume
                </Link>
                <Link
                  href="#projects"
                  className="group flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all duration-200 border border-border"
                >
                  <FolderOpen size={18} className="group-hover:scale-110 transition-transform" />
                  View Projects
                </Link>
                <Link
                  href="#contact"
                  className="group flex items-center gap-2 px-6 py-3 bg-transparent text-foreground rounded-lg font-medium hover:bg-secondary transition-all duration-200 border border-border"
                >
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs">Scroll Down</span>
            <ArrowDown size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
