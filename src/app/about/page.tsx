import { profileSummary, skillGroups } from "@/data/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About Abhilash George | Product Ownership & Engineering", "Technical Product Owner combining enterprise platform delivery, configuration automation, operational analytics and EdTech product ownership.", "/about");

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="border-primary mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
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
