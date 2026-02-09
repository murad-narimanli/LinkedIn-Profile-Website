import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './ui/Card';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/Button';
const experiences = [
{
  company: 'Rabitabank OJSC',
  role: 'Senior Frontend Developer',
  date: '08/2021 – Present',
  location: 'Baku Azerbaijan',
  description:
  'Developed and maintained a large-scale Internet Banking system using Vue 2 & 3 (Composition API). Designed and implemented Microfrontend architecture for better module isolation and scalability. Integrated REST APIs and consumed GraphQL queries for reporting tools. Configured custom Webpack builds, optimized bundles, and enabled CI/CD pipelines with GitLab.',
  tech: [
  'Angular 20',
  'Vue 2/3',
  'Composition API',
  'Vuex',
  'Webpack',
  'Microfrontend']

},
{
  company: 'King Entertainment',
  role: 'Senior Frontend Developer',
  date: '08/2025 – 01/2026',
  location: 'Baku Azerbaijan',
  description:
  'Worked on large-scale gambling and gaming platforms using React and Next.js. Focused on building dynamic, high-performance user interfaces and integrating complex APIs for real-time game data and user activity tracking. Contributed to UI architecture, reusable component libraries, and optimization of client-side rendering.',
  tech: ['React', 'Next.js', 'Gaming Platforms', 'Performance']
},
{
  company: 'ABB Bank OJSC',
  role: 'Outsource Frontend Developer',
  date: '08/2024 – 11/2024',
  location: 'Baku Azerbaijan',
  description:
  'Developed internal enterprise dashboards using React and Next.js. Applied Microfrontend practices to ensure modularity in high-security environments. Integrated REST APIs and deployed updates using CI/CD workflows.',
  tech: [
  'React',
  'Next.js',
  'Microfrontend',
  'REST',
  'Webpack',
  'GitHub Actions']

},
{
  company: 'Qubit Labs LLC',
  role: 'Outsource Frontend Developer',
  date: '12/2023 – 04/2024',
  location: 'Remote',
  description:
  'Created reusable UI components in Vue 3 (Composition API) for dashboard systems. Consumed GraphQL endpoints for dynamic reporting modules. Used Webpack and GitHub Actions for build optimization and deployment.',
  tech: ['Vue 3', 'Composition API', 'GraphQL', 'Webpack', 'GitHub Actions']
},
{
  company: 'Fourmeta Agency',
  role: 'Frontend Developer',
  date: '12/2022 – 09/2023',
  location: 'Remote',
  description:
  'Built high-performance frontend solutions using Vue 2 & 3 with Composition API. Maintained e-commerce and CMS-based projects, ensuring responsiveness and modularity. Connected and validated complex REST APIs.',
  tech: ['Vue 2/3', 'Composition API', 'REST', 'Git', 'Jest', 'Angular 18+']
},
{
  company: 'Social Innovation Lab',
  role: 'Frontend Instructor',
  date: '08/2022 – 09/2023',
  location: 'Baku Azerbaijan',
  description:
  'Delivered practical training sessions on both Vue 2/3 and React, including Composition API and React Hooks. Mentored developers in building real-world SPAs, managing state, and integrating REST APIs.',
  tech: [
  'Vue 2/3',
  'React',
  'Composition API',
  'REST',
  'Webpack',
  'Git',
  'Agile']

},
{
  company: 'Timesoft',
  role: 'Frontend Developer',
  date: '08/2019 – 08/2023',
  location: 'Baku Azerbaijan',
  description:
  'Developed internal control and analytics systems using Vue 2 and later React. Solved critical technical problems across reporting modules and submodules. Worked with REST APIs, applied Webpack optimization.',
  tech: ['Vue 2', 'React', 'Vuex', 'REST', 'Webpack', 'Git', 'Angular 8+']
},
{
  company: 'Webzool Creative Company',
  role: 'Frontend Developer',
  date: '09/2022 – 01/2023',
  location: 'Remote',
  description:
  'Worked on a live online casino system, building interfaces with React & Next.js. Focused on server-side rendering (SSR), SEO optimization, and REST API integration. Managed CI/CD pipelines and wrote unit tests.',
  tech: ['React', 'Next.js', 'REST', 'Webpack', 'GitLab CI/CD']
},
{
  company: 'Okmedia LLC',
  role: 'Frontend Developer',
  date: '08/2017 – 08/2019',
  location: 'Baku Azerbaijan',
  description:
  'Developed responsive e-commerce and advertising websites using Vue 2 and vanilla JavaScript. Converted complex Figma/PSD designs to cross-browser compatible interfaces.',
  tech: ['HTML5', 'CSS3', 'JavaScript', 'Vue 2', 'jQuery']
}];

export function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 5);
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
            <span className="text-teal-500 font-mono text-xl mr-2">02.</span>
            Experience
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

        <div className="space-y-8 relative">
          <motion.div
            initial={{
              height: 0
            }}
            whileInView={{
              height: '100%'
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut'
            }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform -translate-x-1/2 hidden md:block" />


          <AnimatePresence>
            {displayedExperiences.map((exp, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                <motion.div
                initial={{
                  scale: 0
                }}
                whileInView={{
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  delay: 0.2 + index * 0.1
                }}
                className="absolute left-0 md:left-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-[#0a0a0a] transform -translate-x-1/2 mt-6 hidden md:block z-10">

                  <div className="absolute inset-0 bg-teal-500 rounded-full animate-ping opacity-75" />
                </motion.div>

                <div className="md:w-1/2">
                  <Card hoverEffect className="p-6 md:p-8 h-full group">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">
                          {exp.role}
                        </h3>
                        <h4 className="text-teal-400 font-medium text-lg mb-2">
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
                      <p className="text-zinc-400 mb-6 flex-grow text-sm leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {exp.tech.map((tech, i) =>
                      <motion.span
                        key={tech}
                        initial={{
                          opacity: 0,
                          scale: 0.8
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1
                        }}
                        viewport={{
                          once: true
                        }}
                        transition={{
                          delay: 0.3 + i * 0.05
                        }}
                        className="px-3 py-1 text-xs font-medium text-teal-300 bg-teal-500/10 rounded-full border border-teal-500/20 hover:bg-teal-500/20 hover:border-teal-500/40 transition-all cursor-default">

                            {tech}
                          </motion.span>
                      )}
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="md:w-1/2 hidden md:block" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="min-w-[200px] group">

            {showAll ?
            <>
                Show Less{' '}
                <ChevronUp className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </> :

            <>
                Show More Experience{' '}
                <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </>
            }
          </Button>
        </div>
      </div>
    </section>);

}