import React from "react";
import { Button } from "../../components/ui/button";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { FeaturedProjectsSection } from "./sections/FeaturedProjectsSection/FeaturedProjectsSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { IntroductionSection } from "./sections/IntroductionSection/IntroductionSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { WorkflowSection } from "./sections/WorkflowSection/WorkflowSection";

const navigationItems = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Forum", href: "#forum" },
];

export const ElementLight = (): JSX.Element => {
  return (
    <div className="relative w-full bg-black">
      {/* Fixed Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-[15px]">
        <nav className="relative w-[447px] h-[54px] bg-[#000000cc] rounded-[27px] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
          <div className="flex items-center h-full px-[25px]">
            <div className="flex items-center space-x-0">
              <div className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-6 whitespace-nowrap">
                OSINT
              </div>
              <div className="ml-[25px] [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-6 whitespace-nowrap">
                Ambition
              </div>
            </div>

            <div className="ml-[26px] w-px h-6 bg-[#ffffff66]" />

            <div className="flex items-center ml-[31px] space-x-[20px]">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-auto p-0 [font-family:'Inter',Helvetica] font-medium text-white text-[13.3px] tracking-[0] leading-[16.8px] whitespace-nowrap hover:bg-transparent"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative w-full">
        {/* Hero Background Section */}
        <section className="relative w-full h-[1200px] bg-[url(/hsatf7kpduhyxd9kyq2mo6z0lg-mp4.png)] bg-cover bg-[50%_50%]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[710px] text-center">
              <h1 className="[font-family:'Inter',Helvetica] font-normal text-white text-[39.7px] tracking-[0] leading-[49.9px]">
                A Place Where OSINT meets Curiosity
              </h1>
            </div>
          </div>
        </section>

        {/* Container Image */}
        <div className="relative">
          <img
            className="w-full h-[78px] object-cover"
            alt="Container"
            src="/container.svg"
          />
        </div>

        {/* Hero Section */}
        <section className="relative w-full">
          <HeroSection />
        </section>

        {/* Introduction Section */}
        <section className="relative w-full">
          <IntroductionSection />
        </section>

        {/* Featured Projects Section */}
        <section className="relative w-full">
          <FeaturedProjectsSection />
        </section>

        {/* Workflow Section */}
        <section className="relative w-full">
          <WorkflowSection />
        </section>

        {/* About Us Section */}
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
