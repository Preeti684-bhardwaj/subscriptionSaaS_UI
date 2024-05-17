import React from 'react'
import './uniqueus.css'
import ivideoicon from './laptop-video-editing-icon.png';
import  logic from './administrator-developer-icon.png';
import  aiinsights from './audit-icon.png'


const Uniqueus = () => {
  return (
    <div className='uniqueussection'>
    
     <div className='uniqueuswrapper'>
      
            <h2> Here's what sets us apart </h2>

        <div className='cardswrapper'>
     
          <div className='cards'>
          
          <div className='cards-item-wrapper'>
          <div className='headsec'>
              <img src={ivideoicon}  alt="Interactive video survey" />
          </div>
          <div className='cardsinfo'>
           <h3>Interactive Video</h3>
           <p> Embed video questions and scenarios directly into your survey. Humanoid bots or voice-cloned avatars can deliver questions, creating a personalized and engaging experience.</p>
          </div>
          </div>

          </div>

          <div className='cards'>
          
          <div className='cards-item-wrapper'>
          <div className='headsec'>
                  <img src={logic}  alt="video survey" />
          </div>
          <div className='cardsinfo'>
           <h3>Branching Logic</h3>
           <p> Build dynamic surveys that adapt to user responses. Ask follow-up questions based on their choices, leading to deeper and more relevant data.</p>
          </div>
          </div>
          
          </div>

          <div className='cards'>
          
          <div className='cards-item-wrapper'>
          <div className='headsec'>
                 <img src={aiinsights}  alt="powerfull ai-insights survey video" />
          </div>
          <div className='cardsinfo'>
           <h3> AI-Powered Insights </h3>
           <p> Go beyond basic reports. Our AI engine analyzes responses, identifies trends, and delivers actionable insights to propel your business forward.</p>
          </div>
          </div>
          
          </div>

        </div>
     

     </div>

    </div>
  )
}

export default Uniqueus