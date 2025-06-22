import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Features from './components/Features'
import CarbonFootprint from './components/CarbonFootprint'
import Uploads from './components/Uploads'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Recipe Suggester</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/carbon-footprint">Carbon Footprint</Link></li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/carbon-footprint" element={<CarbonFootprint />} />
          <Route path="/uploads" element={<Uploads />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
