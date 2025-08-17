import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  const leftColumnText = [
    "OSINT Ambition, initially started as a community and later on",
    "transformed into a company. We are driven by the vision of how the",
    "world can be changed if we adopt OSINT just the way we are adopting",
    "AI for the betterment of the society. As of now, we have only seen the",
    "use of OSINT in critical sectors like Criminal Investigations, Fraud",
    "Investigations, KYC, etc. But imagine, if we start using it caller lookup, AI",
    "based Factchecking of any news in real time, background checks about",
    "any individual or businesses, etc, the possibilities are beyond your",
    "imagination.",
    "",
    "As of today, OSINT is just limited to Corporate and it's only being used",
    "for commercial purpose and that too by only large scale businesses. All",
    "the OSINT companies are just chasing money by building products for",
    "B2B, doesn't care much about the innovation in the field. We stand for",
    "the purpose of Innovation, we want to make OSINT accessible for",
    "everyone whether it's an individual or a company. We will be making",
    "products targeting both, some products will be limited to just",
    "Companies due to certain regulatory compliances but we will try to",
    "make them easily accessible for individuals who are using it for good",
    "cause. We are also driven by the passion of integrating OSINT with other",
    "industries like AI, Machine Learning, Data Science for expanding the",
    "capabilities of the field and improving the speed, performance and",
    "efficiency.",
  ];

  const workingOnItems = [
    "Educating people about OSINT",
    "Building new tools that are affordable and easy to use",
    "keeping people up to date with current industry changes",
    "Giving chance to new talents in OSINT",
    "Bringing like minded people to work together in OSINT",
  ];

  return (
    <section className="w-full relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-6 px-4 lg:px-8 py-8">
          <header className="overflow-hidden">
            <h1 className="[font-family:'JetBrains_Mono',Helvetica] font-bold text-white text-7xl tracking-[0] leading-[86.4px] whitespace-nowrap">
              WHO WE ARE
            </h1>
          </header>

          <div className="space-y-2">
            {leftColumnText.map((line, index) => (
              <p
                key={index}
                className="[font-family:'Poppins',Helvetica] font-normal text-zinc-200 text-[15px] tracking-[0] leading-[27px]"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-6 px-4 lg:px-8 py-8">
          <div
            className="w-full h-[473px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(../image---o65uowwhqru46ifdvliqmyh0ayi-jpeg.png)",
            }}
          ></div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="[font-family:'Poppins',Helvetica] font-normal text-zinc-200 text-sm tracking-[0] leading-[25.2px]">
                We are currently working on -
              </p>

              <div className="ml-6 space-y-1">
                {workingOnItems.map((item, index) => (
                  <p
                    key={index}
                    className="[font-family:'Poppins',Helvetica] font-normal text-zinc-200 text-sm tracking-[0] leading-[25.2px]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="overflow-hidden">
              <Button
                variant="ghost"
                className="[font-family:'Inter',Helvetica] font-medium text-white text-[11.4px] tracking-[0] leading-[14.4px] p-0 h-auto hover:bg-transparent"
              >
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
