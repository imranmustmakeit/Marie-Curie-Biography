// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Biography from './pages/biography'
import Gallery from './pages/gallery'
import References from './pages/references/references'
import Education from './pages/educations/education'
import Awards from './pages/awards/awards'
import Research from './pages/research/research'
import Navbar from './component/navbar'
import Books from './pages/books/books'

function App() {

  return (
    <>
      <div className="navBackground">
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/biography' element={<Biography/>}/>
        <Route path='/award' element={<Awards />}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/references' element={<References />}/>
        <Route path='/research' element={<Research />}/>
        <Route path='/selectwork' element={<Books/>}/>
        <Route path='/education' element={<Education />}/>
      </Routes>
    </>
  )
}

export default App
