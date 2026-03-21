export interface PortfolioItemConfig {
  blogSlug: string;
  titleOverride?: string;
  descriptionOverride?: string;
  tagsOverride?: string[];
  imageOverride?: string;
}

export const portfolioConfig: PortfolioItemConfig[] = [
  { blogSlug: "aem-guides-vendor-implementation" },
  { blogSlug: "datadog-observability" },
  { blogSlug: "cpq-automation" },
];
