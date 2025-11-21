import { useContext, useEffect } from 'react'
import Hero from '../components/Hero'
import Navcomponent from '../components/Navcomponent'

const Home = () => {


  return (<>
  
  <Navcomponent/>
    <div className='  flex flex-col justify-center items-center bg-black px-10 pt-2 text-white text-sm  '>
      <h1>home page</h1>
      <Hero/>
      
    </div>
  </>
  )
}

export default Home
