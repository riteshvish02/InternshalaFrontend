import React from 'react'

const Nav = ({Navleft,Navright}) => {
  return (
    <>
      <div className='w-full border-b-[1.7px] shadow-sm items-center justify-between flex h-[10vh] px-[19vh]'>
        <div className='navleft flex items-center  h-full gap-[6vh]'>
         <img className='w-[15.5vh] object-cover object-center' src="https://upload.wikimedia.org/wikipedia/en/8/8b/Internshala_company_logo.png" alt="" />
          {Navright}
        </div>
        <div className='navright h-full flex items-center '>
          {Navleft}
        </div>
      </div>
    </>
  )
}

export default Nav
