import React from 'react';
import productData from '../api/productData.json';
import { useNavigate } from 'react-router-dom';

function ManyBestSeller() {
  const navigate = useNavigate();

  return (
    <div className='w-full flex items-center justify-center bg-gray-50 py-8'>
      <div className='w-[95%]'>

        {/* Products Header */}
        <div className='h-[20vh] w-full flex flex-col justify-center'>
          <div className='h-[40%] text-2xl font-bold w-full flex items-center'>
            Best Selling Products
          </div>
        </div>

        {/* Products Grid */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {productData.filter(
            (i) =>
              i.category === localStorage.getItem("category") ||
              i.nameonimagesmall === localStorage.getItem("nameonimagesmall")
          ).map((i) => (
            <div
              key={i.id}
              onClick={() => {
                localStorage.setItem("Product", JSON.stringify(i));
                navigate("/ProductDetails");
              }}
              className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer'
            >
              {/* Product Image Section */}
              <div className='relative'>
                <img className='w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover' src={i.image} alt={i.title} />
                <div className='absolute bottom-0 w-full py-1 text-center bg-[#FCC50B] text-[16px] font-bold'>
                  {i.nameonimage}
                </div>
              </div>

              {/* Product Info Section */}
              <div className='p-4 flex flex-col space-y-2'>
                {/* Ratings */}
                <div className='flex items-center gap-1 text-yellow-500'>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <span className='text-[16px] font-semibold'>{i.rating}</span>
                  <span className='text-gray-500'>|</span>
                  <span className='text-[16px] font-medium'>{i.review} reviews</span>
                  <i className="fa fa-check-circle text-[#00C68C]" aria-hidden="true"></i>
                </div>

                {/* Title */}
                <h2 className='font-bold text-[22px]'>{i.title}</h2>

                {/* Pricing Info */}
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-2'>
                    <span className='text-xl font-bold'>
                      <i className="fa fa-inr" aria-hidden="true"></i>
                      {Math.floor(i.price * (100 - i.discount) / 100)}
                    </span>
                    <span className='line-through text-sm text-gray-500'>
                      <i className="fa fa-inr" aria-hidden="true"></i>
                      {i.price}
                    </span>
                    <span className='text-[#00C68C] text-sm font-bold'>{i.discount}% off</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <div className='h-4 w-4 rounded-full bg-gray-300'></div>
                    <div className='h-4 w-4 rounded-full bg-black'></div>
                    <span className='text-sm'>+2</span>
                  </div>
                </div>

                {/* Additional Features */}
                <div className='flex items-center  justify-center space-x-2'>
                  <span className='bg-[#EFF4F7] text-[14px] px-2 py-1 rounded-full'>{i.addition1}</span>
                  <span className='bg-[#EFF4F7] text-[14px] px-2 py-1 rounded-full'>{i.addition2}</span>
                </div>

                {/* Add To Cart Button */}
                <button className='mt-3 text-[20px] w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors'>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManyBestSeller;
