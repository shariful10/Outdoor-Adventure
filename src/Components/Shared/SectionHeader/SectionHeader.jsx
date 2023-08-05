import React from "react";

const SectionHeader = ({ bgImage, subTitle, title }) => {
  return (
    <section
      className="relative h-[400px] bg-cover bg-center text-white bg-fixed"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="font-bold mb-4 font-Montserrat text-2xl my-5">
          {subTitle}
        </h1>
        <p className="text-7xl font-bold font-Montserrat">{title}</p>
        <button className="bg-primary px-10 py-3 rounded-full font-semibold font-NotoSans my-10">
          Learn More
        </button>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
};

export default SectionHeader;
