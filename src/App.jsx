import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Studentsignup from './components/Student/Studentsignup'
import Employesignup from './components/Employee/Employesignup'
import Home from './components/Home'

const App = () => {
  return (
    <>
     <Routes>
       <Route path='/' element={<Home/>} ></Route>
       <Route path='/register/student' element={<Studentsignup/>} ></Route>
       <Route path='/register/employee' element={<Employesignup/>} ></Route>
     </Routes>
    </>
  )
}

export default App
