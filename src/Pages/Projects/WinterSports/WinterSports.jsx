import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const WinterSports = () => {
  return (
    <div className=" bg-gray-200 pt-16 pb-10">
      <div className="container mx-auto text-center md:text-start p-5 md:p-0 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-5 mt-10 mb-16 ">
          <h5 className="text-xl font-bold">Snow Adventure</h5>
          <p className="bg-rose-600 w-20 h-1">&nbsp;</p>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-sans">
          Winter Sports
        </h2>
        <p className="text-xl text-gray-500 my-3">
          Interdum exercitation penatibus, praesentium facilisi accusamus
          fermentum, sagittis.
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper my-10"
        >
          <SwiperSlide className="py-10">
            <img
              className="rounded-lg"
              src="/winter1.jpg"
              alt="Water Adventure"
            />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <img
              className="rounded-lg"
              src="/winter2.jpg"
              alt="Water Adventure"
            />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <img
              className="rounded-lg"
              src="/winter3.jpg"
              alt="Water Adventure"
            />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <img
              className="rounded-lg"
              src="/winter4.jpg"
              alt="Water Adventure"
            />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <img
              className="rounded-lg"
              src="/winter5.jpg"
              alt="Water Adventure"
            />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <img
              className="rounded-lg"
              src="/winter6.jpg"
              alt="Water Adventure"
            />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <img
              className="rounded-lg"
              src="/winter7.jpg"
              alt="Water Adventure"
            />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <img
              className="rounded-lg"
              src="/winter8.jpg"
              alt="Water Adventure"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default WinterSports;
