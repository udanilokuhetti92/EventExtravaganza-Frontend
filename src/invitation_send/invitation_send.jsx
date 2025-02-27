import React, { useState } from 'react';
import Navigation from '../components/navigation/navigation';
import './invitation_send.css';

export default function EventInvitation() {
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    invitees: '',
  });

  const handleChange = (e) => {
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
  };

  const handleGenerateInvitation = () => {
    alert(`Invitation for ${eventDetails.eventName} has been generated!`);
    //email-sending functionality
  };

  return (
    <>
      <Navigation />

      <div className='box1'>
        <h3 className='h3'>
          <span className='green-pipe'>|</span> Event Invitation Generator
        </h3>
        <p className='p1'>
          Event Owners can generate and send invitations via email.
        </p>

        <form className='event-form'>
          <label>Event Name:</label>
          <input
            type="text"
            name="eventName"
            placeholder="Enter event name"
            value={eventDetails.eventName}
            onChange={handleChange}
            required
          />

          <label>Event Date:</label>
          <input
            type="date"
            name="eventDate"
            value={eventDetails.eventDate}
            onChange={handleChange}
            required
          />

          <label>Event Time:</label>
          <input
            type="time"
            name="eventTime"
            value={eventDetails.eventTime}
            onChange={handleChange}
            required
          />

          <label>Event Location:</label>
          <input
            type="text"
            name="eventLocation"
            placeholder="Enter location"
            value={eventDetails.eventLocation}
            onChange={handleChange}
            required
          />

          <label>Invitee Emails (comma-separated):</label>
          <textarea
            name="invitees"
            placeholder="Enter invitee email addresses"
            value={eventDetails.invitees}
            onChange={handleChange}
            required
          />

          <button type="button" className="button1" onClick={handleGenerateInvitation}>
            Generate Invitation
          </button>
        </form>
      </div>
    </>
  );
}
