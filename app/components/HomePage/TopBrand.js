"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const TopBrand = () => {
  const BrandNames=['/huawei.png',"/intel.png","/oneplus.png","/hp.png","/realme.png"]
  return (
    <div className='flex flex-col justify-center text-black'>
      <h3 className='mx-auto text-4xl font-semibold text-black mb-4'>Top Brand</h3>
      <div className='bg-white pt-10 pb-20  px-20'>
        <Swiper
         autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
          spaceBetween={30}
          loop={true}
          speed={2500} // Adjust this value for smoother transitions

          slidesPerView={4}
          navigation={true} modules={[Autoplay,Navigation]} className="mySwiper px-20 ">
        {
          BrandNames?.map((e,i)=>(
            <SwiperSlide key={i} className=''>
             {/* <div className='grid items-center'> */}
             <img className='mx-auto my-auto' src={e}/>
             {/* </div> */}
            </SwiperSlide>

          ))
        }
        </Swiper>
      </div>
    </div>
  )
}

export default TopBrand
