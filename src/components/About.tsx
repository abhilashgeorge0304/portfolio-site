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
            Product Owner and Digital Functional Engineer at Signify Digital, Bangalore.
            Lean Six Sigma Green Belt and Google-certified Project Management professional.
          </p>
          <p>
            Evaluated AEM Guides — a ~€50K platform investment dormant for two years — and
            mapped how it could consolidate documentation workflows and bring everything
            under the Adobe ecosystem. Built the business case for vendor engagement,
            analysed RFPs from five firms through a structured scoring matrix, and currently
            manage the full vendor lifecycle as SPOC across twelve people and five teams.
          </p>
          <p>
            In parallel: designed two Datadog dashboards from scratch for two distinct
            audiences — business health check and engineering root-cause debugging —
            reducing escalation volume by ~40%. Identified process improvement opportunities
            in CPQ deployment and applied Lean principles to automate what previously took
            weeks into an error-free pipeline running in under an hour.
          </p>
          <p>
            Before Signify: a robotics internship at UST Global while still in school, IoT
            prototyping at KELTRON, assistive technology work with differently-abled
            individuals, and broadcast engineering at All India Radio — each one a different
            lens on how technology meets the real world.
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
