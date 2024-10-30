import React from 'react';
import productData from '../api/productData.json';
import { useNavigate } from 'react-router-dom';

function Searchitnow() {
    const navigate = useNavigate();
    let search = localStorage.getItem("search");

    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-[95%]'>

                <div className='w-full mt-16 flex flex-wrap gap-5 justify-center'>
                    {productData.filter((i) => 
                        i.title.toLowerCase().includes(search.toLowerCase()) || 
                        i.category.toLowerCase().includes(search.toLowerCase())
                    ).map((i) => (
                        <div 
                            key={i.id} 
                            onClick={() => {
                                localStorage.setItem("Product", JSON.stringify(i));
                                navigate("/ProductDetails");
                            }} 
                            className='h-[40vh] sm:h-[33vh] md:h-[28vh] lg:h-[25vh] w-full sm:w-[45%] md:w-[30%] lg:w-[32%] rounded-lg bg-[#FAFAFA] cursor-pointer flex items-center justify-between'
                        >
                            <div className='h-full w-[45%] relative rounded-lg overflow-hidden'>
                                <img className='h-full w-full object-cover' src={i.image} alt={i.title} />
                                <div className='absolute bottom-0 w-full py-1 text-center bg-[#FCC50B] text-[12px] font-[700]'>
                                    {i.nameonimage}
                                </div>
                            </div>
                            <div className='h-full w-[52%] flex flex-col items-center rounded-r-lg'>
                                <div className='w-full h-[19%] flex items-center gap-1 pl-3 pt-4'>
                                    <i className="fa fa-star text-yellow-500" aria-hidden="true"></i>
                                    <h1 className='text-[12px]'>{i.rating}</h1>
                                    <h1 className='text-gray-500'>|</h1>
                                    <h1 className='text-[12px]'>{i.review}</h1>
                                    <i className="fa fa-check-circle-o text-[#00C68C]" aria-hidden="true"></i>
                                </div>

                                <div className='w-full h-[22%] flex items-center justify-start font-[700] text-[16px]'>
                                    {i.title}
                                </div>
                                <div className='w-full h-[15%] items-center'>
                                    <div className='h-full w-full flex items-center gap-1'>
                                        <h1 className='font-[700] text-[16px]'>
                                            <i className="fa fa-inr" aria-hidden="true"></i>
                                            {Math.floor(i.price * (100 - i.discount) / 100)}
                                        </h1>
                                        <h3 className='text-gray-500 line-through text-[12px]'>
                                            <i className="fa fa-inr" aria-hidden="true"></i>
                                            {i.price}
                                        </h3>
                                        <h2 className='text-[#00C68C] font-[700] text-[12px]'>{i.discount}% off</h2>

                                        <div className='h-[50%] w-[28%] flex items-center justify-center ml-3'>
                                            <div className='h-full w-[55%] rounded-full bg-gray-300'></div>
                                            <div className='h-full w-[55%] rounded-full bg-black'></div>
                                            <h2 className='text-[12px]'>+2</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-[95%] bg-gray-300 h-[1px]'></div>
                                <div className='w-full h-[18%] flex gap-5 items-center justify-center'>
                                    <div className='h-[50%] bg-[#EFF4F7] text-[9px] flex items-center justify-center px-1 rounded-full'>
                                        {i.addition1}
                                    </div>
                                    <div className='h-[50%] bg-[#EFF4F7] text-[9px] flex items-center justify-center px-1 rounded-full'>
                                        {i.addition2}
                                    </div>
                                </div>

                                <div className='w-full flex items-center justify-center h-[21%]'>
                                    <button className='bg-[#1A2024] rounded-lg text-white h-full w-[93%]'>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Searchitnow;
