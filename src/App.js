import React from 'react'
import News from './News'
import Menu from './Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<News category="all"/>}/>
      <Route path="/sports" element={<News category="sports"/>}/>
      <Route path="/business" element={<News category="business"/>}/>
      <Route path="/technology" element={<News category="technology"/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App