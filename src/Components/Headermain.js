import React, { useState } from 'react'


function Headermain() {
  const [sidebar, setSidebar] = useState(false)
  const [topbar, setTopbar] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  return (

    <div className='h-[12vh]'>
      <div className='header h-[12vh] w-[100%] flex items-center justify-center '>
        <img className='logo' src='https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434'></img>
        <div className='h-[100%] w-[60%]  flex gap-[3%] items-center justify-start'>
          <h1 className='header-h'>Categories</h1>
          <h1 className='header-h'>boAt personalisation</h1>
          <h1 className='header-h'>Gift with boAt</h1>
          <h1 className='header-h'>Corporate orders</h1>
          <select className='header-h'>
            <option>More</option>
            <option>Daily Deals </option>
            <option>Blogs</option>
            <option>Refer & Earn</option>
            <option>Store locator</option>
            <option>boAt community</option>
          </select>
        </div>

        <div className='h-[50%] pl-3 gap-4 bg-slate-200 w-[25%] flex items-center justify-start bg-red rounded-full'>
          <i class="fa fa-search" aria-hidden="true"></i>
          <input type="text" className=' bg-slate-200 h-[100%] w-[80%] ' placeholder="Search">
          </input></div>



        <div className='flex items-center justify-center gap-[20%] text-[20px]  h-[50%] w-[7%] '>
          <i onClick={() => setTopbar(true)} class="fa fa-user-o" aria-hidden="true"></i>
          <i onClick={() => setSidebar(true)} class="fa fa-shopping-bag" aria-hidden="true"></i>
        </div>


        <div style={{ right: sidebar == true ? "0" : "-30%" }} className='w-[30%]  flex flex-col  gap-[50px]  duration-300  h-[100vh] top-0 bg-[#f6f4f4] fixed'>
          <div className='w-[100%] h-[10%] flex justify-between items-center pl-5 ' >
            <label className=' text-[22px] font-[600]  text-[black]' >Your Cart</label>
            <div onClick={() => setSidebar(false)}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </div></div>
        </div>

        <div style={{ right: topbar == true ? "0" : "100%" }} className='w-[15%] flex flex-col items-center  h-[12vh] top-16 rounded-md border-[1px] border-gray-400 bg-[#f6f4f4] fixed'>
          <div className='w-[95%] h-[40%] flex items-center justify-between pl-2 ' >
            <label className=' text-[14px] font-[600]  text-[black]' >Hi boAthead!!</label>
            <div onClick={() => setTopbar(false)}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </div></div>
          <div className='h-[60%] w-[95%] flex items-center justify-center'>
            <button onClick={() => setShowLogin(true)} className='w-[90%] rounded-lg font-[700] h-[70%] bg-black text-[white] '>login</button>
          </div>
        </div>
        {showLogin == true ?
          <div className='w-full h-[100vh] fixed top-0 flex justify-center items-center'>
            <div onClick={() => setShowLogin(false)} className='bg-black opacity-50 w-full h-[100vh] absolute'></div>
            <div className='bg-white h-[60vh] rounded-xl flex flex-col items-center justify-start w-[40%] relative'>
              <div className='h-[15%] w-[100%] flex gap-2 items-center justify-center'>
                <label className='text-[24px] font-[450]'>Get</label>
                <label className='text-[24px] font-[700]'>Started</label>
              </div>
              <div className='h-[10%] w-[100%] text-[14px] flex items-center justify-center'>Please enter your Mobile Number to continue</div>
              <div className='h-[70%] w-[90%] rounded-xl flex flex-col items-center bg-gray-100'>
                <div className='h-[25%] w-[70%]  flex items-center '> Enter Mobile Number</div>
                <div className='h-[25%] w-[70%] flex items-center'>
                  <input className='h-[75%] w-[90%] rounded-md flex pl-3 border-[1px] border-gray-400' placeholder='+91  Type Here'></input>
                </div>
                <div className='h-[30%] w-[100%] flex items-center justify-center'>
                  <button className='w-[40%] h-[70%] bg-gray-300 rounded-xl text-[16px] font-[700]'>SEND OTP</button>
                </div>
                <div className='h-[15%]  w-[70%] text-[12px] text-[gray]'>By conforming ,you agree to boAt's Term and Conditions and Privacy Policy</div>
              </div>

            </div>
          </div> : null}





      </div>
    </div>
  )
}


export default Headermain