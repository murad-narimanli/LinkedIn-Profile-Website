import React from 'react';
import { motion } from 'framer-motion';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}
export function Card({
  children,
  className = '',
  hoverEffect = false
}: CardProps) {
  return (
    <motion.div
      whileHover={
      hoverEffect ?
      {
        y: -5
      } :
      undefined
      }
      className={`
        bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden
        ${hoverEffect ? 'hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] hover:border-teal-500/30 transition-all duration-300' : ''}
        ${className}
      `}>

      {children}
    </motion.div>);

}