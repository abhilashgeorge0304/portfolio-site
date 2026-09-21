import type { Metadata } from "next";

export const siteUrl = "https://abhilashgeorge.com";
export const profileTitle = "Abhilash George | Technical Product Owner";
export const profileDescription =
  "Technical Product Owner at Signify Digital, Bangalore. Enterprise platforms, AEM Guides, CPQ automation, Datadog and Power BI. Founder of Athena.";
export const profileKeywords = [
  "Abhilash George", "Technical Product Owner", "Product Ownership",
  "Enterprise Platforms", "AEM Guides", "Configit CPQ", "Configuration Automation",
  "Requirements and Acceptance Criteria", "Backlog Prioritisation", "Release Planning",
  "Vendor Evaluation", "Stakeholder Management", "Dependency Management", "Data Analytics", "Agile Scrum", "Datadog",
  "Power BI", "Python", "FastAPI", "Retrieval-Augmented Generation", "Athena", "Bangalore",
];

export function pageMetadata(
  title: string,
  description: string,
  pathname: string,
  keywords: string[] = profileKeywords,
): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: `${siteUrl}${pathname}` },
    openGraph: { title, description, url: `${siteUrl}${pathname}`, siteName: "Abhilash George", type: "website" },
    twitter: { card: "summary", title, description },
  };
}
