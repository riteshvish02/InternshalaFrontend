import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import Nav from './components/Nav'
import Studentsignup from './components/Student/Studentsignup'

const App = () => {
  return (
    <>
     <Routes>
       <Route path='/' element={<Index/>} ></Route>
       <Route path='/register/student' element={<Studentsignup/>} ></Route>
     </Routes>
    </>
  )
}

export default App
