import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/abt' element={<About/>}/>
        <Route path='/cnt' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
