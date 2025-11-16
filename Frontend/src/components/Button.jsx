import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({to,children,className}) => {
  return (
    <div>
      <Link className={`cursor-pointer text-white ${className}`} to={to} >{children}</Link>
    </div>
  )
}

export default Button
