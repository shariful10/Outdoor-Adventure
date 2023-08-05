import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import ReviewSection from "../ReviewSection/ReviewSection";
import EventSection from "../EventsSection/EventSection";
import Explore from "../Explore/Explore";

const AllSection = () => {
  return (
    <div>
      <BannerSection />
      <ReviewSection />
      <EventSection />
      <Explore />
    </div>
  );
};

export default AllSection;
