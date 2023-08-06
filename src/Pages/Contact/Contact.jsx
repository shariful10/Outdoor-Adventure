import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import SectionHeader from "../../Components/Shared/SectionHeader/SectionHeader";
import Container from "../../Components/Shared/Container/Container";

const Contact = () => {
  const [user, setUser] = useState([]);
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => setUser(data);

  useEffect(() => {
    fetch("http://localhost:5000/messageUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          alert("co");
        }
      });
  }, [user]);

  return (
    <div className="">
      <SectionHeader
        title={"Contact Us"}
        bgImage={
          "https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/about-bg-2.jpg"
        }
      ></SectionHeader>
      <Container>
        <div className="lg:flex lg:justify-between gap-10 my-[50px] p-3 space-y-10 md:space-y-0">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-Montserrat font-bold mb-12">
              WE'RE READY, LET'S TALK.
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  className="px-4 py-3 bg-[#FAFAFA] border w-full border-gray-200 "
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600 mt-3">
                    Name field is required
                  </span>
                )}
              </div>

              <input
                className="px-4 py-3 bg-[#FAFAFA] my-4 border w-full border-gray-200 "
                placeholder="Email Address"
                {...register("email", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.email && <span>Email is required</span>}
              <input
                className="px-4 py-10 bg-[#FAFAFA] border w-full border-gray-200 "
                placeholder="Message"
                {...register("message", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.message && <span>Message is required</span>}
              <br />

              <input
                className="bg-primary px-10 py-3 font-semibold font-NotoSans text-white primary_button my-8"
                type="submit"
              />
            </form>
          </div>
          <div className="lg:w-1/2 ">
            <h1 className="text-4xl font-Montserrat font-bold mb-12">
              CONTACT INFO
            </h1>
            <div className="mb-5">
              <h3 className="text-lg font-bold font-Montserrat">Address</h3>
              <p className="text-base text-gray-500 font-NotoSans">
                123 Fifth Avenue, NY 10160, New York, USA
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg font-bold font-Montserrat">Email Us</h3>
              <p className="text-base text-gray-500 font-NotoSans">
                contact@example.com
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg font-bold font-Montserrat">Call Us</h3>
              <p className="text-base text-gray-500 font-NotoSans">
                800-123-456
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold font-Montserrat">Follow Us</h3>
              <div className="flex gap-3 text-white text-xl my-4">
                <button className="py-2 px-2 bg-primary hover:bg-transparent hover:outline-2 outline-primary outline hover:text-primary duration-300 rounded-full">
                  <FaFacebookF className=""></FaFacebookF>
                </button>
                <button className="py-2 px-2 bg-primary hover:bg-transparent hover:outline-2 outline-primary outline hover:text-primary duration-300 rounded-full">
                  <FaTwitter></FaTwitter>
                </button>
                <button className="py-2 px-2 bg-primary hover:bg-transparent hover:outline-2 outline-primary outline hover:text-primary duration-300 rounded-full">
                  <FaYoutube></FaYoutube>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
