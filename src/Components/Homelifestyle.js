import React from 'react'
import { useNavigate } from 'react-router-dom'
function Homelifestyle() {
    const navigate= useNavigate()
  return (
    <div className='w-[100%] pt-8 flex items-center justify-center'>

    <div className='w-[95%] flex flex-col gap-5  '>
                    <div className='flex gap-[10px] text-[22px]'>  <h1>Shop By</h1>
                        <h1 className='font-[700] underline'>Lifestyle</h1>
                    </div>
    
    
                    <div className='w-[100%] h-[84vh]  flex gap-5'>
                    <div onClick={()=>{localStorage.setItem("category","Watch");localStorage.removeItem("nameonimagesmall");navigate("/Manyproduct")}} className='h-[100%] w-[24%] cursor-pointer rounded-t-3xl '>
                        <div className='h-[85%]rounded-3xl'>
                        <img src='https://www.boat-lifestyle.com/cdn/shop/files/shreyas-chronos-new.png?v=1696843687'></img>
                        </div>
                         <div className='h-[15%] flex flex-col bg-[#D1D9DF] items-center justify-center'>
                            <h1 className='font-[600] text-[26px]'>For Lifestyle</h1>
                            <label  className='text-[16px] font-[700] text-[#2F67B5]'>view all <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></label>
                            </div> 
                    </div> 
                   

                    <div onClick={()=>{localStorage.setItem("category","Speakers");localStorage.removeItem("nameonimagesmall");navigate("/Manyproduct")}} className='h-[100%] w-[24%] cursor-pointer rounded-t-3xl '>
                        <div className='h-[85%]rounded-3xl'>
                            <img src='https://www.boat-lifestyle.com/cdn/shop/files/Party_Animal_4.png?v=1685942349'></img>
                        </div>
                         <div className='h-[15%] flex flex-col bg-[#D1D9DF] items-center justify-center'>
                            <h1 className='font-[600] text-[26px]'>For Parties</h1>
                            <label  className='text-[16px] font-[700] text-[#2F67B5]'>view all <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></label>
                            </div> 
                    </div>
                    

                    <div  onClick={()=>{localStorage.setItem("category","Earbuds");localStorage.removeItem("nameonimagesmall");navigate("/Manyproduct")}}  className='h-[100%] w-[24%]  cursor-pointer rounded-t-3xl '>
                        <div className='h-[85%]rounded-3xl'>
                            <img src='https://www.boat-lifestyle.com/cdn/shop/files/Yjaiswal_1.png?v=1717055950'></img>
                        </div>
                         <div className='h-[15%] flex flex-col bg-[#D1D9DF] items-center justify-center'>
                            <h1 className='font-[600] text-[26px]'>For Work</h1>
                            <label className='text-[16px] font-[700] text-[#2F67B5]'>view all <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></label>
                            </div> 
                    </div>

                    <div onClick={()=>{localStorage.setItem("category","Headphones");localStorage.removeItem("nameonimagesmall");navigate("/Manyproduct")}}  className='h-[100%] w-[24%] cursor-pointer rounded-t-3xl '>
                        <div className='h-[85%]rounded-3xl'>
                            <img src='https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_5.png?v=1696328658'></img>
                        </div>
                         <div className='h-[15%] flex flex-col bg-[#D1D9DF] items-center justify-center'>
                            <h1 className='font-[600] text-[26px]'>For Audiophiles</h1>
                            <label  className='text-[16px] font-[700] text-[#2F67B5]'>view all <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></label>
                            </div> 
                    </div>
                    <div onClick={()=>{localStorage.setItem("category","Speakers");localStorage.removeItem("nameonimagesmall");navigate("/Manyproduct")}} className='h-[100%] w-[24%] cursor-pointer rounded-t-3xl '>
                        <div className='h-[85%]rounded-3xl'>
                            <img src='https://www.boat-lifestyle.com/cdn/shop/files/Ranveer.png?v=1726038549'></img>
                        </div>
                         <div className='h-[15%] flex flex-col bg-[#D1D9DF] items-center justify-center'>
                            <h1 className='font-[600] text-[26px]'>For Rock</h1>
                            <label  className='text-[16px] font-[700] text-[#2F67B5]'>view all <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></label>
                            </div> 
                    </div>
                     
                     
                      
                    </div>
                    
                </div>
        </div>
  )
}

export default Homelifestyle