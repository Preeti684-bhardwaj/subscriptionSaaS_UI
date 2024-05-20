import React from 'react'
import Navbar from './component/navbar/Navbar'
import Pricing from './component/pricing/Pricing'
import Herosection from './component/herosection/Herosection'
import './App.css'
import Uniqueus from './component/Uniqueus/Uniqueus'
import Usecases from './component/Usecases/Usecases'
import Intro from './component/Introsection/Intro'
import FreeTrialBanner from './component/Freetrialbanner/FreeTrialBanner'


const Home = () => {
  return (
    <div className="App">
        <Navbar />
        
         <Herosection />
         
           <div className='main' >

               <Intro />

                <Uniqueus />

                <Usecases />

                <Pricing /> 
              
           </div>

           <FreeTrialBanner />
    
     </div>
  )
}

export default Home