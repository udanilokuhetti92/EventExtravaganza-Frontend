import React from 'react'
import Navigation from '../components/navigation/navigation'
import '../budget_filtering/budget_filtering.css'
import '../checklist/checklist.css'

export default function checklist() {
  return (
    <div>
      <Navigation />

      <h3 className='h3'><span className='green-pipe'>|</span> Extravaganza unit</h3>
      <p className='p1'>Crafted By Event Planners.<br/>Perfect for Seamless <span className="box-text">Checklists</span></p>

      <p className='p2'>
        Creating the perfect checklist for your event has never been easier! Simply <br/>
        select the tasks you need, and our system will instantly generate a tailored <br />
        checklist that ensures no detail is missed. This feature makes planning your <br />
        event seamless and organized, allowing you to stay on track and stress-free <br />
        throughout the planning process.
      </p>

      <div className='trangle'></div>

      <button className='button1'>Create Checklist</button>
    </div>
  )
}
