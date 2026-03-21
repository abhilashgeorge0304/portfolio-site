"use client";

import React from "react";
import Link from "next/link";

const LeadershipTeaser: React.FC = () => {
  return (
    <section id="leadership" className="bg-white py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="border-primary mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
          Leadership
        </h2>
        <div className="space-y-6 text-lg text-gray-700 text-center">
          <p>
            Six leadership roles across college and school — Vice-Chair of ISTE, President of the Creative Club, Start-Up Lead at IIC, Joint Secretary of IET, Treasurer of CSI, and Technical Officer at IEDC. A state-level startup win. Multiple hackathon victories. A robotics talk delivered at a university while still in school.
          </p>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/leadership"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            View full leadership profile →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeaser;
