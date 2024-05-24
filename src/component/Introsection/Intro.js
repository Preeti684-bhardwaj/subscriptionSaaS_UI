import React from 'react';
import './intro.css';
import demo from './demo.mp4';
import portal from './Portal.png';
import dmtag from './training-video-icon 1.png';
import fstag from './fullscreen.png';

const Intro = () => {
  return (
    <div className='intro container'>
    
      <div className='introwrapper'>

          <div className='videosec'>
          <div className='introvideowrapper'>
            <video  autoPlay muted >
            <source src={demo} type="video/mp4"></source>
            </video>
              <div className="demovideotag"> <img src={dmtag} width={15}  height={16} alt="Online customer surveying tool" /> <span> Demo video </span> </div>
              <button id="fullscreenbtn"> <img src={fstag} alt="Online customer surveying solution"  /> </button>
          </div>
          </div>

           <div className='contentsec'>
            <div className='introcontent'>
                <img  id ="shineiconwrapper" src={portal} alt="portal icon" />
                <h2> Tired of static surveys with <br></br> low completion rates and bland data ? </h2>
                <p><strong style={{color:'#E87211'}}>AI Engage</strong> ushers in a new era of data collection with interactive video surveys. Craft engaging experiences that capture rich insights - all powered by the magic of AI. </p>
            </div>
           </div>

      </div>

    </div>
  )
}

export default Intro