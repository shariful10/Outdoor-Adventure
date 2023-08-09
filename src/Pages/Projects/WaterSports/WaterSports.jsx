import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const WaterSports = () => {
  return (
    <div className="mx-auto my-20 p-5 md:p-0 max-w-7xl">
      <div className="flex flex-col md:flex-row items-center gap-5 mt-10 mb-16 ">
        <h5 className="text-xl font-bold font-Montserrat">Adventure</h5>
        <p className="bg-rose-600 w-20 h-1">&nbsp;</p>
      </div>
      <h2 className="text-2xl font-Montserrat md:text-4xl font-bold leading-snug uppercase">
        Water Sports
      </h2>
      <p className="text-gray-500 my-3 font-NotoSans">
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
          <img className="rounded-lg" src="/water1.jpg" alt="Water Adventure" />
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <img className="rounded-lg" src="/water2.jpg" alt="Water Adventure" />
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <img className="rounded-lg" src="/water3.jpg" alt="Water Adventure" />
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <img className="rounded-lg" src="/water4.jpg" alt="Water Adventure" />
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <img className="rounded-lg" src="/water5.jpg" alt="Water Adventure" />
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <img className="rounded-lg" src="/water6.jpg" alt="Water Adventure" />
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <img className="rounded-lg" src="/water7.jpg" alt="Water Adventure" />
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <img className="rounded-lg" src="/water8.jpg" alt="Water Adventure" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WaterSports;
