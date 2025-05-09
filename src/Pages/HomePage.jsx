import React from 'react';
import HeroSection from '../components/Sections/HeroSection';
import ApproveSection from '../components/Sections/ApproveSection';
import SkillSection from '../components/Sections/SkillSection';
import ChooseUsSection from '../components/Sections/ChooseUsSection';
import MemberSection from '../components/Sections/MemberSection';

const HomePage = () => {
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

export default HomePage;