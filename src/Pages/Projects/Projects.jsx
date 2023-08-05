import React from 'react';
import WaterSports from './WaterSports/WaterSports';
import WinterSports from './WinterSports/WinterSports';
import Camping from './Camping/Camping';
import SectionHeader from '../../Components/Shared/SectionHeader/SectionHeader'

const Projects = () => {
    return (
        <div>
            <SectionHeader bgImage="/project-background.png" title={"Our Projects"}></SectionHeader>
            <WaterSports></WaterSports>
            <WinterSports></WinterSports>
            <Camping></Camping>
        </div>
    );
};

export default Projects;