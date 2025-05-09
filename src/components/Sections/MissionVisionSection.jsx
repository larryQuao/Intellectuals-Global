import React from 'react';
import missionImage from '../../assets/3dimage.png'; // Adjust path if MissionVision.jsx is not in a 'Sections' subfolder
import visionImage from '../../assets/3dimage.png';   // Adjust path

const MissionVision = () => {
  return (
    <>
      {/* Our Mission Section */}
      <section className="py-6 sm:py-8 md:py-12 text-text-default font-montserrat">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-12 lg:grid-cols-2">
            {/* Text Content for Mission */}
            <div className="lg:pr-4 text-center lg:text-left">
              <h2 className="text-4xl font-semibold tracking-tight text-baltic-900 sm:text-5xl">
                Our Mission
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-baltic-700">
                Lorem ipsum dolor sit amet consectetur. Egestas commodo aliquam
                volutpat donec pulvinar eget egestas. Lorem mattis nulla sed enim
                aliquam. Risus viverra volutpat ipsum amet phasellus turpis. facilisi
                volutpat pharetra purus. Pellentesque vitae ullamcorper leo tortor.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-baltic-700">
                Nisi non mus felis est quam. Euismod nunc sit platea in dolor ut. Sit
                nec erat neque arcu. Vulputate risus egestas ultrices viverra ultrices
                bibendum. Urna sodales consequat leo duis tincidunt viverra.
                Scelerisque.
              </p>
            </div>

            {/* Image for Mission */}
            <div className="flex justify-center lg:justify-end">
              <img
                className="w-full max-w-md lg:max-w-lg rounded-xl object-cover shadow-xl" // Added shadow
                src={missionImage}
                alt="Our Mission - Teacher and students in a classroom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-6 sm:py-8 md:py-12 bg-baltic-900 text-white font-montserrat"> {/* Dark background for Vision */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-12 lg:grid-cols-2">
            {/* Image for Vision - Order changed for layout */}
            <div className="flex justify-center lg:justify-start order-first lg:order-none">
              <img
                className="w-full max-w-md lg:max-w-lg rounded-xl object-cover shadow-xl" // Added shadow
                src={visionImage}
                alt="Our Vision - Person using a laptop"
              />
            </div>

            {/* Text Content for Vision */}
            <div className="lg:pl-4 text-center lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Our Vision
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-baltic-200"> {/* Lighter text on dark bg */}
                Lorem ipsum dolor sit amet consectetur. Egestas commodo aliquam
                volutpat donec pulvinar eget egestas. Lorem a gravida donec
                interdum massa nisi. Lacus amet nisl tempus eu ultrices sed tempor.
                Sed quam facilisi volutpat pharetra purus. Pellentesque vitae
                ullamcorper
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-baltic-200"> {/* Lighter text on dark bg */}
                Nisi non mus felis est quam. Euismod nunc sit platea in dolor ut. Sit
                nec erat neque arcu. Vulputate risus egestas ultrices viverra ultrices
                bibendum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVision;
