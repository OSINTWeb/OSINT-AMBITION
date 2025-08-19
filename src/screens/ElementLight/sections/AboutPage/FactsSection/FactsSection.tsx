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
          <div className="max-w-[1440px] w-full px-[30px] mt-[30px] mb-20">
            <div className="grid grid-cols-3 md:grid-cols-3 max-[480px]:grid-cols-1 gap-6 md:gap-10 mt-4">
              {statsData.map((stat, index) => (
                <Card key={index} className="w-full bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                  <CardContent className="p-6 md:p-7">
                    <div className="flex flex-col">
                      <div className="[font-family:'Inter',Helvetica] text-4xl md:text-5xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                        {stat.number}
                      </div>
                      <div className="mt-5">
                        <h3 className="[font-family:'Inter',Helvetica] text-white text-lg md:text-xl font-medium mb-2">
                          {stat.title}
                        </h3>
                        <p className="[font-family:'Inter',Helvetica] text-zinc-300 text-sm leading-relaxed max-w-[460px]">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Separator className="mt-10 bg-[#222225]" />
          </div>
        </div>
      </div>
    </section>
  );
};
