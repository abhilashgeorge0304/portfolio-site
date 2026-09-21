"use client";

import { profileSummary, skillGroups } from "@/data/profile";


import React from "react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    // Dark theme: Dark background, light text
    <section id="about" className="bg-[#2c3e50] py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Unified H2 style */}
        <h2 className="border-gray-500 mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-100">
          Executive Summary
        </h2>
        <div className="space-y-6 text-lg text-gray-300">
            {profileSummary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <h3 className="pt-4 text-2xl font-semibold">Skills</h3>
            <dl className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <dt className="font-semibold">{group.category}</dt>
                  <dd>{group.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/experience"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            View Full Experience →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
