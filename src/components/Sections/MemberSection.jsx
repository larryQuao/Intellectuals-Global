import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/membershipBg.png";

const MemberSection = () => {
  return (
    <div
      className="w-full font-montserrat text-white flex flex-col justify-center items-center text-center bg-cover bg-left bg-no-repeat px-4 py-16 sm:py-20 md:py-28 lg:py-32"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-2xl lg:max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl !leading-tight">
          {" "}
          Join The Community of Intellectuals
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-violet-100 max-w-xl mx-auto"> 
          Become a member of the Intellectuals community joining our Telegram Community
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#" // Replace with your actual Telegram community link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-baltic-950 px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-baltic-800 transition-colors duration-300 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Join Our Community
          </a>
          <Link
            to="/register"
            className="inline-block rounded-full bg-baltic-950 px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-baltic-800 transition-colors duration-300 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemberSection;
