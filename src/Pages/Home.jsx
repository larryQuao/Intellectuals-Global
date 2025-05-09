import React from 'react';

import HeroSection from '../components/Sections/HeroSection.jsx'
import ApproveSection from '../components/Sections/ApproveSection.jsx'
import SkillSection from '../components/Sections/SkillSection.jsx'
import ChooseUsSection from '../components/Sections/ChooseUsSection.jsx'
import MemberSection from '../components/Sections/MemberSection.jsx'

const Home = () => {
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

export default Home;