"use client"

import { GraduationCap } from "lucide-react"

const timeline = [
  {
    title: "B.Tech in Computer Science",
    institution: "IIIT Lucknow",
    description: "Currently in 2nd Year, focusing on full-stack development, algorithms, and blockchain technology.",
    highlight: true,
  },
  {
    title: "HSC (12th Grade)",
    institution: "Sharad Pawar Junior College",
    description: "Completed higher secondary education with 89.17% marks.",
    percentage: "89.17%",
  },
  {
    title: "SSC (10th Grade)",
    institution: "Sahakar Vidya Mandir, Buldana",
    description: "Completed secondary education with 90.20% marks.",
    percentage: "90.20%",
  },
]

export function Journey() {
  return (
    <section id="journey" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Education</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            My Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-sm z-10" />

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div
                    className={`glass rounded-2xl p-6 hover:glow-sm transition-all duration-300 ${
                      item.highlight ? "border-primary/30" : ""
                    }`}
                  >
                    {/* Icon & Title */}
                    <div className="flex items-start gap-3 mb-2">
                      <GraduationCap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="text-primary text-sm">{item.institution}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mt-3 ml-8">
                      {item.description}
                    </p>

                    {/* Percentage Badge */}
                    {item.percentage && (
                      <div className="ml-8 mt-3">
                        <span className="inline-block px-3 py-1.5 text-sm font-bold bg-secondary text-foreground rounded-lg">
                          {item.percentage}
                        </span>
                      </div>
                    )}

                    {/* Current Badge */}
                    {item.highlight && (
                      <div className="ml-8 mt-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary/20 text-primary rounded-lg">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                          Currently Pursuing
                        </span>
                      </div>
                    )}
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
