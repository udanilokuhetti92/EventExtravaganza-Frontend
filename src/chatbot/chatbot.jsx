import {useState} from 'react'

export default function chatbot() {
  return (
    <div className="chatbot-container">
      <div className="messages">
        {messages.map((msg,index) =>(
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef}/>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
