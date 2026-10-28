import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />
      <FeaturedProjects />
      <SkillsSection />
      <ExperienceSection />
      <ContactForm />
    </div>
  );
}
