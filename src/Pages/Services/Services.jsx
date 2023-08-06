import React from "react";
import SectionHeader from "../../Components/Shared/SectionHeader/SectionHeader";
import Adventures from "./Adventures";

const Services = () => {
  return (
    <div>
      <SectionHeader
        bgImage="https://images.pexels.com/photos/17781404/pexels-photo-17781404/free-photo-of-wood-road-landscape-water.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=loa"
        title={"SERVICES"}
      />
      <Adventures></Adventures>
    </div>
  );
};

export default Services;
