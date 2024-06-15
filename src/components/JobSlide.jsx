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

const JobSlide = () => {
  return (
    <>  
                    <div className='pl-4 pb-5'>
                    <h2 className=' font-bold text-[20px] text-[#333333]'>Latest jobs on Internshala</h2>
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
                    </div>
        <Swiper 
            modules={[Navigation,FreeMode, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            
            freeMode={true}
                // navigation
                // scrollbar={{ draggable: true }}
            className="mySwiper ritesh px-5 ">           
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
                            <div className='w-full absolute bottom-0 left-0 p-3 flex mt-10 items-center justify-between'>
                                <Link className='text-sm text-zinc-600 rounded px-2 py-1 bg-zinc-400'>Job</Link>
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

export default JobSlide
