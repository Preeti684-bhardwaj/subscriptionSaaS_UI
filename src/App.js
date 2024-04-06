import React, { useState ,useEffect} from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignUp from './component/SignUp/SignUp';
import Pricing from './component/pricing/Pricing';
import SignIn from './component/SignIn/SignIn';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false); 

  useEffect(() => {
    // Checking  authentication status over here, checking by looking at a token in local storage
    const userToken = localStorage.getItem('accessToken');
    if (userToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    //  accessToken is stored in localStorage
    const accessToken = localStorage.getItem('accessToken');

    // Display an alert
    // window.alert("Logout successful");

    // Remove the accessToken from localStorage
    localStorage.removeItem('accessToken');

    // Set isAuthenticated to false 
    setIsAuthenticated(false);


    setEmailVerified(false);

   
  };

  return (
    <Router>
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
          <Route path="/" element={<Pricing/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/SignIn" element={<SignIn setIsAuthenticated={ setIsAuthenticated }/>} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
