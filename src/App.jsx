import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Join from './Join'
import Zego_Cloud from './Zego_Cloud'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Join/>}/>
      <Route path='/room/:id' element={<Zego_Cloud/>}/>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
