import { Button } from "../../../../../components/ui/button";
import { Separator } from "../../../../../components/ui/separator";

export const CollaborationSection = (): JSX.Element => {
  return (
    <section className="w-full relative h-screen flex flex-col">
      {/* Centered introductory text */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-7xl px-6">
          <p 
            className="mx-auto text-center"
            style={{
              fontFamily: '"Sentient", "Sentient Placeholder", serif',
              fontSize: 'calc(1rem * 1.75)',
              fontStyle: 'normal',
              fontWeight: 400,
              letterSpacing: '0em',
              lineHeight: '1.2em',
              textAlign: 'start',
              color: '#fff',
              textDecoration: 'none',
              textTransform: 'none'
            }}
          >
            We have had the privilege of spreading knowledge to a diverse range of professionals, from big startups to multinational corporations across various industries.
          </p>
        </div>
      </div>

      {/* Bottom content aligned to each other */}
      <div className="flex items-center justify-start max-w-[1440px] w-full px-[30px] pt-[60px] gap-5 relative z-[1] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16 w-full">
          <div className="flex flex-col space-y-6">
            <h2 className="[font-family:'Inter',Helvetica] font-normal text-white text-[29.1px] tracking-[0] leading-[36.5px] max-w-[530px]">
              Want to Work with our Amazing Team?
            </h2>

            <div className="relative">
              <Button
                variant="ghost"
                className="h-auto p-0 text-white hover:text-white/80 [font-family:'Inter',Helvetica] font-medium text-[18.6px] tracking-[0] leading-6"
              >
                Contact Us
              </Button>
              <div className="absolute bottom-0 left-0 w-28 h-px bg-white mt-2" />
            </div>
          </div>

          <div className="flex-1 max-w-[647px]">
            <p className="[font-family:'Inter',Helvetica] font-normal text-zinc-200 text-[15.1px] tracking-[0] leading-[19.2px]">
              At OSINT Ambition, we cultivate a collaborative and knowledge-driven
              environment where <br />
              OSINT professionals and enthusiasts come together. Join us and be
              part of India&apos;s growing <br />
              OSINT community!
            </p>
          </div>
        </div>
      </div>

      <Separator className="mt-8 bg-[#222225]" />
    </section>
  );
};
