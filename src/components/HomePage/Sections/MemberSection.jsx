import React from "react";

const MemberSection = () => {
  return (
    <div className="bg-image w-full h-[420px] px-28 py-12 inline-flex flex-col justify-center items-center gap-2.5">
      <div className="w-[875px] flex flex-col justify-start items-center gap-4">
        <div className="w-[788px] text-center justify-start">
          <span class="text-white text-6xl font-semibold font-['Montserrat'] leading-[64px]">
            Join The{" "}
          </span>
          <span class="text-white text-6xl font-semibold font-['Montserrat'] leading-[64px]">
            Community
          </span>
          <span class="text-white text-6xl font-semibold font-['Montserrat'] leading-[64px]">
            {" "}
            of Intellectuals
          </span>
        </div>
        <div className="w-[665px] text-center justify-start text-white text-base font-normal font-['Montserrat'] leading-normal tracking-wide">
          Become a member of the Intellectuals community joining our Telegram
          Community
        </div>
        <div className="px-6 py-2.5 bg-Text-and-Border-Dark-Color rounded-[50px] inline-flex justify-center items-center gap-2.5">
          <div className="text-center justify-start text-white text-base font-medium font-['Montserrat'] leading-normal tracking-tight">
            <a
                        href="#"
                        className="rounded-4xl bg-baltic-950 px-6 py-3 text-sm text-white font-semibold focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-baltic-950 hover:bg-violet-700"
                      >
                        Join Our Community
                      </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberSection;
