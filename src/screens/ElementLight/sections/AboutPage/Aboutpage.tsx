import { HeroSection } from "./HeroSection/HeroSection";
import { IntroductionSection } from "./IntroductionSection/IntroductionSection";
import { MissionSection } from "./MissionSection/MissionSection";
import { AwardsSection } from "./AwardsSection/AwardsSection";
import { FactsSection } from "./FactsSection/FactsSection";
import { CollaborationSection } from "./CollaborationSection/CollaborationSection";
import { Header } from "../../../Header";
import { MobileHeader } from "../../../../components/mobile/MobileHeader";
import { MainContentSection } from "../MainContentSection/MainContentSection";
import SEO from "../../../../components/SEO";

export const AboutPage = (): JSX.Element => {
  const navItems = [
    { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
  { label: "About", href: "#about" },
  { label: "Forum", href: "#forum" },
  ];

  return (
    <div className="w-full min-h-screen bg-black">
      <SEO
        title="About"
        description="Learn about OSINT Ambition's mission to make Open Source Intelligence accessible worldwide through collaboration, education, and open tools."
        canonical="https://osintambition.org/about"
        imageUrl="https://osintambition.org/logo/osint_logo.png"
      />
      <div className="w-full bg-black overflow-hidden">
        {/* Desktop Header (hidden on mobile) */}
        <div className="hidden min-[760px]:block">
          <Header items={navItems} />
        </div>

        {/* Mobile Header (visible below 760px) */}
        <div className="min-[760px]:hidden">
          <MobileHeader items={navItems} />
        </div>

        <HeroSection />
        <IntroductionSection />
        <MissionSection />
        <AwardsSection />
        <FactsSection />
        <CollaborationSection />
        <MainContentSection />
      </div>
    </div>
  );
};