import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import 'swiper/css/free-mode';
import '../../../public/stylesheets/responsive.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , FreeMode,Navigation, Scrollbar, A11y} from 'swiper/modules';
const Responsiveswiper = () => {
  return (
    <>
      <Swiper 
                            modules={[Navigation,FreeMode, Pagination, Scrollbar, A11y]}
                            spaceBetween={30}
                            slidesPerView={1}
                            
                            freeMode={true}
                                navigation
                                // scrollbar={{ draggable: true }}
                            className="mySwiper riteshkv px-5 lg:hidden"
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
    </>
  )
}

export default Responsiveswiper
