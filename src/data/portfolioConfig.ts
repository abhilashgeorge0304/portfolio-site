export interface PortfolioItemConfig {
  blogSlug: string;
  titleOverride?: string;
  descriptionOverride?: string;
  tagsOverride?: string[];
  imageOverride?: string;
}

export const portfolioConfig: PortfolioItemConfig[] = [
  { blogSlug: "identity-graph", titleOverride: "Enterprise Identity Graphs / Customer360" },
  { blogSlug: "ml-driven-marketing-personalization", titleOverride: "ML-Driven Marketing Personalization" },
  { blogSlug: "document-migration-at-scale", titleOverride: "Responsible RAG: Enhanced Document Matching At Scale" },
  { blogSlug: "enterprise-data-modernization", titleOverride: "Enterprise Data Modernization: Building Domain-Centric Data Architecture" },
  { blogSlug: "bfsi-controls-monitoring", titleOverride: "Controls & Monitoring in Financial Services" },
  { blogSlug: "llm-sql-modernization", titleOverride: "GenAI + HITL SQL Modernization" },
];
