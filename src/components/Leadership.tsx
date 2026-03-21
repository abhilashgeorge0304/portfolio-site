"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="bg-[#2c3e50] py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="border-gray-500 mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-100">
          Beyond the Classroom
        </h2>
        <div className="space-y-6 text-lg text-gray-300">
          <p>
            Engineering college wasn&apos;t just about coursework — it was four years of
            building things, leading people, and learning how to sell an idea to a
            room full of skeptics.
          </p>
          <p>
            As <strong className="text-gray-100">Vice-Chairperson of ISTE MBCET</strong> (2022–23),
            I organised technical workshops and inter-college events that reached
            hundreds of students. As <strong className="text-gray-100">President of the Creative
            Club</strong> at Christ Nagar (2019–20), I ran cultural events end-to-end —
            budgeting, logistics, volunteer management — learning that leadership is
            mostly about showing up when nobody else wants to.
          </p>
          <p>
            I served as <strong className="text-gray-100">Start-Up Lead at IIC</strong> (2023–25),
            <strong className="text-gray-100"> Joint Secretary of IET</strong> (2023–25),
            <strong className="text-gray-100"> Treasurer of CSI</strong> (2022–24), and
            <strong className="text-gray-100"> Technical Officer at IEDC</strong> (2022–23) —
            six overlapping leadership roles that taught me how to context-switch,
            delegate, and keep multiple teams moving at once.
          </p>
        </div>

        <h3 className="mt-10 mb-6 text-xl font-semibold text-gray-100">
          Highlights
        </h3>
        <motion.ul
          className="grid list-inside list-disc space-y-2 gap-x-8 pl-4 text-gray-300 md:grid-cols-2"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.li variants={itemVariants}>
            <strong className="text-gray-100">Young Innovators Programme</strong> — State-level winner (₹75,000 grant)
          </motion.li>
          <motion.li variants={itemVariants}>
            <strong className="text-gray-100">Dekathon 2.0</strong> — Runner-up (₹25,000 + FABLAB Kochi internship)
          </motion.li>
          <motion.li variants={itemVariants}>
            <strong className="text-gray-100">Present Around the World (IET)</strong> — Runner-up (₹10,000)
          </motion.li>
          <motion.li variants={itemVariants}>
            <strong className="text-gray-100">Space Ventura</strong> — Best Start-up Award
          </motion.li>
          <motion.li variants={itemVariants}>
            <strong className="text-gray-100">PRAYAAG 3.0</strong> — Ideathon Winner + Tech Expo Runner-up
          </motion.li>
          <motion.li variants={itemVariants}>
            <strong className="text-gray-100">Infinitum (NIT Calicut)</strong> — State finals runner-up among 12,000 teams
          </motion.li>
          <motion.li variants={itemVariants}>
            Delivered a <strong className="text-gray-100">robotics talk at CUSAT</strong> while still in school (2018)
          </motion.li>
          <motion.li variants={itemVariants}>
            Exhibited at <strong className="text-gray-100">Keraleeyam 2023</strong> and managed waste ops at Greenfield Stadium during an international cricket match
          </motion.li>
        </motion.ul>

        <div className="mt-12 text-center">
          <Link
            href="/leadership"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            View Full Leadership Profile →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
