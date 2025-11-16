import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Hero from '../components/Hero'
import Navcomponent from '../components/Navcomponent'

const Home = () => {

  const [resumedata, setResumedata] = useState('')

     async  function axiosfecting() {
       const data = await axios.post('/api/create')
      const resumecode= data.data;
      setResumedata(resumecode)
    }

  useEffect(() => {
  axiosfecting()
  
   
  }, [])
  

  return (<>
  
  <Navcomponent/>
    <div className='  flex flex-col justify-center items-center bg-black px-10 pt-2 text-white text-sm  '>
      <h1>home page</h1>
      <Hero/>
      
        <pre className='w-full h-200  bg-gray-950  mb-10 overflow-y-scroll overflow-x-auto hide-vertical    flex flex-col   px-10 py-10  text-white text-sm  ' >
          <code>
             {resumedata}
            </code>
          </pre>
          
        
        
    </div>
  </>
  )
}

export default Home
