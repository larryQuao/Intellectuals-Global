import React from 'react';
import CountUpNumber from '../UI/CountUpNumber'

const stats = [
  { id: 1, name: 'Years of experience', value: '3+' },
  { id: 2, name: 'Accuracy Rate', value: '99%' },
  { id: 3, name: 'Positive Reviews', value: '300+' },
  { id: 4, name: 'Satisfied Customer', value: '50+' },
];

const ApproveSection = () => {
  return (
    <div className="bg-baltic-950 py-4 sm:py-4"> {/* Using baltic-950 for the dark background */}
      <div className="px-0 lg:px-0 mx-auto max-w-360">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-1 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-2 sm:gap-y-0">
              <dt className="text-lg md:text-2xl lg:text-lg leading-7 text-baltic-100">{stat.name}</dt> {/* Lighter text for label */}
              <dd className="order-first text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                <CountUpNumber end={stat.value} duration={2000} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default ApproveSection;