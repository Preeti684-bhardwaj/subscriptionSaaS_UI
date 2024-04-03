import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button, Tab } from "@mui/material";
import "./Pricing.css";
import Navbar from "../navbar/Navbar";


export default function Pricing() {
  const [selectedOption, setSelectedOption] = useState("monthly");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const jsonData = 
        {
          "totalItems": 3,
          "products": [
            {
              "id": "1",
              "name": "Free Trial",
              "description": "Try our service for free",
              "currency": "USD",
              "features": [
                "Limited access",
                "Basic support"
              ],
              "subscriptionPlans": [
                {
                  "id": "11",
                  "frequency": "monthly",
                  "price": 0,
                  "createdAt": "2024-04-01T06:17:39.119Z",
                  "updatedAt": "2024-04-01T06:17:39.119Z",
                  "productId": "1"
                },
                {
                  "id": "12",
                  "frequency": "annually",
                  "price": 0,
                  "createdAt": "2024-04-01T06:19:11.587Z",
                  "updatedAt": "2024-04-01T06:19:11.587Z",
                  "productId": "1"
                },
                {
                  "id": "13",
                  "frequency": "half-yearly",
                  "price": 0,
                  "createdAt": "2024-04-01T06:19:11.587Z",
                  "updatedAt": "2024-04-01T06:19:11.587Z",
                  "productId": "1"
                },
                {
                  "id": "14",
                  "frequency": "quarterly",
                  "price": 0,
                  "createdAt": "2024-04-01T06:19:11.587Z",
                  "updatedAt": "2024-04-01T06:19:11.587Z",
                  "productId": "1"
                }
              ]
            },
            {
              "id": "2",
              "name": "Basic",
              "description": "Get started with essential features",
              "currency": "USD",
              "features": [
                "Full access",
                "Email support"
              ],
              "subscriptionPlans": [
                {
                  "id": "21",
                  "frequency": "monthly",
                  "price": 9.99,
                  "createdAt": "2024-04-01T06:17:39.119Z",
                  "updatedAt": "2024-04-01T06:17:39.119Z",
                  "productId": "2"
                },
                {
                  "id": "22",
                  "frequency": "annually",
                  "price": 109.99,
                  "createdAt": "2024-04-01T06:19:11.587Z",
                  "updatedAt": "2024-04-01T06:19:11.587Z",
                  "productId": "2"
                },
                {
                  "id": "23",
                  "frequency": "half-yearly",
                  "price": 59.99,
                  "createdAt": "2024-04-01T06:19:11.587Z",
                  "updatedAt": "2024-04-01T06:19:11.587Z",
                  "productId": "2"
                },
                {
                  "id": "24",
                  "frequency": "quarterly",
                  "price": 29.99,
                  "createdAt": "2024-04-01T06:19:11.587Z",
                  "updatedAt": "2024-04-01T06:19:11.587Z",
                  "productId": "2"
                }
              ]
            },
            {
              "id": "3",
              "name": "Premium",
              "description": "Unlock advanced features for professionals",
              "currency": "INR",
              "features": [
                "Full access",
                "Priority support",
                "Customization options"
              ],
              "subscriptionPlans": [
                {
                  "id": "31",
                  "frequency": "monthly",
                  "price": 699,
                  "createdAt": "2024-04-01T06:17:39.119Z",
                  "updatedAt": "2024-04-01T06:17:39.119Z",
                  "productId": "3"
                },
                {
                  "id": "32",
                  "frequency": "annually",
                  "price": 7999,
                  "createdAt": "2024-04-01T06:19:11.587Z",
                  "updatedAt": "2024-04-01T06:19:11.587Z",
                  "productId": "3"
                },
                {
                  "id": "33",
                  "frequency": "half-yearly",
                  "price": 3999,
                  "createdAt": "2024-04-01T06:19:11.587Z",
                  "updatedAt": "2024-04-01T06:19:11.587Z",
                  "productId": "3"
                },
                {
                  "id": "34",
                  "frequency": "quarterly",
                  "price": 2199,
                  "createdAt": "2024-04-01T06:19:11.587Z",
                  "updatedAt": "2024-04-01T06:19:11.587Z",
                  "productId": "3"
                }
              ]
            }
          ],
          "totalPages": 1,
          "currentPage": 0
        };      


      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  const getPriceLabel = (plan) => {
    switch (selectedOption) {
      case "monthly":
        return "month";
      case "annually":
        return "year";
      case "half-yearly":
        return "half year";
      case "quarterly":
        return "quarter";
      default:
        return "";
    }
  };

  return (
    <div>
      <Navbar />
      <div className="pricing-heading">
        <h1>  Pricing Plans </h1>
        <p className="title-description">
          Find the ideal pricing plan to suit your needs with our flexible
          options and dedicated support
        </p>
      </div>
      <div className="plan-type">
        <div className="plans">
          <Tab
            label="Monthly plans"
            className={`monthly ${
              selectedOption === "monthly" ? "selected" : ""
            }`}
            onClick={() => handleOptionClick("monthly")}
          />
          <Tab
            label="Quarterly plans"
            className={`quarterly ${
              selectedOption === "quarterly" ? "selected" : ""
            }`}
            onClick={() => handleOptionClick("quarterly")}
          />
          <Tab
            label="Half-Yearly plans"
            className={`half-yearly ${
              selectedOption === "half-yearly" ? "selected" : ""
            }`}
            onClick={() => handleOptionClick("half-yearly")}
          />
           <Tab
           style={{height:'2rem'}}
            label="Yearly plans"
            className={`annually ${
              selectedOption === "annually" ? "selected" : ""
            }`}
            onClick={() => handleOptionClick("annually")}
          />
        </div>
      </div>
      <div className="pricing-plans">
        {data.products.map((product) => (
          <Card key={product.id} className="pricing-plan">
            <CardContent>
              <Typography variant="h3" component="h2" style={{fontFamily:'Inter'}}>
                {product.name}
              </Typography>
              <Typography variant="body1" color="#525252" style={{fontFamily:'Inter',fontWeight:'400'}}>
                {product.description}
              </Typography>
              <Typography
                variant="h3"
                style={{ fontSize: "20px", fontWeight: 400 }}
              >
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: product.currency,
                }).format(
                  product.subscriptionPlans.find(
                    (plan) => plan.frequency === selectedOption
                  ).price
                )}{" "}
                / {getPriceLabel(product.subscriptionPlans[0])}
              </Typography>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index} className="feature">{feature}</li>
                ))}
              </ul>
              <Button variant="contained" className="subscribe">
                Subscribe
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
