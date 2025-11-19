import  { createContext } from 'react'
import axios from 'axios'
import { useState } from 'react';

export const LLMcontext=createContext();
 
   const LLMresponse = ({ children }) => {
 const [resumedata, setResumedata] = useState()

     async  function axiosfecting() {
       const data = await axios.post('/api/create')
      const resumecode= data.data;
      setResumedata(resumecode)
    }

  return (
    <LLMcontext.Provider  value={[resumedata, axiosfecting]}> {children} </LLMcontext.Provider>
 
  )
}

export default LLMresponse
