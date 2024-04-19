import React from 'react';
import './Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // Retrieve accessToken from localStorage
  const accessToken = localStorage.getItem('accessToken');
  const userName = localStorage.getItem('userName');

  // Define a function to extract the name from the email
  const extractNameFromEmail = (email) => {
    // Split the email by '@' symbol and return the first part (name)
    return email.split('@')[0];
  };

  // If accessToken exists, extract the name from it
  // Otherwise, set the name to an empty string
  const Name = userName ? extractNameFromEmail(userName) : '';

  return (
    <div className='navbar'>
      {/* Render the "Sign in" button if accessToken does not exist */}
      {!accessToken && (
        <button className='signIn' onClick={() => navigate("/SignIn")}>
          Sign in
        </button>
      )}
      {/* Render the userName if it exists */}
      {userName && (
        <div className='userName' style={{marginTop:'20px',fontFamily:'Inter',fontSize:'15px', fontWeight:'600'}}>
          Welcome, {Name}
        </div>
      )}
      {/* Uncomment this section if you want to render a "Sign up" button */}
      {/* <button className='signUp' onClick={() => navigate("/SignUp")}>
        Sign up
      </button> */}
    </div>
  );
};

export default Navbar;
