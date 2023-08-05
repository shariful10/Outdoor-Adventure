import React from "react";

const BannerSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white bg-fixed"
      style={{
        backgroundImage:
          "url('https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/hero-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="font-bold mb-4 font-Montserrat text-2xl my-5">
          Explore the Colourful World
        </h1>
        <p className="text-7xl font-bold font-Montserrat">A WONDERFUL GIFT</p>
        <button className="bg-primary px-10 py-3 rounded-full font-semibold font-NotoSans my-10">
          Learn More
        </button>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
};

export default BannerSection;
