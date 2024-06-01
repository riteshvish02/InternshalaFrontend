import React from 'react'
import Nav from './Nav'
import Navlogin from './partials/Navlogin'
import Studentnav from './partials/Studentnav'
import Login from './Login'

const Index = () => {
  return (
    <>
     <Nav Navleft={<Navlogin/>} Navright={<Studentnav/>}/>
    <div>
       <Login></Login>
    </div>
    </>
  )
}

export default Index
