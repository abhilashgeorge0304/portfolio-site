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
  "company": "Signify Digital",
  "location": "Bangalore",
  "title": "Product Owner | AEM Guides",
  "dates": "September 2025 – Present",
  "narrativeIntro": "Own delivery and production readiness for AEM Guides, an approximately €50,000-per-year enterprise platform investment, restarting a stalled two-year adoption effort and consolidating documentation under the Adobe ecosystem.",
  "description": [
    "Built the business case for specialist implementation with the technical lead and led a five-firm vendor evaluation using a scoring matrix, technical deep-dives and consultation with Adobe.",
    "Validated requirements and acceptance criteria with the authoring team and technical lead for branding, reusable content and publishing outputs. Prioritised first-release scope and deferred machine-translation integration to protect cost and timeline.",
    "Established weekly build–test–feedback cycles with the implementation partner.",
    "Coordinate 15+ contributors across five teams, managing onboarding, access, package-transfer and testing dependencies. Cleared blockers to end-to-end testing and declined a deployment that would have bypassed agreed first-release testing.",
    "Resolved recurring AEM stability issues with Adobe and aligned Assets, Guides and external HCL testing teams through shared release calendars and cross-team syncs."
  ]
},
{
  "company": "Signify Digital",
  "location": "Bangalore",
  "title": "Digital Functional Engineer",
  "subtitle": "Datadog Dashboards · CPQ Automation · Power BI",
  "dates": "January 2025 – Present",
  "narrativeIntro": "Hands-on engineering across quote-to-order configuration, operational analytics and delivery coordination for a distributed India–Netherlands team.",
  "description": [
    "Built an internal tool that generates dependent JSON configuration rule sets from structured Excel or UI input, automating repetitive browser configuration and QA-to-production checks. Cut turnaround from weeks to hours, with engineering retaining verification and deployment.",
    "Owned quote-to-order configuration logic for B2B enterprise lighting sales, including pricing tiers, discount rules and multi-level approval workflows governing sales-rep discount authority and business-leader sign-off. Applied Lean principles to eliminate manual waste.",
    "Designed Datadog dashboards for business processing activity and service output, alongside engineering execution-stage and VM health signals. Scoped V1 and defined the V2 backlog before handing ownership to the team.",
    "Reduced escalation volume by approximately 40%, shifted recurring escalation meetings to monthly service reviews and gave leadership direct visibility into team output.",
    "Built Power BI fault-analysis dashboards with Python-based multilingual translation.",
    "Facilitated Scrum, delivery reporting, and budget and resource tracking across a distributed India–Netherlands team."
  ]
},
{
  "company": "Athena",
  "title": "Founder & Product Owner",
  "dates": "Independent product",
  "narrativeIntro": "Lead product and technical direction for a tuition marketplace designed to surface quality tuition centres over marketing spend, from the first build through the current rebuild.",
  "description": [
    "Own product requirements, release scope, acceptance scenarios and roadmap for native coursework and provider-operations tooling. Work with an adviser on architecture and data modelling.",
    "Evaluated six coursework approaches and chose to build natively rather than integrate Moodle, documenting trade-offs and conditions for revisiting the decision. Deferred live tutor Q&A to protect first-release scope.",
    "Built an earlier Moodle-based course-recommendation engine with self-hosted Llama 2, moving from fine-tuning to retrieval-augmented generation using sentence-transformers and FastAPI to control hallucinations.",
    "Received a ₹75,000 state-level grant through the Young Innovators Programme."
  ]
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
