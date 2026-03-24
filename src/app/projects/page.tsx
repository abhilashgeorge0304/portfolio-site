import Portfolio from "@/components/Portfolio";
import { getPortfolioData } from "@/lib/getPortfolioData";

export const metadata = {
  title: "Projects | Abhilash George",
  description: "Featured work and enterprise delivery by Abhilash George.",
};

export default function ProjectsPage() {
  const allProjects = getPortfolioData();
  const workProjects = allProjects.filter(p => ["aem-guides-vendor-implementation", "datadog-observability", "cpq-automation", "powerbi-fault-dashboard"].includes(p.blogSlug));

  return (
    <main className="flex min-h-screen flex-col pt-16">
      <Portfolio 
        projects={workProjects} 
        title="Featured Work" 
        sectionId="projects-page" 
        viewAllLink="/blog" 
        viewAllText="More case studies in the blog" 
      />
    </main>
  );
}
