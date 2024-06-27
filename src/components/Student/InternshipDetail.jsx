import { RiCalendarLine, RiDoorOpenLine, RiPlayCircleLine, RiWallet3Line } from '@remixicon/react'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { IoMdPeople } from 'react-icons/io'

const InternshipDetail = () => {
  return (
    <>
      <div className='w-full py-[8%]'>
        <h3 className='text-3xl text-center font-medium'>Corporate Sales Executive Job</h3>
         <div className='border min-h-[100vh] p-5  rounded-md w-[60%] m-auto mt-3'>
           <button className='px-2 mt-2 border-zinc-400 border flex items-end text-[13px] text-zinc-800 gap-2 py-[1px]  rounded '> <h2>Actively hiring</h2></button>
           <h2 className='text-xl font-semibold'>Corporate Sales Executive</h2>
           <h3 className='text-base text-zinc-400 font-semibold'>Corporate Sales Executive</h3>
           <h2 className='text-[15px] lg:text-[1.8vh]  font-medium flex items-center gap-2 mt-3'><CiLocationOn className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
           <div className=" mt-6 w-full h-24  flex">
            <div className="w-[25%] h-full ">
              <div className="flex gap-2 align-middle ">
                <RiPlayCircleLine
                  size={15}
                  className="mt-1"
                  color="#1a1a1aa8" // set custom `width` and `height`
                />
                <h3 className="text-base font-semibold  text-[#212121c5] ">
                  START DATE
                </h3>
              </div>
              <div className="">
                <h1 className="text-base font-semibold text-[#090909e0]  ">
                    hello
                </h1>
              </div>
            </div>
            <div className="w-[25%] h-full ">
              <div className="flex gap-2 align-middle ">
                <RiCalendarLine
                  size={15}
                  className="mt-1"
                  color="#1a1a1aa8" // set custom `width` and `height`
                />
                <h3 className="text-base font-semibold  text-[#212121c5] ">
                  DURATION
                </h3>
              </div>
              <div className="">
                <h1 className="text-base font-semibold text-[#090909e0]  ">
                  hello
                </h1>
              </div>
            </div>
            <div className="w-[25%] h-full ">
              <div className="flex gap-2 align-middle ">
                <RiWallet3Line
                  size={15}
                  className="mt-1"
                  color="#1a1a1aa8" // set custom `width` and `height`
                />
                <h3 className="text-base font-semibold  text-[#212121c5] ">
                  STIPEND
                </h3>
              </div>
              <div className="">
                <h1 className="text-base font-semibold text-[#090909e0]  ">
                  ₹ 2/month
                </h1>
              </div>
            </div>
            <div className="w-[25%] h-full ">
              <div className="flex gap-2 align-middle ">
                <RiDoorOpenLine
                  size={15}
                  className="mt-1"
                  color="#1a1a1aa8" // set custom `width` and `height`
                />
                <h3 className="text-base font-semibold  text-[#212121c5] ">
                 APPLY BY
                </h3>
              </div>
              <div className="">
                <h1 className="text-base font-semibold text-[#090909e0]  ">
                  Total 
                </h1>
              </div>
            </div>
          </div>
            <h3 className='flex items-center gap-2 text-zinc-500 font-medium'><IoMdPeople className='scale-[1.2]' /> 307 applicants</h3>
            <hr className='mt-2' />

            <h3 className='flex text-black items-center gap-2 text-[2.5vh] mt-1 font-medium'>About the internship</h3>
              <h4 className='text-zinc-600'>Selected intern's day-to-day responsibilities include:</h4>
              <div>
              <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                  <li>Again please don't nest lists if you want</li>
                  <li>Nobody wants to look at this.</li>
                  <li>I'm upset that we even have to bother styling this.</li>
              </ul>
              </div>
              <div className='mt-2'>
                 <h3 className='flex text-black items-center gap-2 text-[2.5vh] mt-1 font-medium'>Skill(s) required</h3>
                 <div className='flex items-center gap-3 mt-2'>
                 <h3 className='px-2 py-1 bg-zinc-200 text-zinc-600 rounded'>English Proficiency (Spoken)</h3>
                 <h3 className='px-2 py-1 bg-zinc-200 text-zinc-600 rounded'>English Proficiency (Spoken)</h3>
                 <h3 className='px-2 py-1 bg-zinc-200 text-zinc-600 rounded'>English Proficiency (Spoken)</h3>
                 </div>
              </div>
              <div className='mt-2'>
                 <h3 className='flex text-black items-center gap-2 text-[2.5vh] mt-1 font-medium'>Who can apply</h3>
                 <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                  <li>Again please don't nest lists if you want</li>
                  <li>Nobody wants to look at this.</li>
                  <li>I'm upset that we even have to bother styling this.</li>
                  </ul>
              </div>
              <div className='mt-2'>
                 <h3 className='flex text-black items-center gap-2 text-[2.5vh] mt-1 font-medium'>Perks</h3>
                 <div className='flex items-center gap-3 mt-2'>
                 <h3 className='px-2 py-1 bg-zinc-200 text-zinc-600 rounded'>English Proficiency (Spoken)</h3>
                 <h3 className='px-2 py-1 bg-zinc-200 text-zinc-600 rounded'>English Proficiency (Spoken)</h3>
                 <h3 className='px-2 py-1 bg-zinc-200 text-zinc-600 rounded'>English Proficiency (Spoken)</h3>
                 </div>
              </div>
              <div className='mt-2'>
                 <h3 className='flex text-black items-center gap-2 text-[2.5vh] mt-1 font-medium'>Additional information</h3>
                 <div className='flex items-center gap-3 mt-2'>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, porro.</p>
                 </div>
              </div>
              <div className='mt-2'>
                 <h3 className='flex text-black items-center gap-2 text-[2.5vh] mt-1 font-medium'>Number of openings</h3>
                 <div className='flex items-center gap-3 mt-2'>
                     <h3>10</h3>
                 </div>
              </div>  
              <div className='border'></div>
         </div>
      </div>
    </>
  )
}

export default InternshipDetail
