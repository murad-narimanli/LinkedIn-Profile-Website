import React, { useEffect, useState, useRef, Children } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/Button';
export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = [
  'Senior Frontend Developer',
  'Vue & React Specialist',
  'Fintech Engineer',
  'Micro-frontend Architect'];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;
  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };
    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    let particles: Particle[] = [];
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(20, 184, 166, 0.5)';
        ctx.fill();
      }
    }
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(window.innerWidth / 10, 100);
      for (let i = 0; i < particleCount; i++) particles.push(new Particle());
    };
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(20, 184, 166, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    initParticles();
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center">

          <motion.div variants={itemVariants} className="relative mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 rounded-full opacity-75 blur-sm animate-spin-slow" />
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'easeInOut'
              }}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#0a0a0a] overflow-hidden shadow-2xl">

              <img
                src="/1739266259653.jpg"
                alt="Murad Nərimanlı"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

            </motion.div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-teal-500 font-mono text-lg mb-4 tracking-wide">

            Hi, my name is
          </motion.h2>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">

            Murad Nərimanlı
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="h-12 md:h-16 mb-8 flex items-center justify-center">

            <span className="text-2xl md:text-4xl text-zinc-400 font-mono">
              I am a <span className="text-teal-400">{displayText}</span>
              <span className="animate-pulse text-teal-500">|</span>
            </span>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-zinc-400 text-lg mb-10 leading-relaxed">

            Senior Frontend Developer with 7+ years of experience building
            high-scale fintech, banking, and gaming platforms. Specialized in
            Vue 2/3, React, Next.js, and Micro-frontend architectures.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <Button
              onClick={scrollToContact}
              size="lg"
              className="group relative overflow-hidden">

              <span className="relative z-10 flex items-center">
                Contact Me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button variant="outline" size="lg" className="group">
              <a href="https://flowcv.com/resume/se42ekgcm4ld" target="_blank">
                 View Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 2,
          duration: 1
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2">

        <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5
            }}
            className="w-1.5 h-1.5 bg-teal-500 rounded-full" />

        </div>
      </motion.div>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
    </section>);

}
