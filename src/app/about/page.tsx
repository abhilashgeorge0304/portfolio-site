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
              Product Owner and Digital Functional Engineer at Signify Digital, Bangalore.
              Lean Six Sigma Green Belt and Google-certified Project Management professional.
            </p>
            <p>
              At Signify, I evaluated a dormant ~€50K platform and mapped how it could
              consolidate documentation workflows under the Adobe ecosystem. Built the vendor
              business case, analysed RFPs from five firms, and currently manage the full
              implementation lifecycle across twelve people and five teams. In parallel, I
              built an observability layer from scratch, facilitated Scrum across a distributed
              India-Netherlands team, and automated deployment processes that previously took
              weeks.
            </p>
            <p>
              Before Signify, I spent four years in college not just studying Computer Science
              but leading — six leadership roles across student organisations, a state-winning
              startup (Athena, Rs. 75K grant), a life-sized rover built by a team of ten, and
              a guest talk at CUSAT while still in ninth grade. The most valuable skills I&apos;ve
              picked up weren&apos;t taught in classrooms: how to align people, how to pitch an
              idea, and how to ship something real under constraints.
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
                  href="tel:+916238825363"
                  className="text-primary hover:underline"
                >
                  +91 6238825363
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
