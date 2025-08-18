import { Card, CardContent } from "../../../../../components/ui/card";
import { Separator } from "../../../../../components/ui/separator";

export const FactsSection = (): JSX.Element => {
  const statsData = [
    {
      number: "4",
      title: "Projects",
      description:
        "Since our inception in 2019, we have successfully completed top 4 revolutionary projects namely Profiler.Me, OSINTCon, OSINTUpdates, OSINT India",
    },
    {
      number: "100+",
      title: "Countries",
      description:
        "With a footprint in India, our operations exemplify global reach and diverse expertise.",
    },
    {
      number: "5",
      title: "Collaborators",
      description:
        "With a team of 5 dedicated professionals, we ensure flawless execution of tasks.",
    },
  ];

  return (
    <section className="w-full relative">
      <div className="w-full px-[30px] mt-[100px] max-w-[1440px] mx-auto">
        <div className="relative w-full">
          <Separator className="bg-[#222225]" />

          <div className="flex justify-between items-start pt-7 pb-7">
            <h2 className="[font-family:'Inter',Helvetica] font-normal text-white text-[29.2px] tracking-[0] leading-[36.5px]">
              Facts
            </h2>

            <div className="min-[480px]:block max-[480px]:hidden max-w-[664px] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[19.2px]">
              OSINT India is the first Indian-origin OSINT community, committed
              to advancing open-source intelligence in India and globally. We're
              the team behind OSINTCon and tools like Profiler.me, operating
              under OSINT Ambition, a global initiative shaping the future of
              OSINT.
            </div>

            <div className="max-[480px]:block min-[480px]:hidden text-white text-[25px] tracking-[0] px-6 max-[480px]:text-[10px] max-[480px]:ml-10">
              Founded with a vision for transformative creativity, Vence has rapidly grown into a premier agency.
            </div>
          </div>
        </div>

        <div className="relative w-full h-[600px] bg-black border-b border-[#222225] overflow-hidden">
          <div className="absolute inset-0 opacity-90 bg-[url(/aboutsection/Fact.png)] bg-cover bg-center" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-start text-white text-[25px] tracking-[0] px-6 max-[480px]:text-[20px] max-[480px]:w-[90%] max-[480px]:px-4">
            In 2022, Dheeraj Yadav and a group of friends founded OSINT Ambition in College, driven by a shared passion for spreading OSINT. Our breakthrough came with developing products that caught the industry's attention.
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="max-w-[1440px] w-full px-[30px] mt-[10px] mb-20">
            <div className="grid grid-cols-3 gap-[10px] max-[480px]:grid-cols-1 max-[480px]:gap-3 max-[480px]:mt-4">
              {statsData.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <Card className="bg-transparent border-none w-full">
                    <CardContent className="p-0 flex flex-col items-start justify-start max-[480px]:pb-2">
                      <div className="text-white">
                        <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[41.6px] tracking-[0] leading-[49.9px] mb-7 max-[480px]:text-[28px] max-[480px]:mb-2">
                          {stat.number}
                        </div>

                        <div className="mt-[101px] max-[480px]:mt-2">
                          <h3 className="[font-family:'Inter',Helvetica] font-normal text-white text-[23.1px] tracking-[0] leading-[28.8px] mb-2 max-[480px]:text-[18px] max-[480px]:mb-1">
                            {stat.title}
                          </h3>

                          <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[15.1px] tracking-[0] leading-[19.2px] max-w-[430px] max-[480px]:text-[13px] max-[480px]:leading-[18px]">
                            {stat.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Separator line between stats items (only on mobile) */}
                  {index < statsData.length - 1 && (
                    <Separator className="max-[480px]:block min-[480px]:hidden mt-3 mb-3 bg-[#222225]" />
                  )}
                </div>
              ))}
            </div>
            
            <Separator className="mt-8 bg-[#222225]" />
          </div>
        </div>
      </div>
    </section>
  );
};
