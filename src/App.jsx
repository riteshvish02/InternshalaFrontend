import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
     <Routes>
       <Route path='/' element={<Index/>} ></Route>
     </Routes>
    </>
  )
}

export default App
