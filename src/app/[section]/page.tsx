import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import ClientSections from "@/components/ClientSections";
import { getPortfolioData } from "@/lib/getPortfolioData";

const sectionIds = [
  "about",
  "projects",
  "leadership",
  "side-projects",
  "education",
  "certifications",
  "contact",
] as const;

type SectionId = (typeof sectionIds)[number];

function isSectionId(value: string): value is SectionId {
  return sectionIds.includes(value as SectionId);
}

const sectionDescriptions: Record<SectionId, string> = {
  about: "Abhilash George, Technical Product Owner at Signify Digital and founder of Athena.",
  projects: "Enterprise platform delivery, configuration automation and operational analytics projects.",
  leadership: "Student leadership, technical events and community projects by Abhilash George.",
  "side-projects": "Athena tuition marketplace and independent technical projects by Abhilash George.",
  education: "B.Tech in Computer Science and Engineering, Mar Baselios College of Engineering and Technology, 2021–2025.",
  certifications: "Lean Six Sigma Green Belt and Google Project Management Certificate. PSPO I and AWS Certified Cloud Practitioner in progress.",
  contact: "Contact Abhilash George, Technical Product Owner at Signify Digital, Bangalore, and founder of Athena.",
};

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!isSectionId(section)) return {};
  const label = section.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  return pageMetadata(`${label} | Abhilash George`, sectionDescriptions[section], `/${section}`);
}

export function generateStaticParams() {
  return sectionIds.map((section) => ({ section }));
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  if (!isSectionId(section)) {
    notFound();
  }

  const portfolioProjects = getPortfolioData();

  return (
    <main className="flex min-h-screen flex-col">
      <ClientSections portfolioProjects={portfolioProjects} initialSectionId={section} />
    </main>
  );
}
