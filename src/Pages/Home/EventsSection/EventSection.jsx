import React from "react";
import Container from "../../../Components/Shared/Container/Container";

const EventSection = () => {
  return (
    <section className="text-center py-16">
      <Container>
        {/* Section Header */}
        <div>
          <h2 className="text-4xl uppercase font-Montserrat font-semibold">
            upcoming events
          </h2>
          <div className="h-1 mx-auto w-24 bg-primary my-3"></div>
        </div>
        {/* Event Items */}
        <div className="md:flex justify-center gap-4 items-center">
          <div className="max-w-[560px] p-5 md:p-10 mx-auto">
            <img
              className="rounded custom-shadow my-8"
              src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/hiking-v1.jpg"
              alt="Event 1"
            />
            <div className="my-10">
              <h6 className="text-lg font-semibold font-Montserrat">
                Everest Camp Trek
              </h6>
              <p className="font-NotoSans my-4">
                Fuerat aestu carentem habentia spectent tonitrua mutastis
                locavit liberioris inistra possedit.
              </p>
              <button className="bg-primary px-10 py-3 font-semibold font-NotoSans text-white primary_button">
                Learn More
              </button>
            </div>
          </div>
          <div className="max-w-[560px] p-5 md:p-10 mx-auto">
            <img
              className="rounded custom-shadow my-8"
              src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/walking-v1.jpg"
              alt="Event 2"
            />
            <div className="my-10">
              <h6 className="text-lg font-semibold font-Montserrat">
                Everest Camp Trek
              </h6>
              <p className="font-NotoSans my-4">
                Fuerat aestu carentem habentia spectent tonitrua mutastis
                locavit liberioris inistra possedit.
              </p>
              <button className="bg-primary px-10 py-3 font-semibold font-NotoSans text-white primary_button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventSection;
