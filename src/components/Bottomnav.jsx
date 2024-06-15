import React from 'react'
import { PiHouseLineLight } from "react-icons/pi";
import { PiTelegramLogo } from "react-icons/pi";
import { PiBag } from "react-icons/pi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { Link } from 'react-router-dom';
const Bottomnav = () => {
  return (
    <>
      <div className='w-full h-[10vh]  text-[3.5vh] text-zinc-900 flex items-center font-thin justify-between shadow-lg border-t border-zinc-300 px-[3vh] fixed left-0 bottom-0 z-[99999] bg-white'>
       <Link to={`/`}>
        <PiHouseLineLight className='font-extrabold'  />
       </Link>
      <Link to={`/internships`}>
      <PiTelegramLogo />
      </Link>
      <Link to={`/jobs`}>
      <PiBag />
      </Link>
      <Link to={`/courses`}>
      <MdOutlineOndemandVideo />
      </Link>
      </div>  
    </>
  )
}

export default Bottomnav
