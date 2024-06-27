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
import Resume from './components/Student/Resume'
import '../public/stylesheets/styles.css'
import InternshipDetail from './components/Student/InternshipDetail'
import Jobdetail from './components/Student/Jobdetail'
import PostInternship from './components/Employee/PostInternship'
const App = () => {
  const [issearchbar,setsearchbar] = useState(false)
  const [isLoginpage,setisLoginpage] = useState(false)

  return (
    <>
     <div className='hide-scrollbar'>
          <Nav Navleft={<Navlogin setlogin={setisLoginpage}  setsearchbar={setsearchbar} />} Navright={<Studentnav  />}/>
          <Bottomnav/>


          <Routes>
              <Route path='/' element={<Home setisLoginpage={setisLoginpage} isLoginpage={isLoginpage} issearchbar={issearchbar} setsearchbar={setsearchbar} />} ></Route>
              <Route path='/register/student' element={<Studentsignup setisLoginpage={setisLoginpage} isLoginpage={isLoginpage} />} ></Route>
              <Route path='/student/resume' element={<Resume/>} ></Route>
              <Route path='/register/employee' element={<Employesignup setisLoginpage={setisLoginpage} isLoginpage={isLoginpage} />} ></Route>
              <Route path='/internships' element={<Interships/>} ></Route>
              <Route path='/internships/details/:id' element={<InternshipDetail/>} ></Route>
              <Route path='/jobs' element={<Jobs/>} ></Route>
              <Route path='/jobs/details/:id' element={<Jobdetail/>} ></Route>
              <Route path='/employee/form' element={<PostInternship/>} ></Route>

          </Routes>
     </div>
   
    </>
  )
}

export default App
