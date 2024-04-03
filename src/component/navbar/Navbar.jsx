import React from 'react'
import './Navbar.css'
import Button from '@mui/material/Button';
const Navbar = () => {
  return (
    <div className='navbar'>
      <Button variant="outlined" style={{borderColor:'#7B36D4' , color:'#7B36D4'}}>Signin</Button>
      <Button variant="outlined"style={{borderColor:'#7B36D4', color:'#7B36D4'}}>Signup</Button>
    </div>
  )
}

export default Navbar
