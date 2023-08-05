import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


const Camping = () => {
    return (
        <div className="">
      <div className="container mx-auto text-center md:text-start">
        <div className="flex flex-col md:flex-row items-center gap-5 mt-10 mb-16 ">
          <h5 className="text-xl font-bold">Forest Tours</h5>
          <p className="bg-rose-600 w-20 h-1">&nbsp;</p>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-sans">Camping</h2>
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
              spaceBetween: 40,
            },
          
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper mt-20 mb-32"
        >
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/camping1.jpg"
              alt="Water Adventure"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/camping2.jpg"
              alt="Water Adventure"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/camping3.jpg"
              alt="Water Adventure"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/camping4.jpg"
              alt="Water Adventure"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/camping5.jpg"
              alt="Water Adventure"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/camping6.jpg"
              alt="Water Adventure"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/camping7.jpg"
              alt="Water Adventure"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/camping8.jpg"
              alt="Water Adventure"
            />
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
    );
};

export default Camping;