import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const WorkflowSection = (): JSX.Element => {
  const processItems = [
    {
      id: "innovation",
      title: "Innovation",
      fontSize: "text-[23.1px]",
      width: "w-[113px]",
      text: "We prioritize staying ahead of industry trends by continuously exploring new technologies and try to integrate them if they make the product better. We spent a lot of our time in doing research before starting the development work.",
    },
    {
      id: "collaboration",
      title: "Collaboration",
      fontSize: "text-[22.9px]",
      width: "w-[145px]",
      text: "Effective teamwork and open communication are the key to success. We do open discussion with our entire team on every product we build. We also take suggestions and feedback from industry experts and our friends working in the OSINT industry, so that we have a diverse range of ideas and expertise to actually builds something that just delivers the best quality experience.",
    },
    {
      id: "security",
      title: "Security",
      fontSize: "text-[22.9px]",
      width: "w-[90px]",
      text: "We are dedicated to keep security of our products as our first priority. We follow best coding practices in our product to keep the user data safe and secure. We only use third party products from highly reputed organization to reduce the chances of any data leak from their side. We also follow the principle of least privilege inside the company to reduce chance of any mistake.",
    },
    {
      id: "integrity",
      title: "Integrity",
      fontSize: "text-[22.5px]",
      width: "w-[89px]",
      text: "We follow the values of honesty, transparency and reliability in all our interactions. By building trust with our users and within our team, we ensure that every project is executed with the utmost professionalism and ethical standards. We also take suggestion and feedback from our user very seriously to deliver them the best experience.",
    },
  ];

  return (
    <section className="w-full relative">
      <div className="w-full max-w-[1380px] mx-auto px-[30px] max-[360px]:px-4 mt-[100px]">
        <header className="border-t border-[#222225] py-7">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <h2 className="[font-family:'Inter',Helvetica] font-normal text-white text-[29.7px] tracking-[0] leading-[36.5px]">
              Process
            </h2>
            <p className="[font-family:'Inter',Helvetica] text-white text-[15px] leading-[19.2px] max-w-[630px] text-right max-[360px]:text-left max-[360px]:text-[13px] max-[360px]:leading-[18px]">
              Our work is guided by four core values that ensure the highest quality and impact in every project we do. By following these principles, we build compelling, cutting-edge products that not only meets but exceed their expectations.
            </p>
          </div>
        </header>

        <div className="relative border-t border-[#222225]">
          <Accordion
            type="single"
            collapsible
            className="w-full bg-black"
          >
            {processItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b border-[#222225]"
              >
                <AccordionTrigger className="bg-black px-0 py-4 hover:no-underline">
                  <div className="flex items-center justify-between w-full">
                    <span className={`${item.width} ${item.fontSize} [font-family:'Inter',Helvetica] font-normal text-white tracking-[0] leading-[26.4px] whitespace-nowrap max-[360px]:w-auto max-[360px]:whitespace-normal`}>
                      {item.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white text-[15px] tracking-[0] leading-[19.2px]">
                  {item.text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
