import { Separator } from "../../../../../components/ui/separator";

export const TeamContainerSection = (): JSX.Element => {
  const navigationLinks = [
    { text: "Home", fontSize: "text-[13.7px]" },
    { text: "Products", fontSize: "text-[13.5px]" },
    { text: "About", fontSize: "text-[13.3px]" },
    { text: "Contact", fontSize: "text-[13.2px]" },
  ];

  const socialLinks = [
    { text: "LinkedIn", fontSize: "text-[13.5px]" },
    { text: "X", fontSize: "text-sm" },
    { text: "Forum", fontSize: "text-[13.9px]" },
    { text: "YouTube", fontSize: "text-[13.6px]" },
  ];

  return (
    <div className="w-full bg-black">
      <div className="relative bg-black px-[30px] py-0">
        <div className="flex justify-between max-w-[1035px]">
          <div className="flex gap-[518px]">
            <nav className="flex flex-col gap-[9px] pt-[19px]">
              {navigationLinks.map((link, index) => (
                <div key={index} className="h-[18px]">
                  <div
                    className={`[font-family:'Inter',Helvetica] font-normal text-white ${link.fontSize} tracking-[0] leading-[16.8px] whitespace-nowrap`}
                  >
                    {link.text}
                  </div>
                </div>
              ))}
            </nav>

            <nav className="flex flex-col gap-[9px] pt-[19px]">
              {socialLinks.map((link, index) => (
                <div key={index} className="h-[18px]">
                  <div
                    className={`[font-family:'Inter',Helvetica] font-normal text-white ${link.fontSize} tracking-[0] leading-[16.8px] whitespace-nowrap`}
                  >
                    {link.text}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="mt-[137px] bg-[#222225] h-px max-w-[1380px]" />

        <footer className="flex justify-between items-center pt-[17px] pb-[17px] max-w-[1380px] bg-transparent">
          <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[33.6px] whitespace-nowrap">
            OSINT AMBITION
          </div>

          <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[13.1px] tracking-[0] leading-[14px] whitespace-nowrap">
            © 2025 OSINTAmbition
          </div>
        </footer>
      </div>
    </div>
  );
};
