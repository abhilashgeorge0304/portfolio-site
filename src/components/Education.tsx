"use client";

import React from "react";
import { motion } from "framer-motion";

interface EducationItem {
  institution: string;
  location?: string;
  degree: string;
  year: string;
}

const educationHistory: EducationItem[] = [
  {
    institution: "Mar Baselios College of Engineering and Technology (MBCET)",
    location: "Trivandrum, Kerala, India",
    degree: "B.Tech in Computer Science and Engineering",
    year: "2021–2025",
  },
  {
    institution: "Christ Nagar Higher Secondary School",
    location: "Trivandrum, Kerala, India",
    degree: "Higher Secondary (Class XII) — Computer Science",
    year: "2019–2021",
  },
  {
    institution: "Christ Nagar Higher Secondary School",
    location: "Trivandrum, Kerala, India",
    degree: "CBSE (Class X)",
    year: "2019",
  },
];

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
    <section id="education" className="bg-[#2c3e50] py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="border-gray-500 mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-100">
          Education
        </h2>
        <div className="space-y-8">
          {educationHistory.map((edu, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-white/10 p-6 shadow-md"
              variants={cardAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
