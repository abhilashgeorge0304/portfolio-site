"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="pt-16"
      >
        <section
          id="hero"
          className="flex min-h-screen items-center justify-center bg-gray-50 py-20"
        >
          <div className="container mx-auto flex flex-col items-center gap-8 px-4 md:flex-row">
            <div className="text-center md:w-1/2 md:text-left">
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                Abhilash George
              </h1>
              <h2 className="text-primary mb-6 text-2xl font-semibold md:text-3xl">
                Technical Product Owner
              </h2>
              <p className="mb-8 text-lg text-gray-700">
                Enterprise Platforms · Automation &amp; Data Analytics<br />
                Owning requirements, release scope and delivery at Signify Digital, Bangalore. Founder of Athena.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <Link
                  href="/contact"
                  className="rounded bg-gray-700 px-4 py-2 font-bold text-white shadow transition duration-300 hover:bg-gray-800"
                >
                  Contact Me
                </Link>
                <a
                  href="/Abhilash_George_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-primary px-4 py-2 font-bold text-primary shadow transition duration-300 hover:bg-primary/10"
                >
                  View Resume
                </a>
              </div>
            </div>

            <div className="flex justify-center md:w-1/2">
              <div className="relative aspect-square w-[min(400px,85vw)] overflow-hidden rounded-full border-4 border-white shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Abhilash George profile picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Hero;
