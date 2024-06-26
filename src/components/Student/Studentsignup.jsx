import React from 'react'
import Nav from '../Nav'
import { Link } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'
import Login from '../Login'

const Studentsignup = ({isLoginpage,setisLoginpage}) => {
  return (
    <div className='w-[100vw] overflow-x-hidden'>
            {isLoginpage && <Login setlogin={setisLoginpage} ></Login>}
      <div className=' items-center py-[25%] lg:py-[8%] flex flex-col'>
        <h2 className='text-[3vh] font-bold text-[#333333] lg:text-5xl'>Sign-up and apply for free</h2>
        <h3 className='text-base text-[#333333] lg:text-2xl mt-3 font-medium'>1,50,000+ companies hiring on Internshala</h3>
        <form className='w-full h-full lg:mt-5 lg:shadow-lg lg:rounded-[20px] lg:w-[30%]  lg:shadow-blue-300 border  bg-white p-3'>
            <div className='flex mt-8 items-center cursor-pointer justify-center gap-1'>
            </div>
           <div>
            <button className='flex items-center gap-2 py-2 w-full m-auto border-[1px] font-medium border-zinc-300 rounded mt-3 text-zinc-600  justify-center'>
            <img className='w-[3vh] object-cover object-center' src="https://t4.ftcdn.net/jpg/03/08/54/37/240_F_308543787_DmPo1IELtKY9hG8E8GlW8KHEsRC7JiDN.jpg" alt="" />
              Login With Google
            </button>
            <hr className='mt-4 w-full m-auto' />
            <h2  className='font-medium text-[2vh] text-center text-zinc-600'>OR</h2>
           </div>
           <div className='flex flex-col items-center'>
                
                    <div className='w-full'>
                        <h2 className='font-medium text-zinc-700'>Email</h2>
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
                    <div className='mt-4 w-full flex gap-10'>
                       <div className='w-full'>
                          <h2 className='font-medium text-zinc-700'>First Name</h2>
                            <input className='py-[8px] mt-1 w-[100%]  rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='jhon' type="text" />
                       </div>
                       <div className='w-full'>
                          <h2 className='font-medium text-zinc-700'>Last Name</h2>
                            <input className='py-[8px] mt-1 w-[100%] rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='doe' type="text" />
                       </div>
                    </div>
                    <div className='mt-4 w-full flex gap-10'>
                       <div className='w-full'>
                          <h2 className='font-medium text-zinc-700'>Gender</h2>
                          <select className='py-[8px] cursor-pointer mt-1 w-[100%] rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300 ' name="" id="">
                            <option className='py-2 c ' value="">Male</option>
                            <option value="">Female</option>
                          </select>
                       </div>
                       <div className='w-full'>
                          <h2 className='font-medium text-zinc-700'>City</h2>
                            <input className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='city' type="text" />
                       </div>
                    </div>
           </div>
           <button className='flex bg-[#00A5EC] items-center py-2 w-full m-auto border-[1px] font-medium border-zinc-300 rounded mt-3 text-white justify-center'>
            Sign up
           </button>
           <h2 className='mt-3 text-center font-medium'>Already registered? <span className='font-medium text-[#00A5EC]'><Link>Login</Link></span></h2>
        </form>
      </div>
    </div>
  )
}

export default Studentsignup
