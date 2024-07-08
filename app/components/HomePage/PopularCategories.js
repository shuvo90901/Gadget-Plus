import React from 'react'

const PopularCategories = () => {
    const categories=[
        {
            title:"Speaker",
            img:"/speaker.png"
        },
        {
            title:"Phone",
            img:"/phone.png"
        },
        {
            title:"Laptop",
            img:"/laptop.png"
        },
        {
            title:"VR",
            img:"/vr.png"
        },
        {
            title:"Earpads",
            img:"/earpads.png"
        },
        {
            title:"Smart Watch",
            img:"/smartwatch.png"
        },
        {
            title:"PC",
            img:"/pc.png"
        },
        {
            title:"Printer",
            img:"/printer.png"
        },
        {
            title:"Camera",
            img:"/camera.png"
        },
        {
            title:"Headphone",
            img:"/headphones.png"
        },
        {
            title:"Tab",
            img:"/tab.png"
        },
        {
            title:"Power Bank",
            img:"/powerbank.png"
        },
    ]
  return (
    <div className='flex flex-col justify-center text-black pt-12 pb-28 px-20'>
      <h3 className='mx-auto text-4xl font-semibold mb-16 text-[#363636]'>Popular Categories</h3>
      <div className='grid grid-cols-6 gap-5'>
        {
            categories?.map((e,i)=>(
                <div key={i} className='h-[165px] w-[165px] bg-[#FBFBFB] shadow-gray-500 shadow-lg rounded-md flex flex-col justify-between'>
                    <img className='h-[100px] w-[100px] mt-3 mx-auto' src={e?.img}/>
                    <span className='mx-auto mb-5'>{e?.title}</span>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default PopularCategories
