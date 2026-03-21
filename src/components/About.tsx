"use client";

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
          <p>
            Currently at Signify Digital, Bangalore — Product Owner and Digital Functional Engineer. I took ownership of a €50K platform that had sat dormant for two years and drove it to active, vendor-managed implementation — coordinating twelve people across five teams to get there.
          </p>
          <p>
            When our tech lead resigned mid-sprint, I stepped into the Datadog SME role and built the team&apos;s observability layer from the ground up: two dashboards, one for business stakeholders who need a ten-second health check, one for engineers who need to debug at 2 AM. I shipped automation that turned a two-week deployment process into a one-hour one, and led a CPQ pricing tool integration that replaced three manual spreadsheets with a single automated workflow.
          </p>
          <p>
            Before Signify: a robotics internship at UST Global while still in school, IoT prototyping at KELTRON, and broadcast engineering at All India Radio — each one a different lens on how technology meets the real world.
          </p>
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
