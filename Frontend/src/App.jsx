import React from 'react'
import { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/contact.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import LLMresponse from './context/LLMresponse.jsx';
import ProtectedRoutes from './pages/Auth/ProtectedRoutes.jsx';



const App = () => {


 



  return (<>


  <LLMresponse>


  <Routes>
        {/* Route defines the path and the element (component) to render */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={
          <ProtectedRoutes>
            <About/>
          </ProtectedRoutes>
            } />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        
      </Routes>
    
  </LLMresponse>
  </>
  )
}

export default App