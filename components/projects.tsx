"use client"

import { ExternalLink, Github, ChefHat, GraduationCap, LayoutDashboard, Shield } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "CookMate",
    subtitle: "Recipe Management App",
    description:
      "CookMate is a recipe management application designed to help users browse and organize cooking recipes through a clean and responsive interface. The project focuses on structured content display, smooth navigation, and an intuitive user experience.",
    github: "https://github.com/akshay470/CookMate",
    tags: ["React", "CSS", "JavaScript"],
    icon: ChefHat,
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "University Management System",
    subtitle: "Full Stack Web Application",
    description:
      "Developed a full-stack university management system to handle student records, authentication, and CRUD operations through a secure and responsive interface with smooth frontend-backend integration.",
    github: "https://github.com/akshay470/University-Project",
    tags: ["Node.js", "Express", "MySQL", "React"],
    icon: GraduationCap,
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "OrganizeU",
    subtitle: "Productivity Dashboard",
    description:
      "OrganizeU is a web-based productivity application that allows users to manage daily tasks through a clean dashboard interface to improve workflow efficiency and time management.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    icon: LayoutDashboard,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "CertiChain",
    subtitle: "Blockchain Certificate Verification",
    description:
      "CertiChain is a Web3 application that securely issues and verifies digital certificates using blockchain smart contracts to ensure tamper-proof storage and transparent verification.",
    github: "https://github.com/akshay470/certichain.web3",
    tags: ["Solidity", "Web3", "React", "Ethereum"],
    icon: Shield,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, 
            mobile apps, and blockchain technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden hover:glow transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Header */}
              <div className={`p-6 bg-gradient-to-br ${project.gradient}`}>
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-background/50 rounded-xl backdrop-blur-sm">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-background/50 rounded-lg backdrop-blur-sm hover:bg-background/70 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-5 h-5 text-foreground" />
                      </Link>
                    )}
                    <Link
                      href={project.github || "#"}
                      target={project.github ? "_blank" : undefined}
                      rel={project.github ? "noopener noreferrer" : undefined}
                      className="p-2 bg-background/50 rounded-lg backdrop-blur-sm hover:bg-background/70 transition-colors"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink className="w-5 h-5 text-foreground" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 text-xs bg-secondary text-muted-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
