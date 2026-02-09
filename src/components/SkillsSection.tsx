import React from 'react';
import { motion } from 'framer-motion';
const skills = {
  Frontend: [
  {
    name: 'Vue 2/3 (Composition API)',
    level: 95
  },
  {
    name: 'ReactJS / Next.js',
    level: 90
  },
  {
    name: 'HTML5 / CSS3 / Sass',
    level: 95
  },
  {
    name: 'JavaScript / TypeScript',
    level: 90
  },
  {
    name: 'Micro-frontend Architecture',
    level: 85
  }],

  'State & Tools': [
  {
    name: 'Redux / Vuex / Pinia',
    level: 90
  },
  {
    name: 'Webpack / Vite',
    level: 85
  },
  {
    name: 'Git / GitLab CI/CD',
    level: 85
  },
  {
    name: 'REST / GraphQL',
    level: 90
  },
  {
    name: 'Jest / Testing',
    level: 80
  }],

  'UI Frameworks': [
  {
    name: 'Tailwind CSS',
    level: 95
  },
  {
    name: 'Material Design',
    level: 85
  },
  {
    name: 'Ant Design',
    level: 80
  },
  {
    name: 'Chakra UI',
    level: 85
  },
  {
    name: 'WebFlow',
    level: 75
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
            <span className="text-teal-500 font-mono text-xl mr-2">04.</span>
            Technical Skills
          </h2>
          <motion.div
            initial={{
              width: 0
            }}
            whileInView={{
              width: 80
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="h-1 bg-teal-600 rounded-full" />

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) =>
          <motion.div
            key={category}
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: categoryIndex * 0.15
            }}
            className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 hover:border-teal-500/30 transition-colors group">

              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <motion.span
                initial={{
                  height: 0
                }}
                whileInView={{
                  height: 32
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + categoryIndex * 0.1
                }}
                className="w-2 bg-teal-500 rounded-full mr-3 shadow-[0_0_10px_rgba(20,184,166,0.5)]" />

                {category}
              </h3>
              <div className="space-y-6">
                {items.map((skill, index) =>
              <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-zinc-300 font-medium text-sm group-hover:text-teal-200 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-zinc-500 font-mono text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
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
                      duration: 1.2,
                      delay: 0.4 + index * 0.1,
                      ease: 'easeOut'
                    }}
                    className="h-full bg-teal-600 rounded-full relative overflow-hidden">

                        <motion.div
                      initial={{
                        x: '-100%'
                      }}
                      whileInView={{
                        x: '100%'
                      }}
                      transition={{
                        duration: 1.5,
                        delay: 1.5 + index * 0.1,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full" />

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