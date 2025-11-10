import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
const App = () => {


 async function axiosfecting() {
  const getdata= await axios.get('/users')
   
      console.log(getdata.data);
 
 }

 useEffect(() => {
  axiosfecting();
 
    
 },[])
 
  return (
    <div>
      <h1> hey this is new app</h1>
      <input type="text" />
      <button>click </button>
    </div>
  )
}

export default App