import {useState} from 'react'
import './chatbot.css'
import './navigation.module.css'

export default function Chatbot() {
  const[messages,setMessages]=useState([]);
  const[input,setInput]=useState('');

  const sendMessage=async () => {
    if(!input.trim()) return;

    const userMessage={role: 'user',content: input};
    setMessages([...messages,userMessage]);

    setInput('');
  }
  return (
    <div className="chatbot-container">
      <div className="messages">
        {messages.map((msg,index) =>(
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
        
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) =>setInput(e.target.value)}
          placeholder="Type a message.."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
