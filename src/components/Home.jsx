import React, { useState,useRef } from 'react'
import Nav from './Nav'
import Navlogin from './partials/Navlogin'
import Studentnav from './partials/Studentnav'
import Login from './Login'

//swiper
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import '../../public/stylesheets/styles.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination ,Navigation, Scrollbar, A11y} from 'swiper/modules';


const Home = () => {
  const [isLoginpage,setisLoginpage] = useState(false)
  return (
    <>
        <Nav Navleft={<Navlogin setlogin={setisLoginpage} />} Navright={<Studentnav  />}/>
        <div>
            {isLoginpage && <Login setlogin={setisLoginpage} ></Login>}
            <div className='hero1'>
                <h2 className='text-center mt-[10vh] font-bold text-5xl text-[#333333]'>Make your dream career a reality</h2>
                <h2 className='text-center  mt-[4vh] font-bold text-3xl text-[#333333]'>Trending on Internshala 🔥</h2>
                <div className='swiperdiv m-auto w-[82vw] h-[40vh] py-4 mt-5'>
                <Swiper 
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={3}
                            navigation
                            scrollbar={{ draggable: true }}
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
        </div>
    </>
  )
}

export default Home
