import ApertureStandard from "@/components/ApertureStandard";
import DisciplinesSection from "@/components/DisciplinesSection";
import Footer from "@/components/Footer";
import HeroHome from "@/components/HeroHome";
import SignatureProjects from "@/components/SignatureProjects";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <DisciplinesSection />
      <SignatureProjects />
      <ApertureStandard />
      <Footer />
    </>
  );
}
