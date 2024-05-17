import React from 'react'
import girlwithai from './hero-removebg.png'
import './heros.css'

const Herosection = () => {
  return (
    <div className='herosection'>
        <div  className='contentpart' >
                <h1> AIENGAGE Unveiling the Future of Surveys</h1>
                <h3> Engage, Analyze, Evolve!  Revolutionize your Surveys with Interactive Video Campaigns and AI. </h3>
            </div>

            <div className='picturepart'>
               <img  src={girlwithai} alt="online-survey-maker-business"   />
            </div>
       </div>
  )
}

export default Herosection