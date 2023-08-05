import React from "react";
import Container from "../../../Components/Shared/Container/Container";

const ReviewSection = () => {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <Container>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <img
            className="w-20 my-4 md:my-0"
            src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/quote-1.png"
            alt="Quote Image"
          />
          <div>
            <h4 className="text-lg md:text-2xl font-NotoSans text-neutral-600 mb-3">
              "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
              liberioris."
            </h4>
            <p>- Adam Sendler</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReviewSection;
