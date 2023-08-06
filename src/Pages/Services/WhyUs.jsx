import React from "react";

const WhyUs = () => {
  return (
    <div>
      <div className="grid grid-cols-2 m-auto border">
        <div className="m-6 p-3 border">
          <div>
            <h3 className="text-3xl font-bold">Why Outdoor Venture?</h3>
            <div className="text-5xl">
              <hr />
            </div>
            <p className="my-8">
              Click edit button to change this text. Lorem ipsum dolor sit amet,{" "}
              <br /> adipiscing elit.
            </p>
            <ul>
              <li><hr/>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
              <li>
                Consequatur, ipsa eaque. Labore vero in excepturi saepe
                temporibus.
              </li>
              <li>Nulla, ratione reprehenderit excepturi tenetur,</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between m-6 p-3 border">
          <div>
            <h3 className="text-3xl font-bold">What You Get?</h3>
            <div className="text-5xl">
              <hr />
            </div>
            <p className="my-8">
              Click edit button to change this text. Lorem ipsum dolor sit amet,{" "}
              <br /> adipiscing elit.
            </p>
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet,{" "}
              <br /> consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, <br /> pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
