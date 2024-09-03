import React from 'react'
import { useNavigate } from 'react-router-dom'
function Homebestofboat() {
    const navigate= useNavigate()
  return (
    <div className='w-[100%] flex  flex-col items-center pt-12 justify-center '>
    <div className='w-[95%] flex flex-col gap-8  '>
           <div className='flex gap-[10px] justify-between text-[22px]'>
               <div className='flex gap-2'><h1>Best Of</h1>
               <h1 className='font-[700] underline'>boAt</h1></div>
               <div onClick={()=>navigate("/Manyproduct")} className='text-[14px] font-[700] flex items-center gap-1 text-[#5694BC]'>View All
                 <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                 </div>
           </div>
           <div className='w-[100%] h-[65vh] flex gap-[2%]'>


               <div className='w-[23%] h-[100%] rounded-xl  bg-[#FAFAFA]'>
                   <div className='h-[75%] w-[100%] relative '>
                       <img className='h-[100%] w-[100%] rounded-t-xl' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_Supreme_1.jpg?v=1711262453'></img>
                       <div className='bg-black absolute top-3 h-[3vh] rounded-r-md text-[white] text-[10px] font-[600] flex items-center justify-center  w-[13vh]'>New Launch</div>
                       <div className='bg-yellow-400 absolute -bottom-3 left-12 h-[4vh] rounded-md text-[black] text-[14px] font-[700] flex items-center justify-center w-[30vh]'>50 Hours Playback</div>
                   </div>
                   <div className='h-[25%] w-[100%]  rounded-b-xl flex gap-3 pt-4 flex-col items-center justify-center'>
                       <div className='h-[20%] w-[100%] flex justify-between '>
                           <b1 className='font-[600] ml-3'>boAt Airdopes Supreme </b1>
                           
                       </div>
                       <div className='h-[50%] w-[100%] flex'>
                           <div className='h-[100%] w-[60%] '>
                               <div className='h-[50%] w-[100%] flex items-center gap-1'>
                                   <h1 className='font-[700] text-[17px] pl-4'><i class="fa fa-inr" aria-hidden="true"></i>1,499</h1>
                                   <h3 className='text-[gray] line-through text-[12px]'><i class="fa fa-inr" aria-hidden="true"></i>5,999</h3>
                                   <h2 className='text-[#00C68C] font-[700] text-[14px]'>71% off</h2>
                               </div>
                               <div className='h-[50%] w-[100%]  flex items-center justify-start pl-4'>
                                   <div className='h-[100%] w-[70%] flex items-center gap-1 bg-white'>
                                       <i class="fa fa-star text-[yellow]" aria-hidden="true"></i>
                                       <h1 className='text-[12px]'>Be first to Review</h1>
                                       
                                   </div>
                               </div>
                           </div>
                           <div className='h-[100%] w-[40%]   flex items-center justify-center'>
                               <button className='h-[90%] w-[90%] bg-[#1A2024] text-[white] rounded-xl'>Add To Cart</button>
                           </div>
                       </div>
                   </div>
               </div>



               <div className='w-[23%] h-[100%] rounded-xl bg-[#FAFAFA]'>
                   <div className='h-[75%] w-[100%] relative '>
                       <img className='h-[100%] w-[100%] rounded-t-xl' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/191G_1.gif?v=1686650191'></img>
                       
                       <div className='bg-yellow-400 absolute -bottom-3 left-12 h-[4vh] rounded-md text-[black] text-[14px] font-[700] flex items-center justify-center w-[30vh]'>Gaming Earbuds</div>
                   </div>
                   <div className='h-[25%] w-[100%] pt-4  rounded-b-xl flex gap-3  flex-col items-center justify-center'>
                       <div className='h-[20%] w-[100%] flex justify-between '>
                           <b1 className='font-[600] ml-3'>boAt Airdopes 191G</b1>
                           <div className='h-[100%] w-[25%] flex '>
                               <div className='h-[100%] w-[25%] rounded-full  bg-[#ff1717]'></div>
                               <div className='h-[100%] w-[25%] rounded-full mr-3 bg-[#0800f8]'></div>
                              
                           </div>
                       </div>
                       <div className='h-[50%] w-[100%] flex'>
                           <div className='h-[100%] w-[60%] '>
                               <div className='h-[50%] w-[100%] flex items-center gap-1'>
                                   <h1 className='font-[700] text-[17px] pl-4'><i class="fa fa-inr" aria-hidden="true"></i>1,399</h1>
                                   <h3 className='text-[gray] line-through text-[12px]'><i class="fa fa-inr" aria-hidden="true"></i>3,990</h3>
                                   <h2 className='text-[#00C68C] font-[700] text-[14px]'>60% off</h2>
                               </div>
                               <div className='h-[50%] w-[100%]  flex items-center justify-start pl-4'>
                               <div className='h-[100%] w-[50%] flex items-center gap-1 bg-white'>
                                       <i class="fa fa-star text-[yellow]" aria-hidden="true"></i>
                                       <h1 className='text-[12px]'>4.9</h1>
                                       <h1 className='text-[gray]'>|</h1>
                                       <h1 className='text-[12px]'>58</h1>
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



               <div className='w-[23%] h-[100%] rounded-xl bg-[#FAFAFA]'>
                   <div className='h-[75%] w-[100%] relative '>
                       <img className='h-[100%] w-[100%] rounded-t-xl' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Storm_Call_2.webp?v=1698984630'></img>
                       <div className='bg-black absolute top-3 h-[3vh] rounded-r-md text-[white] text-[10px] font-[600] flex items-center justify-center  w-[13vh]'>Restocked</div>
                       <div className='bg-yellow-400 absolute -bottom-3 left-12 h-[4vh] rounded-md text-[black] text-[14px] font-[700] flex items-center justify-center w-[30vh]'> Bt Calling</div>
                   </div>
                     <div className='h-[25%] w-[100%] pt-4 rounded-b-xl flex gap-3  flex-col items-center justify-center'>
                       <div className='h-[20%] w-[100%] flex justify-between '>
                           <b1 className='font-[600] ml-3'>boAt Strom Call 2</b1>
                           <div className='h-[100%] w-[25%] flex '>
                               <div className='h-[100%] w-[55%] rounded-full  bg-black'></div>
                               <div className='h-[100%] w-[55%] rounded-full mr-3 bg-pink-300'></div>
                             +4
                           </div>
                       </div>
                       <div className='h-[50%] w-[100%] flex'>
                           <div className='h-[100%] w-[60%] '>
                               <div className='h-[50%] w-[100%] flex items-center gap-1'>
                                   <h1 className='font-[700] text-[17px] pl-4'><i class="fa fa-inr" aria-hidden="true"></i>1,399</h1>
                                   <h3 className='text-[gray] line-through text-[12px]'><i class="fa fa-inr" aria-hidden="true"></i>6,499</h3>
                                   <h2 className='text-[#00C68C] font-[700] text-[14px]'>82% off</h2>
                               </div>
                               <div className='h-[50%] w-[100%]  flex items-center justify-start pl-4'>
                                   <div className='h-[100%] w-[50%] flex items-center gap-1 bg-white'>
                                       <i class="fa fa-star text-[yellow]" aria-hidden="true"></i>
                                       <h1 className='text-[12px]'>4.8</h1>
                                       <h1 className='text-[gray]'>|</h1>
                                       <h1 className='text-[12px]'>21</h1>
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


               <div className='w-[23%] h-[100%] rounded-xl bg-[#FAFAFA]'>
                   <div className='h-[75%] w-[100%] relative'>
                       <img className='h-[100%] w-[100%] rounded-t-xl' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Airdopes-381.jpg?v=1682576552'></img>
                      
                       <div className='bg-yellow-400 absolute -bottom-3 left-12 h-[4vh] rounded-md text-[black] text-[14px] font-[700] flex items-center justify-center w-[30vh]'> 20 Hours Playback</div>
                   </div>
                   <div className='h-[25%] w-[100%] pt-4  rounded-b-xl flex gap-3  flex-col items-center justify-center'>
                       <div className='h-[20%] w-[100%] flex justify-between '>
                           <b1 className='font-[600] ml-3'>boAt Airdopes 381</b1>
                           <div className='h-[100%] w-[25%] flex '>
                               <div className='h-[100%] w-[55%] rounded-full  bg-blue-400'></div>
                               <div className='h-[100%] w-[55%] rounded-full mr-3 bg-green-400'></div>
                               +7
                           </div>
                       </div>
                       <div className='h-[50%] w-[100%] flex'>
                           <div className='h-[100%] w-[60%] '>
                               <div className='h-[50%] w-[100%] flex items-center gap-1'>
                                   <h1 className='font-[700] text-[17px] pl-4'><i class="fa fa-inr" aria-hidden="true"></i>2,099</h1>
                                   <h3 className='text-[gray] line-through text-[12px]'><i class="fa fa-inr" aria-hidden="true"></i>4,999</h3>
                                   <h2 className='text-[#00C68C] font-[700] text-[14px]'>58% off</h2>
                               </div>
                               <div className='h-[50%] w-[100%]  flex items-center justify-start pl-4'>
                               <div className='h-[100%] w-[50%] flex items-center gap-1 bg-white'>
                                       <i class="fa fa-star text-[yellow]" aria-hidden="true"></i>
                                       <h1 className='text-[12px]'>4.8</h1>
                                       <h1 className='text-[gray]'>|</h1>
                                       <h1 className='text-[12px]'>122</h1>
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




           </div>


       </div>

    </div>
  )
}

export default Homebestofboat