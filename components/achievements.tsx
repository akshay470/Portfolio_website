"use client"

import { Award, Code, Trophy } from "lucide-react"

const achievements = [
  {
    icon: Code,
    title: "300+ LeetCode Problems",
    description: "Consistently solving algorithmic challenges to sharpen problem-solving skills",
    highlight: "300+",
  },
  {
    icon: Award,
    title: "Reliance Foundation Scholar 2025",
    description: "Recognized for academic excellence and leadership potential",
    highlight: "Scholar",
  },
  {
    icon: Trophy,
    title: "Runner-Up at Hackofiesta 6.0",
    description: "Competed at IIIT Lucknow's flagship hackathon event",
    highlight: "2nd Place",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Achievements</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Milestones & Recognition
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-8 text-center hover:glow transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <achievement.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Highlight */}
              <span className="text-3xl font-bold text-gradient">{achievement.highlight}</span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mt-3 mb-2">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
