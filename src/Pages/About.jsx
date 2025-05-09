import React from 'react';
import MissionVisionSection from '../components/Sections/MissionVisionSection.jsx';
import TeamAndAmbassadorsSection from '../components/Sections/TeamAndAmbSection.jsx';
import MemberSection from '../components/Sections/MemberSection.jsx';

const About = () => {
    return (
        <div className="text-text-default font-montserrat">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-baltic-900 sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-baltic-900">
            Lorem ipsum dolor sit amet consectetur. Egestas commodo aliquam volutpat donec pulvinar eget egestas.
          </p>
        </div>
      </div>
      <MissionVisionSection />
      <TeamAndAmbassadorsSection/>
      <MemberSection />
    </div>
    );
};

export default About;