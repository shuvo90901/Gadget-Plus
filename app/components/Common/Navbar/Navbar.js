import React from 'react'
import { GoGift } from "react-icons/go";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { HiOutlineChevronDown } from 'react-icons/hi';
import NavMenu from './NavMenu';

const Navbar = () => {
    const inputStyle = {
        border: 'none',
        outline: 'none',
        backgroundColor: 'white',
        height: '100%',
        paddingLeft: '0.5rem' // This assumes you want the same padding as 'ps-2' in Tailwind CSS

    };
    return (
        <div>
            <div className='bg-[#0438A1] py-[22px] w-full flex justify-between px-20 items-center'>
                <div className='flex'>
                    <div className='flex items-center'>
                        <img src='/logo.png' />
                    </div>
                    <div className='bg-white h-[47px] w-[400px] rounded-lg ms-12 grid grid-cols-12 text-zinc-700'><div className="dropdown  col-span-2 gap-1  border-r-[1px] border-r-gray-400 flex items-center">
                        <div tabIndex={0} role="button" className="flex justify-center items-center h-full w-full">All <HiOutlineChevronDown /></div>
                        <ul tabIndex={0} className="menu dropdown-content bg-gray-200 rounded-md mt-[120px] z-[1] shadow p-[1px] w-full">
                            <li><a>All</a></li>
                            <li><a>All</a></li>
                        </ul>
                    </div >

                        {/* <div className=' flex justify-center items-center col-span-2 gap-1  border-r-[1px] border-r-gray-400'>All <HiOutlineChevronDown /></div> */}
                        <input
                            style={inputStyle}
                            className='h-full col-span-8 border-none ps-2  ' type='text' placeholder={`Search your ${"gadget's"}`} />
                        <div className='flex items-center col-span-2 justify-center text-2xl'><LuSearch />
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 text-[20px]'>
                    <span><GoGift /></span>
                    <span><MdOutlineShoppingCartCheckout /></span>
                    <span className='flex items-center gap-2 text-[16px] ms-3'><img src='/user.png' /> Login /Register</span>
                </div>
            </div>
           <NavMenu/> 
        </div>
    )
}

export default Navbar
