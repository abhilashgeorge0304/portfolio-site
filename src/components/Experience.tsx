"use client"; // Mark component as client-side for framer-motion

import React from "react";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link"; // Import Link for CTA

interface ExperienceItem {
  company: string;
  location?: string;
  title: string;
  dates: string;
  narrativeIntro?: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Signify Digital",
    location: "Bangalore",
    title: "Product Owner & Digital Functional Engineer",
    dates: "Present",
    narrativeIntro: "I took ownership of a €50K platform that had sat dormant for two years and drove it to active, vendor-managed implementation — coordinating twelve people across five teams to get there. When our tech lead resigned, I stepped into the Datadog SME role and built the team's observability layer from the ground up: two dashboards, one for business stakeholders who need a ten-second health check, one for engineers who need to debug at 2 AM. Somewhere in between, I shipped automation that turned a two-week deployment process into a one-hour one.",
    description: [
      "Drove €50K/€90K platform rescue to active vendor implementation.",
      "Coordinated 12-person cross-functional delivery across 5 teams.",
      "Built observability dashboards serving business stakeholders and engineers.",
      "Automated deployment pipelines to reduce deployment time from 2 weeks to 1 hour.",
    ],
  },
  {
    company: "UST Global",
    title: "Robotics Intern",
    dates: "Past",
    description: [
      "Completed a robotics internship while still in school.",
    ],
  },
  {
    company: "KELTRON",
    title: "IoT Prototyping",
    dates: "Past",
    description: [
      "Developed IoT prototypes exploring how technology meets the real world.",
    ],
  },
  {
    company: "All India Radio",
    title: "Broadcast Engineering",
    dates: "Past",
    description: [
      "Gained hands-on experience in broadcast engineering.",
    ],
  }
];

// Animation variants for fade-in effect
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
    },
  }),
};

const Experience: React.FC = () => {
  return (
    // Light theme: White background, dark text, blue timeline accents
    <section id="experience" className="bg-white py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Unified H2 style */}
        <h2 className="border-primary mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
          Professional Experience
        </h2>
        {/* Adjusted timeline line color */}
        <div className="relative space-y-12 before:absolute before:top-0 before:bottom-0 before:left-[5px] before:w-1 before:bg-gray-300">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pb-8 pl-10 last:pb-0"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {/* Adjusted dot border color */}
              <div className="bg-primary absolute top-1 left-0 h-4 w-4 rounded-full border-4 border-white"></div>
              {/* Adjusted text colors */}
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.title}
              </h3>
              <p className="text-md text-primary font-medium">
                {exp.company}
                {exp.location ? `, ${exp.location}` : ""}
              </p>
              <p className="mb-2 text-sm text-gray-500">{exp.dates}</p>
              {exp.narrativeIntro && (
                <p className="mb-4 text-sm text-gray-800 leading-relaxed italic border-l-4 border-gray-200 pl-3">
                  {exp.narrativeIntro}
                </p>
              )}
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            See My Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
