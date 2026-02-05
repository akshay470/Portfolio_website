"use client"

import { Code2, Lightbulb, Rocket } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "300+ LeetCode problems solved with analytical approach",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quick to adapt to new technologies and frameworks",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Get to know me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I started my journey in computer science with curiosity and a passion for technology. 
              Today, I focus on building scalable applications, improving my problem-solving skills, 
              and preparing myself for real-world software engineering roles.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my B.Tech in Computer Science at IIIT Lucknow, I&apos;m constantly 
              exploring new technologies and working on projects that challenge me to grow as a developer.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me solving algorithmic challenges on LeetCode 
              or exploring the latest in web and mobile development.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group glass rounded-xl p-6 hover:glow-sm transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
