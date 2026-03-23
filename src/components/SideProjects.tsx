"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const cardAnimationVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index, duration: 0.5 },
  }),
};

const sideProjects = [
  {
    title: "Athena",
    description:
      "A supplementary education platform that surfaces quality tutors over marketing budgets. Moodle-based with an LLM-powered recommendation chatbot. Won YIP state-level (₹75K grant). Received ~₹20L acquisition offer — declined to preserve non-profit model.",
    tags: ["Ed-Tech", "Startup", "LLM", "Moodle"],
    blogSlug: "athena",
    imageUrl: "/images/athena-logo.jpg",
  },
  {
    title: "EcoSift",
    description:
      "Portable AI-powered waste segregation system — truck-mounted units using deep learning-controlled robotic arms and an innovative plastic sorting system based on melting point differentiation. Full CAD models complete.",
    tags: ["Robotics", "Deep Learning", "Social Impact", "Startup"],
    blogSlug: "ecosift",
    imageUrl: "",
  },
  {
    title: "ISRO IRoC-U Rover",
    description:
      "Quadrupedal wheel-leg hybrid rover proposal for ISRO's Robotics Challenge. Raspberry Pi 4, ROS Noetic, TensorFlow Lite for object detection, stereo camera depth calculation, autonomous navigation with pick-and-place arm.",
    tags: ["Robotics", "ROS", "TensorFlow Lite", "ISRO"],
    blogSlug: "iroc-rover",
    imageUrl: "",
  },
];

const SideProjects: React.FC = () => {
  return (
    <section id="side-projects" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="border-primary mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
          Side Projects &amp; Startups
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sideProjects.map((project, index) => (
            <motion.div
              key={project.blogSlug}
              className="overflow-hidden rounded-lg bg-gray-50 shadow-md transition-shadow duration-300 hover:shadow-lg"
              variants={cardAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="group relative h-48 overflow-hidden bg-gray-300">
                <div className="flex h-full w-full items-center justify-center text-gray-500">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-lg font-semibold">{project.title}</span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-gray-700">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${project.blogSlug}`}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/side-projects"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            View All Side Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SideProjects;
