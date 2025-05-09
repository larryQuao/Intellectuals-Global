import React from 'react';
import {
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  HomeModernIcon,
  CalendarDaysIcon,
  ArrowUpTrayIcon,
  ArrowLongRightIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Case Studies & Essays',
    description: 'Lorem ipsum dolor sit amet consectetur. Ipsum in blandit vel gravida elementum varius ultrices at id. Mattis egestas lorem pharetra non.',
    icon: DocumentTextIcon,
    href: '#',
  },
  {
    name: 'Discussion Session',
    description: 'Lorem ipsum dolor sit amet consectetur. Ipsum in blandit vel gravida elementum varius ultrices at id. Mattis egestas lorem pharetra non.',
    icon: ChatBubbleLeftRightIcon,
    href: '#',
  },
  {
    name: 'Learn Anywhere',
    description: 'Lorem ipsum dolor sit amet consectetur. Ipsum in blandit vel gravida elementum varius ultrices at id. Mattis egestas lorem pharetra non.',
    icon: HomeModernIcon,
    href: '#',
  },
  {
    name: 'Schedule with Mentor',
    description: 'Lorem ipsum dolor sit amet consectetur. Ipsum in blandit vel gravida elementum varius ultrices at id. Mattis egestas lorem pharetra non.',
    icon: CalendarDaysIcon,
    href: '#',
  },
  {
    name: 'Upload your Portfolio',
    description: 'Lorem ipsum dolor sit amet consectetur. Ipsum in blandit vel gravida elementum varius ultrices at id. Mattis egestas lorem pharetra non.',
    icon: ArrowUpTrayIcon,
    href: '#',
  },
];

const BlinkingStripes = () => {
  return (
    <div className="relative w-10 h-3 mb-1"> {/* Container for stripes */}
      <span className="blinking-stripe absolute bg-violet-500 h-0.5 w-3 top-0 left-0"></span>
      <span className="blinking-stripe animation-delay-200 absolute bg-violet-500 h-0.5 w-5 top-1.5 left-1"></span>
      <span className="blinking-stripe animation-delay-400 absolute bg-violet-500 h-0.5 w-3 top-3 left-0.5"></span>
    </div>
  );
};


const ChooseUsSection = () => {
  return (
    // Assuming baltic-950 is your dark background from tailwind.config.js
    // and text-default is light/white on dark backgrounds.
    <div className="bg-baltic-950 py-8 sm:py-12 font-montserrat">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl relative inline-block">
            Why Should You Choose <br className="sm:hidden"/>
            <span className="text-violet-500">Intellectuals</span>
          </h2>
          <p className="mt-6 text-lg leading-7 sm:px-24 text-baltic-300">
            Get the proper academic strategies from Intellectuals. We are here to support and train
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-none sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 3).map((feature) => ( // First 3 features
              <div key={feature.name} className="flex flex-col bg-baltic-900 p-6 rounded-2xl border border-alto-700 hover:bg-violet-500 transition-colors duration-300">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-12 w-12 flex-none text-violet-200" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-baltic-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-violet-400 hover:text-violet-300 flex items-center">
                      Discover more <ArrowLongRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
          {/* Second row for the remaining 2 features, centered on larger screens */}
          <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:justify-center lg:gap-x-8">
            {features.slice(3).map((feature) => (
              <div key={feature.name} className="flex flex-col bg-baltic-900 p-6 rounded-2xl border border-alto-700 hover:bg-violet-500 transition-colors duration-300 lg:w-[32%]"> {/* Adjust lg:w-[32%] for spacing */}
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-12 w-12 flex-none text-violet-200" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-baltic-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-violet-400 hover:text-violet-300 flex items-center">
                      Discover more <ArrowLongRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;