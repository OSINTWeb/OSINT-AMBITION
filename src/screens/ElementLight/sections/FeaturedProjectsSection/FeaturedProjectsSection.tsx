import { ExternalLinkIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const projectsData = [
  {
    id: 1,
    category: "Tools",
    title: "Profiler.Me",
    description:
      "Profiler.me is an OSINT (Open Source Intelligence) platform designed to gather, analyze, and visualize publicly available information about individuals and entities - all in one clean, automated dashboard.",
    image: "/project/profiler_tool.png",
    gridClass: "col-span-1",
  },
  {
    id: 2,
    category: "Newsletter",
    title: "OSINT Updates",
    description:
      "OSINT Updates is your go-to newsletter and content feed that keeps you informed about everything happening in the world of Open Source Intelligence (OSINT).",
    image: "/project/news.png",
    gridClass: "col-span-1",
  },
  {
    id: 3,
    category: "Conference",
    title: "OSINTCon",
    description:
      "OSINTCon (Open Source Intelligence Conference) is a global, fully online, and 100% free conference dedicated to the field of Open Source Intelligence (OSINT).",
    image: "/project/conf.png",
    gridClass: "col-span-2",
  },
  {
    id: 4,
    category: "Blogs",
    title: "OSINT India",
    description:
      "Explore deep dives, tool breakdowns, and expert-written OSINT insights curated to sharpen your intelligence game. Stay updated on trends, techniques, and real-world applications in open-source investigations.",
    image: "/project/blogs.png",
    gridClass: "col-span-1",
  },
  {
    id: 5,
    category: "Forum",
    title: "Forum",
    description:
      "The OSINT Ambition Forum is an upcoming community-driven discussion platform - designed to bring together OSINT enthusiasts, professionals, and learners from around the world.",
    image: "/project/fourm.png",
    gridClass: "col-span-1",
  },
];

export const FeaturedProjectsSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <div className="max-w-[1380px] mx-auto px-[30px] max-[360px]:px-4">
        <header className="h-24 relative">
          <div className="h-full border-t border-[#222225]" />
          <h2 className="absolute top-7 left-0 [font-family:'Inter',Helvetica] font-normal text-white text-[29px] tracking-[0] leading-[36.5px] whitespace-nowrap">
            Ongoing Projects
          </h2>
        </header>

        <div className="grid grid-cols-2 max-[360px]:grid-cols-1 gap-[30px] max-[360px]:gap-4 auto-rows-max">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className={`${project.gridClass} max-[360px]:col-span-1 bg-transparent border-none overflow-hidden group cursor-pointer`}
            >
              <CardContent className="p-0 relative">
                <div
                  className={`w-full bg-contain bg-center bg-no-repeat aspect-[16/9] max-[360px]:aspect-[4/3]`}
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                <div className="pt-4">
                  <Badge
                    variant="outline"
                    className="mb-4 border-white text-white bg-transparent [font-family:'Inter',Helvetica] font-normal text-[11.4px] tracking-[0] leading-[14.4px] h-6 px-3"
                  >
                    {project.category}
                  </Badge>

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="[font-family:'Inter',Helvetica] font-normal text-white text-[22.5px] tracking-[0] leading-[28.8px] mb-2">
                        {project.title}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[19.2px]">
                        {project.description}
                      </p>
                    </div>

                    <ExternalLinkIcon className="w-[35px] h-[35px] text-white flex-shrink-0 mt-3" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
