import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const WaterSports = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-5 mt-10 mb-16">
        <h5 className="text-xl font-bold">Adventure</h5>
        <p className="bg-rose-600 w-20 h-1">&nbsp;</p>
      </div>
      <h2 className="text-5xl font-bold font-sans">Water Sports</h2>
      <p className="text-xl text-gray-500 my-3">
        Interdum exercitation penatibus, praesentium facilisi accusamus
        fermentum, sagittis.
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper mt-20 mb-32"
      >
        <SwiperSlide><img className='rounded-lg' src="/water1.jpg" alt="Water Adventure" /></SwiperSlide>
        <SwiperSlide><img className='rounded-lg' src="/water2.jpg" alt="Water Adventure" /></SwiperSlide>
        <SwiperSlide><img className='rounded-lg' src="/water3.jpg" alt="Water Adventure" /></SwiperSlide>
        <SwiperSlide><img className='rounded-lg' src="/water4.jpg" alt="Water Adventure" /></SwiperSlide>
        <SwiperSlide><img className='rounded-lg' src="/water5.jpg" alt="Water Adventure" /></SwiperSlide>
        <SwiperSlide><img className='rounded-lg' src="/water6.jpg" alt="Water Adventure" /></SwiperSlide>
        <SwiperSlide><img className='rounded-lg' src="/water7.jpg" alt="Water Adventure" /></SwiperSlide>
        <SwiperSlide><img className='rounded-lg' src="/water8.jpg" alt="Water Adventure" /></SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default WaterSports;
