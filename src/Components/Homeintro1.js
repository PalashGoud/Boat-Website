import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductData from '../api/productData.json'
function Homeintro1() {
    const navigate = useNavigate()

    return (
        <div className='flex  flex-col items-center gap-6 justify-center '>
            <div className='w-full h-auto bg-white flex items-center justify-center py-6'>
                <div className='w-full sm:w-[90%] md:w-[80%] lg:w-[70%] flex flex-wrap justify-around gap-4'>
                    {/* 1 Year Warranty */}
                    <div className='w-[45%] sm:w-[22%] h-auto flex flex-col items-center justify-center text-center'>
                        <img className='h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px]' src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123' alt='1 year warranty' />
                        <p className='mt-2 text-sm sm:text-base md:text-lg font-medium'>1 year warranty</p>
                    </div>

                    {/* 7-day Replacement */}
                    <div className='w-[45%] sm:w-[22%] h-auto flex flex-col items-center justify-center text-center'>
                        <img className='h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px]' src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123' alt='7-day Replacement' />
                        <p className='mt-2 text-sm sm:text-base md:text-lg font-medium'>7-day Replacement</p>
                    </div>

                    {/* Free Express Delivery */}
                    <div className='w-[45%] sm:w-[22%] h-auto flex flex-col items-center justify-center text-center'>
                        <img className='h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px]' src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123' alt='Free Express Delivery' />
                        <p className='mt-2 text-sm sm:text-base md:text-lg font-medium'>Free Express Delivery</p>
                    </div>

                    {/* GST Billing */}
                    <div className='w-[45%] sm:w-[22%] h-auto flex flex-col items-center justify-center text-center'>
                        <img className='h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px]' src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123' alt='GST Billing' />
                        <p className='mt-2 text-sm sm:text-base md:text-lg font-medium'>GST Billing</p>
                    </div>
                </div>
            </div>



            <div className='w-[95%] flex flex-col gap-8  '>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-[10px] text-[22px]'>
                        <h1>Monsoon</h1>
                        <h1 className='font-[700] underline'>Fest</h1>
                    </div>
                    <div onClick={() => navigate("/Manyproduct")} className='text-[14px] font-[700] flex items-center gap-1 text-[#5694BC]'>View All
                        <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    </div>
                </div>


                <div className='w-full h-auto flex flex-wrap gap-4 md:gap-6 lg:gap-8'>
                    {ProductData.map((i, index) =>
                        index < 4 && (
                            <div
                                key={index}
                                onClick={() => {
                                    localStorage.setItem("Product", JSON.stringify(i));
                                    navigate("/ProductDetails");
                                }}
                                className='w-[100%] sm:w-[48%] md:w-[30%] lg:w-[23%] h-auto rounded-xl bg-[#FAFAFA]'>
                                <div className='h-[60vw] sm:h-[50vw] md:h-[40vw] lg:h-[30vw] relative cursor-pointer'>
                                    <img className='h-full w-full rounded-t-xl object-cover' src={i.image} alt="Product" />
                                    <div className='bg-black absolute top-2 sm:top-3 h-[3vh] rounded-r-md text-white text-[10px] sm:text-[12px] font-semibold flex items-center justify-center w-[15vh] sm:w-[17vh]'>{i.nameonimagesmall}</div>
                                    <div className='bg-yellow-400 absolute -bottom-2 left-8 sm:left-12 h-[4vh] rounded-md text-black text-[12px] sm:text-[14px] font-bold flex items-center justify-center w-[25vh] sm:w-[30vh]'>{i.nameonimage}</div>
                                </div>
                                <div className='h-auto w-full rounded-b-xl flex flex-col items-center justify-center gap-2 sm:gap-3 pt-2 sm:pt-4'>
                                    <div className='h-auto w-full flex justify-between px-3'>
                                        <span className='font-semibold text-sm sm:text-base'>{i.title}</span>
                                        <div className='h-full w-[20%] flex gap-1'>
                                            <div className='w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-300'></div>
                                            <div className='w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black'></div>
                                        </div>
                                    </div>
                                    <div className='w-full flex px-3'>
                                        <div className='w-[70%]'>
                                            <div className='flex items-center gap-2'>
                                                <h1 className='font-bold text-base sm:text-lg'><i className="fa fa-inr"></i>{Math.floor(i.price * (100 - i.discount) / 100)}</h1>
                                                <h3 className='text-gray-500 line-through text-sm'><i className="fa fa-inr"></i>{i.price}</h3>
                                                <h2 className='text-[#00C68C] font-bold text-sm sm:text-base'>{i.discount}% off</h2>
                                            </div>
                                            <div className='flex items-center gap-2 mt-1'>
                                                <i className="fa fa-star text-yellow-400"></i>
                                                <span className='text-sm'>{i.rating}</span>
                                                <span className='text-gray-500'>|</span>
                                                <span className='text-sm'>{i.review}</span>
                                                <i className="fa fa-check-circle text-[#00C68C]"></i>
                                            </div>
                                        </div>
                                        <div className='w-[30%] flex justify-center items-center'>
                                            <button className='w-full bg-[#1A2024] text-white rounded-xl text-sm sm:text-base py-1 sm:py-2'>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>



            </div>

        </div>
    )
}

export default Homeintro1