import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { Card } from './ui/Card';
const projects = [
{
  name: 'Sweeps',
  description: 'Site and Control panel for sweepstakes platform.',
  link: 'https://sweeps.us',
  type: 'Platform',
  status: 'Present'
},
{
  name: 'Internet Banking of RabitaBank',
  description: 'Large-scale Internet Banking system using Vue 2 & 3.',
  link: 'https://ib.rabitabank.com/',
  type: 'Fintech',
  status: 'Live'
},
{
  name: 'CBM Engineering',
  description: 'Internal system for engineering management.',
  link: '#',
  type: 'Enterprise',
  status: 'Private'
},
{
  name: 'Agros.az',
  description: 'Agricultural platform for Azerbaijan.',
  link: 'https://agros.az/',
  type: 'Platform',
  status: 'Live'
},
{
  name: 'Ledger Investing',
  description: 'Investment platform interface.',
  link: 'https://www.ledgerinvesting.com/',
  type: 'Fintech',
  status: 'Live'
},
{
  name: 'Cryptosino',
  description: 'Crypto-based gaming platform.',
  link: 'https://cryptosino.cc/',
  type: 'Gaming',
  status: 'Live'
},
{
  name: 'Vac.az',
  description: 'Vacancy and job listing platform.',
  link: 'https://vac.az/',
  type: 'Platform',
  status: 'Live'
},
{
  name: 'Game Islands',
  description: 'Online gaming entertainment platform.',
  link: 'https://gamesislands.com/',
  type: 'Gaming',
  status: 'Live'
},
{
  name: 'RiverMonster',
  description: 'Casino gaming interface.',
  link: 'https://rivermonster-casino.com/',
  type: 'Gaming',
  status: 'Live'
},
{
  name: 'Vagasx',
  description: 'Online casino platform.',
  link: 'https://vegasx-casino.com/',
  type: 'Gaming',
  status: 'Live'
},
{
  name: 'Flamingo7',
  description: 'Gaming and entertainment site.',
  link: 'https://flamingo7-casino.com/',
  type: 'Gaming',
  status: 'Live'
},
{
  name: 'Ultrapower',
  description: 'High-performance gaming platform.',
  link: 'https://ultrapower-casino.com/',
  type: 'Gaming',
  status: 'Live'
}];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-blue-500 font-mono text-xl mr-2">05.</span>
            Portfolio Projects
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.9
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
              delay: index * 0.05
            }}>

              <Card hoverEffect className="h-full p-6 group">
                <div className="flex justify-between items-start mb-4">
                  <motion.div
                  whileHover={{
                    rotate: 15
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300
                  }}>

                    <Folder className="w-10 h-10 text-blue-500" />
                  </motion.div>
                  <div className="flex gap-3">
                    {project.link !== '#' &&
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-blue-500 transition-colors">

                        <ExternalLink className="w-5 h-5" />
                      </a>
                  }
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>

                <p className="text-zinc-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="mt-auto flex justify-between items-center text-xs font-mono">
                  <span className="text-blue-500">{project.type}</span>
                  <span className="text-zinc-600">{project.status}</span>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}