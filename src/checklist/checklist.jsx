import React , { useState } from 'react'
import Navigation from '../components/navigation/navigation'
import '../budget_filtering/budget_filtering.css'
import '../checklist/checklist.css'

export default function checklist() {
  const [isPopupOpen , setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

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

      <button className='button1' onClick={openPopup}>Create Checklist</button>

      {/* Popup Window */}
      {isPopupOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <span className='close-btn' onClick={closePopup}>&times;</span>
            <h2>Create your checklist</h2>
            <form>
              <div className='left-col'>
                <p>Checklist Name:</p>
                <input className='input1' type='text' placeholder='Enter the name of the checklist'/>
              </div>
              <div className='right-col'>
                <p>Oraganizer Name:</p>
                <input className='input1' type='text' placeholder='Enter the name of organizer'/>
              </div>
            </form>
            <p><b>Start adding tasks to your event checklist</b></p>
            <form>
              <div className='left-col'>
                <p>Task Name:</p>
                <input className='input1' type='text'/>
                <p>Status:</p>
                <select id='status'>
                  <option value='Not Started' selected>Not Started</option>
                  <option value='Pending'>Pending</option>
                  <option value='Completed'>Complete</option>
                </select> 
              </div>
              <div className='right-col'>
                <p>Due Date:</p>
                <input type='Date' className='input1' />
                <p>Priority Level:</p>
                <select id='priority'>
                  <option value='High' selected>High</option>
                  <option value='Medium'>Medium</option>
                  <option value='Low'>Low</option>
                </select>
              </div>
            </form>
            <button className='button1' onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
