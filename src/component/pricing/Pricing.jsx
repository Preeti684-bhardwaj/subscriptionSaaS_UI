import React, { useState, useEffect, lazy, Suspense } from "react";
import "./Pricing.css";
import axios from "axios";


const PayButton = lazy(() => import('../PayButton'));

const renderLoader = () => <p>Loading</p>;

export default function Pricing() {


  const [selectedTab, setSelectedTab] = useState("monthly");
  const [ subscriptiondata, setSubscriptiondata] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
    /* Api call for pending call requests */
    useEffect(() => {

      const fetchsubscriptiondata = async () => {
        try {
                const requesturl = `https://stream.xircular.io/api/v1/subscription_plan/getByFrequency?frequency=${selectedTab}`;
                const response = await axios.get(requesturl);
  
                console.log("Subscriptiondata Response",response.data);
                setSubscriptiondata(response.data);
                setLoading(false);
        
              } catch (error) {
                setLoading(false);
                setError(error.message);
                console.error('Error fetching data:', error);
              }
            };
  
            fetchsubscriptiondata();

        }, [selectedTab])




  // const fetchData = async () => {
  //   try {
  //     const jsonData = {
  //       totalItems: 3,
  //       products: [
  //         {
  //           id: "1",
  //           name: "Free Trial",
  //           description: "Try our service for free",
  //           currency: "USD",
  //           features: ["Limited access", "Basic support"],
  //           subscriptionPlans: [
  //             {
  //               id: "11",
  //               frequency: "monthly",
  //               price: 0,
  //               createdAt: "2024-04-01T06:17:39.119Z",
  //               updatedAt: "2024-04-01T06:17:39.119Z",
  //               productId: "1",
  //             },
  //             {
  //               id: "12",
  //               frequency: "annually",
  //               price: 0,
  //               createdAt: "2024-04-01T06:19:11.587Z",
  //               updatedAt: "2024-04-01T06:19:11.587Z",
  //               productId: "1",
  //             },
  //             {
  //               id: "13",
  //               frequency: "half-yearly",
  //               price: 0,
  //               createdAt: "2024-04-01T06:19:11.587Z",
  //               updatedAt: "2024-04-01T06:19:11.587Z",
  //               productId: "1",
  //             },
  //             {
  //               id: "14",
  //               frequency: "quarterly",
  //               price: 0,
  //               createdAt: "2024-04-01T06:19:11.587Z",
  //               updatedAt: "2024-04-01T06:19:11.587Z",
  //               productId: "1",
  //             },
  //           ],
  //         },
  //         {
  //           id: "2",
  //           name: "Basic",
  //           description: "Get started with essential features",
  //           currency: "USD",
  //           features: ["Full access", "Email support"],
  //           subscriptionPlans: [
  //             {
  //               id: "21",
  //               frequency: "monthly",
  //               price: 9.99,
  //               createdAt: "2024-04-01T06:17:39.119Z",
  //               updatedAt: "2024-04-01T06:17:39.119Z",
  //               productId: "2",
  //             },
  //             {
  //               id: "22",
  //               frequency: "annually",
  //               price: 109.99,
  //               createdAt: "2024-04-01T06:19:11.587Z",
  //               updatedAt: "2024-04-01T06:19:11.587Z",
  //               productId: "2",
  //             },
  //             {
  //               id: "23",
  //               frequency: "half-yearly",
  //               price: 59.99,
  //               createdAt: "2024-04-01T06:19:11.587Z",
  //               updatedAt: "2024-04-01T06:19:11.587Z",
  //               productId: "2",
  //             },
  //             {
  //               id: "24",
  //               frequency: "quarterly",
  //               price: 29.99,
  //               createdAt: "2024-04-01T06:19:11.587Z",
  //               updatedAt: "2024-04-01T06:19:11.587Z",
  //               productId: "2",
  //             },
  //           ],
  //         },
  //         {
  //           id: "3",
  //           name: "Premium",
  //           description: "Unlock advanced features for professionals",
  //           currency: "USD",
  //           features: [
  //             "Full access",
  //             "Priority support",
  //             "Customization options",
  //           ],
  //           subscriptionPlans: [
  //             {
  //               id: "31",
  //               frequency: "monthly",
  //               price: 699,
  //               createdAt: "2024-04-01T06:17:39.119Z",
  //               updatedAt: "2024-04-01T06:17:39.119Z",
  //               productId: "3",
  //             },
  //             {
  //               id: "32",
  //               frequency: "annually",
  //               price: 7999,
  //               createdAt: "2024-04-01T06:19:11.587Z",
  //               updatedAt: "2024-04-01T06:19:11.587Z",
  //               productId: "3",
  //             },
  //             {
  //               id: "33",
  //               frequency: "half-yearly",
  //               price: 3999,
  //               createdAt: "2024-04-01T06:19:11.587Z",
  //               updatedAt: "2024-04-01T06:19:11.587Z",
  //               productId: "3",
  //             },
  //             {
  //               id: "34",
  //               frequency: "quarterly",
  //               price: 2199,
  //               createdAt: "2024-04-01T06:19:11.587Z",
  //               updatedAt: "2024-04-01T06:19:11.587Z",
  //               productId: "3",
  //             },
  //           ],
  //         },
  //       ],
  //       totalPages: 1,
  //       currentPage: 0,
  //     };

  //     console.log(jsonData)
  //     setData(jsonData);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);



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
    <div  className="pricingcnt container section">

     <div className="pricingcntwrapper">

      <div className="pricing-heading">
        <h2 id="pricingtitle"> Pricing </h2>
        <p id="pricingdesc"> Find the ideal pricing plan to suit your needs with our flexible options and our dedicated supported </p>
       </div>

      <div className="plan-type">
        <div className="planswrapper">

          <div className={`tab ${selectedTab === 'monthly' ? 'active' : ''}`} onClick={() => handleTabClick('monthly')}>
            Monthly 
          </div>
          <div className={`tab ${selectedTab === 'quarterly' ? 'active' : ''}`} onClick={() => handleTabClick('quarterly')}>
            Quarterly 
          </div>
          <div className={`tab ${selectedTab === 'half-yearly' ? 'active' : ''}`} onClick={() => handleTabClick('half-yearly')}>
            Half-Yearly
          </div>
          <div className={`tab ${selectedTab === 'annually' ? 'active' : ''}`} onClick={() => handleTabClick('annually')}>
            Annual
          </div>

        </div>
      </div>

      <div className="pricing-plans">

        {subscriptiondata.map((plan) => (

          <div key={plan.product.id} className="pricing-card">

              <h2 id="subcrpname">  {plan.product.name} </h2>

               <p id="subcrpprice">
                  <strong id="subpricestrong">
                    { plan.price }/ 
                  </strong> 
                   { getPriceLabel(plan.frequency) }
               </p>

              <span id="subcrpdescp"> {plan.product.description} </span>

                <div className="featureswrapper">
                <ul className="features">
                {plan.product.features.map((feature, index) => (
                  <li key={index} className="feature-list">
                    {feature}
                  </li>
                  ))}
                </ul>
                </div>

              <Suspense fallback={renderLoader()}>
                <PayButton
                  planPrice={plan.price}
                  features={plan.product.features}
                  planName={plan.product.name}
                  frequency={plan.frequency}
                  description={plan.product.description}
                  />
              </Suspense>

           </div>

          ))
        }
      </div>


      </div>
    </div>
  );
}
