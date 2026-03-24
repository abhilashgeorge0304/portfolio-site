"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AutoScrollEasterEgg() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout;
    
    if (isScrolling) {
      scrollInterval = setInterval(() => {
        window.scrollBy({ top: 1.5, behavior: "auto" });
        // Calculate bottom offset carefully to account for varying device heights
        const scrollPosition = Math.ceil(window.innerHeight + window.scrollY);
        const scrollHeight = document.documentElement.scrollHeight;
        
        if (scrollPosition >= scrollHeight - 20) {
          setIsScrolling(false); // Stop if we hit the bottom
        }
      }, 16); // roughly 60fps
    }

    return () => clearInterval(scrollInterval);
  }, [isScrolling]);

  return (
    <div className="not-prose my-8 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center gap-3 shadow-sm relative overflow-hidden group mx-auto max-w-xl">
      
      {/* Cool animated background effect when active */}
      {isScrolling && (
        <motion.div 
          className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 pointer-events-none"
          animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          style={{ backgroundImage: "linear-gradient(to bottom, transparent 0%, rgba(59, 130, 246, 0.15) 50%, transparent 100%)", backgroundSize: "100% 200%" }}
        />
      )}

      <div className="z-10 relative">
        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-center gap-2 m-0 leading-none">
          <span>⚙️</span> Automate Your Reading
        </h4>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 max-w-md mx-auto m-0">
          Why waste your own physical effort scrolling through an article about automation? Let a script do it for you.
        </p>
      </div>

      <button
        onClick={() => setIsScrolling(!isScrolling)}
        className={`z-10 relative mt-1 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${
          isScrolling 
            ? "bg-red-100 text-red-700 hover:bg-red-200 border border-red-200"
            : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5 border border-transparent"
        }`}
      >
        {isScrolling ? "🛑 Stop Automation" : "▶️ Start Auto-Scroll"}
      </button>
      
      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity m-0">
        *Does not actually read the text for you. Yet.
      </p>
    </div>
  );
}
