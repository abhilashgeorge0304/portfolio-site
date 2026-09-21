import { pageMetadata } from "@/lib/seo";
import Portfolio from "@/components/Portfolio";
import { getPortfolioData } from "@/lib/getPortfolioData";

export const metadata = pageMetadata("Projects | Abhilash George — Enterprise Platforms & Automation", "Explore AEM Guides delivery, Configit CPQ configuration automation, Datadog observability and Power BI fault-analysis projects.", "/projects");

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
