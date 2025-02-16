import React from 'react'
import Navigation from '../components/navigation/navigation'
import '../location_filtering/location_filtering.css'
import GoogleMapComponent from '../map/google_map_component'

export default function location_filtering() {
  return (
   
    <div className='box1'>
          <Navigation/>
    
          <h3 className='h3'><span className='green-pipe'>|</span> Extravaganza unit</h3>
          <p className='p1'>Loved By Event Organizers.<br/>Built for <span className="box-text">Location Filtering</span></p>
    
          <p className='p2'>Finding the perfect event planner within your area Simply <br />
             enter your
             Location, and our system will instantly display a list of<br />available event planners that match  your 
             price preferences.  This feature ensures <br /> that you can plan your dream event without exceeding your financial limits,<br /> 
             making event planning hassle-free and affordable.</p>
          <div className='google-map'> 
          <GoogleMapComponent/>
          </div>   
    
         
          <span className='span1'></span><input className='input1' type="number" placeholder='Enter Your Location'/>    
          <button className='button1'>Search</button>  
        </div>
   
    
  )
}
