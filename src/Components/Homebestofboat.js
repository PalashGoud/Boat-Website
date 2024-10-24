import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductData from '../api/productData.json';

function Homebestofboat() {
  const navigate = useNavigate();

  return (
    <div className='w-full flex flex-col items-center pt-12 justify-center'>
      <div className='w-[95%] flex flex-col gap-8'>
        {/* Header */}
        <div className='flex justify-between items-center text-[22px]'>
          <div className='flex gap-2'>
            <h1>Best Of</h1>
            <h1 className='font-bold underline'>boAt</h1>
          </div>
          <div
            onClick={() => navigate("/Manyproduct")}
            className='text-[14px] font-bold flex items-center gap-1 text-[#5694BC] cursor-pointer'>
            View All
            <i className='fa fa-arrow-circle-o-right' aria-hidden='true'></i>
          </div>
        </div>

        {/* Product Cards */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {ProductData.slice(8, 12).map((i) => (
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
          ))}
        </div>

      </div>
    </div>
  );
}

export default Homebestofboat;
