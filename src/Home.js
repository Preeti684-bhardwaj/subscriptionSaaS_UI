import React from 'react'
import Navbar from './component/navbar/Navbar'
import Pricing from './component/pricing/Pricing'
import Herosection from './component/herosection/Herosection'
import './App.css'
import Uniqueus from './component/Uniqueus/Uniqueus'
import Usecases from './component/Usecases/Usecases'


const Home = () => {
  return (
    <div className="App">
        <Navbar />
        
         <Herosection />
         
           <div className='main' >
                <Uniqueus />

                <Usecases />

                <Pricing /> 
              
           </div>
    
     </div>
  )
}

export default Home