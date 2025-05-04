import React from 'react'
import Memory from './Memory'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Words from './Words'
import Grade2 from './grades/Grade-2'
import Grade3 from './grades/Grade-3'
import Grade5 from './grades/Grade-5'

const App = () => {
  return (
    <div className='min-h-screen  bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 backdrop-blur-sm bg-opacity-70" '>
    <Router>
     
      <Routes>
        
        <Route path='/words' element={<Words/>}/>
        <Route path='/' element={<Memory/>}/>
        <Route path='/grade-2' element={<Grade2/>}/>
        <Route path='/grade-3' element={<Grade3/>}/>
        <Route path='/grade-5' element={<Grade5/>}/>
      </Routes>
    
    </Router>
    </div>
  )
}

export default App