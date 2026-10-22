import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <HeroSection />
      <FeaturedProjects />
      <ExperienceSection />
      <ContactForm />
    </div>
  );
}
