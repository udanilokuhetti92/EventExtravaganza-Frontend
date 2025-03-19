import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import emailjs from 'emailjs-com';
import Navigation from '../components/navigation/navigation';
import styles from '../invitation_send/invitation_send.module.css';
import Footer from '../components/footer/footer';

emailjs.init("1SLJDJFAIftTWfyS1");

const compressImage = (base64String, maxWidth = 800) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = base64String;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      let width = img.width;
      let height = img.height;
      
      if (width > maxWidth) {
        height = (maxWidth * height) / width;
        width = maxWidth;
      }
      
      canvas.width = width;
      canvas.height = height;
      
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', 0.7));
    };
  });
};

export default function EventInvitation() {
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    invitees: '',
  });

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const invitationRef = useRef(null);

  const validateEmails = (emails) => {
    const emailList = emails.split(',').map(email => email.trim());
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const invalidEmails = emailList.filter(email => !emailRegex.test(email));
    return invalidEmails.length === 0 ? null : invalidEmails;
  };

  const handleChange = (e) => {
    setError('');
    setSuccess('');
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
  };

  const handleTemplateSelect = (template) => {
    setError('');
    setSelectedTemplate(template);
  };

  const validateForm = () => {
    // Check for empty fields
    const emptyFields = Object.entries(eventDetails)
      .filter(([key, value]) => !value)
      .map(([key]) => key);

    if (emptyFields.length > 0) {
      setError(`Please fill out all fields: ${emptyFields.join(', ')}`);
      return false;
    }

    // Validate email addresses
    const invalidEmails = validateEmails(eventDetails.invitees);
    if (invalidEmails) {
      setError(`Invalid email addresses: ${invalidEmails.join(', ')}`);
      return false;
    }

    // Check template selection
    if (!selectedTemplate) {
      setError('Please select a template');
      return false;
    }

    return true;
  };

  const handleGenerateInvitation = async () => {
    try {
      if (!selectedTemplate) {
        alert('Please select a template!');
        return;
      }

      // Ensure all fields are filled out
      if (!eventDetails.eventName || !eventDetails.eventDate || 
          !eventDetails.eventTime || !eventDetails.eventLocation || 
          !eventDetails.invitees) {
        alert('Please fill out all fields!');
        return;
      }

      // Show loading state
      const button = document.querySelector(`.${styles.button1}`);
      if (button) {
        button.textContent = 'Sending...';
        button.disabled = true;
      }

      // Render and compress the invitation preview
      console.log('Generating image...');
      const canvas = await html2canvas(invitationRef.current);
      const originalImage = canvas.toDataURL('image/jpeg');
      console.log('Compressing image...');
      const compressedImage = await compressImage(originalImage);
      
      // Send email
      console.log('Sending email...');
      await sendEmail(compressedImage);
      
      alert('Invitation sent successfully!');
      
      // Clear form
      setEventDetails({
        eventName: '',
        eventDate: '',
        eventTime: '',
        eventLocation: '',
        invitees: '',
      });
      setSelectedTemplate(null);
    } catch (err) {
      console.error('Error sending invitation:', err);
      alert(err.message || 'Failed to send invitation. Please try again.');
    } finally {
      // Reset button state
      const button = document.querySelector(`.${styles.button1}`);
      if (button) {
        button.textContent = 'Generate & Send Invitation';
        button.disabled = false;
      }
    }
  };

  const sendEmail = async (image) => {
    const serviceID = 'service_44creeq';
    const templateID = 'template_id6fdig';
    const userID = '1SLJDJFAIftTWfyS1';
  
    const inviteesArray = eventDetails.invitees.split(',').map(email => email.trim());
  
    const templateParams = {
      to_email: inviteesArray[0], // Send to first email in list
      event_name: eventDetails.eventName,
      event_date: eventDetails.eventDate,
      event_time: eventDetails.eventTime,
      event_location: eventDetails.eventLocation,
      invitation_image: image
    };
  
    try {
      const response = await emailjs.send(serviceID, templateID, templateParams, userID);
      console.log('Email sent successfully:', response);
      return response;
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw new Error('Failed to send invitation. Please try again.');
    }
  };

  const getTemplatePreview = () => {
    switch (selectedTemplate) {
      case 'template1':
        return (
          <div className={styles.template1}>
            <h2>You're Cordially Invited to {eventDetails.eventName}</h2>
            <p><strong>Date:</strong> {eventDetails.eventDate}</p>
            <p><strong>Time:</strong> {eventDetails.eventTime}</p>
            <p><strong>Location:</strong> {eventDetails.eventLocation}</p>
            <p>We look forward to celebrating with you!</p>
          </div>
        );
      case 'template2':
        return (
          <div className={styles.template2}>
            <h2>Invitation to {eventDetails.eventName}</h2>
            <p><strong>Date:</strong> {eventDetails.eventDate}</p>
            <p><strong>Time:</strong> {eventDetails.eventTime}</p>
            <p><strong>Location:</strong> {eventDetails.eventLocation}</p>
            <p>We are excited to have you join us for this special event!</p>
          </div>
        );
      case 'template3':
        return (
          <div className={styles.template3}>
            <h2>{eventDetails.eventName}</h2>
            <p><strong>Date:</strong> {eventDetails.eventDate}</p>
            <p><strong>Time:</strong> {eventDetails.eventTime}</p>
            <p><strong>Location:</strong> {eventDetails.eventLocation}</p>
            <p>We would be honored to have you celebrate with us.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navigation />

      <div className={styles.box1}>
        <h3 className={styles.h3}>
          <span className={styles['green-pipe']}>|</span> Event Invitation Generator
        </h3>
        <p className={styles.p1}>
          Event Owners can generate and send invitations via email.
        </p>

        {error && <div className={styles['error-message']}>{error}</div>}
        {success && <div className={styles['success-message']}>{success}</div>}

        <form className={styles['event-form']}>
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

          <h4>Select Invitation Template:</h4>
          <div className={styles['template-container']}>
            <ul>
              <li
                className={`${styles.template} ${selectedTemplate === 'template1' ? styles.selected : ''}`}
                onClick={() => handleTemplateSelect('template1')}
              >
                Template 1
              </li>
              <li
                className={`${styles.template} ${selectedTemplate === 'template2' ? styles.selected : ''}`}
                onClick={() => handleTemplateSelect('template2')}
              >
                Template 2
              </li>
              <li
                className={`${styles.template} ${selectedTemplate === 'template3' ? styles.selected : ''}`}
                onClick={() => handleTemplateSelect('template3')}
              >
                Template 3
              </li>
            </ul>
          </div>

          <div ref={invitationRef} className={`${styles['invitation-preview']} ${selectedTemplate ? styles[selectedTemplate] : ''}`}>
            {getTemplatePreview()}
          </div>

          <button 
            type="button" 
            className={styles.button1} 
            onClick={handleGenerateInvitation}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Generate & Send Invitation'}
          </button>
        </form>

      </div>
      <Footer/>

    </>
  );
}