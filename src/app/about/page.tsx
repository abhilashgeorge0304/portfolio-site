export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="border-primary mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              I&apos;m a Product Owner and Digital Functional Engineer at Signify Digital, 
              Bangalore. In my first year, I&apos;ve driven a €90K platform rescue, built 
              observability dashboards serving two audiences, automated deployment 
              pipelines, and coordinated 12-person cross-functional delivery — while 
              simultaneously running Scrum ceremonies, managing initiative budgets, 
              and stepping into SME roles when needed.
            </p>
            <p>
              Before Signify, I spent four years in college not just studying Computer 
              Science but leading — running student organisations, winning startup 
              competitions, building rovers, and delivering talks. I believe the most 
              valuable skills aren&apos;t taught in classrooms: how to motivate people, 
              how to sell an idea, and how to ship something real.
            </p>
            <p>
              I&apos;m looking for Product Owner roles where I can bring this combination 
              of technical grounding, stakeholder management, and relentless ownership 
              to products that matter.
            </p>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Get In Touch
            </h3>
            <div className="space-y-2 text-gray-700">
              <p>
                <a
                  href="mailto:abhilashgeorge0304@gmail.com"
                  className="text-primary hover:underline"
                >
                  abhilashgeorge0304@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://linkedin.com/in/abhilashgeorge34"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/abhilashgeorge34
                </a>
              </p>
              <p>Bangalore, India</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
