import { Separator } from "../../../../components/ui/separator";
import { useInView } from "../../../../hooks/useInView";

export const MainContentSection = (): JSX.Element => {
  const { ref, inView } = useInView({ threshold: 0.3, once: false });
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
      <div
        ref={ref as unknown as React.RefObject<HTMLDivElement>}
        className={`w-full max-w-[1440px] mx-auto bg-black transition-all duration-500 ease-out will-change-[opacity,transform]
        ${inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"}`}
      >
        <div className="w-full max-w-[1380px] mx-auto px-4 py-3">
          <div className="flex justify-between gap-6">
            <nav className="flex-1 min-w-[220px]">
              <ul className="space-y-2 pt-2">
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

            <nav className="flex-1 min-w-[220px]">
              <ul className="space-y-2 pt-2">
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

          <Separator className="w-full h-px mt-6 bg-[#222225]" />

          <footer className="w-full bg-transparent">
            <div className="flex justify-between items-center py-3">
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
