import React, { useEffect, useState, useRef, Component } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Coffee, Globe, Terminal } from 'lucide-react';
// Animated Counter Component
const Counter = ({ value }: {value: string;}) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const incrementTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>);

};
export function AboutSection() {
  const stats = [
  {
    icon: Code,
    label: 'Years Experience',
    value: '7+'
  },
  {
    icon: Terminal,
    label: 'Projects Delivered',
    value: '12+'
  },
  {
    icon: Coffee,
    label: 'Companies',
    value: '9'
  },
  {
    icon: Globe,
    label: 'Degrees',
    value: '3'
  }];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear'
        }} />


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
            className="h-1 bg-blue-600 rounded-full" />

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="space-y-6 text-zinc-400 text-lg leading-relaxed">

            <p>
              Hello! My name is Murad and I am a{' '}
              <span className="text-blue-400 font-medium">
                Senior Software Developer
              </span>{' '}
              based in Baku, Azerbaijan. I have over 7 years of experience
              building high-scale fintech, banking, and gaming platforms.
            </p>
            <p>
              I specialize in modern frontend technologies including{' '}
              <span className="text-blue-400 font-medium">Vue 2/3</span>,{' '}
              <span className="text-blue-400 font-medium">React</span>, and{' '}
              <span className="text-blue-400 font-medium">Next.js</span>. My
              expertise extends to designing{' '}
              <span className="text-blue-400 font-medium">
                Micro-frontend architectures
              </span>{' '}
              for better module isolation and scalability.
            </p>
            <p>
              I have a strong background in performance optimization, CI/CD
              pipelines, and complex API integrations (REST & GraphQL).
              Currently, I am also pursuing a{' '}
              <span className="text-white font-medium">
                PhD in Computer Engineering
              </span>{' '}
              at BAU Cyprus.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.4,
                delay: 0.4 + index * 0.1
              }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.2
                }
              }}
              className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:border-blue-500/50 transition-colors group">

                <stat.icon className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-white mb-1">
                  <Counter value={stat.value} />
                </div>
                <div className="text-sm text-zinc-500 font-mono">
                  {stat.label}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}