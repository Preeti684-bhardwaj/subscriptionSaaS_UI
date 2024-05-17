import React from 'react'
import './usecases.css'
import marketresearch from './marketresearch.jpg'
import customers from './customers.jpg'
import education from './educations.jpg'
import employee from './employee.jpg'
import healthcare from './healthcare.jpg'


const Usecases = () => {
  return (
    <div className='usecasessection'>
    
    <div className='usecaseswrapper'>
    
          <h2> Usecases for Every Industry </h2>

        <div className="grid-container">
        
         <div className="grid-item">
              <div className="image">
                <img src={marketresearch} alt="survey tools for small business" />
              </div>
              <div className="content">
              <h2> Market Research  </h2>
              <p> Gain a deeper understanding of customer preferences with interactive product demos and video-based focus groups.</p>
              </div>
         </div>

          <div className="grid-item">
              <div className="image">
              <img src={customers} alt="customer survey tools" />
              </div>

              <div className="content">
              <h2> Customer Satisfaction </h2>
              <p> Personalize the feedback process with video surveys, leading to higher completion rates and valuable customer insights. </p>
              </div>
          </div>

          <div className="grid-item">
              <div className="image">
              <img src={employee} alt="customer survey tools" />
              </div>

              <div className="content">
              <h2> Employee Engagement </h2>
              <p>Create engaging training modules and satisfaction surveys with interactive video, fostering a positive work environment.</p>
              </div>
          </div>

          <div className="grid-item">
              <div className="image">
              <img src={education} alt="customer survey tools" />
              </div>

              <div className="content">
              <h2> Education & Learning </h2>
              <p> Develop interactive video lessons with branching scenarios to personalize the learning experience for each student. </p>
              </div>
          </div>

          <div className="grid-item">
              <div className="image">
              <img src={healthcare} alt="customer survey tools" />
              </div>

              <div className="content">
              <h2> Healthcare </h2>
              <p> Conduct patient interviews and gather feedback in a more natural and engaging way through video surveys. </p>
              </div>
          </div>


         </div>

        </div>

     </div>

  )
}

export default Usecases;