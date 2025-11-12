import React from 'react'
import Hero from '../components/Hero'
import Navcomponent from '../components/Navcomponent'

const Home = () => {
  return (<>
  
  <Navcomponent/>
    <div className='w-full h-155 flex flex-col justify-center items-center bg-black px-10 pt-2 text-white text-5xl '>
      <h1>home page</h1>
      <Hero/>
    </div>
  </>
  )
}

export default Home
