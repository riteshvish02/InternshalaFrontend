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
import Jobs from './Jobs'
import Searchbar from './partials/Searchbar'
import Bottomnav from './Bottomnav'


const Home = () => {
  const [isLoginpage,setisLoginpage] = useState(false)
  const [issearchbar,setsearchbar] = useState(false)
  return (
    <>
        <Nav Navleft={<Navlogin setlogin={setisLoginpage} />} Navright={<Studentnav  />}/>
         <Searchbar toggle={issearchbar} settoggle={setsearchbar}></Searchbar>
        <div className='min-h-screen  p-1'>
            {isLoginpage && <Login setlogin={setisLoginpage} ></Login>}
            <div className='hero1  h-screen '>
               <div className='job px-4'>
               <div className='search relative mt-2 '>
                    <form action="">
                        <IoSearchOutline className='absolute top-[50%] translate-y-[-50%] scale-[1.5] text-zinc-500 left-3' />
                        <input onClick={()=>setsearchbar((prev)=>!prev)}  placeholder='Search here...' className='w-[96%] h-[6vh] px-9 focus:border-[#00A5EC] outline-none rounded-md border-zinc-300 border-[0.1px]' type="text" />
                    </form>
                </div>
                <h2 className=' mt-[2vh] font-bold text-[3.5vh] text-[#333333]'>Make your dream career a  reality</h2>
                <h2 className=' mt-[3vh] font-medium text-[3vh] text-[#333333]'>Trending on Internshala 🔥</h2>
                <div className='swiperdiv ml-[-5%]  w-[90vw] left-0  h-[30vh] pt-2 mt-5'>
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
               </div>
                <div className='internships pt-4  bg-[#FAFAFA]'>
                        <Internships/>
                </div>
                <div className='internships pt-4 pb-5  bg-[#FAFAFA]'>
                        <Jobs/>
                </div>
            </div>
        </div>
        <Bottomnav/>
    </>
  )
}

export default Home
