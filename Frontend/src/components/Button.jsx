import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ to, children, className }) => {
  return (
    <div>
      <Link className={`cursor-pointer text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/100 hover:text-black  ] ${className}`} to={to} >{children}</Link>
    </div>
  )
}

export default Button
