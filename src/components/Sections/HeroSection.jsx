import React from 'react';
import heroImage from '../../assets/3dimage.png';

const HeroSection = () => {
    return (
<div className="bg-secondary text-text-default py-18 sm:py-8 lg:py-12"> {/* Adjusted padding-top for navbar */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-360 px-6 lg:px-8 sm:pb-0 lg:pb-0 flex flex-col lg:flex-row items-center">
          {/* Text Content Area */}
          <div className="lg:w-3/5  max-w-full lg:max-w-none lg:flex-shrink-0 lg:pr-8 text-center lg:text-left">
            <span className="bg-violet-700 inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white ring-1 ring-inset mb-4 ">
              #1 Teaching Assistant Platform
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:leading-[1.25] text-gray-900 lg:text-6xl sm:text-5xl ">
              Improve Academically. <br />
              Yours For The Taking
            </h1>
            <p className="mt-6 text-lg font-normal text-gray-900 md:text-center lg:text-left lg:px-0 sm:px-12  ">
              Sharpen your edge in achieving the best academic results with trusted and certified Teaching Assistants.
            </p>
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-x-6">
              <a
                href="#"
                className="rounded-4xl bg-baltic-950 px-6 py-3 text-sm text-white font-semibold focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-baltic-950 hover:bg-violet-700"
              >
                Get started
              </a>
            </div>
            <p className="mt-4 text-lg font-normal text-gray-900">
              Trusted by Universities Academic Boards
            </p>
          </div>

          {/* Image Area */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-2/5 xl:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end order-first lg:order-last">
            <img
              src={heroImage}
              alt="Teaching Assistant Platform Graduate"
              className="w-75 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none rounded-lg object-contain"  // Adjusted max-w for responsiveness
            />
          </div>
        </div>

        {/* Optional Decorative Shapes
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#CB9EFF] to-[#9747FF] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div> */}
      </div>
    </div>
    );
};

export default HeroSection;