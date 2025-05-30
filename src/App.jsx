import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Mekanlar from './components/Mekanlar'
import About from './components/About'
import Yorumlar from './components/Yorumlar'
import Login from './components/Login';
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <main>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mekanlar' element={<Mekanlar />} />
            <Route path='/about' element={<About />} />
            <Route path='/yorumlar' element={<Yorumlar />} />
            <Route path='/login' element={<Login />} />
            <Route path="/register" element={<Register />}/>
          </Routes>
      </main>
    </div>
    </Router>
  )
}

export default App