import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
