"use client"; // Mark this as a Client Component

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import type { PortfolioProject } from "@/lib/getPortfolioData";

// Import Server Components (can be used directly in Client Components)
import Hero from "@/components/Hero"; // Reverted to standard import
import Contact from "@/components/Contact";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Leadership from "@/components/Leadership";
import SideProjects from "@/components/SideProjects";

// Define animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const defaultSectionViewport = { once: true, amount: 0.2 } as const;
const tallSectionViewport = { once: true, amount: 0.05 } as const;

interface ClientSectionsProps {
  portfolioProjects: PortfolioProject[];
  initialSectionId?: string;
}

const ClientSections: React.FC<ClientSectionsProps> = ({
  portfolioProjects,
  initialSectionId,
}) => {
  useEffect(() => {
    if (!initialSectionId) return;

    const timer = window.setTimeout(() => {
      const section = document.getElementById(initialSectionId);
      if (!section) return;

      const headerOffset = 80;
      const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [initialSectionId]);

  return (
    <>
      {/* 1. Hero (light bg-gray-50 — handled inside Hero.tsx) */}
      <Hero />

      {/* 2. Executive Summary (DARK — handled inside About.tsx) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultSectionViewport}
        variants={sectionVariants}
      >
        <About />
      </motion.div>

      {/* 3. Featured Work / Projects (LIGHT — handled inside Portfolio.tsx) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={tallSectionViewport}
        variants={sectionVariants}
      >
        <Portfolio projects={portfolioProjects} />
      </motion.div>

      {/* 4. Leadership (DARK — handled inside Leadership.tsx) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultSectionViewport}
        variants={sectionVariants}
      >
        <Leadership />
      </motion.div>

      {/* 5. Side Projects (LIGHT — handled inside SideProjects.tsx) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultSectionViewport}
        variants={sectionVariants}
      >
        <SideProjects />
      </motion.div>

      {/* 6. Education (DARK — handled inside Education.tsx) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultSectionViewport}
        variants={sectionVariants}
      >
        <Education />
      </motion.div>

      {/* 7. Certifications (LIGHT — handled inside Certifications.tsx) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultSectionViewport}
        variants={sectionVariants}
      >
        <Certifications />
      </motion.div>

      {/* 8. Contact (DARK — handled inside Contact.tsx) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultSectionViewport}
        variants={sectionVariants}
      >
        <Contact />
      </motion.div>
    </>
  );
};

export default ClientSections;
