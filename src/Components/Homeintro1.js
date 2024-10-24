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


                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {ProductData.map((i,index) => (
            index < 4 && (
            <div
              key={i.id}
              onClick={() => {
                localStorage.setItem('Product', JSON.stringify(i));
                navigate('/ProductDetails');
              }}
              className='w-full h-auto rounded-xl bg-[#FAFAFA] cursor-pointer'>

              {/* Image Section */}
              <div className='h-[220px] sm:h-[280px] md:h-[320px] lg:h-[350px] w-full relative'>
                <img
                  className='h-full w-full object-cover rounded-t-xl'
                  src={i.image}
                  alt={i.title}
                />
                <div className='bg-black absolute top-2 sm:top-3 left-0 h-[2.5vh] sm:h-[3vh] rounded-r-md text-white text-[10px] sm:text-[12px] font-semibold flex items-center justify-center px-2'>
                  {i.nameonimagesmall}
                </div>
                <div className='bg-yellow-400 absolute -bottom-2 sm:-bottom-3 left-[15%] sm:left-[20%] h-[3vh] sm:h-[4vh] rounded-md text-black text-[12px] sm:text-[14px] font-bold flex items-center justify-center px-2'>
                  {i.nameonimage}
                </div>
              </div>

              {/* Product Info */}
              <div className='py-4 px-3'>
                <div className='flex justify-between items-center'>
                  <h1 className='font-semibold text-sm sm:text-base'>{i.title}</h1>
                  <div className='flex gap-1'>
                    <div className='w-4 h-4 rounded-full bg-gray-300'></div>
                    <div className='w-4 h-4 rounded-full bg-black'></div>
                  </div>
                </div>

                {/* Price Section */}
                <div className='flex items-center gap-2 my-2'>
                  <h1 className='font-bold text-sm sm:text-lg'>
                    <i className='fa fa-inr' aria-hidden='true'></i>
                    {Math.floor(i.price * (100 - i.discount) / 100)}
                  </h1>
                  <h3 className='text-gray-500 line-through text-[10px] sm:text-sm'>
                    <i className='fa fa-inr' aria-hidden='true'></i>
                    {i.price}
                  </h3>
                  <h2 className='text-green-500 font-semibold text-xs sm:text-sm'>
                    {i.discount}% off
                  </h2>
                </div>

                {/* Rating Section */}
                <div className='flex items-center gap-1 text-xs sm:text-sm text-gray-500'>
                  <i className='fa fa-star text-yellow-500'></i>
                  <span>{i.rating}</span>
                  <span>|</span>
                  <span>{i.review} reviews</span>
                  <i className='fa fa-check-circle text-green-500'></i>
                </div>

                {/* Add to Cart Button */}
                <div className='flex justify-center mt-4'>
                  <button className='h-[35px] sm:h-[40px] w-[90%] bg-black text-white rounded-xl'>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            )
          ))}
        </div>



            </div>

        </div>
    )
}

export default Homeintro1