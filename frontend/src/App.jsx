import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
function Main() {
  return <div className='font-primary'>
    hi there this is main
  </div>
}

export default App
