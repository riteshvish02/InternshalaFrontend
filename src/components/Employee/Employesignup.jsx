import React from 'react'
import Nav from '../Nav'
import { Link } from 'react-router-dom'
import Login from '../Login'

const Employesignup = ({isLoginpage,setisLoginpage}) => {
  return (
    <>
     <div className='overflow-x-hidden'>
     {isLoginpage && <Login setlogin={setisLoginpage} ></Login>}
      <div className='relative  min-h-[100vh]  py-[15%] lg:py-[5%] '>
        <div className='w-full  p-1 lg:h-[120vh] h-[110vh]  border-b-2'>
            <h2 className='mx-3 mt-8 text-[#212121] text-[3.5vh] whitespace-nowrap font-bold lg:text-7xl'>Hire Interns & Freshers <br className='lg:hidden' /> <span className='text-[#0073E7] italic'>faster</span></h2>
            <h3 className='mx-3  mt-1 text-center text-[#212121] text-[2vh] font-medium  lg:float-left  lg:text-2xl ;g:text-zinc-800 '>Post Internships for Free & Hire Talent with up to 2 Years of Experience</h3>
            <img className=' w-full lg:h-[100%] h-[30%] object-cover object-center lg:absolute  top-0 lg:z-[-1]' src={`https://internshala.com/static/images/registration/employer/registration_new/images/banner/r1920_banner_new.png`} alt="" />
        <form className='w-[90%]  lg:w-[25%] lg:float-right lg:mr-6 lg:mt-0 m-auto mt-5  shadow-blue-300 border rounded-xl h-[80vh] lg:h-[90vh] bg-white  shadow-md p-3'>
            <div className='flex mt-8 items-center cursor-pointer justify-center gap-1'>
            </div>
           <div className='flex flex-col items-center w-full'>
                    <div className='w-full'>
                        <h2 className='font-medium text-zinc-700'>Official Email Id</h2>
                        <input className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='ritesh@gmail.com' type="text" />
                    </div>
                    <div className='mt-4 w-full'>
                        <h2 className='font-medium text-zinc-700'>Password</h2>
                        <input className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='password must be strong' type="text" />
                    </div>
                    <div className='mt-4 w-full'>
                        <h2 className='font-medium text-zinc-700'>Contact</h2>
                        <input className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='Your mobile number' type="text" />
                    </div>
                    <div className='mt-4 w-full'>
                        <h2 className='font-medium text-zinc-700'>Organization</h2>
                        <input className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='Organization name' type="text" />
                    </div>
                    <div className='mt-4 w-full flex gap-10'>
                       <div>
                          <h2 className='font-medium text-zinc-700'>First Name</h2>
                            <input className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='jhon' type="text" />
                       </div>
                       <div>
                          <h2 className='font-medium text-zinc-700'>Last Name</h2>
                            <input className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='doe' type="text" />
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
           <button className='flex w-full bg-[#00A5EC] items-center py-2  m-auto border-[1px] font-medium border-zinc-300 rounded mt-3 text-white justify-center'>
            Sign up
           </button>
           <h2 className='mt-3 text-center font-medium'>Already registered? <span className='font-medium text-[#00A5EC]'><Link>Login</Link></span></h2>
        </form>     
        </div>
        <div className='w-full bg-red-400 hidden '>
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
