import { pageMetadata } from "@/lib/seo";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Portfolio from "@/components/Portfolio";

export const metadata = pageMetadata("Independent Products & DIY Projects | Abhilash George", "Athena tuition marketplace product ownership, native coursework and RAG experiments, alongside hardware and DIY projects by Abhilash George.", "/side-projects");

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
        title="DIY Projects and Startups" 
        sectionId="side-projects-page" 
        viewAllLink="/blog" 
        viewAllText="Read more on the Blog" 
      />
    </main>
  );
}
