import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
export function Footer() {
  return (
    <motion.footer
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
        duration: 0.6
      }}
      className="bg-[#0a0a0a] border-t border-zinc-900 py-8">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/murad-narimanli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-teal-500 transition-colors hover:scale-110 transform duration-200">

            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/murad-n%C9%99rimanl%C4%B1-549389130/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-teal-500 transition-colors hover:scale-110 transform duration-200">

            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-zinc-500 hover:text-teal-500 transition-colors hover:scale-110 transform duration-200">

            <Twitter className="w-5 h-5" />
          </a>
        </div>
        <p className="text-zinc-500 text-sm font-mono text-center">
          Designed & Built by Murad Nərimanlı
        </p>
        <p className="text-zinc-600 text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </motion.footer>);

}