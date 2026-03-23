import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Side Projects | Abhilash George",
  description: "Hackathons, hardware, and tinkering by Abhilash George.",
};

export default function SideProjectsPage() {
  const sideProjectSlugs = ["athena", "ecosift", "iroc-rover", "speaker-building"];
  
  const sideProjects = sideProjectSlugs.map(slug => {
    try {
      const fileContents = fs.readFileSync(path.join(process.cwd(), 'src', 'content', 'blog', `${slug}.mdx`), 'utf8');
      const { data } = matter(fileContents);
      return {
        blogSlug: slug,
        title: data.title || slug,
        description: data.description || '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        imageUrl: data.heroImage || '',
      };
    } catch {
      return null;
    }
  }).filter((p): p is NonNullable<typeof p> => p !== null);

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
