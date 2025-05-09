import React from 'react';
import HeroSection from './Sections/HeroSection';
import ApproveSection from './Sections/ApproveSection';
import SkillSection from './Sections/SkillSection';
import ChooseUsSection from './Sections/ChooseUsSection';
import MemberSection from './Sections/MemberSection';

const Homepage = () => {
    return (
        <div>
            <HeroSection />
            <ApproveSection/>
            <SkillSection/>
            <ChooseUsSection/>
            <MemberSection/>
        </div>
    );
};

export default Homepage;