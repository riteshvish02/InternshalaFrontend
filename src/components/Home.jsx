import React, { useState,useRef } from 'react'
import Nav from './Nav'
import Navlogin from './partials/Navlogin'
import Studentnav from './partials/Studentnav'
import Internships from './Internships'
import Login from './Login'

import { IoSearchOutline } from "react-icons/io5";
//swiper
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import 'swiper/css/free-mode';
import '../../public/stylesheets/styles.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , FreeMode,Navigation, Scrollbar, A11y} from 'swiper/modules';


const Home = () => {
  const [isLoginpage,setisLoginpage] = useState(false)
  return (
    <>
        <Nav Navleft={<Navlogin setlogin={setisLoginpage} />} Navright={<Studentnav  />}/>
        <div className='min-h-screen p-1'>
            {isLoginpage && <Login setlogin={setisLoginpage} ></Login>}
            <div className='hero1 h-screen px-4'>
                <div className='search relative mt-2'>
                    <form action="">
                        <IoSearchOutline className='absolute top-3 scale-[1.5] text-zinc-500 left-3' />
                        <input className='w-[96%] h-[6vh] px-8 focus:border-[#00A5EC] outline-none rounded-md border-zinc-300 border-[0.1px]' type="text" />
                    </form>
                </div>
                <h2 className=' mt-[2vh] font-bold text-[3.5vh] text-[#333333]'>Make your dream career a  reality</h2>
                <h2 className=' mt-[3vh] font-medium text-[3vh] text-[#333333]'>Trending on Internshala 🔥</h2>
                <div className='swiperdiv ml-[-5%]  w-[90vw] left-0 h-[30vh] py-3 mt-5'>
                    <Swiper 
                            modules={[Navigation,FreeMode, Pagination, Scrollbar, A11y]}
                            spaceBetween={30}
                            slidesPerView={1}
                            
                            freeMode={true}
                                navigation
                                // scrollbar={{ draggable: true }}
                            className="mySwiper px-5"
                    >
                        <SwiperSlide >
                            <img src="https://internshala.com/static/images/pgc_course_specific_banners/pgc_homepage_banner_new.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img
                            src="https://internshala-uploads.internshala.com/banner-images/home_new/wtc_fh_feb24-student.png.webp"
                            alt=""
                        />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img
                            src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp"
                            alt=""
                        />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img
                            src="https://internshala-uploads.internshala.com/banner-images/home_new/is_jobs-student.png.webp"
                            alt=""
                        />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img
                                src="https://internshala-uploads.internshala.com/banner-images/home_new/career_starter_internships_final-student.png.webp"
                                alt=""
                        />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img
                                src="https://internshala-uploads.internshala.com/banner-images/home_new/int_opps-student.png.webp"
                                alt=""
                            />
                        </SwiperSlide>
                    
                    </Swiper>
                </div>
                <div className='internships'>
                    <h2 className=' font-bold text-[20px] text-[#333333]'>Latest internships on Internshala</h2>
                    <h2 className='text-zinc-600  text-[17px] font-medium mt-2'>POPULAR CATEGORIES:</h2>
                    <div className='w-full  category hide-scrollbar py-2 flex whitespace-nowrap overflow-x-auto '>
                        <button className='px-2 py-1 ml-2 bg-[#008BDC] rounded-full font-medium text-white'>Big brands</button>
                        <button className='px-2 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>Work from home</button>
                        <button className='px-2 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>Part-time</button>
                        <button className='px-2 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>MBA</button>
                        <button className='px-2 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>Engineering</button>
                        <button className='px-2 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>Media</button>
                        <button className='px-2 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>Design</button>
                    </div>
                    <div className='intern swiperdiv ml-[-5%]  w-[90vw] left-0 h-[48vh] py-3 mt-5'>
                        <Internships/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
