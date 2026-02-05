"use client"

import { 
  Code2, 
  Server, 
  Smartphone, 
  Terminal, 
  Wrench 
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS3", "Tailwind CSS", "React", "Responsive Design"],
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "MySQL", "REST APIs"],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "App Development",
    icon: Smartphone,
    skills: ["Kotlin", "Android Studio", "Firebase"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Languages",
    icon: Terminal,
    skills: ["C++", "JavaScript", "Kotlin", "Solidity"],
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Remix IDE", "Android Studio", "Firebase"],
    color: "from-pink-500/20 to-rose-500/20",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Technologies I Work With
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-6 hover:glow transition-all duration-300 hover:-translate-y-1"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm bg-secondary/80 text-muted-foreground rounded-lg hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
