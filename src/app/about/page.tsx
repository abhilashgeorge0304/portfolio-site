export const metadata = {
  title: "About | Abhilash George",
  description: "About Abhilash George.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-10 text-gray-900 border-b-2 border-primary pb-4">
          About Me
        </h1>
        
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            I&apos;m a Product Owner and Digital Functional Engineer at Signify Digital, Bangalore. In my first year, I&apos;ve driven a €90K platform rescue, built observability dashboards serving two audiences, automated deployment pipelines, and coordinated 12-person cross-functional delivery.
          </p>
          <p>
            Before Signify, I spent four years in college not just studying Computer Science but leading — running student organisations, winning startup competitions, building rovers, and delivering talks. I believe the most valuable skills aren&apos;t taught in classrooms: how to motivate people, how to sell an idea, and how to ship something real.
          </p>
          <p>
            I&apos;m looking for Product Owner roles where I can bring this combination of technical grounding, stakeholder management, and relentless ownership to products that matter.
          </p>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Contact</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Email:</strong> <a href="mailto:abhilashgeorge0304@gmail.com" className="text-primary hover:underline">abhilashgeorge0304@gmail.com</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/abhilashgeorge34" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/abhilashgeorge34</a></li>
            <li><strong>Location:</strong> Bangalore, India</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
