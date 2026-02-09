import React from 'react';
import { motion } from 'framer-motion';
const skills = {
  Business: [
  {
    name: 'Project Management',
    level: 90
  },
  {
    name: 'Strategic Planning',
    level: 85
  },
  {
    name: 'Team Leadership',
    level: 90
  },
  {
    name: 'Business Development',
    level: 85
  },
  {
    name: 'Client Relations',
    level: 95
  }],

  Entertainment: [
  {
    name: 'Event Management',
    level: 90
  },
  {
    name: 'Creative Direction',
    level: 85
  },
  {
    name: 'Content Strategy',
    level: 80
  },
  {
    name: 'Brand Management',
    level: 85
  },
  {
    name: 'Production',
    level: 75
  }],

  Tools: [
  {
    name: 'Marketing',
    level: 85
  },
  {
    name: 'Analytics',
    level: 80
  },
  {
    name: 'Social Media',
    level: 90
  },
  {
    name: 'Budgeting',
    level: 85
  },
  {
    name: 'Negotiation',
    level: 90
  }]

};
export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5
          }}
          className="mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-blue-500 font-mono text-xl mr-2">03.</span>
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) =>
          <motion.div
            key={category}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: categoryIndex * 0.1
            }}
            className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/30 transition-colors">

              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-500 rounded-full mr-3" />
                {category}
              </h3>

              <div className="space-y-6">
                {items.map((skill, index) =>
              <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-zinc-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-zinc-500 font-mono text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                    initial={{
                      width: 0
                    }}
                    whileInView={{
                      width: `${skill.level}%`
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.2 + index * 0.1
                    }}
                    className="h-full bg-blue-600 rounded-full relative">

                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
              )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}