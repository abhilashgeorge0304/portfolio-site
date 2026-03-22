"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ExperienceItem {
  company: string;
  location?: string;
  title: string;
  subtitle?: string;
  dates: string;
  narrativeIntro?: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Signify Digital",
    location: "Bangalore",
    title: "Product Owner | AEM Guides",
    dates: "Apr 2025 – Present",
    narrativeIntro:
      "After identifying a platform adoption gap and exploring an LLM-based solution as a Functional Engineer, took on product ownership to drive AEM Guides — a €50K investment that had sat dormant for nearly two years — toward active implementation.",
    description: [
      "Ran an internal skills audit confirming no DITA capability existed in-house; built the business case for a €40K vendor engagement, presented it to senior leadership, and secured approval",
      "Led vendor evaluation across 5 firms — designed a scoring matrix, facilitated rating sessions with the wider team, and ran scope, budget, and technical discussions with each firm's senior representatives. When initial pitches fell short, expanded the search through Adobe's recommendation — the selected vendor had completed near-identical implementations for two other organisations",
      "Owned the full vendor lifecycle as single point of contact across Digital, Business, the vendor, Adobe, and the Assets team — coordinating 12 people (7 internal + 5 vendor) on project planning, procurement, and onboarding through offboarding",
      "Resolved a live AEM stability issue where Assets background processes conflicted with Guides — coordinated with Adobe to restrict post-processing to Guides-specific elements",
      "Drove alignment between previously siloed Assets and Guides teams — coordinated release schedules, cross-team meetings, and mutual visibility on roadmaps and dependencies",
      "Took on testing Guides packages from the AEM Assets side after production deployment — because the responsibility fell between teams",
    ],
  },
  {
    company: "Signify Digital",
    location: "Bangalore",
    title: "Digital Functional Engineer",
    subtitle: "Scrum Master · Initiative Lead · Datadog SME · CPQ & Power BI Developer",
    dates: "Jan 2025 – Present",
    narrativeIntro:
      "Worked across a separate product team in parallel, taking on delivery, observability, process, and development responsibilities.",
    description: [
      "Scrum Master: Facilitated Sprint Planning, Standups, Reviews, and Retros; introduced a weekly \"Coffee Corners\" ritual — an informal Friday session connecting the team with our Netherlands-based manager — that improved remote communication, team bonding, and how needs were surfaced in both directions",
      "Datadog SME: Stepped into observability ownership after the team's tech lead resigned; managed stakeholder conversations, feasibility assessments, dashboard creation, and alert standardisation. When an external team changed API keys and brought down production services, coordinated cross-team RCA and restored all services same-day",
      "AEM Guides (Functional Engineer phase): Diagnosed why the platform sat unused for two years; got enough of a grounding in DITA-OT and Antora CSS to pinpoint the bottleneck; self-hosted a private LLM — within company policy — to explore automated authoring, directly informing the vendor strategy that followed",
      "Initiative Lead: Owned delivery reporting, budget forecasting (forecast vs. actual), and resource allocation tracking across team members with split assignments",
      "Developed CPQ configurations and managed change requests including approval flows; built Power BI reports with automated multi-language translation using a Python persistent caching layer",
    ],
  },
  {
    company: "UST Global",
    dates: "2018",
    title: "Robotics Intern",
    narrativeIntro:
      "One of the first school-age interns at UST. Built a swarm robotics proof of concept using Lego Mindstorms — two robots demonstrating decentralised coordination. Impressed college interns who invited me as a guest speaker at CUSAT's tech fest, where I presented to an audience of undergraduate and postgraduate engineering students.",
    description: [],
  },
  {
    company: "KELTRON",
    dates: "2022",
    title: "IoT Intern",
    narrativeIntro:
      "Developed an IoT smart home automation system using Matter protocol and Google Embedded Assistant API. Managed connected devices, automated environmental controls, and explored voice-command integration. Presented the project at IET Present Around the World competition, reaching local network finals.",
    description: [],
  },
  {
    company: "Assistive Technology Program",
    dates: "2023",
    title: "Intern",
    narrativeIntro:
      "Worked with differently-abled individuals including a vision-impaired chess player ranked among India's highest. Adapted the KELTRON smart home system for accessibility — voice-to-text conversion, audio feedback, simplified interfaces. The experience shaped how I approach accessibility in every project since.",
    description: [],
  },
  {
    company: "All India Radio",
    dates: "2023",
    title: "Broadcast Engineering Intern",
    narrativeIntro:
      "Observational internship in broadcast engineering. Studied signal processing, audio sampling, compression algorithms, and noise reduction in live production environments — foundational technology that directly informs modern digital audio systems.",
    description: [],
  },
];

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
    <section id="experience" className="bg-white py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="border-primary mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
          Professional Experience
        </h2>
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
              <div className="bg-primary absolute top-1 left-0 h-4 w-4 rounded-full border-4 border-white"></div>
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.title}
              </h3>
              {exp.subtitle && (
                <p className="text-sm text-gray-600 font-medium">
                  {exp.subtitle}
                </p>
              )}
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
              {exp.description.length > 0 && (
                <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            See My Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
