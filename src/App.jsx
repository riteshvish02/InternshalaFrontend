import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Studentsignup from './components/Student/Studentsignup'
import Employesignup from './components/Employee/Employesignup'
import Home from './components/Home'
import Interships from './components/Interships'
import Jobs from './components/Jobs'
import Navlogin from './components/partials/Navlogin'
import Studentnav from './components/partials/Studentnav'
import Bottomnav from './components/Bottomnav'
import '../public/stylesheets/styles.css'
const App = () => {
  const [isLoginpage,setisLoginpage] = useState(false)
  return (
    <>
     <div className=''>
          <Nav Navleft={<Navlogin setlogin={setisLoginpage} />} Navright={<Studentnav  />}/>
          <Bottomnav/>


          <Routes>
              <Route path='/' element={<Home/>} ></Route>
              <Route path='/register/student' element={<Studentsignup/>} ></Route>
              <Route path='/register/employee' element={<Employesignup/>} ></Route>
              <Route path='/internships' element={<Interships/>} ></Route>
              <Route path='/jobs' element={<Jobs/>} ></Route>
          </Routes>
     </div>
   
    </>
  )
}

export default App
