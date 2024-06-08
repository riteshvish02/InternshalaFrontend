import React from 'react'
import { IoAnalytics } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { PiMoneyDuotone } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
//swiper
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation"; 
import "swiper/css/scrollbar";
import 'swiper/css/free-mode';
import '../../public/stylesheets/internship.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , FreeMode,Navigation, Scrollbar, A11y} from 'swiper/modules';
import { Link } from 'react-router-dom';

const Internships = () => {
  return (
    <>
        <Swiper 
            modules={[Navigation,FreeMode, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            
            freeMode={true}
                // navigation
                // scrollbar={{ draggable: true }}
            className="mySwiper ritesh px-5 "
                >
                        <SwiperSlide className='border  p-5 flex-col items-start justify-start  border-zinc-400' >
                            <button className='px-3 border flex items-end text-sm gap-2 py-1 rounded border-zinc-400'> <IoAnalytics className='scale-[1.2] text-[#00A5EC]' /> <h2>Actively hiring</h2></button>
                            <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-3'>
                               <div className='w-[100%] text-left '>
                                 <h2 className='font-medium text-[2vh]'>Riteclkssh vish corpratesldlk</h2>
                                 <h3 className='text-[1.6vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                               </div>
                                <div className='h-[6vh] object-cover object-center w-[8vh]'>
                                    <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                </div>
                            </div>
                            <div className='loc text-zinc-600 pt-5'>
                                <h2 className='text-[15px]  font-medium flex items-center gap-2'><CiLocationOn className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                            </div>
                            <div className='w-full flex mt-10 items-center justify-between'>
                                <Link className='text-sm text-zinc-600 rounded px-2 py-1 bg-zinc-400'>Internship</Link>
                                <Link className='text-base text-[#00A5EC]'>View details</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                         <h3>djck</h3>
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

export default Internships
