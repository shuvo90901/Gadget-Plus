import React from 'react'

const WhyChoose = () => {
    const whyChoose=[
        {
            img:"/time.png",
            title:"Fasted Delivery",
            subTitle:"in 24/h"
        },
        {
            img:"/money.png",
            title:"Secure Payment",
            subTitle:"safe your money"
        },
        {
            img:"/call.png",
            title:"Purchase Support",
            subTitle:"in 24/h"
        },
        {
            img:"/car.png",
            title:"Free Shipping",
            subTitle:"easy return"
        },
    ]
  return (
    <div className='grid justify-center mb-28'>
      <p className='mx-auto text-3xl font-semibold text-black'>Why choose our shop</p>
      <div className='grid grid-cols-4 gap-12 mt-9'>
        {
            whyChoose?.map((e,i)=>(
                <div key={i} className='h-[165px] w-[165px] bg-[#FBFBFB] shadow-gray-500 shadow-lg rounded-md flex flex-col justify-between'>
                    <img className='mx-auto mt-6' src={e?.img}/>
                    <div className='text-black grid justify-center mb-5'>
                        <p className='text-sm font-semibold'>{e?.title}</p>
                        <span className='text-[11px] mx-auto'>{e?.subTitle}</span>
                    </div>
                </div>
            ))
        }
     
      
      </div>
    </div>
  )
}

export default WhyChoose
