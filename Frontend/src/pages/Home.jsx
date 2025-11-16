import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Hero from '../components/Hero'
import Navcomponent from '../components/Navcomponent'
import  { LLMcontext } from '../context/LLMresponse'

const Home = () => {

  const [resumedata, axiosfecting] = useContext(LLMcontext);


  return (<>
  
  <Navcomponent/>
    <div className='  flex flex-col justify-center items-center bg-black px-10 pt-2 text-white text-sm  '>
      <h1>home page</h1>
      <Hero/>
      
        <pre className='w-full   bg-gray-950  mb-10 overflow-y-scroll overflow-x-auto hide-vertical rounded-2xl   flex flex-col   px-10 py-10  text-white text-sm  ' >
         
          <code>
            {resumedata}
            </code>
            
          </pre>
          

      <button onClick={axiosfecting} >click </button>
        
        
    </div>
  </>
  )
}

export default Home
