import React from "react";

const Contact: React.FC = () => {
  return (
    // Dark theme: Dark background, light text
    <section id="contact" className="bg-[#2c3e50] py-20">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        {/* Unified H2 style */}
        <h2 className="border-gray-500 mb-6 border-b-2 pb-2 text-center text-3xl font-bold text-gray-100">
          Contact Me
        </h2>
        <p className="mb-8 text-lg text-gray-300">
          Let&apos;s connect and explore opportunities. Feel free
          to reach out via email or phone.
        </p>

        <div className="mb-8 space-y-4">
          <p className="text-gray-300">
            <a
              href="mailto:abhilashgeorge0304@gmail.com"
              className="hover:text-primary transition duration-300"
            >
              📧 abhilashgeorge0304@gmail.com
            </a>
          </p>
          <p className="text-gray-300">
            <a
              href="tel:+916238825363"
              className="hover:text-primary transition duration-300"
            >
              📞 +91 6238825363
            </a>
          </p>
          <p className="text-gray-300">
            <a
              href="https://linkedin.com/in/abhilashgeorge34"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition duration-300"
            >
              🔗 linkedin.com/in/abhilashgeorge34
            </a>
          </p>
          <p className="text-gray-300">📍 Bangalore, India</p>
        </div>

        {/* Optional: Placeholder for a simple contact form */}
        {/* <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Or Send a Message</h3>
          <form> ... Contact form elements ... </form>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
