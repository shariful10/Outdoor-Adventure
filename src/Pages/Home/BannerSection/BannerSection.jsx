import React from "react";

const BannerSection = () => {
  return (
    <section
      className="relative h-[60vh] md:h-screen bg-cover bg-center text-white bg-fixed scroll-smooth"
      style={{
        backgroundImage:
          "url('https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/hero-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="font-bold mb-4 font-Montserrat text-xl md:text-2xl">
          Explore the Colorful World
        </h1>
        <div className="h-0.5 w-24 bg-primary md:my-3"></div>
        <p className="text-4xl lg:text-[64px] font-bold font-Montserrat mt-3 md:mt-5 leading-tight">
          A WONDERFUL GIFT
        </p>
        <button className="bg-primary px-10 py-3 font-semibold font-NotoSans text-white primary_button my-10">
          Learn More
        </button>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
};

export default BannerSection;
