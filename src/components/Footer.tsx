import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="#"
            className="text-zinc-500 hover:text-blue-500 transition-colors">

            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-zinc-500 hover:text-blue-500 transition-colors">

            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-zinc-500 hover:text-blue-500 transition-colors">

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
    </footer>);

}