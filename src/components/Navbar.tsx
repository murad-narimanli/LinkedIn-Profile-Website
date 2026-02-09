import React, { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const navLinks = [
{
  name: 'About',
  href: '#about'
},
{
  name: 'Experience',
  href: '#experience'
},
{
  name: 'Skills',
  href: '#skills'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string) =>
  {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="text-xl font-bold font-mono tracking-tighter text-white hover:text-blue-500 transition-colors">

            &lt;Murad /&gt;
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-zinc-400 hover:text-blue-500 transition-colors">

                {link.name}
              </a>
            )}
            <div className="flex items-center space-x-4 ml-4 border-l border-zinc-800 pl-4">
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors">

                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors">

                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-400 hover:text-white p-2">

              {isMobileMenuOpen ?
              <X className="w-6 h-6" /> :

              <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-[#0a0a0a] border-b border-zinc-800 overflow-hidden">

            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block px-3 py-3 text-base font-medium text-zinc-400 hover:text-blue-500 hover:bg-zinc-900 rounded-md">

                  {link.name}
                </a>
            )}
              <div className="flex items-center space-x-6 px-3 py-4 mt-4 border-t border-zinc-800">
                <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors">

                  <Github className="w-6 h-6" />
                </a>
                <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors">

                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors">

                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}