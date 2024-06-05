import React, { useState } from 'react'
import { GoSearch } from "react-icons/go";
import { Link } from 'react-router-dom';
const Navlogin = ({setlogin}) => {
  return (
    <>
      <div className='flex items-center  gap-4 w-[80vh] justify-end'>
        <div className='flex gap-3 mr-2 items-center'>
        <GoSearch  className='scale-[1.6] text-zinc-700 font-medium' /> <h2 className='text-zinc-700 text-[2.2vh] font-medium'>Search</h2>
        </div>
        <Link onClick={()=>setlogin((prev)=>!prev)}  className='border-[#00A5EC] font-medium border-[1.5px] px-4 rounded py-1 text-[#00A5EC]'>
            Login
        </Link>
        <Link to={`/register/student`} className='bg-[#00A5EC] px-3 py-1 text-white font-medium rounded'>
           Candidate Sign-up
        </Link>
        <Link to={`/register/employee`} className='bg-[#00A5EC] text-white px-3 py-1 font-medium rounded'>
           Employer Sign-up
        </Link>
      </div>
    </>
  )
}

export default Navlogin
