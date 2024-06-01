import React from 'react'
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
    <div className='w-full absolute top-0 left-0 h-screen bg-[#0000004d] flex items-center justify-center'>
        <form className='w-[55vh] rounded h-[68vh] bg-white shadow-sm p-3'>
            <IoMdClose className='block text-zinc-400 text-[3.5vh] float-end' />
            <div className='flex mt-8 items-center justify-center gap-1'>
              <button className='text-[2.5vh] font-medium text-[#00A5EC] border-b-[2.2px] border-[#00A5EC] w-[23vh] py-2'>
                Student
              </button>
              <button className='text-[2.5vh] font-medium text-[#00A5EC] border-b-[2.2px] border-[#00A5EC] w-[23vh] py-2'>
                Employer
              </button>
            </div>
            <button className='flex items-center py-1 w-[46vh] m-auto border-[1px] font-medium border-zinc-300 rounded mt-3 text-zinc-600  justify-center'>
                <img className='w-[3.8vh] object-cover object-center' src="https://t4.ftcdn.net/jpg/03/08/54/37/240_F_308543787_DmPo1IELtKY9hG8E8GlW8KHEsRC7JiDN.jpg" alt="" />
                Login With Google
            </button>
            <hr className='mt-4 w-[46vh] m-auto' />
           <div className='flex flex-col items-center'>
                <h2  className='font-medium text-[2vh] text-zinc-600'>OR</h2>
                
                    <div>
                        <h2 className='font-medium text-zinc-700'>Email</h2>
                        <input className='py-[6px] mt-1 w-[46vh] rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='ritesh@gmail.com' type="text" />
                    </div>
                    <div className='mt-4'>
                        <h2 className='font-medium text-zinc-700'>Password</h2>
                        <input className='py-[6px] mt-1 w-[46vh] rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='password must be strong' type="text" />
                    </div>
           </div>
           <Link className='m-5 float-end text-[#00A5EC] font-medium'>Forgot password ? </Link>
           <button className='flex bg-[#00A5EC] items-center py-2 w-[46vh] m-auto border-[1px] font-medium border-zinc-300 rounded mt-3 text-white justify-center'>
            Login
           </button>
           <h2 className='mt-3 text-center'>New to Internshala? Register <span className='font-medium'>(<Link className='text-[#00A5EC]'>Student</Link> / <Link className='text-[#00A5EC]'>Company</Link>)</span></h2>
        </form>
    </div> 
    </>
  )
}

export default Login
