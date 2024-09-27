import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer fixed-bottom'>
      <h4 className='text-center '>All rights reserved &copy; Ecommerce</h4>
      <p className="text-center mt-3">
        <Link to='/about'>About</Link>|
        <Link to='/contact'>Conatct</Link>|
        <Link to='/policy'>Privacy policy</Link>
      </p>
    </div>
  )
}

export default Footer
