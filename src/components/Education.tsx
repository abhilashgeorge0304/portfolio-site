"use client"; // Needs client-side animation & hover effects

import React from "react";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link"; // Import Link for CTA

interface EducationItem {
  institution: string;
  location?: string;
  degree: string;
  details?: string;
  year: string;
}

const educationHistory: EducationItem[] = [
  {
    institution: "Mar Baselios College of Engineering and Technology (MBCET)",
    location: "Trivandrum, Kerala, India",
    degree: "B.Tech in Computer Science and Engineering",
    details: "CGPA: 7.89 | KTU University",
    year: "2021–2025",
  },
  {
    institution: "Christ Nagar Higher Secondary School",
    location: "Trivandrum, Kerala, India",
    degree: "Higher Secondary (Class XII) — Computer Science",
    details: "Score: 95%",
    year: "2019–2021",
  },
  {
    institution: "Christ Nagar Central School",
    location: "Trivandrum, Kerala, India",
    degree: "CBSE (Class X)",
    details: "Score: 87%",
    year: "2019",
  },
];

// Animation variants for cards
const cardAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
    },
  }),
};

const Education: React.FC = () => {
  return (
    // Dark theme: Dark background, slightly lighter cards, light text
    <section id="education" className="bg-[#2c3e50] py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Unified H2 style */}
        <h2 className="border-gray-500 mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-100">
          Education
        </h2>
        <div className="space-y-8">
          {educationHistory.map((edu, index) => (
            <motion.div
              key={index}
              className="card-common" // Applied common card style
              variants={cardAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.02 }} // Added hover scale effect
              transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring animation for hover
            >
              <h3 className="text-xl font-semibold text-gray-100">
                {edu.institution}
              </h3>
              {edu.location && (
                <p className="mb-1 text-sm text-gray-400">{edu.location}</p>
              )}
              <p className="text-primary text-lg font-medium">
                {edu.degree} ({edu.year})
              </p>
              {edu.details && (
                <p className="text-md mt-1 text-gray-300">{edu.details}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="/certifications"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            View My Certifications
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Education;
