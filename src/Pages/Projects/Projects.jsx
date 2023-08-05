import React from "react";
import WaterSports from "./WaterSports/WaterSports";
import WinterSports from "./WinterSports/WinterSports";
import Camping from "./Camping/Camping";
import SectionHeader from "../../Components/Shared/SectionHeader/SectionHeader";

const Projects = () => {
  return (
    <div>
      <SectionHeader
        bgImage="/project-background.png"
        title={"Our Projects"}
      ></SectionHeader>
      <div className="p-5 xl:p-0">
        <WaterSports></WaterSports>
        <WinterSports></WinterSports>
        <Camping></Camping>
      </div>
    </div>
  );
};

export default Projects;
