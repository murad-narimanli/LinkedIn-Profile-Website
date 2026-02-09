import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Globe, Terminal } from 'lucide-react';
export function AboutSection() {
  const stats = [
  {
    icon: Code,
    label: 'Years Experience',
    value: '5+'
  },
  {
    icon: Terminal,
    label: 'Projects Completed',
    value: '50+'
  },
  {
    icon: Coffee,
    label: 'Coffee Consumed',
    value: '∞'
  },
  {
    icon: Globe,
    label: 'Clients Served',
    value: '20+'
  }];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
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
            <span className="text-blue-500 font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="space-y-6 text-zinc-400 text-lg leading-relaxed">

            <p>
              Hello! My name is Murad and I am a professional at{' '}
              <span className="text-blue-400">King Entertainment Corp</span>. I
              am passionate about the entertainment industry and dedicated to
              creating memorable experiences and driving business growth.
            </p>
            <p>
              Throughout my career, I've had the privilege of working in the
              entertainment sector, developing skills in{' '}
              <span className="text-blue-400">project management</span>,{' '}
              <span className="text-blue-400">creative strategy</span>, and{' '}
              <span className="text-blue-400">business operations</span>.
            </p>
            <p>
              I am based in{' '}
              <span className="text-white font-medium">Baku, Azerbaijan</span>,
              where I work on bringing innovative entertainment projects to
              life.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            className="grid grid-cols-2 gap-4">

            {stats.map((stat, index) =>
            <div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:border-blue-500/50 transition-colors group">

                <stat.icon className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500 font-mono">
                  {stat.label}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

}