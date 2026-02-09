import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Input, TextArea } from './ui/Input';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
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
          className="text-center mb-16">

          <h2 className="text-blue-500 font-mono text-lg mb-4">
            04. What's Next?
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new entertainment projects,
            partnerships, and creative opportunities. Feel free to reach out —
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
            }}>

            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <Input label="Name" placeholder="John Doe" />
              <Input
                label="Email"
                type="email"
                placeholder="john@example.com" />

              <TextArea
                label="Message"
                placeholder="Hello! I'd like to discuss a project..." />

              <Button className="w-full">
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
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
            className="flex flex-col justify-center space-y-8 md:pl-12 border-l border-zinc-800">

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="flex items-center text-zinc-400 hover:text-blue-500 transition-colors group">

                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center mr-4 group-hover:bg-blue-500/10 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span>github.com/murad</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/murad-n%C9%99rimanl%C4%B1-549389130/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-zinc-400 hover:text-blue-500 transition-colors group">

                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center mr-4 group-hover:bg-blue-500/10 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span>linkedin.com/in/murad-nərimanlı</span>
                </a>
                <a
                  href="#"
                  className="flex items-center text-zinc-400 hover:text-blue-500 transition-colors group">

                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center mr-4 group-hover:bg-blue-500/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>hello@murad.dev</span>
                </a>
              </div>
            </div>

            <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <p className="text-zinc-400 italic">
                "The only way to do great work is to love what you do."
              </p>
              <p className="text-blue-500 font-mono mt-2 text-sm">
                - Steve Jobs
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}