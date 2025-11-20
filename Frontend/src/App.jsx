import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/contact.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import LLMresponse from './context/LLMresponse.jsx';
import Authresponse from './pages/Auth/authresponse.jsx';
import Postdata from './context/PostData.jsx';



const App = () => {

  return (<>

    <LLMresponse>
<Postdata>
      <Routes>
        {/* Route defines the path and the element (component) to render */}
        <Route path="/" element={
          <Home />
        } />
        <Route path="/about" element={<Authresponse>

          <About />
        </Authresponse>} />
        <Route path="/contact" element={
          
          <Authresponse>

            <Contact />
          </Authresponse>
        } />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>

            </Postdata>
    </LLMresponse>
  </>
  )
}

export default App