import React from "react";

export const IntroductionSection = (): JSX.Element => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[33.6px] max-w-none">
            At OSINT Ambition, we are driven by our passion and mission of
            making OSINT accessible for everyone
          </p>
          <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[33.6px] mt-1">
            and expanding the use of OSINT in industries worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};
