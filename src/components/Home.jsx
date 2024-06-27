import React, { useState,useRef } from 'react'

import Internships from './InternshipsSlide'
import Login from './Login'
import Jobs from './JobSlide'
import Searchbar from './partials/Searchbar'
import { IoSearchOutline } from "react-icons/io5";
import Responsiveswiper from './partials/Responsiveswiper'
import Swiperscreen from './partials/Swiperscreen'
//swiper




const Home = ({isLoginpage,setisLoginpage,issearchbar,setsearchbar}) => {
  return (
    <>
        <Searchbar toggle={issearchbar} settoggle={setsearchbar}></Searchbar>
        <div className='min-h-screen   p-1'>
            {isLoginpage && <Login setlogin={setisLoginpage} ></Login>}
            <div className='hero1 pt-[25%] lg:pt-[5%]   h-screen '>
               <div className='job px-4'>
               <div className='search relative mt-2 '>
                    <form className=' lg:hidden' action="">
                        <IoSearchOutline className='absolute top-[50%] translate-y-[-50%] scale-[1.5] text-zinc-500 left-3' />
                        <input onClick={()=>setsearchbar((prev)=>!prev)}  placeholder='Search here...' className='w-[96%] h-[6vh] px-9 focus:border-[#00A5EC] outline-none rounded-md border-zinc-300 border-[0.1px]' type="text" />
                    </form>
                </div>
                <h2 className=' mt-[2vh] font-bold text-[3.5vh] text-[#333333] lg:text-center lg:text-5xl'>Make your dream career a  reality</h2>
                <h2 className=' mt-[3vh] font-medium text-[3vh] text-[#333333] lg:text-center lg:text-3xl'>Trending on Internshala 🔥</h2>
                <div className='swiperdiv ml-[-5%] w-[100vw] left-0  h-[30vh] py-2 mt-5  lg:h-[40vh] lg:m-auto lg:w-[79vw] lg:mt-3'>
                    <Responsiveswiper/>
                    <Swiperscreen/>
                </div>
               
               </div>
                <div className='internships pt-4 lg:w-full  bg-[#FAFAFA]'>
                        <Internships/>
                </div>
                <div className='internships pt-4 pb-[25%]  bg-[#FAFAFA]'>
                        <Jobs/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
