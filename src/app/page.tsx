import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import AboutMeSection from "@/design-system/organisms/AboutMeSection";
import ExperienceSection from "@/design-system/organisms/ExperienceSection";
import { HeroSection } from "@/design-system/organisms/HeroSection";
import ProjectSection from "@/design-system/organisms/ProjectSection";
import TechStackInfoSection from "@/design-system/organisms/TechStackInfoSection";
import ApplicationLayout from "@/layouts/ApplicationLayout";

export default function Home() {
  const header = <>
    <HeroSection />
  </>
  const content = <>
    <AboutMeSection />

    <ExperienceSection experiences={experiences} />

    <ProjectSection projects={projects} />

    <TechStackInfoSection />
  </>
  return (
    <ApplicationLayout header={header} content={content} />
  );
}
