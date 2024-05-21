import React, { useState, useEffect, lazy, Suspense } from "react";
import { Card, CardContent, Typography,CardActions } from "@mui/material";
import "./Pricing.css";
import { useRecoilState } from "recoil";
import { selectedProductAtom, selectedPriceAtom } from "../../recoil/store"; // Import the selectedPriceAtom

const PayButton = lazy(() => import('../PayButton'));

const renderLoader = () => <p>Loading</p>;

export default function Pricing() {
  const [selectedTab, setSelectedTab] = useState("monthly");
  const [selectedProduct, setSelectedProduct] = useRecoilState(selectedProductAtom);
  const [selectedPrice, setSelectedPrice] = useRecoilState(selectedPriceAtom); // Use the selectedPriceAtom
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(selectedProduct);
  console.log(selectedPrice);
  // console.log(selectedProduct);
  // console.log(selectedPrice);

  const fetchData = async () => {
    try {
      const jsonData = {
        totalItems: 3,
        products: [
          {
            id: "1",
            name: "Free Trial",
            description: "Try our service for free",
            currency: "USD",
            features: ["Limited access", "Basic support"],
            subscriptionPlans: [
              {
                id: "11",
                frequency: "monthly",
                price: 0,
                createdAt: "2024-04-01T06:17:39.119Z",
                updatedAt: "2024-04-01T06:17:39.119Z",
                productId: "1",
              },
              {
                id: "12",
                frequency: "annually",
                price: 0,
                createdAt: "2024-04-01T06:19:11.587Z",
                updatedAt: "2024-04-01T06:19:11.587Z",
                productId: "1",
              },
              {
                id: "13",
                frequency: "half-yearly",
                price: 0,
                createdAt: "2024-04-01T06:19:11.587Z",
                updatedAt: "2024-04-01T06:19:11.587Z",
                productId: "1",
              },
              {
                id: "14",
                frequency: "quarterly",
                price: 0,
                createdAt: "2024-04-01T06:19:11.587Z",
                updatedAt: "2024-04-01T06:19:11.587Z",
                productId: "1",
              },
            ],
          },
          {
            id: "2",
            name: "Basic",
            description: "Get started with essential features",
            currency: "USD",
            features: ["Full access", "Email support"],
            subscriptionPlans: [
              {
                id: "21",
                frequency: "monthly",
                price: 9.99,
                createdAt: "2024-04-01T06:17:39.119Z",
                updatedAt: "2024-04-01T06:17:39.119Z",
                productId: "2",
              },
              {
                id: "22",
                frequency: "annually",
                price: 109.99,
                createdAt: "2024-04-01T06:19:11.587Z",
                updatedAt: "2024-04-01T06:19:11.587Z",
                productId: "2",
              },
              {
                id: "23",
                frequency: "half-yearly",
                price: 59.99,
                createdAt: "2024-04-01T06:19:11.587Z",
                updatedAt: "2024-04-01T06:19:11.587Z",
                productId: "2",
              },
              {
                id: "24",
                frequency: "quarterly",
                price: 29.99,
                createdAt: "2024-04-01T06:19:11.587Z",
                updatedAt: "2024-04-01T06:19:11.587Z",
                productId: "2",
              },
            ],
          },
          {
            id: "3",
            name: "Premium",
            description: "Unlock advanced features for professionals",
            currency: "USD",
            features: [
              "Full access",
              "Priority support",
              "Customization options",
            ],
            subscriptionPlans: [
              {
                id: "31",
                frequency: "monthly",
                price: 699,
                createdAt: "2024-04-01T06:17:39.119Z",
                updatedAt: "2024-04-01T06:17:39.119Z",
                productId: "3",
              },
              {
                id: "32",
                frequency: "annually",
                price: 7999,
                createdAt: "2024-04-01T06:19:11.587Z",
                updatedAt: "2024-04-01T06:19:11.587Z",
                productId: "3",
              },
              {
                id: "33",
                frequency: "half-yearly",
                price: 3999,
                createdAt: "2024-04-01T06:19:11.587Z",
                updatedAt: "2024-04-01T06:19:11.587Z",
                productId: "3",
              },
              {
                id: "34",
                frequency: "quarterly",
                price: 2199,
                createdAt: "2024-04-01T06:19:11.587Z",
                updatedAt: "2024-04-01T06:19:11.587Z",
                productId: "3",
              },
            ],
          },
        ],
        totalPages: 1,
        currentPage: 0,
      };

      console.log(jsonData)
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

  // const handleOptionClick = (option) => {
  //   setSelectedOption(option);
  // };

  // const makePayment = async()=>{
  //   const stripe=await loadStripe(process.env.REACT_PUBLISHABLE_KEY)
  //  const body={
  //   products:jsonData[products]
  //  }
  //  const header ={
  //   "Content-Type":"application/json"
  //  }
  //  const response=await fetch

  // }
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const getPriceLabel = (plan) => {
    switch (selectedTab) {
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
    <div  className="pricing-container">
      <div className="pricing-heading">
        <h1> Pricing Plans </h1>
        <p className="description01">
          Find the ideal pricing plan to suit your needs with our flexible
          options
        </p>
        <p className="description02">
          and our dedicated supported
        </p>
      </div>
      <div className="plan-type">
        <div className="plans">
          <div className={`tab ${selectedTab === 'monthly' ? 'active' : ''}`} onClick={() => handleTabClick('monthly')}>
            Monthly plans
          </div>
          <div className={`tab ${selectedTab === 'quarterly' ? 'active' : ''}`} onClick={() => handleTabClick('quarterly')}>
            Quarterly plans
          </div>
          <div className={`tab ${selectedTab === 'half-yearly' ? 'active' : ''}`} onClick={() => handleTabClick('half-yearly')}>
            Half-Yearly plans
          </div>
          <div className={`tab ${selectedTab === 'annually' ? 'active' : ''}`} onClick={() => handleTabClick('annually')}>
            Yearly plans
          </div>
        </div>
      </div>
      <div className="pricing-plans">
        {data.products.map((product) => (
          <Card key={product.id} className="pricing-plan">
            <CardContent>
              <Typography
                variant="h3"
                component="h2"
                style={{ fontFamily: "Inter" ,fontWeight:'400',fontSize:'1.5rem',marginBottom:'12px'}}
              >
                {product.name}
              </Typography>
              <Typography
                variant="body1"
                color="#525252"
                style={{ fontFamily: "Inter", fontWeight: "400" }}
              >
                {product.description}
              </Typography>
              <ul className="features">
                {product.features.map((feature, index) => (
                  <li key={index} className="feature-list">
                    {feature}
                  </li>
                ))}
              </ul>
              <Typography
                variant="h3"
                style={{ fontSize: "1.67rem", fontWeight: 600 , marginTop:'8px'}}
              >
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: product.currency,
                }).format(
                  product.subscriptionPlans.find(
                    (plan) => plan.frequency === selectedTab
                  ).price
                )}{" "}
                / {getPriceLabel(product.subscriptionPlans[0])}
              </Typography>
            </CardContent>
            <CardActions>          
            <Suspense fallback={renderLoader()}>
               <PayButton
                planPrice={product.subscriptionPlans.find(plan => plan.frequency === selectedTab).price}
                features={product.features}
                planName={product.name}
                description={product.description}
                />
            </Suspense>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
