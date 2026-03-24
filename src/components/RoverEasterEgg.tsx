"use client";

import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function RoverEasterEgg() {
  const { scrollYProgress, scrollY } = useScroll();
  
  // Transform scroll progress to vertical distance mapping top to bottom of viewport
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "85vh"]);
  
  // Calculate scroll velocity for cool wobble effects
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  
  // Add a slight tilt/wobble based on scroll speed
  const rotate = useTransform(smoothVelocity, [-1000, 0, 1000], [-15, 0, 15]);

  // Handle hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed right-2 md:right-8 top-0 bottom-0 w-24 pointer-events-none z-50">
      <motion.div 
        style={{ y, rotate }} 
        className="absolute top-8 w-16 h-16 opacity-100 drop-shadow-xl"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Main Chassis pointing DOWNWARD - Vibrant Gold/Orange */}
          <rect x="25" y="20" width="50" height="60" rx="6" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
          
          {/* Top Panel Detail - Silver/White */}
          <rect x="35" y="30" width="30" height="40" rx="3" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
          
          {/* Solar Panel Grid Lines on Top Panel */}
          <line x1="45" y1="30" x2="45" y2="70" stroke="#d1d5db" strokeWidth="1" />
          <line x1="55" y1="30" x2="55" y2="70" stroke="#d1d5db" strokeWidth="1" />
          <line x1="35" y1="43" x2="65" y2="43" stroke="#d1d5db" strokeWidth="1" />
          <line x1="35" y1="56" x2="65" y2="56" stroke="#d1d5db" strokeWidth="1" />
          
          {/* Little camera eye pointing down */}
          <path d="M 40 80 L 60 80 L 55 95 L 45 95 Z" fill="#475569" stroke="#1e293b" strokeWidth="1" />
          {/* Glowing Red Lens */}
          <circle cx="50" cy="92" r="3" fill="#ef4444" className="drop-shadow-[0_0_3px_rgba(239,68,68,0.8)]" />
          
          {/* Antenna */}
          <line x1="50" y1="20" x2="50" y2="2" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="2" r="4" fill="#3b82f6" className="drop-shadow-[0_0_4px_rgba(59,130,246,0.8)]" />
          
          {/* 4 Chunky Wheels */}
          <rect x="12" y="25" width="14" height="22" rx="4" fill="#1f2937" stroke="#000000" strokeWidth="1" />
          <rect x="74" y="25" width="14" height="22" rx="4" fill="#1f2937" stroke="#000000" strokeWidth="1" />
          <rect x="12" y="55" width="14" height="22" rx="4" fill="#1f2937" stroke="#000000" strokeWidth="1" />
          <rect x="74" y="55" width="14" height="22" rx="4" fill="#1f2937" stroke="#000000" strokeWidth="1" />
          
          {/* Wheel Treads (Horizontal Lines) */}
          <line x1="12" y1="30" x2="26" y2="30" stroke="#374151" strokeWidth="1" />
          <line x1="12" y1="36" x2="26" y2="36" stroke="#374151" strokeWidth="1" />
          <line x1="12" y1="42" x2="26" y2="42" stroke="#374151" strokeWidth="1" />
          
          <line x1="74" y1="30" x2="88" y2="30" stroke="#374151" strokeWidth="1" />
          <line x1="74" y1="36" x2="88" y2="36" stroke="#374151" strokeWidth="1" />
          <line x1="74" y1="42" x2="88" y2="42" stroke="#374151" strokeWidth="1" />
          
          <line x1="12" y1="60" x2="26" y2="60" stroke="#374151" strokeWidth="1" />
          <line x1="12" y1="66" x2="26" y2="66" stroke="#374151" strokeWidth="1" />
          <line x1="12" y1="72" x2="26" y2="72" stroke="#374151" strokeWidth="1" />
          
          <line x1="74" y1="60" x2="88" y2="60" stroke="#374151" strokeWidth="1" />
          <line x1="74" y1="66" x2="88" y2="66" stroke="#374151" strokeWidth="1" />
          <line x1="74" y1="72" x2="88" y2="72" stroke="#374151" strokeWidth="1" />
        </svg>
      </motion.div>
    </div>
  );
}
