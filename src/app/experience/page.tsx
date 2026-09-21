import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Experience | Abhilash George — Technical Product Owner", "Product ownership at Signify Digital: AEM Guides requirements, vendor evaluation, release planning, CPQ automation, Datadog and Power BI analytics.", "/experience");

import Experience from "@/components/Experience";

export default function ExperiencePage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      <Experience />
    </main>
  );
}
