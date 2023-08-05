import React from "react";
import Container from "../../../Components/Shared/Container/Container";

const Destination = () => {
  return (
    <section className="my-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 items-center gap-4">
          <div className="max-w-[450px] p-5">
            <h1 className="text-2xl lg:text-4xl font-Montserrat font-bold">
              UPCOMING TOURS & DESTINATION
            </h1>
            <div className="h-1 w-16 bg-primary my-4"></div>
            <p className="font-NotoSans text-neutral-500">
              Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
              liberioris. Sinistra possedit litora ut nabataeaque. Setucant
              coepyterunt perveniunt animal! Concordi aurea nabataeaque
              seductaque constaque cepit sublime flexi nullus.
            </p>
            <button className="bg-primary px-10 py-3 font-semibold font-NotoSans text-white primary_button my-10">
              Learn More
            </button>
          </div>
          <div className="max-w-[450px] space-y-4">
            <img
              className="rounded-md w-full"
              src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2021/02/outdoor-image-01.jpg"
              alt=""
            />
            <img
              className="rounded-md w-full"
              src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/image-1.jpg"
              alt=""
            />
          </div>
          <div className="max-w-[450px] space-y-4">
            <img
              className="rounded-md w-full"
              src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/snow-1.jpg"
              alt=""
            />
            <img
              className="rounded-md w-full"
              src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2021/02/outdoor-image-04.jpg"
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Destination;
