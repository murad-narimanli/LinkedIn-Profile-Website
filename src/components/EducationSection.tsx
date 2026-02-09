import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card } from './ui/Card';
const education = [
{
  degree: 'Computer Engineering | PHD',
  school: 'BAU Cyprus',
  date: '10/2025 – Ongoing / Expected 2029',
  location: 'Cyprus Turkey',
  description: 'Pursuing advanced research in Computer Engineering.'
},
{
  degree: 'Programming and Automation | Master degree',
  school: 'Azerbaijan State Oil and Industry University',
  date: '09/2020 – 06/2022',
  location: 'Baku Azerbaijan',
  description:
  'Specialized in automation systems and advanced programming concepts.'
},
{
  degree: 'Telecommunication Engineering | Bachelor',
  school: 'Azerbaijan State Oil and Industry University',
  date: '09/2016 – 06/2020',
  location: 'Baku Azerbaijan',
  description: 'Foundation in telecommunications and engineering principles.'
}];

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span className="text-teal-500 font-mono text-xl mr-2">03.</span>
            Education
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

        <div className="space-y-8">
          {education.map((edu, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -50
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
              delay: index * 0.15
            }}>

              <Card
              hoverEffect
              className="p-6 md:p-8 border-l-4 border-l-teal-500 relative overflow-hidden group">

                <motion.div
                className="absolute top-0 left-0 w-1 h-full bg-teal-400"
                initial={{
                  height: 0
                }}
                whileInView={{
                  height: '100%'
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 + index * 0.1
                }} />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 relative z-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                      initial={{
                        rotate: -20,
                        opacity: 0
                      }}
                      whileInView={{
                        rotate: 0,
                        opacity: 1
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        delay: 0.3 + index * 0.1
                      }}>

                        <GraduationCap className="w-6 h-6 text-teal-500" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                        {edu.degree}
                      </h3>
                    </div>
                    <h4 className="text-lg text-teal-400 font-medium mb-3">
                      {edu.school}
                    </h4>
                    <p className="text-zinc-400">{edu.description}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-zinc-500 font-mono min-w-[200px] md:text-right">
                    <span className="flex items-center md:justify-end gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.date}
                    </span>
                    <span className="flex items-center md:justify-end gap-2">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}