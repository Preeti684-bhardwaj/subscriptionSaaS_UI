import React from 'react';
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import logo from './aiengagelogo.png';

const Navbar = () => {

      const navigate = useNavigate();
      // Retrieve accessToken from localStorage
      const accessToken = localStorage.getItem('accessToken');
      console.log("Acesss Token:", accessToken)
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

      <div className='logowrapper'>
        <img src={logo}  alt="Online video survey maker" />
      </div>
   
      {/* Render the "Sign in" button if accessToken does not exist */}
       { !accessToken &&
           ( <button className='signUp btn' onClick={() => navigate("/SignUp")}>
                Sign up
               </button>)
         }


      {/* Render the userName if it exists */}
      {userName && (   
            <div className='userName' >
              Welcome, {Name}    
              <button style={{marginLeft:'1rem'}}  className='btn' onClick={() => window.location.href = `https://new-video-editor.vercel.app/listings?accessToken=${accessToken}`} > Go to Dashboard </button>  
            </div>   
          )}

    </div>
  );
};

export default Navbar;
