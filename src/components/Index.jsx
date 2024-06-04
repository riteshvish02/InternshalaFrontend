import React, { useState } from 'react'
import Nav from './Nav'
import Navlogin from './partials/Navlogin'
import Studentnav from './partials/Studentnav'
import Login from './Login'

const Index = () => {
  const [isLoginpage,setisLoginpage] = useState(false)
  return (
    <>
     <Nav  Navleft={<Navlogin setlogin={setisLoginpage} />} Navright={<Studentnav  />}/>
    <div>
       {isLoginpage && <Login setlogin={setisLoginpage} ></Login>}
    </div>
    </>
  )
}

export default Index
