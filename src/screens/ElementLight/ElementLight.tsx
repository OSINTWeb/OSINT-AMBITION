import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import SEO from "../../components/SEO";
import { FeaturedProjectsSection } from "./sections/FeaturedProjectsSection/FeaturedProjectsSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { IntroductionSection } from "./sections/IntroductionSection/IntroductionSection";
import { WorkflowSection } from "./sections/WorkflowSection/WorkflowSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { Header } from "../Header";
import { MobileHeader } from "../../components/mobile";

const navigationItems = [
  { label: "Products", href: "#products" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
  { label: "Forum", href: "#forum" },
];

export const ElementLight = (): JSX.Element => {
  return (
    <div className="relative w-full bg-black max-[480px]:overflow-x-hidden">
      <SEO
        title="Home"
        description="Explore OSINT tools, community projects, and resources to learn, collaborate, and apply Open Source Intelligence."
        canonical="https://osintambition.org/"
        imageUrl="https://osintambition.org/logo/osint_logo.png"
      />
      {/* Desktop Header (hidden on mobile) */}
      <div className="hidden min-[760px]:block">
        <Header items={navigationItems} />
      </div>
      
      {/* Mobile Header (visible below 760px) */}
      <div className="min-[760px]:hidden">
        <MobileHeader items={navigationItems} />
      </div>

      {/* Main Content */}
      <main className="relative w-full">
        {/* Hero Background Section with Video Behind PNG Overlay */}
        <section className="relative w-full h-[100vh] overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/herosection/hero-video.mp4"
          />
          {/* Foreground PNG overlay (can be semi-transparent) */}
          <div className="absolute inset-0 bg-[url(/hsatf7kpduhyxd9kyq2mo6z0lg-mp4.png)] bg-cover bg-[50%_50%] z-10" />
          {/* Centered Heading above everything */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="w-full max-w-[50.375rem] text-center px-4">
              <h1 className="[font-family:'Inter',Helvetica] font-normal text-white text-[2.48125rem] tracking-[0] max-[360px]:leading-[3rem] mix-blend-difference">
                A Place Where OSINT meets Curiosity
              </h1>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section id="about" className="relative w-full">
          <HeroSection />
        </section>

        {/* Introduction Section */}
        <section className="relative w-full">
          <IntroductionSection />
        </section>

        {/* Featured Projects Section */}
        <section id="products" className="relative w-full">
          <FeaturedProjectsSection />
        </section>

        {/* Workflow Section */}
        <section id="forum" className="relative w-full">
          <WorkflowSection />
        </section>

        <section className="relative w-full">
          <AboutUsSection />
        </section>

        {/* Main Content Section */}
        <section className="relative w-full">
          <MainContentSection />
        </section>
      </main>
    </div>
  );
};
