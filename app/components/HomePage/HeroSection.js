import React from 'react'
import { MdChevronRight } from "react-icons/md";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const HeroSection = () => {
    return (
        <div className="bg-[url('/hero.png')]  bg-cover bg-no-repeat mx-20 rounded-xl my-12 px-16 pb-10">
            <div className=" grid grid-cols-2  py-10">
                <div className='mt-8'>
                    <p className='text-6xl font-bold text-black  leading-tight'>Best Headphone <br />in your{" "}
                        <span className='text-[#0438A1]'>choice.</span>
                    </p>
                    <p className='text-sm w-3/4 text-gray-400  pt-1'>Lorem ipsum dolor sit amet consectetur. Accumsan interdum feugiat neque tempor. Consectetur diam a velit et tellus augue massa fringilla.<span className='text-black text-[10px]'>Read More</span></p>
                    <button className='bg-[#0644C3] flex justify-center items-center text-white gap-2 px-7 py-3 rounded-lg mt-8'>Explore Now <MdChevronRight /></button>
                </div>
                <div>
                    <img className='mt-[-30px] ms-2' src='/headphone.png' />
                </div>
            </div>
            <div className='grid grid-cols-12 text-black px-8 text-xl justify-center'>
                <div className='col-span-2 w-10 grid items-center justify-center rounded-full h-10 bg-[#FBFCFD] shadow-lg my-auto mx-auto'><BsArrowLeft />
                </div>
                <div className='col-span-8 grid grid-cols-2 gap-20'>
                    <div className=' w-full h-[180px] bg-[rgba(36,36,36,0.7)] rounded-2xl shadow-2xl grid grid-cols-3'>
                        <img className='relative scale-[1.7] right-[40%] top-[20%]' src='/headphone1.png' />
                        <div className='col-span-2 py-5 grid justify-center font-semibold text-3xl'>
                            <span className='text-black text-2xl font-bold mx-auto'>soundcore</span> <span className=' mx-auto pb-6'>Q20i</span><div className='flex items-center justify-center '>$850<span className='text-[12px] line-through text-[#9f9faa]'>$1150</span></div>
                        </div>
                    </div>
                    <div className=' w-full h-[180px] bg-[#F9FDFE] rounded-2xl shadow-2xl grid grid-cols-3'>
                        <img className='relative scale-[1.7] right-[40%] top-[20%]' src='/headphone2.png' />
                        <div className='col-span-2 py-5 grid justify-center font-semibold text-3xl'>
                            <span className='text-black text-2xl font-bold mx-auto'>soundcore</span> <span className=' mx-auto pb-6'>Q20i</span><div className='flex items-center justify-center '>$850<span className='text-[12px] line-through text-[#9f9faa]'>$1150</span></div>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 w-10 grid items-center justify-center rounded-full h-10 bg-[#FBFCFD] shadow-lg my-auto mx-auto'><BsArrowRight />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
