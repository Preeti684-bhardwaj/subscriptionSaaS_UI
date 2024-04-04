import React from 'react'
import './Navbar.css'
// import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
 const navigate = useNavigate();
  return (
    <div className='navbar'>
      <button className='signIn'>
      Sign in
      </button>
      <button className='signUp' onClick={() => navigate("/SignUp")}>
      Sign up
      </button>
    </div>
  )
}

export default Navbar
