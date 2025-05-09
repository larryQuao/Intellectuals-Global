import React from "react";
import footerImg from '../../assets/logoWhiteBg.png'

const Footer = () => {
  return (
    <footer className="footer bg-alto-950">
      <div className="w-full px-28 py-4 bg-Text-and-Border-Dark-Color inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="inline-flex flex-col justify-start items-start gap-4">
            <div className="w-24 h-28 p-2 bg-white rounded-lg inline-flex justify-start items-center gap-2.5">
              <img
                className="flex-1 self-stretch"
                src={footerImg}
              />
            </div>
          </div>
          <div className="flex justify-start items-center gap-8">
            <div className="justify-start text-white text-base font-medium font-['Montserrat'] leading-normal tracking-tight">
              About
            </div>
            <div className="justify-start text-white text-base font-medium font-['Montserrat'] leading-normal tracking-tight">
              Services
            </div>
          </div>
          <div className="justify-start text-white text-base font-medium font-['Montserrat'] leading-normal tracking-tight">
            Privacy Policy
          </div>
        </div>
        <div className="inline-flex justify-start items-center gap-8">
          <div className="justify-start text-white text-base font-normal font-['Montserrat'] leading-normal tracking-tight">
            <p>
            Intellectuals Global &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
