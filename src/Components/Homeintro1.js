import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductData from '../api/productData.json'
function Homeintro1() {
    const navigate= useNavigate()

    return (
        <div className='flex  flex-col items-center gap-6 justify-center '>
            <div className='h-[30vh] w-[100%] bg-white flex items-center justify-center'>
                <div className='h-[30vh] w-[70%]  flex'>
                    <div className='h-[100%] w-[25%] b flex flex-col text-[20px] font-[500]  items-center justify-center'>
                        <img className='h-[60%]' src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123'></img>
                        1 year warrenty
                    </div>

                    <div className='h-[100%] w-[25%]  flex flex-col text-[20px] font-[500]  items-center justify-center'>
                        <img className='h-[60%]' src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123'></img>
                        7-day Replacement
                    </div>

                    <div className='h-[100%] w-[25%]  flex flex-col text-[20px] font-[500]  items-center justify-center'>
                        <img className='h-[60%]' src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123'></img>
                        Free Express Delivery
                    </div>

                    <div className='h-[100%] w-[25%] flex flex-col text-[20px] font-[500]  items-center justify-center'>
                        <img className='h-[60%]' src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123'></img>
                        GST Billing
                    </div>

                </div>
            </div>


            <div className='w-[95%] flex flex-col gap-8  '>
                <div className='flex items-center justify-between'>
                <div className='flex gap-[10px] text-[22px]'>
                    <h1>Monsoon</h1>
                    <h1 className='font-[700] underline'>Fest</h1>
                </div>
                 <div onClick={()=>navigate("/Manyproduct")} className='text-[14px] font-[700] flex items-center gap-1 text-[#5694BC]'>View All
                 <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                 </div>
                </div>


                <div className='w-[100%] h-[65vh] flex gap-[2%]'>

                    {ProductData.map((i, index)=> index<4 &&
                    <div onClick={()=>{localStorage.setItem("Product",JSON.stringify(i)); navigate("/ProductDetails")}} className='w-[23%] h-[100%] rounded-xl  bg-[#FAFAFA]'>
                        <div className='h-[75%] w-[100%] relative cursor-pointer'>
                            <img className='h-[100%] w-[100%] rounded-t-xl' src={i.image} ></img>
                            <div className='bg-black absolute top-3 h-[3vh] rounded-r-md text-[white] text-[10px] font-[600] flex items-center justify-center  w-[17vh]'>{i.nameonimagesmall}</div>
                            <div className='bg-yellow-400 absolute -bottom-3 left-12 h-[4vh] rounded-md text-[black] text-[14px] font-[700] flex items-center justify-center w-[30vh]'> {i.nameonimage}</div>
                        </div>
                        <div className='h-[25%] w-[100%]  rounded-b-xl flex gap-3 pt-4 flex-col items-center justify-center'>
                            <div className='h-[20%] w-[100%] flex justify-between '> 
                                <b1 className='font-[600] ml-3'>{i.title}</b1>
                                <div className='h-[100%] w-[20%] flex '>
                                    <div className='h-[100%] w-[45%] rounded-full  bg-gray-300'></div>
                                    <div className='h-[100%] w-[45%] rounded-full mr-3 bg-black'></div>
                                </div>
                            </div>
                            <div className='h-[50%] w-[100%] flex'>
                                <div className='h-[100%] w-[60%] '>
                                    <div className='h-[50%] w-[100%] flex items-center gap-1'>
                                        <h1 className='font-[700] text-[17px] pl-4'><i class="fa fa-inr" aria-hidden="true"></i>{Math.floor(i.price * (100 - i.discount) / 100)}</h1>
                                        <h3 className='text-[gray] line-through text-[12px]'><i class="fa fa-inr" aria-hidden="true"></i>{i.price}</h3>     
                                        <h2 className='text-[#00C68C] font-[700] text-[14px]'>{i.discount}% off</h2>
                                    </div>
                                    <div className='h-[50%] w-[100%]  flex items-center justify-start pl-4'>
                                        <div className='h-[100%] w-[50%] flex items-center gap-1 bg-white'>
                                            <i class="fa fa-star text-[yellow]" aria-hidden="true"></i>
                                            <h1 className='text-[12px]'>{i.rating}</h1>
                                            <h1 className='text-[gray]'>|</h1>
                                            <h1 className='text-[12px]'>{i.review}</h1>
                                            <i class="fa fa-check-circle-o text-[#00C68C]" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className='h-[100%] w-[40%]   flex items-center justify-center'>
                                    <button className='h-[90%] w-[90%] bg-[#1A2024] text-[white] rounded-xl'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                    )}




                </div>


            </div>

        </div>
    )
}

export default Homeintro1