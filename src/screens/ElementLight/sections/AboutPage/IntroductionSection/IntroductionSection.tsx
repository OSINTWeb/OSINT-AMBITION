import { Card, CardContent } from "../../../../../components/ui/card";

const sectionData = [
  {
    title: "Our Approach",
    content:
      "With consistent dedication, we began publishing our OSINT Weekly Newsletter, which became a hit in the global OSINT scene. Our credibility and unique content helped us monetize through ethical promotions, and we reinvested everything into building better tools, platforms, and experiences. Today, we're not just a community - we are a mission-driven collective working on Next-Gen OSINT solutions, empowering individuals, investigators, and enthusiasts alike.",
  },
  {
    title: "Our Mission",
    content:
      "At OSINT Ambition, our mission is to democratize Open Source Intelligence by making powerful OSINT tools, education, and awareness accessible to everyone - from professionals to the common internet user. We are committed to building the next generation of OSINT innovations, nurturing emerging talent, and promoting the ethical use of intelligence for safety, transparency, and impact. Through community-driven collaboration, cutting-edge research, and global outreach, we aim to create a future where #OSINTForEveryone is not just a vision, but a reality.",
  },
];

export const IntroductionSection = (): JSX.Element => {
  return (
    <section className="w-full relative py-16">
      <div className="relative w-full max-w-[1380px] mx-auto px-[30px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sectionData.map((section, index) => (
            <Card key={index} className="bg-black/20 border-[#222225] backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <h2 className="[font-family:'Instrument_Sans',Helvetica] font-medium text-zinc-200 text-2xl tracking-[0] leading-[28.8px] mb-6">
                  {section.title}
                </h2>
                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-zinc-200 text-base tracking-[0] leading-[22.4px]">
                  {section.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
