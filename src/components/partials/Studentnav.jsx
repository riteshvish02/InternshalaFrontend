import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io"
const Studentnav = () => {
  return (
    <>
       <div className='flex  items-center  text-[#111111] font-medium justify-end h-full '>
        <Link className='px-3  h-full hover:bg-[#EAFCFF] flex items-center '>
            Internships <IoMdArrowDropdown className='scale-[1.4] mt-1 ml-1' />
        </Link>
        <Link className='px-5  h-full hover:bg-[#EAFCFF] flex items-center'>
           Jobs <IoMdArrowDropdown className='scale-[1.4] mt-1 ml-1' />
        </Link>
        <Link className='px-4  h-full hover:bg-[#EAFCFF] flex items-center'>
           Courses <IoMdArrowDropdown className='scale-[1.4] mt-1 ml-1' />
        </Link>
      </div>
    </>
  )
}

export default Studentnav
