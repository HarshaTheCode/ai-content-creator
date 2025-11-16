import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({to,children}) => {
  return (
    <div>
      <Link className='cursor-pointer text-white ' to={to} >{children}</Link>
    </div>
  )
}

export default Button
