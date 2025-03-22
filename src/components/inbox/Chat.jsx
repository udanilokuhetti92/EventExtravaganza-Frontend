import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../navigation/navigation';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');
  const [sender, setSender] = useState('');

  // Set sender dynamically when the component mounts
  useEffect(() => {
    const getSenderEmail = () => {
      const organizer = localStorage.getItem('organizer');
      return JSON.parse(organizer)?.email || '';
    };
  
    const userEmail = getSenderEmail();
    setSender(userEmail);
  }, []); // Runs once when the component mounts
  

  // Fetch messages when sender and recipient are set
  useEffect(() => {
    if (sender && recipient) {
      console.log(`Fetching messages for Sender: ${sender}, Recipient: ${recipient}`);
      fetchMessages();
    }
  }, [sender, recipient]);

  // Function to fetch messages
  const fetchMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/chat/getMessages?sender=${sender}&recipient=${recipient}`);
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  // Function to send a new message
  const sendMessage = async () => {
    if (message.trim() === '' || recipient.trim() === '') return;

    const messageData = {
      sender,
      recipient,
      content: message,
      type: 'text',
    };

    try {
      await axios.post('http://localhost:5000/api/chat/sendMessage', messageData);
      setMessage('');
      fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Navigation />
      <h2>Chat</h2>
      <p>Logged in as: <strong>{sender}</strong></p>

      {/* Recipient input field */}
      <input
        type="email"
        placeholder="Enter recipient's email"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        style={{ padding: '10px', width: '80%', marginBottom: '10px' }}
      />

      {/* Display messages */}
      <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
        {messages.map((msg) => (
          <div key={msg._id} style={{ marginBottom: '10px' }}>
            <strong>{msg.sender}: </strong>
            <span>{msg.content}</span>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: '10px', width: '80%' }}
        />
        <button onClick={sendMessage} style={{ padding: '10px' }}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
