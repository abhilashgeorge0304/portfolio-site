import Portfolio from "@/components/Portfolio";
import { getPortfolioData } from "@/lib/getPortfolioData";

export const metadata = {
  title: "Side Projects | Abhilash George",
  description: "Hackathons, hardware, and tinkering by Abhilash George.",
};

export default function SideProjectsPage() {
  const allProjects = getPortfolioData();
  const sideProjects = allProjects.filter(p => !["aem-guides-vendor-implementation", "datadog-observability", "cpq-automation", "powerbi-fault-dashboard"].includes(p.blogSlug));

  return (
    <main className="flex min-h-screen flex-col pt-16">
      <Portfolio 
        projects={sideProjects} 
        title="Side Projects & Tinkering" 
        sectionId="side-projects-page" 
        viewAllLink="/blog" 
        viewAllText="Read more on the Blog" 
      />
    </main>
  );
}
