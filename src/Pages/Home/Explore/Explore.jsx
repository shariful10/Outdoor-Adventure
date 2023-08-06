import React from "react";
import Container from "../../../Components/Shared/Container/Container";

const Explore = () => {
  return (
    <section
      className="relative h-[65vh] bg-cover bg-center text-white bg-fixed scroll-smooth"
      style={{
        backgroundImage:
          "url('https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/section-bg-img.jpg')",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <Container>
          <h1 className="font-bold mb-4 font-Montserrat text-4xl my-5">
            EXPLORE THE WORLD
          </h1>
          <div className="h-1 w-24 bg-primary my-3"></div>
          <p className="font-NotoSans">
            Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda
            concordi. Fert his. Recessit mentes praecipites locum caligine sui
            egens erat. Silvas caeli regna.
          </p>
          <button className="bg-primary px-10 py-3 font-semibold font-NotoSans text-white primary_button my-10">
            Learn More
          </button>
        </Container>
      </div>
      <div className="absolute inset-0 bg-neutral-800 opacity-60"></div>
    </section>
  );
};

export default Explore;
