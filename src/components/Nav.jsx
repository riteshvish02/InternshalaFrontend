import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({Navleft,Navright}) => {
  return (
    <>
      <div className='w-full  border-b-[1.7px] shadow-sm items-center justify-between flex h-[10vh] px-[19vh]'>
        <div className='navleft flex items-center max-sm:justify-between  gap-[6vh]'>
         <img className='w-[15.5vh] max-sm:absolute max-sm:left-8  object-cover object-center' src="https://upload.wikimedia.org/wikipedia/en/8/8b/Internshala_company_logo.png" alt="" />
         <Link className='bg-[#00A5EC] absolute px-3 text-white font-medium py-2 rounded-md right-10 lg:hidden'>Register</Link>
         <div className='max-sm:hidden'>
         {Navright}
         </div>
        </div>
        <div className='navright h-full flex items-center max-sm:hidden '>
          {Navleft}
        </div>
      </div>
      <div  className='w-[22vh] z-50 lg:hidden absolute right-3 h-[14vh] font-medium items-start pl-5 gap-2 pt-3 flex flex-col bg-red-400'>
        <Link to={ `/register/student`}>As a Student</Link>
        <Link to={`/register/employee`}>As a Employer</Link>
      </div>
    </>
  )
}

export default Nav
