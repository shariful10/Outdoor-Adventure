import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import ReviewSection from "../ReviewSection/ReviewSection";
import EventSection from "../EventsSection/EventSection";
import Explore from "../Explore/Explore";
import Destination from "../Destination/Destination";

const AllSection = () => {
  return (
    <div>
      <BannerSection />
      <ReviewSection />
      <EventSection />
      <Explore />
      <Destination />
    </div>
  );
};

export default AllSection;
