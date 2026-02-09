import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/Button';
export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = [
  'Entertainment Professional',
  'King Entertainment Corp',
  'Creative Strategist',
  'Business Leader'];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;
  // Typewriter Effect
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
  // Canvas Particle Animation
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
        ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
        ctx.fill();
      }
    }
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(window.innerWidth / 10, 100);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();
        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})`;
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
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}>

          <h2 className="text-blue-500 font-mono text-lg mb-4 tracking-wide">
            Hi, my name is
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Murad Nərimanlı
          </h1>
          <div className="h-12 md:h-16 mb-8 flex items-center justify-center">
            <span className="text-2xl md:text-4xl text-zinc-400 font-mono">
              I am a <span className="text-blue-400">{displayText}</span>
              <span className="animate-pulse text-blue-500">|</span>
            </span>
          </div>

          <p className="max-w-2xl mx-auto text-zinc-400 text-lg mb-10 leading-relaxed">
            I build accessible, pixel-perfect, performant, and secure web
            applications. Focused on creating elegant solutions to complex
            problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={scrollToContact} size="lg" className="group">
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Resume
              <Download className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1,
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
            className="w-1.5 h-1.5 bg-blue-500 rounded-full" />

        </div>
      </motion.div>
    </section>);

}