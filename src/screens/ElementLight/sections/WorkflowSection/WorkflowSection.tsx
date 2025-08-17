import React from "react";
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
    },
    {
      id: "collaboration",
      title: "Collaboration",
      fontSize: "text-[22.9px]",
      width: "w-[145px]",
    },
    {
      id: "security",
      title: "Security",
      fontSize: "text-[22.9px]",
      width: "w-[90px]",
    },
    {
      id: "integrity",
      title: "Integrity",
      fontSize: "text-[22.5px]",
      width: "w-[89px]",
    },
  ];

  return (
    <section className="w-full relative">
      <div className="w-full max-w-[1380px] mx-auto px-[30px]">
        <header className="relative h-[118px] border-t border-[#222225]">
          <h2 className="w-28 h-[38px] top-7 [font-family:'Inter',Helvetica] font-normal text-white text-[29.7px] tracking-[0] leading-[36.5px] whitespace-nowrap absolute left-0">
            Process
          </h2>

          <div className="absolute w-[659px] h-[58px] top-7 left-[705px] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[19.2px]">
            Our work is guided by four core values that ensure the highest
            quality and impact in every <br />
            project we do. By following these principles, we build compelling,
            cutting-edge products that <br />
            not only meets but exceed their expectations.
          </div>
        </header>

        <div className="relative h-[355px] border-t border-[#222225]">
          <Accordion
            type="single"
            collapsible
            className="w-full h-[268px] bg-black"
          >
            {processItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b border-[#222225] h-[67px]"
              >
                <AccordionTrigger className="h-[67px] bg-black px-0 py-0 hover:no-underline [&[data-state=open]>svg]:rotate-45">
                  <div className="flex items-center justify-between w-full h-[66px]">
                    <span
                      className={`${item.width} ${item.fontSize} h-[30px] [font-family:'Inter',Helvetica] font-normal text-white tracking-[0] leading-[26.4px] whitespace-nowrap`}
                    >
                      {item.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
