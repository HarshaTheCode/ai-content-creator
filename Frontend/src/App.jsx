import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/contact.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';



const App = () => {


  async function axiosfecting() {
     const data = await axios.post('/api/create')
     console.log(data);
  }

  useEffect(() => {

  }, [])

  return (<>
  <Routes>
        {/* Route defines the path and the element (component) to render */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        
      </Routes>
    
  </>
  )
}

export default App