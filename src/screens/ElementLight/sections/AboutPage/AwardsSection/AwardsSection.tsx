import { Separator } from "../../../../../components/ui/separator";
import { FadeInUp } from "../../../../../components/FadeInUp";

export const AwardsSection = (): JSX.Element => {
  const objectives = [
    {
      title: "Make OSINT accessible to all",
      hashtag: "#OSINTForEveryone",
    },
    {
      title: "Build innovative tools",
      hashtag: "Pushing OSINT boundaries",
    },
    {
      title:
        "Foster responsible and ethical use of OSINT in India and Globally",
      hashtag: "Corporate, Law, Journalism",
    },
    {
      title: "Promote and mentor new OSINT talent",
      hashtag: "Knowledge hub, Research paper, Tools",
    },
    {
      title: "Host expert-level workshops, webinars, and events",
      hashtag: "#OSINTCon2025",
    },
  ];

  return (
    <section className="w-full relative">
      <div className="flex justify-center w-full">
        <div className="max-w-[1440px] w-full px-[30px] py-[33px] max-[480px]:px-6 max-[480px]:py-8">
          <FadeInUp delayMs={200}>
            <div className="w-full relative mb-10 max-[480px]:mb-8">
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-white text-[28.9px] tracking-[0] leading-[36.5px] mb-6 max-[480px]:text-[26px] max-[480px]:leading-[32px] max-[480px]:mb-5">
                Our Core Objectives
              </h2>
              <Separator className="w-full bg-[#222225]" />
            </div>
          </FadeInUp>

          <div className="w-full space-y-1 max-[480px]:space-y-2">
            {objectives.map((objective, index) => (
              <FadeInUp key={index} delayMs={300 + (index * 100)}>
                <div
                  className="bg-black/20 backdrop-blur-sm border border-[#222225] rounded-lg overflow-hidden w-full relative hover:bg-black/30 transition-colors duration-200"
                >
                  <div className="relative flex items-center justify-between p-4 max-[480px]:p-5 max-[480px]:flex-col max-[480px]:items-start max-[480px]:space-y-2">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[15.1px] tracking-[0] leading-[19.2px] max-[480px]:text-[15px] max-[480px]:leading-[20px] max-[480px]:font-medium">
                      {objective.title}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-normal text-zinc-300 text-[15.1px] text-right tracking-[0] leading-[19.2px] max-[480px]:text-[13px] max-[480px]:leading-[16px] max-[480px]:text-left max-[480px]:opacity-80">
                      {objective.hashtag}
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
