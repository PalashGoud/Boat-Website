import React from 'react';

function Homelast() {
  return (
    <div className='w-[100%] flex items-center justify-center pt-10'>
      <div className='w-[97%] bg-[#EFF4F7] flex flex-col items-center justify-center'>
        {/* First section */}
        <div className='w-[98%] h-auto bg-[#E7F0F5] flex flex-wrap items-center justify-between p-4 md:h-[60vh]'>
          <div className='w-full md:w-[35%] gap-3 flex flex-col items-start '>
            <img className='h-16 md:h-[32%] pl-12 pt-5' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo.svg'></img>
            <label className='text-[20px] md:text-[27px] font-[700] pl-12 pt-3'> Subscribe to our email alerts!</label>
            <input className='w-full md:w-[50vh] h-12 md:h-[7vh] ml-12 pl-4 rounded-xl border-gray-400' placeholder='Enter your email address'></input>
          </div>
          <div className='w-full md:w-[25%] flex flex-wrap mt-5 md:mt-0'>
            <div className='w-1/2 text-[13px] md:text-[14px] flex flex-col'>
              <div className='font-[600]'>Shop</div>
              <ul className='mt-3'>
                <li>True wireless earbuds</li>
                <li>Wireless Headphone</li>
                <li>Home audio</li>
                <li>Smart watch</li>
                <li>Trimmers</li>
              </ul>
            </div>
            <div className='w-1/2 text-[13px] mt-5 md:mt-0'>
              <ul>
                <li>Wireless speakers</li>
                <li>Wired Headphone</li>
                <li>Mobile Accessories</li>
                <li>TRebel</li>
                <li>Refer & Earn</li>
              </ul>
            </div>
          </div>
          {/* Help and Company sections */}
          <div className='w-full md:w-[35%] flex flex-wrap'>
            <div className='w-1/2 text-[13px] flex flex-col'>
              <div className='font-[600]'>Help</div>
              <ul className='mt-3'>
                <li>Track Your Order</li>
                <li>Warranty & Support</li>
                <li>Return Policy</li>
                <li>Service Centers</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className='w-1/2 text-[13px] flex flex-col'>
              <div className='font-[600]'>Company</div>
              <ul className='mt-3'>
                <li>About boAt</li>
                <li>Careers</li>
                <li>Investor Relations</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Responsive product list */}
        <div className='w-[90%] flex flex-wrap justify-between mt-10'>
          <div className='w-full md:w-[25%] flex flex-col gap-6'>
            <label className='text-[18px] font-[600]'>True Wireless Earbuds</label>
            <div>
              <div className='text-[14px] font-[600]'>Shop By Feature</div>
              <ul className='text-[13px] text-[#504f4f] mt-2'>
                <li>Noise cancellation earbuds</li>
                <li>Gaming earbuds</li>
                <li>Large Playback earbuds</li>
              </ul>
            </div>
            <div>
              <div className='text-[14px] font-[600]'>Shop By Price</div>
              <ul className='text-[13px] text-[#504f4f] mt-2'>
                <li>Under ₹1000</li>
                <li>Under ₹2000</li>
              </ul>
            </div>
          </div>

          {/* Repeat similar blocks for other categories like Wired Earphones */}
        </div>

        

        {/* Social section */}
        <div className='w-[98%] h-auto bg-[#E7F0F5] flex items-center justify-center mt-10'>
          <div className='h-[100%] w-full md:w-[50%]'>
            <div className='h-[40%] w-full flex gap-5 items-center justify-center'>
              <label className='text-[18px] font-[700]'>Let's get social</label>
              <div className='flex gap-6 text-[19px]'>
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <i className="fa fa-xing" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homelast;
