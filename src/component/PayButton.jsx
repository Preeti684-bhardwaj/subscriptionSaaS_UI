import axios from 'axios';
import React from 'react';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PayButton = ({ planPrice, features, planName, description }) => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    // Log the data when the button is clicked
    console.log("Plan Price:", planPrice);
    console.log("Features:", features);
    console.log("Plan Name:", planName);
    console.log("Description:", description);

    const accessToken = localStorage.getItem('accessToken');
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');


    if (!accessToken || !userId) {
      // If either accessToken or userId is not available, redirect to SignIn
      navigate("/SignIn");
      return; // Exit function to prevent further execution
    }

    // Both accessToken and userId are available, proceed with creating checkout session
    axios.post("https://subscriptionplan-server.onrender.com/create-checkout-session", {
      planPrice,
      features,
      planName,
      description,
      userId: userId,
      userName:userName
    })
    .then((res) => {
      if(res.data.url) {
        // Redirect to the checkout URL returned by the server
        window.location.href = res.data.url;
      }
    })
    .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <Button variant="contained" className="subscribe" onClick={handlePurchase}>
        Subscribe
      </Button>
    </div>
  );
};

export default PayButton;
