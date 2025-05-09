import React from 'react';
import teamMember1 from '../../assets/michael-dam.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'Team Member Name 1',
    position: 'Team Member Position',
    imageUrl: teamMember1, 
  },
  {
    id: 2,
    name: 'Team Member Name 2',
    position: 'Team Member Position',
    imageUrl: teamMember1,
  },
  {
    id: 3,
    name: 'Team Member Name 3',
    position: 'Team Member Position',
    imageUrl: teamMember1,
  },
];

const ambassadors = [
  {
    id: 1,
    name: 'Ambassador Name 1',
    position: 'Ambassador Position',
    imageUrl: teamMember1,
  },
  {
    id: 2,
    name: 'Ambassador Name 2',
    position: 'Ambassador Position',
    imageUrl: teamMember1,
  },
  {
    id: 3,
    name: 'Ambassador Name 3',
    position: 'Ambassador Position',
    imageUrl: teamMember1,
  },
  {
    id: 4,
    name: 'Ambassador Name 4',
    position: 'Ambassador Position',
    imageUrl: teamMember1,
  },
  {
    id: 5,
    name: 'Ambassador Name 5',
    position: 'Ambassador Position',
    imageUrl: teamMember1,
  },
];

const MemberCard = ({ name, position, imageUrl }) => (
  <div className="text-center">
    <img
      className="mx-auto h-32 w-32 sm:h-36 sm:w-36 rounded-full object-cover"
      src={imageUrl}
      alt={name}
    />
    <h3 className="mt-4 text-base sm:text-lg font-semibold leading-7 tracking-tight text-baltic-900">
      {name}
    </h3>
    <p className="text-xs sm:text-sm leading-6 text-baltic-600">{position}</p>
  </div>
);

const TeamAndAmbassadorsSection = () => {
  return (
    <div className="bg-secondary font-montserrat text-text-default">
      {/* Our Team Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-baltic-900 sm:text-5xl">
              Our Team
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-baltic-700">
              Lorem ipsum dolor sit amet consectetur. Vivamus nibh dui aliquam eu ac pellentesque fermentum elementum. Pharetra eget cras habitant amet. Ut auctor sit egestas vitae neque eu.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-none grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl">
            {teamMembers.map((member) => (
              <MemberCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Ambassadors Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-baltic-900 sm:text-4xl">
              Our Ambassadors
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-baltic-700">
              Lorem ipsum dolor sit amet consectetur. Vivamus nibh dui aliquam eu ac pellentesque fermentum elementum. Pharetra eget cras habitant amet. Ut auctor sit egestas vitae neque eu.
            </p>
          </div>
          {/* Responsive grid for ambassadors: 2 on mobile, 3 on sm, 5 on lg */}
          <div className="mx-auto mt-10 grid max-w-none grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
            {ambassadors.map((ambassador) => (
              <MemberCard key={ambassador.id} {...ambassador} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamAndAmbassadorsSection;
