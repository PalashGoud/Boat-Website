import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductData from '../api/productData.json';

function Hometoppicks() {
    const navigate = useNavigate();

    return (
        <div className='w-full flex flex-col items-center pt-12 justify-center'>
            <div className='w-[95%] flex flex-col gap-8'>
                <div className='flex gap-2 justify-between text-xl md:text-2xl text-gray-800'>
                    <div className='flex gap-1'>
                        <h1>Top Picks For</h1>
                        <h1 className='font-bold underline'>You</h1>
                    </div>
                    <div 
                        onClick={() => navigate("/Manyproduct")} 
                        className='text-sm md:text-lg font-bold flex items-center gap-1 text-[#5694BC] cursor-pointer'
                    >
                        View All
                        <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    </div>
                </div>
                
                <div className='w-full h-auto flex flex-wrap gap-5'>
                    {ProductData.map((i, index) => 
                        index > 3 && index < 8 ? (
                            <div 
                                key={index} 
                                onClick={() => {
                                    localStorage.setItem("Product", JSON.stringify(i));
                                    navigate("/ProductDetails");
                                }} 
                                className='w-full sm:w-[48%] md:w-[30%] lg:w-[23%] h-auto rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col'
                            >
                                <div className='h-[75%] w-full cursor-pointer relative'>
                                    <img className='h-full w-full rounded-t-xl object-cover' src={i.image} alt={i.nameonimage} />
                                    <div className='bg-black absolute top-3 h-[3vh] rounded-r-md text-white text-xs font-semibold flex items-center justify-center px-2'> 
                                        {i.nameonimagesmall}
                                    </div>
                                    <div className='bg-yellow-400 absolute -bottom-3 left-12 h-[4vh] rounded-md text-black text-sm font-bold flex items-center justify-center w-[30vh]'> 
                                        {i.nameonimage}
                                    </div>
                                </div>
                                <div className='h-[25%] w-full rounded-b-xl flex gap-3 pt-4 flex-col items-center justify-center'>
                                    <div className='h-[20%] w-full flex justify-between'> 
                                        <b className='font-semibold ml-3 text-sm md:text-base'>{i.title}</b>
                                        <div className='h-full w-[20%] flex'>
                                            <div className='h-full w-[45%] rounded-full bg-gray-300'></div>
                                            <div className='h-full w-[45%] rounded-full mr-3 bg-black'></div>
                                        </div>
                                    </div>
                                    <div className='h-[50%] w-full flex'>
                                        <div className='h-full w-[60%]'>
                                            <div className='h-[50%] w-full flex items-center gap-1'>
                                                <h1 className='font-bold text-lg pl-4'>
                                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                                    {Math.floor(i.price * (100 - i.discount) / 100)}
                                                </h1>
                                                <h3 className='text-gray-500 line-through text-sm'>
                                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                                    {i.price}
                                                </h3>     
                                                <h2 className='text-[#00C68C] font-bold text-sm'>{i.discount}% off</h2>
                                            </div>
                                            <div className='h-[50%] w-full flex items-center justify-start pl-4'>
                                                <div className='h-full w-[50%] flex items-center gap-1 bg-white'>
                                                    <i className="fa fa-star text-yellow-500" aria-hidden="true"></i>
                                                    <h1 className='text-xs'>{i.rating}</h1>
                                                    <h1 className='text-gray-500'>|</h1>
                                                    <h1 className='text-xs'>{i.review}</h1>
                                                    <i className="fa fa-check-circle-o text-[#00C68C]" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-full w-[40%] flex items-center justify-center'>
                                            <button className='h-[90%] w-[90%] bg-black text-white rounded-xl transition-colors duration-300 hover:bg-gray-800'>
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        ) : null
                    )}
                </div>
            </div>
        </div>
    );
}

export default Hometoppicks;
