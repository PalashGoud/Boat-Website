import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserDetails from '../api/userDetail.json'


function Headermain() {
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)
  const [topbar, setTopbar] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showCategory, setshowCategory] = useState(false)
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [search, setSearch] = useState("")

  const loginCheck = ()=>{
    let user = UserDetails.filter((i)=> i.email == email )
    if (user.length>0 ){
      if (user[0].password == password){
        window.location.reload()
      }
      else{
        alert("Wrong Password")
      }
    }
    else {
      alert("User not registered")
    }
  }

  return (

    <div className='h-[12vh]'>
      <div className='header h-[12vh] w-[100%] flex items-center justify-center '>
        <img onClick={()=>navigate("/")} className='logo' src='https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434'></img>
       
        <div className='h-[100%] w-[60%]  flex gap-[3%] items-center justify-start'>
         <div className='header-div '><h1 onMouseOver={() => setshowCategory(true)} className='header-h cursor-pointer'>Categories</h1>
            <div className='header-divv opacity-0 ml-[15%] h-[2px] w-[70%] bg-red-600'></div> 
          </div> 

          <div className='header-div'>
          <h1 onClick={()=>{localStorage.setItem("nameonimagesmall","Engraving Available"); localStorage.removeItem("category") ;navigate("/Manyproduct")}} className='header-h cursor-pointer'>boAt personalisation</h1>
          <div className='header-divv opacity-0 h-[2px] ml-[15%] w-[70%] bg-red-600'></div> 
          </div> 

          <div className='header-div'>
          <h1 onClick={()=>{localStorage.setItem("nameonimagesmall","New launch"); localStorage.removeItem("category") ;navigate("/Manyproduct")}}className='header-h cursor-pointer'>New Launchs</h1>
          <div className='header-divv opacity-0 h-[2px] ml-[15%] w-[70%] bg-red-600'></div> 
          </div>

          <div className='header-div'>
          <h1 onClick={()=>{localStorage.setItem("nameonimagesmall","Recently Restocked"); localStorage.removeItem("category") ;navigate("/Manyproduct")}} className='header-h cursor-pointer'>Recently Restocked</h1>
          <div className='header-divv opacity-0 h-[2px] ml-[15%] w-[70%] bg-red-600'></div> 
          </div>

          <div className='header-div'>
          <label onClick={()=>navigate("/StoreLocator")} className='header-h cursor-pointer '>

            Store locator
          </label>
          <div className='header-divv opacity-0 h-[2px] w-[70%] ml-[15%] bg-red-600'></div> 
          </div>
        </div>

        <div className='h-[50%] pl-3 gap-4 bg-slate-200 w-[25%] flex items-center justify-start bg-red rounded-full'>
          <i onClick={()=> {localStorage.setItem("search",  search) ;navigate("/Search")}} class="fa fa-search" aria-hidden="true"></i>
          <input onChange={(e)=> setSearch(e.target.value)} type="text" className=' bg-slate-200 h-[100%] w-[80%] cursor-pointer' placeholder="Search">
          </input></div>



        <div className='flex items-center justify-center gap-[20%] text-[20px]  h-[50%] w-[7%] '>
          <i onClick={() => setTopbar(true)} class="cursor-pointer fa fa-user-o" aria-hidden="true"></i>
          <i onClick={() => setSidebar(true)} class=" cursor-pointer fa fa-shopping-bag" aria-hidden="true"></i>
        </div>


        <div style={{ right: sidebar == true ? "0" : "-30%" }} className='w-[30%]  flex flex-col  gap-[50px]  duration-300  h-[100vh] top-0 bg-[#f6f4f4] fixed'>
          <div className='w-[100%] h-[10%] flex justify-between items-center pl-5 ' >
            <label className=' text-[22px] font-[600]  text-[black]' >Your Cart</label>
            <div onClick={() => setSidebar(false)}>
              <i class="cursor-pointer fa fa-times" aria-hidden="true"></i>
            </div></div>
        </div>

        <div style={{ right: topbar == true ? "0" : "100%" }} className='w-[15%] flex flex-col items-center  h-[12vh] top-16 rounded-md border-[1px] border-gray-400 bg-[#f6f4f4] fixed'>
          <div className='w-[95%] h-[40%] flex items-center justify-between pl-2 ' >
            <label className=' text-[14px] font-[600]  text-[black]' >Hi boAthead!!</label>
            <div onClick={() => setTopbar(false)}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </div></div>
          <div className='h-[60%] w-[95%] flex items-center justify-center'>
            <button onClick={() => setShowLogin(true)} className='cursor-pointer w-[90%] rounded-lg font-[700] h-[70%] bg-black text-[white] '>login</button>
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
              <div className='h-[10%] w-[100%] text-[14px] flex items-center justify-center'>Please enter your Email And Passsword to continue</div>
              <div className='h-[70%] w-[90%] rounded-xl flex flex-col items-center bg-gray-100'>
               
                <div  className='h-[55%] w-[70%]  flex flex-col gap-1 justify-center items-center'>
                  <div  className='w-[90%] '><label className='text-[12px]'>Email:- </label> 
                  <input onChange={(e)=> setEmail(e.target.value)} className='h-[6vh] w-[100%] rounded-md flex pl-3 border-[1px] border-gray-400' placeholder='Enter Your Email'></input>
                  </div>


                  <div className='w-[90%] '><label className='text-[12px]'>Passsword:- {password}</label> 
                  <input type='password' onChange={(e)=> setPassword(e.target.value)} className='h-[6vh] w-[100%] rounded-md flex pl-3 border-[1px] border-gray-400' placeholder='Enter Your Password'></input>
                  </div>

                </div>
                <div className='h-[30%] w-[100%] flex items-center justify-center'>
                  <button onClick={()=> loginCheck()} className='w-[40%] h-[70%] bg-gray-300 rounded-xl text-[16px] font-[700]'>SUBMIT</button>
                </div>
                <div className='h-[15%]  w-[70%] text-[12px] text-[gray]'>By conforming ,you agree to boAt's Term and Conditions and Privacy Policy</div>
              </div>


            </div>
          </div> : null}


      {showCategory == true ?
          <div onMouseLeave={()=> setshowCategory(false)} style={{ right: showCategory == true ? "0" : "100%" }} className='w-[50%]    left-3  duration-300 rounded-lg  h-[30vh] top-[12vh] bg-[#f6f4f4] fixed'>
          
            <div className='h-[90%] w-[100%] flex flex-wrap gap-3 pt-3'>
            <div onClick={()=>{localStorage.setItem("category","Earbuds");localStorage.removeItem("nameonimagesmall");navigate("/Manyproduct")}} className='w-[30%] h-[30%] cursor-pointer flex items-center justify-center '>
              <img className='h-[80%] w-[20%]' src='https://www.boat-lifestyle.com/cdn/shop/collections/Nirvana-ION-Black-_-1_-1.1_100x.png?v=1699269477'></img>
              <div  className='h-[40%] w-[60%] text-[12px] '> True Wireless Earbuds</div>
            </div>
            <div onClick={()=>{localStorage.setItem("category","Watch");localStorage.removeItem("nameonimagesmall");navigate("/Manyproduct")}} className='w-[30%] h-[30%] cursor-pointer flex items-center justify-center '>
              <img className='h-[80%] w-[30%]' src='https://www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668'></img>
              <div className='h-[40%] w-[60%]  text-[12px] '>Smart Watches</div>
            </div>

            <div  onClick={()=>{localStorage.setItem("category","Speakers");localStorage.removeItem("nameonimagesmall");navigate("/Manyproduct")}} className='w-[30%] h-[30%]  flex cursor-pointer items-center gap-3 justify-center '>
              <img className='h-[80%] w-[20%]' src='https://www.boat-lifestyle.com/cdn/shop/collections/sound_bar_4f111a6a-2482-41c8-87f2-db7e0ee19e69_1_100x.webp?v=1684827961'></img>
              <div className='h-[40%] w-[60%]  text-[12px] '> Speakers</div>
            </div>

            <div  onClick={()=>{localStorage.setItem("category","Headphones");localStorage.removeItem("nameonimagesmall");navigate("/Manyproduct")}}  className='w-[30%] h-[30%]  flex cursor-pointer items-center justify-center '>
              <img className='h-[80%] w-[30%]' src='https://www.boat-lifestyle.com/cdn/shop/collections/Rectangle271_100x.png?v=1701414051'></img>
              <div className='h-[40%] w-[60%]  text-[12px]'> Headphones</div>
            </div>
            </div>

        </div> :null }





      </div>
    </div>
  )
}


export default Headermain