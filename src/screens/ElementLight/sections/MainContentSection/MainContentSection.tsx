import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const MainContentSection = (): JSX.Element => {
  const leftNavItems = [
    { label: "Home", fontSize: "text-[13.7px]" },
    { label: "Products", fontSize: "text-[13.5px]" },
    { label: "About", fontSize: "text-[13.3px]" },
    { label: "Contact", fontSize: "text-[13.2px]" },
  ];

  const rightNavItems = [
    { label: "LinkedIn", fontSize: "text-[13.5px]" },
    { label: "X", fontSize: "text-sm" },
    { label: "Forum", fontSize: "text-[13.9px]" },
    { label: "YouTube", fontSize: "text-[13.6px]" },
  ];

  return (
    <div className="w-full relative">
      <div className="w-full max-w-[1440px] mx-auto bg-black">
        <div className="w-full max-w-[1380px] mx-auto px-[30px] py-px">
          <div className="flex justify-between max-w-[1035px]">
            <nav className="w-[518px]">
              <ul className="space-y-[27px] pt-[19px]">
                {leftNavItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`${item.fontSize} [font-family:'Inter',Helvetica] font-normal text-white tracking-[0] leading-[16.8px] hover:opacity-80 transition-opacity`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="w-[518px]">
              <ul className="space-y-[27px] pt-[19px]">
                {rightNavItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`${item.fontSize} [font-family:'Inter',Helvetica] font-normal text-white tracking-[0] leading-[16.8px] hover:opacity-80 transition-opacity`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <Separator className="w-full h-px mt-[136px] bg-[#222225]" />

          <footer className="w-full h-[74px] bg-transparent">
            <div className="flex justify-between items-center pt-[17px]">
              <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[33.6px]">
                OSINT AMBITION
              </div>

              <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[13.1px] tracking-[0] leading-[14px]">
                © 2025 OSINTAmbition
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
