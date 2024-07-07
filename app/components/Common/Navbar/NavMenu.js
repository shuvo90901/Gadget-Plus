"use client"
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";

const NavMenu = () => {
    const [clickedMenu,setClickedMenu]=useState('')
    const Menu=["Browse Categories","Mobile & Laptops","Phone & Tablate","Power Accessories","New Arrivals","Best Sellers","Used Device"]
    console.log(clickedMenu)
  return (
    <div className='bg-white text-black grid grid-cols-7 px-20 text-[14px] font-semibold py-[18px]'>
                {Menu?.map((e)=>(
                    <div className={`cursor-pointer flex items-center px-2 py-2 rounded-lg ${clickedMenu===e?"border-[1px]  border-gray-600":"ps-[30px]"}`} onClick={()=>setClickedMenu(e)}>{clickedMenu===e?<span className='text-[21px] my-auto '>
                    <IoMdMenu /></span>:<></>} {e}</div>
                ))}
            </div>
  )
}

export default NavMenu
 