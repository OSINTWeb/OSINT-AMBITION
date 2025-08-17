import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const AboutUsSection = (): JSX.Element => {
  const profileData = {
    name: "Dheeraj Yadav",
    title: "CEO @OSINTAMBITION",
    avatar: "/image---79vyojmil6oq7ajzcecjufbkhiq-png.png",
  };

  return (
    <section className="relative w-full h-[840px] bg-black overflow-hidden">
      <div className="relative h-full border-t border-[#222225] bg-[url(/image-wrapper---image---dwny1a03p2eg8wdfbslv57uo0kw-jpg.png)] bg-cover bg-center">
        <div className="flex flex-col items-center justify-center h-full px-4">
          <div className="max-w-[1116px] mx-auto text-center">
            <div className="mb-12">
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-white text-[28px] leading-[33.6px] mb-2">
                We are open for collaborations and partnership with other
                companies/community
              </h2>
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[28px] leading-[33.6px]">
                to make some amazing products for OSINT lovers.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <Button
                variant="ghost"
                className="h-auto p-0 hover:bg-transparent group"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[18.9px] leading-6">
                    Let's work together
                  </span>
                  <div className="w-[188px] h-px bg-white group-hover:bg-gray-300 transition-colors" />
                </div>
              </Button>

              <div className="flex items-center gap-3">
                <Avatar className="w-[38px] h-[38px]">
                  <AvatarImage
                    src={profileData.avatar}
                    alt={profileData.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gray-600 text-white text-sm">
                    {profileData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="text-left">
                  <div className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffb2] text-[15.2px] leading-[19.2px]">
                    {profileData.name}
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffb2] text-[15.4px] leading-[19.2px]">
                    {profileData.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
