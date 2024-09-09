import React from 'react'

function Product() {
 const stringProductDetail= localStorage.getItem("Product")
 const productobj = JSON.parse(stringProductDetail)

  return (
    <div className='w-[100%] flex flex-col items-center justify-center gap-2'>

          <div className='w-[95%]  flex mt-28 '>
            <div className='h-[80vh] w-[6%] flex flex-col items-center justify-start gap-4 sticky top-16'>
             <div className='h-[12%] w-[85%] bg-[white] border-[1px] border-gray-300 flex items-center justify-center rounded-lg  '>
                <img className='h-[90%] w-[90%]'src={productobj.imgone} ></img>
             </div>

             <div className='h-[12%] w-[85%] bg-[white] border-[1px] border-gray-300 flex items-center justify-center  rounded-lg '>
                <img className='h-[90%] w-[90%]' src={productobj.imgtwo} ></img>
             </div>

             <div className='h-[12%] w-[85%] bg-[white] border-[1px] border-gray-300 flex items-center justify-center rounded-lg '>
                <img className='h-[90%] w-[90%]'src={productobj.imgthree} ></img>
             </div>

             <div className='h-[12%] w-[85%] bg-[white] border-[1px] border-gray-300 flex items-center justify-center rounded-lg '>
                <img className='h-[90%] w-[90%]'src={productobj.imgfour} ></img>
             </div>

             <div className='h-[12%] w-[85%] bg-[white] border-[1px] border-gray-300 flex items-center justify-center  rounded-lg '>
                <img className='h-[90%] w-[90%]'src={productobj.imgfive} ></img>
             </div>
            

            </div>

            <div className='h-[90vh] w-[45%] sticky top-16  flex items- justify-center'>
                <div className='h-[95%] w-[95%] rounded-xl bg-[#E1E1E1]'>
                    <img className='h-[100%] w-[100%] rounded-xl' src={productobj.image}></img>
                </div>
            </div>

            <div className='h-[175vh] w-[50%]  ml-3 '>
                <div className='h-[4vh] w-[100%] '>
                <div className='h-[100%] w-[100%] flex items-center gap-1   '>
                    <i class="fa fa-star text-[yellow]" aria-hidden="true"></i>
                    <h1 className='text-[12px] text-[#4f4e4e]'>{productobj.rating}  </h1>
                    <h1 className='text-[gray]'>|</h1>
                    <h1 className='text-[12px] text-[#4f4e4e]'>{productobj.review}</h1>
                    <i class="fa fa-check-circle-o text-[#00C68C]" aria-hidden="true"></i>
                  </div>
                </div>

                <div className='text-[28px]  font-[700] h-[6vh] w-[100%]'>
                {productobj.title}
                </div>

                <div className='h-[12vh] text-[14px] font-[400] flex items-center text-[#636363] w-[100%]'>
                {productobj.theory}
                </div>

                <div className='h-[10vh] w-[100%'>
                    <div className='h-[100%] w-[35%] '>
                        <div className='h-[60%] w-[100%] flex items-center gap-2 '>
                            <h1 className='text-[22px] font-600'>₹{Math.floor(productobj.price * (100 - productobj.discount) / 100)}</h1>
                            <h1 className='text-[14px] line-through text-[#636363] font-400'>₹{productobj.price}</h1>
                            <h1 className='text-[14px] font-[500] text-[#337f33]'>{productobj.discount}% off</h1>
                        </div>
                        <div className='h-[20%] w-[100%] bg-white-400 text-[11px] text-[gray] font-[400]'>
                            <h1>MRP(inclusive all tax)</h1>
                        </div>
                    </div>
                </div>

                <div className='h-[18vh] w-[100%] '>
                    <div className='h-[30%] w-[100%] gap-2 items-center flex text-[14px]'>
                        <h1 className='font-[700]'>Choose Your Colour:</h1>
                        <h1 className='font-[400]'>Light Pink</h1>
                    </div>
                    <div className='h-[60%] w-[100%] flex items-center gap-3 pb-5 '>
                        <div className='h-[30px] w-[30px] rounded-full bg-pink-300'></div>
                        <div className='h-[30px] w-[30px] rounded-full bg-black'></div>
                        <div className='h-[30px] w-[30px] rounded-full bg-red-300'></div>
                        <div className='h-[30px] w-[30px] rounded-full bg-blue-300'></div>
                        <div className='h-[30px] w-[30px] rounded-full bg-green-800'></div>
                        <div className='h-[30px] w-[30px] rounded-full bg-purple-700'></div>
                    </div>
                </div>

                <div className='h-[30vh] w-[100%]  '>
                <div className='h-[20%] w-[100%] gap-2 items-center flex text-[14px]'>
                        <h1 className='font-[700]'>Check Delivery</h1></div>
                       <div className='h-[65%] w-[60%] flex flex-col items-center justify-center  rounded-lg bg-[#F2F5F9]'>
                        <input className='w-[90%] h-[40%] pl-2 flex items-center rounded-md border-[2px] border-gray-400' placeholder='Enter PIN Code'></input>
                        <div className='h-[20%] flex gap-2 w-[90%] '>
                            <h1 className='text-[14px] font-[600] text-[#48a448]'>Free Delivery</h1>
                            <h1 className='text-[14px]'>|</h1>
                            <h1 className='text-[14px] font-[700]'>By Thursday,5 Sept</h1>
                        </div>
                        <div className='h-[20%] flex gap-2 w-[90%] '>
                            <h1 className='text-[14px] font-[400] '>If ordered within</h1>
                            <h1 className='text-[14px] font-[500] text-red-400'>11 hrs 11 mins</h1>
                        </div>
                        </div> 
                        
                </div>

                <div className='h-[16vh] w-[100%] flex flex-col gap-3 '>
                <div className='h-[20%] w-[100%] gap-2 items-center flex text-[14px]'>
                <h1 className='font-[700]'>Users'Love</h1></div>
                <div className='h-[60%] w-[60%] flex rounded-lg bg-[#F2F5F9]'>
                    <div className='h-[100%]  w-[20%] flex items-center justify-center'>
                    <img className='h-[60%] w-[50%]' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536'></img>
                </div>
                <div className='h-[100%] w-[80%] bg-[#E7EFFB] rounded-r-lg'>
                    <div className='h-[50%] w-[100%] flex items-center justify-center text-[14px] font-[700]'>75 Lacs+ units sold on Flipkart
                    </div>
                    <hr className='h-[1%] w-[90%]'></hr>
                    <div className='h-[50%] w-[100%] flex items-center justify-center text-[14px] font-[700]'>8 Lacs+ 5  <h1 className='pl-1 pr-1'><i class="text-[yellow] fa fa-star" aria-hidden="true"></i></h1>  Reviews
                    </div>
                </div>
                 
                </div>
                </div>

                <div className='h-[14vh] w-[100%] pt-2'>
           
                <div className='h-[70%] w-[60%] bg-[#F2F5F9] rounded-r-lg'>
                    <div className='h-[50%] w-[100%] flex items-center pl-5 text-[16px] font-[700]'>Make Your Product Personalised
                    </div>
               
                    <div className='h-[50%] w-[100%] flex items-center pl-5 text-[#292976]  text-[11px] font-[700]'>Get A Customized Engraving And Make It Unmistakably Yours.
                    </div>
                </div>
                </div>

                <div className='h-[25vh] w-[100%]'>
                <div className='h-[20%] w-[100%] gap-2 items-center flex text-[14px]'>
                <h1 className='font-[700]'>Active Offers</h1></div>
                <div className='h-[70%] w-[60%] flex gap-[8%] '>
                    <div className='h-[100%] w-[25%] flex flex-col items-center justify-center rounded-lg border-green-600 border-[1px]'> 
                        <div className='h-[90%] w-[100%] flex flex-col items-center justify-center'>
                            <div className='h-[50%] w-[90%] flex items-center justify-center text-[11px] font-[600]'> More Than 2 Items</div>
                            <hr className='h-[2px] bg-black w-[60%] '></hr>
                            <div className='h-[50%] w-[90%] flex items-center justify-center text-[12px] font-[600] text-[#5656e9]'>Get 5% Off</div>
                        </div>
                        <div className='h-[22%] w-[107%] rounded-md bg-green-600 flex items-center justify-center text-[11px] text-[white] font-[700] '>MOST POPULAR</div>
                    </div>

                    <div className='h-[100%] w-[25%] flex flex-col items-center justify-center rounded-lg border-green-600 border-[1px]'> 
                        <div className='h-[90%] w-[100%] flex flex-col items-center justify-center'>
                            <div className='h-[50%] w-[90%] flex items-center justify-center text-[11px] font-[600]'> More Than 5 Items</div>
                            <hr className='h-[2px] bg-black w-[60%] '></hr>
                            <div className='h-[50%] w-[90%] flex items-center justify-center text-[12px] font-[600] text-[#5656e9]'>Get 7% Off</div>
                        </div>
                        <div className='h-[22%] w-[107%] rounded-md bg-gray-900 flex items-center justify-center text-[11px] text-[white] font-[700] '>BEST VALUE</div>
                    </div>
                             
                    <div className='h-[100%] w-[25%] flex flex-col items-center justify-center rounded-lg border-green-600 border-[1px]'> 
                        <div className='h-[90%] w-[100%] flex flex-col items-center justify-center'>
                            <div className='h-[50%] w-[90%] flex items-center justify-center text-[11px] font-[600]'> Corporate Deal</div>
                            <hr className='h-[2px] bg-black w-[60%] '></hr>
                            <div className='h-[50%] w-[100%] flex items-center justify-center text-[12px] font-[600] text-[#5656e9]'>Comming Soon</div>
                        </div>
                        <div className='h-[22%] w-[107%] rounded-md bg-gray-900 flex items-center justify-center text-[11px] text-[white] font-[700] '>BULK ORDER</div>
                    </div>         

                </div>
                </div>

                <div className='h-[23vh] w-[100%]'>
                <div className='h-[20%] w-[100%] gap-2 items-center flex text-[14px]'>
                <h1 className='font-[700]'>Rewards And Payment Offers</h1></div>
                <div className='h-[80%] w-[60%] flex items-center '>
                <div className='h-[70%] w-[100%] bg-[#fbecb8] rounded-lg flex gap-3 items-center justify-center'>
                    <div className='h-[60%] w-[25%] rounded-lg flex justify-center bg-[#ffe99b]'><img className='h-[100%]' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_Rewards_logo.png?v=1694079279'></img></div>
                    <div className='h-[60%] w-[75%] text-[14px] font-[400]'>Redeem up to 10% off Additionally with boAt Rewards </div>
                </div>
                

                </div>
                </div>


                <div className='h-[12vh] w-[100%]'>
                <div className='h-[100%] w-[60%] rounded-xl bg-green-700'>
                    <h1 className='h-[30%] w-[100%] text-white text-[11px] font-[400] flex items-center justify-center'>Personalised Your Product</h1>
                    <button className='h-[70%] w-[100%] gap-3 text-white text-[17px] font-[500] flex items-center justify-center rounded-xl bg-black'>
                    <i class="fa fa-shopping-bag" aria-hidden="true"></i> Add To Cart
                    </button>
                </div>
                </div>
                
                </div> 
            
            </div> 

            <div className='h-[30vh] w-[70%] pt-14  flex'>
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
  )
}

export default Product