import React from 'react'
import './Navbar.css'
import { Button } from '@mui/material'

const Navbar = () => {
  return (
    <div className='navbar'>
      <button className='signIn'>
      Sign in
      </button>
      <button className='signUp'>
      Sign up
      </button>
    </div>
  )
}

export default Navbar
