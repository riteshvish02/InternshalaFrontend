import React from 'react'
import Nav from '../Nav'
import { Link } from 'react-router-dom'

const Employesignup = () => {
  return (
    <>
     <div className='overflow-x-hidden'>
     {/* <Nav></Nav> */}
      <div className='relative min-h-[150vh] '>
        <div className='w-full relative p-1 h-[110vh] border-b-2'>
            <h2 className='mx-12 mt-8 text-[#212121] text-[8vh] font-bold'>Hire Interns & Freshers <span className='text-[#0073E7] italic'>faster</span></h2>
            <h3 className=' mx-12 mt-1 text-[#212121] text-[4vh] font-medium    '>Post Internships for Free & Hire Talent with up to 2 Years of Experience</h3>
        <form className='w-[58vh] absolute right-4 top-2 mt-8  shadow-blue-300 border rounded-xl h-[100vh] bg-white shadow-md p-3'>
            <div className='flex mt-8 items-center cursor-pointer justify-center gap-1'>
            </div>
           <div className='flex flex-col items-center'>
                    <div>
                        <h2 className='font-medium text-zinc-700'>Official Email Id</h2>
                        <input className='py-[8px] mt-1 w-[55vh] rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='ritesh@gmail.com' type="text" />
                    </div>
                    <div className='mt-4'>
                        <h2 className='font-medium text-zinc-700'>Password</h2>
                        <input className='py-[8px] mt-1 w-[55vh] rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='password must be strong' type="text" />
                    </div>
                    <div className='mt-4'>
                        <h2 className='font-medium text-zinc-700'>Contact</h2>
                        <input className='py-[8px] mt-1 w-[55vh] rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='Your mobile number' type="text" />
                    </div>
                    <div className='mt-4'>
                        <h2 className='font-medium text-zinc-700'>Organization</h2>
                        <input className='py-[8px] mt-1 w-[55vh] rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='Organization name' type="text" />
                    </div>
                    <div className='mt-4 flex gap-10'>
                       <div>
                          <h2 className='font-medium text-zinc-700'>First Name</h2>
                            <input className='py-[8px] mt-1 w-[25vh] rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='jhon' type="text" />
                       </div>
                       <div>
                          <h2 className='font-medium text-zinc-700'>Last Name</h2>
                            <input className='py-[8px] mt-1 w-[25vh] rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='doe' type="text" />
                       </div>
                    </div>
                    <div className='mt-4 flex gap-10'>
                       <div>
                          <h2 className='font-medium text-zinc-700'>Gender</h2>
                          <select className='py-[8px] cursor-pointer mt-1 w-[25vh] rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300 ' name="" id="">
                            <option className='py-2 c ' value="">Male</option>
                            <option value="">Female</option>
                          </select>
                       </div>
                      
                    </div>
           </div>
           <button className='flex bg-[#00A5EC] items-center py-2 w-[55vh] m-auto border-[1px] font-medium border-zinc-300 rounded mt-3 text-white justify-center'>
            Sign up
           </button>
           <h2 className='mt-3 text-center font-medium'>Already registered? <span className='font-medium text-[#00A5EC]'><Link>Login</Link></span></h2>
        </form>     
            <img className='absolute w-full h-full object-cover object-center top-0 z-[-1]' src={`https://internshala.com/static/images/registration/employer/registration_new/images/banner/r1920_banner_new.png`} alt="" />
        </div>
        <div className='w-full h-[60vh] pl-[20vh] pt-[8vh]'>
            <h2 className='text-4xl font-semibold'>Why Hire from Internshala?</h2>
            <h3 className='font-medium text-[#33333] text-xl mt-3'>Post your intern requirements and build your dream team with ease.</h3>
            <div className='border-[1.8px] mt-8 flex items-center justify-center rounded-md h-[30vh] border-[#22222] w-[80vw]'>
                <div className='border-r-[1.5px] p-3 pl-8 h-[60%] w-[35vh] border-[#22222]'>
                    <h3 className='text-[#006BC2] font-bold text-4xl'>25 Mn+</h3>
                    <h4 className='font-medium text-[2.5vh]'>candidates looking for Internships</h4>
                </div>
                <div className='border-r-[1.5px] p-3 pl-8 h-[60%] w-[35vh] border-[#22222]'>
                    <h3 className='text-[#006BC2] font-bold text-4xl'>1.7 Mn+</h3>
                    <h4 className='font-medium text-[2.5vh]'>candidates hiredPAN India</h4>
                </div>
                <div className='border-r-[1.5px] p-3 pl-8 h-[60%] w-[35vh] border-[#22222]'>
                    <h3 className='text-[#006BC2] font-bold text-4xl'>200+</h3>
                    <h4 className='font-medium text-[2.5vh]'>Job Profiles</h4>
                </div>
                <div className='border-r-[1.5px] p-3 pl-8 h-[60%] w-[35vh] border-[#22222]'>
                    <h3 className='text-[#006BC2] font-bold text-4xl'>250k +</h3>
                    <h4 className='font-medium text-[2.5vh]'>Companies Hiring on Internshala</h4>
                </div>
            </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Employesignup
