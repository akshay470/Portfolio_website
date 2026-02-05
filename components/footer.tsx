"use client"

import { Github, Heart, Linkedin } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/akshay470",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/akshay-lad-240715326/",
    icon: Linkedin,
  },
]

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              Akshay<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center md:justify-start gap-1">
              © {currentYear} Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Akshay Lad
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-secondary hover:bg-primary/20 rounded-lg transition-all duration-200 group hover:-translate-y-1"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  )
}
