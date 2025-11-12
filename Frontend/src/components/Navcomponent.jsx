import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

const Navcomponent = () => {
  return (
    <nav className="flex justify-between items-center px-10 ">
  <div className=" flex gap-5  py-3 ">

    <Link to='/' >MyApp</Link>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
       
    
  </div>

  <div className="flex gap-3">
    <button className="cursor-pointer">🌙</button>
    <Link to='/signin'>Sign in </Link>
  </div>
</nav>
  )
}

export default Navcomponent
