import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import BinaryRain from "@/components/portfolio/BinaryRain";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import LanguagesInterestsSection from "@/components/portfolio/LanguagesInterestsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import BlogSection from "@/components/portfolio/BlogSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import ScrollToTop from "@/components/portfolio/ScrollToTop";
import InteractiveTerminal from "@/components/portfolio/InteractiveTerminal";
import LoadingScreen from "@/components/portfolio/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

       <div className={`min-h-screen bg-background ${isLoading ? "overflow-hidden h-screen" : ""}`}>
         <BinaryRain />
         <Navbar />
         <HeroSection />
         <AboutSection />
         <ExperienceSection />
         <EducationSection />
         <SkillsSection />
         <LanguagesInterestsSection />
         <CertificationsSection />
         <ProjectsSection />
         <BlogSection />
         <ContactSection />
         <Footer />
         <ScrollToTop />
         <InteractiveTerminal />
       </div>
    </>
  );
};

export default Index;
