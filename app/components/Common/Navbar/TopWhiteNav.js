import React from 'react'
import { HiOutlineChevronDown } from "react-icons/hi";

const TopWhiteNav = () => {
    return (
        <div className='bg-white h-[35px] w-full flex justify-between px-20 text-black items-center'>
            <div className='text-[12px]'><span>Help Center</span><span className='text-zinc-700 ms-4'>Sales : <span className='text-blue-500'>09934443466</span></span></div>
            <div className='flex items-center gap-2 text-[15px]'>
                <img src='/usaflag.png'/>
                <span className='flex items-center'>Eng<HiOutlineChevronDown /></span><span className='flex items-center ms-2'>USD<HiOutlineChevronDown /></span></div>
        </div>
    )
}

export default TopWhiteNav
