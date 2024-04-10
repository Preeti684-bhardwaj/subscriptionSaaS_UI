import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Pricing from './component/pricing/Pricing';
import SignUp from './component/SignUp/SignUp';
import SignIn from './component/SignIn/SignIn';
import CheckoutForm from './component/CheckoutForm';


// Initialize Stripe with your publishable key
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
console.log("Publishable Key:", stripePromise);
// console.log("Client Secret:", process.env.REACT_APP_CLIENT_SECRET);
// console.log("Environment Variables:", process.env);
function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret:process.env.REACT_APP_CLIENT_SECRET,
  };
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
        {/* Wrap your application with the Elements provider */}
        <Elements stripe={stripePromise} options={options}>
          <Routes>
            <Route path="/" element={<Pricing />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/checkout" element={<CheckoutForm/>} />
          </Routes>
        </Elements>
      </div>
    </Router>
  );
}

export default App;
