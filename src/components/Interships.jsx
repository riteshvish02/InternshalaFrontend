import React from 'react'
import { CiCalendar, CiFilter, CiLocationOn } from "react-icons/ci";
import { IoAnalytics } from 'react-icons/io5';
import { PiHouseLineLight, PiMoneyDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';
const Interships = () => {
  return (
    <>
      <div className='w-full py-[25%] px-3 bg-[#F8F8F8]  overflow-y-scroll'>
            <div className='w-full  category hide-scrollbar pl-[22%] py-2 flex whitespace-nowrap overflow-x-auto '>
                    <button className='px-3 py-1 ml-2 absolute left-0 border-zinc-400 border rounded-full font-medium text-zinc-700  bg-white flex items-end justify-center gap-1'>Filter <CiFilter className='text-[#008BDC] scale-[1.2]' /></button>
                    <button className='px-3 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>Work from home</button>
                    <button className='px-3 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>profile</button>
                    <button className='px-3 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>Location</button>
                    <button className='px-3 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>part Time</button>
                    <button className='px-3 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>stipend</button>
            </div>
            <h2 className='text-center font-semibold'>545 Total internships</h2>
            <h2 className='text-gray-500 text-sm mt-3'>545 Total internships</h2>
            <div className='internships pt-2'>
                <div className='border mt-2  p-5 flex-col items-start justify-start py-5  rounded-md shadow-lg bg-white' >
                            <h2 className='font-medium text-[2vh]'>Riteclkssh vish corpratesldlk</h2>
                            <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-1'>
                               <div className='w-[100%] text-left py-2 '>
                                 <h3 className='text-[1.6vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                                <button className='px-2 mt-2 border-[#008BDC] border flex items-end text-[13px] text-[#008BDC] gap-2 py-[1px]  rounded-full '> <h2>Actively hiring</h2></button>
                               </div>
                                <div className='h-[6vh] object-cover object-center rounded-full overflow-hidden w-[8vh]'>
                                    <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                </div>
                            </div>
                            <div className='loc text-zinc-600 pt-5'>
                                <h2 className='text-[15px]  font-medium flex items-center gap-2'><PiHouseLineLight className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                <h2 className='text-[15px]  font-medium flex items-center gap-2'><CiLocationOn className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                <div className='flex items-center gap-2'>
                                    <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                    <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                </div>
                            </div>
                           
                </div>
                
                <div className='border mt-2  p-5 flex-col items-start justify-start py-5  rounded-md shadow-lg bg-white' >
                            <h2 className='font-medium text-[2vh]'>Riteclkssh vish corpratesldlk</h2>
                            <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-3'>
                               <div className='w-[100%] text-left py-2 '>
                                 <h3 className='text-[1.6vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                                <button className='px-2 mt-2 border-[#008BDC] border flex items-end text-[13px] text-[#008BDC] gap-2 py-[1px]  rounded-full '> <h2>Actively hiring</h2></button>
                               </div>
                                <div className='h-[6vh] object-cover object-center rounded-full overflow-hidden w-[8vh]'>
                                    <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                </div>
                            </div>
                            <div className='loc text-zinc-600 pt-5'>
                                <h2 className='text-[15px]  font-medium flex items-center gap-2'><PiHouseLineLight className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                <div className='flex items-center gap-2'>
                                    <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                    <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                </div>
                            </div>
                           
                </div>
                <div className='border mt-2  p-5 flex-col items-start justify-start py-5  rounded-md shadow-lg bg-white' >
                            <h2 className='font-medium text-[2vh]'>Riteclkssh vish corpratesldlk</h2>
                            <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-3'>
                               <div className='w-[100%] text-left py-2 '>
                                 <h3 className='text-[1.6vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                                <button className='px-2 mt-2 border-[#008BDC] border flex items-end text-[13px] text-[#008BDC] gap-2 py-[1px]  rounded-full '> <h2>Actively hiring</h2></button>
                               </div>
                                <div className='h-[6vh] object-cover object-center rounded-full overflow-hidden w-[8vh]'>
                                    <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                </div>
                            </div>
                            <div className='loc text-zinc-600 pt-5'>
                                <h2 className='text-[15px]  font-medium flex items-center gap-2'><PiHouseLineLight className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                <div className='flex items-center gap-2'>
                                    <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                    <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                </div>
                            </div>
                           
                </div>
                <div className='border mt-2  p-5 flex-col items-start justify-start py-5  rounded-md shadow-lg bg-white' >
                            <h2 className='font-medium text-[2vh]'>Riteclkssh vish corpratesldlk</h2>
                            <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-3'>
                               <div className='w-[100%] text-left py-2 '>
                                 <h3 className='text-[1.6vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                                <button className='px-2 mt-2 border-[#008BDC] border flex items-end text-[13px] text-[#008BDC] gap-2 py-[1px]  rounded-full '> <h2>Actively hiring</h2></button>
                               </div>
                                <div className='h-[6vh] object-cover object-center rounded-full overflow-hidden w-[8vh]'>
                                    <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                </div>
                            </div>
                            <div className='loc text-zinc-600 pt-5'>
                                <h2 className='text-[15px]  font-medium flex items-center gap-2'><PiHouseLineLight className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                <div className='flex items-center gap-2'>
                                    <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                    <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                </div>
                            </div>
                           
                </div>
                <div className='border mt-2  p-5 flex-col items-start justify-start py-5  rounded-md shadow-lg bg-white' >
                            <h2 className='font-medium text-[2vh]'>Riteclkssh vish corpratesldlk</h2>
                            <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-3'>
                               <div className='w-[100%] text-left py-2 '>
                                 <h3 className='text-[1.6vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                                <button className='px-2 mt-2 border-[#008BDC] border flex items-end text-[13px] text-[#008BDC] gap-2 py-[1px]  rounded-full '> <h2>Actively hiring</h2></button>
                               </div>
                                <div className='h-[6vh] object-cover object-center rounded-full overflow-hidden w-[8vh]'>
                                    <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                </div>
                            </div>
                            <div className='loc text-zinc-600 pt-5'>
                                <h2 className='text-[15px]  font-medium flex items-center gap-2'><PiHouseLineLight className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                <div className='flex items-center gap-2'>
                                    <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                    <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                </div>
                            </div>
                           
                </div>
                <div className='border mt-2  p-5 flex-col items-start justify-start py-5  rounded-md shadow-lg bg-white' >
                            <h2 className='font-medium text-[2vh]'>Riteclkssh vish corpratesldlk</h2>
                            <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-3'>
                               <div className='w-[100%] text-left py-2 '>
                                 <h3 className='text-[1.6vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                                <button className='px-2 mt-2 border-[#008BDC] border flex items-end text-[13px] text-[#008BDC] gap-2 py-[1px]  rounded-full '> <h2>Actively hiring</h2></button>
                               </div>
                                <div className='h-[6vh] object-cover object-center rounded-full overflow-hidden w-[8vh]'>
                                    <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                </div>
                            </div>
                            <div className='loc text-zinc-600 pt-5'>
                                <h2 className='text-[15px]  font-medium flex items-center gap-2'><PiHouseLineLight className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                <div className='flex items-center gap-2'>
                                    <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                    <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                </div>
                            </div>
                           
                </div>
                <div className='border mt-2  p-5 flex-col items-start justify-start py-5  rounded-md shadow-lg bg-white' >
                            <h2 className='font-medium text-[2vh]'>Riteclkssh vish corpratesldlk</h2>
                            <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-3'>
                               <div className='w-[100%] text-left py-2 '>
                                 <h3 className='text-[1.6vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                                <button className='px-2 mt-2 border-[#008BDC] border flex items-end text-[13px] text-[#008BDC] gap-2 py-[1px]  rounded-full '> <h2>Actively hiring</h2></button>
                               </div>
                                <div className='h-[6vh] object-cover object-center rounded-full overflow-hidden w-[8vh]'>
                                    <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                </div>
                            </div>
                            <div className='loc text-zinc-600 pt-5'>
                                <h2 className='text-[15px]  font-medium flex items-center gap-2'><PiHouseLineLight className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                <div className='flex items-center gap-2'>
                                    <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                    <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                </div>
                            </div>
                           
                </div>
                <div className='border mt-2  p-5 flex-col items-start justify-start py-5  rounded-md shadow-lg bg-white' >
                            <h2 className='font-medium text-[2vh]'>Riteclkssh vish corpratesldlk</h2>
                            <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-3'>
                               <div className='w-[100%] text-left py-2 '>
                                 <h3 className='text-[1.6vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                                <button className='px-2 mt-2 border-[#008BDC] border flex items-end text-[13px] text-[#008BDC] gap-2 py-[1px]  rounded-full '> <h2>Actively hiring</h2></button>
                               </div>
                                <div className='h-[6vh] object-cover object-center rounded-full overflow-hidden w-[8vh]'>
                                    <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                </div>
                            </div>
                            <div className='loc text-zinc-600 pt-5'>
                                <h2 className='text-[15px]  font-medium flex items-center gap-2'><PiHouseLineLight className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                <div className='flex items-center gap-2'>
                                    <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                    <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                </div>
                            </div>
                           
                </div>

            </div>
      </div>
    </>
  )
}

export default Interships
