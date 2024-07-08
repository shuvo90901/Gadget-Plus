import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa6";

const DealOfDay = () => {
    const deals = [
        {
            title: "Headphone",
            img: "/headphonedeal.png",
            model: "Logitech H110 Black Headphone",
            price: "$ 850",
            rated: "738",
            rating: 5
        },
        {
            title: "Game Pad",
            img: "/gamepaddeal.png",
            model: "Dareu H105 Black Three Mode Wireless Game Pad",
            price: "$ 850",
            rated: "738",
            rating: 3
        },
        {
            title: "Realme",
            img: "/realmedeal.png",
            model: "Realme c67",
            price: "$ 850",
            rated: "738",
            rating: 5
        },
        {
            title: "1+",
            img: "/oneplusdeal.png",
            model: "OnePlus Nord CE 3 Lite 5G",
            price: "$ 850",
            rated: "738",
            rating: 4
        },
    ]

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />);
        }
        return stars;
    };
    return (
        <div className='flex flex-col justify-center pb-20 px-20 text-black'>
            <h3 className='mx-auto text-4xl font-semibold pb-16 text-[#363636]'>Deal of Day</h3>
            <div className='grid grid-cols-4 gap-5'>
                {
                    deals?.map((e, i) => (
                        <div key={i} className='bg-white shadow-sm rounded-lg shadow-gray-500  w-full flex flex-col  justify-between  px-5 pb-4'>
                            <div className='grid justify-center my-4'>
                                <span className='mx-auto text-md font-semibold mb-3'>{e?.title}</span>
                                <img className='mx-auto' src={e?.img} />
                            </div>
                            <div>
                                <p className='text-sm font-semibold min-h-[40px] mb-2'>{e?.model}</p>
                                <div className='text-sm flex justify-between'>
                                    <span className='font-bold text-[15px]'>{e?.price}</span>
                                    <div>
                                        <div className='flex text-sm text-orange-500 items-center'>
                                            {renderStars(e?.rating)}<span className='text-[11px]'>({e?.rated})</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-sm text-white flex justify-between mt-2'>
                                    <button className='bg-[#0644C3] px-6 py-[6px] rounded-lg'>Buy Now</button>
                                    <button className='border border-[#0644C3] text-[#0644C3] px-5 py-[6px] rounded-lg'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DealOfDay
