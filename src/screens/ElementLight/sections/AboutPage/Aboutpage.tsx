import { HeroSection } from "./HeroSection/HeroSection";
import { IntroductionSection } from "./IntroductionSection/IntroductionSection";
import { MissionSection } from "./MissionSection/MissionSection";
import { AwardsSection } from "./AwardsSection/AwardsSection";
import { FactsSection } from "./FactsSection/FactsSection";
import { CollaborationSection } from "./CollaborationSection/CollaborationSection";
import { Header } from "../../../Header";
import { MobileHeader } from "../../../../components/mobile/MobileHeader";
import { MainContentSection } from "../MainContentSection/MainContentSection";

export const AboutPage = (): JSX.Element => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];

  return (
    <div className="w-full min-h-screen bg-black">
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