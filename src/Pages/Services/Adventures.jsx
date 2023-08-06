import React, { useEffect, useState } from "react";

const Adventures = () => {
  const [adventure, setAdventure] = useState();
  useEffect(() => {
    fetch("adventures.json")
      .then((res) => res.json())
      .then((data) => setAdventure(data));
  }, []);

  console.log(adventure);

  return (
    <div className="mb-96">
      <div className="text-center my-24 border w-1/2 m-auto">
        <h2 className="uppercase text-4xl font-bold m-6">
          IT'S TIME TO START YOUR ADVENTURES
        </h2>
        <div className="w-1/6 bg-red-600 h-1 m-auto my-4"></div>
        <p className="text-1xl">
          Click edit button to change this text. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut elit tellus, luctus ullamcorpe
          pulvinar.
        </p>
      </div>
      <div className="grid grid-cols-2">
        {adventure?.map((trip) => (
          <div className="m-auto p-6 my-6 border text-center w-[600px] h-[500px]" key={trip.id}>
            <img className="m-auto my-6 border shadow-xl" src={trip.image} alt="" />
            <div>
              <h3 className="">{trip.type} </h3>
              <p>{trip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adventures;
