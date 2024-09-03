import React, { useState } from 'react'

function Crousal() {
    const [move, setMove] = useState(0)

    return (
        <div className='overflow-hidden w-[100%] h-[100vh]'>
            <div style={{ transform: `translateX(-${move}%)` }} className='w-[420%] h-[100vh] flex object-cover  duration-500 '>
                <img className='w-[100%]' src='https://www.boat-lifestyle.com/cdn/shop/files/RS_Banner_WEB_1_1400x.jpg?v=1706770352'></img>
                <img className='w-[100%]' src='https://www.boat-lifestyle.com/cdn/shop/files/airdropes-drift-banner-2_1400x.jpg?v=1724923264'></img>
                <img className='w-[100%]' src='https://www.boat-lifestyle.com/cdn/shop/files/MONSOON-SALE-WEB_1_1400x.jpg?v=1721750339'></img>
                <img className='w-[100%]' src='https://www.boat-lifestyle.com/cdn/shop/files/Amazon_prime_Mirzapur_banner_2_1400x.png?v=1724742620'></img>

            </div>

            <div onClick={() => move > 0 ? setMove(move - 27) : null} className=' absolute top-[50%] px-4'>
                <div className='h-[5vh] w-[5vh] rounded-full bg-slate-600 flex items-center justify-center text-[white] text-[15px]'>
                    {<i class="fa fa-chevron-left" aria-hidden="true"></i>}
                </div>
            </div>


            <div onClick={() => move < 81 ? setMove(move + 27) : null} className=' text-white text-[50px] absolute right-[.5%] top-[50%] px-4'> <div className='h-[5vh] w-[5vh] rounded-full bg-slate-600 flex items-center justify-center text-[white] text-[15px]'>
                {<i class="fa fa-chevron-right" aria-hidden="true"></i>
                }
            </div></div>

            <div className='flex gap-2 absolute bottom-[10%] left-[50%]'>
                <div onClick={() => setMove(0)} style={{ backgroundColor: move == 0 && "red" }} className='w-[20px] h-[20px]  rounded-full border-2 '></div>
                <div onClick={() => setMove(27)} style={{ backgroundColor: move == 27 && "red" }} className='w-[20px] h-[20px]  rounded-full border-2 ' ></div>
                <div onClick={() => setMove(54)} style={{ backgroundColor: move == 54 && "red" }} className='w-[20px] h-[20px]   rounded-full border-2 '></div>
                <div onClick={() => setMove(81)} style={{ backgroundColor: move == 81 && "red" }} className='w-[20px] h-[20px]   rounded-full border-2 '></div>
            </div>
            
        </div>
        
    )
}

export default Crousal