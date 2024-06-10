import React from 'react'
import { PiHouseLineLight } from "react-icons/pi";
import { PiTelegramLogo } from "react-icons/pi";
import { RiShoppingBagLine } from "react-icons/ri";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { Link } from 'react-router-dom';
const Bottomnav = () => {
  return (
    <>
      <div className='w-full h-[10vh] text-[3.5vh] text-zinc-500 flex items-center font-thin justify-between border-t border-zinc-400 px-[3vh] fixed left-0 bottom-0 z-[99999] bg-white'>
       <Link>
        <PiHouseLineLight className='font-extrabold' />
       </Link>
      <Link><PiTelegramLogo className='font-thin '/></Link>
      <Link><RiShoppingBagLine /></Link>
      <Link><RiShoppingBagLine /></Link>
      </div>
    </>
  )
}

export default Bottomnav
