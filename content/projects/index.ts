import { CaseStudy } from "@/types";
import { kadencePortalCaseStudy } from "./kadence-portal";
import { samperinAppCaseStudy } from "./samperin-app";

export const projects: CaseStudy[] = [
  kadencePortalCaseStudy,
  samperinAppCaseStudy,
];

export function getAllProjects(): CaseStudy[] {
  return projects;
}

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return projects.find((project) => project.slug === slug);
}
