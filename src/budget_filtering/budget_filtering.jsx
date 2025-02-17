import React, { useState } from 'react';
import Navigation from '../components/navigation/navigation';
import '../budget_filtering/budget_filtering.css';
import Footer from '../components/footer/footer'

export default function BudgetFiltering() {
  const [budget, setBudget] = useState(''); // State to store the user's input
  const [eventPlanners, setEventPlanners] = useState([]); // State to store the response data

  // Function to handle the "Search" button click
  const handleSearch = async () => {
    try {
      // Send a POST request to the server
      const response = await fetch('http://localhost:5000/budgetFilter/budget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Budget: budget }), // Send the budget value in the request body
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the JSON response
      const data = await response.json();

      // Update the state with the fetched event planners
      setEventPlanners(data);
    } catch (error) {
      console.error('Error fetching event planners:', error);
    }
  };

  return (
    <div className='container'>
      <Navigation />

      <div className='container2'>
        <div className='box1'>
          <h3 className='h3'><span className='green-pipe'>|</span> Extravaganza unit</h3>
          <p className='p1'>Loved By Event Organizers.<br />Built for <span className="box-text">Budget Filtering</span></p>

          <p className='p2'>
            Finding the perfect event planner within your budget has never been easier! Simply <br />
            enter your desired budget range, and our system will instantly display a list of <br />
            available event planners that match your price preferences. This feature ensures <br />
            that you can plan your dream event without exceeding your financial limits,<br />
            making event planning hassle-free and affordable.
          </p>

          {/* Budget input and search button */}
          <span className='span1'>Rs:</span>
          <input
            className='input1'
            type="number"
            placeholder='Enter Your Budget Range'
            value={budget}
            onChange={(e) => setBudget(e.target.value)} // Update the budget state as the user types
          />
          <button className='button1' onClick={handleSearch}>Search</button>
        </div>

        <div className='box2'>
          <div className='boxloader'>
            <div class="loader">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>

            <h1 className='box2h1'>Available Event Planners</h1>
          </div>

          <hr style={{ border: "2px solid #551488" }} />

          {/* Display the fetched event planners */}
          <div className='smallbox'>
            {eventPlanners.length > 0 ? (
              eventPlanners.map((planner, index) => (
                <div key={index}>
                  <b><p>Full Name: {planner.FullName}</p></b>
                  <b><p>Email: {planner.Email}</p></b>
                </div>
              ))
            ) : (
              <p className='boxp1'>No event planners found within the specified budget.</p>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}