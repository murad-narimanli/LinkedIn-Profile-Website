import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Calendar, MapPin } from 'lucide-react';
const experiences = [
{
  company: 'King Entertainment Corp',
  role: 'Professional',
  date: '2020 - Present',
  location: 'Baku, Azerbaijan',
  description:
  'Working at King Entertainment Corp, contributing to entertainment projects and business operations. Involved in strategic planning, project management, and creative direction across multiple initiatives.',
  tech: ['Entertainment', 'Management', 'Strategy', 'Operations']
}];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-blue-500 font-mono text-xl mr-2">02.</span>
            Experience
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </motion.div>

        <div className="space-y-8 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, index) =>
          <motion.div
            key={index}
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
              delay: index * 0.1
            }}
            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#0a0a0a] transform -translate-x-1/2 mt-6 hidden md:block z-10" />

              <div className="md:w-1/2">
                <Card hoverEffect className="p-6 md:p-8 h-full">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-blue-400 font-medium text-lg mb-2">
                        @ {exp.company}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-zinc-500 font-mono mb-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.date}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-zinc-400 mb-6 flex-grow">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.tech.map((tech) =>
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20">

                          {tech}
                        </span>
                    )}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Empty space for the other side of timeline */}
              <div className="md:w-1/2 hidden md:block" />
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}