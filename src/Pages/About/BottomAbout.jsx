import React from "react";

const BottomAbout = () => {
  return (
    <div className="md:flex justify-between my-24 space-y-8 md:space-y-0">
      <div className="md:w-1/2 w-full">
        <h3 className="text-2xl font-semibold">Extraordinary Experiences</h3>
        <div className="h-1 w-24 bg-primary my-3"></div>
        <p className="my-8">
          Click edit button to change this text. Lorem ipsum dolor sit amet,{" "}
          <br /> consectetur adipiscing elit.
        </p>
        <p>
          Click edit button to change this text. Lorem ipsum dolor sit amet,{" "}
          <br /> consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, <br /> pulvinar dapibus leo.
        </p>
      </div>
      <div className="md:w-1/2 w-full">
        <h3 className="text-2xl font-semibold">Our Core Values</h3>
        <div>
          <div className="h-1 w-24 bg-primary my-3"></div>
        </div>
        <p className="my-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <ul>
          <li className="flex items-center gap-3">
            <div className="h-0.5 w-3 bg-primary my-3"></div>
            Locavit liberioris possedit
          </li>
          <li className="flex items-center gap-3">
            <div className="h-0.5 w-3 bg-primary my-3"></div>Diremit mundi mare
            undae
          </li>
          <li className="flex items-center gap-3">
            <div className="h-0.5 w-3 bg-primary my-3"></div>Diremit mundi mare
            undae
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomAbout;
