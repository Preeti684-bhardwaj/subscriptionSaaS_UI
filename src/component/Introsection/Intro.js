import React from 'react'
import './intro.css'
import demo from './demo.mp4'

const Intro = () => {
  return (
    <div className='introcontainer'>
    
      <div className='introwrapper'>

        <div className='leftsec'>
            <div className='introcontent'>
                <h2> Tired of static surveys with low completion rates and bland data? </h2>
                <p> AIEngage ushers in a new era of data collection with interactive video surveys. Craft engaging experiences that capture rich insights - all powered by the magic of AI. </p>
            </div>
        
        </div>

        <div className='rightsec'>
     
            <div className='introvideowrapper'>
               <video  autoPlay muted controls>
               <source src={demo} type="video/mp4"></source>
               </video>
            </div>

        </div>

      </div>

    </div>
  )
}

export default Intro