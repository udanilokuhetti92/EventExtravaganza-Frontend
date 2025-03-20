import {useState} from 'react';
import axios from 'axios';
import './chatbot.css'
import '../components/navigation/navigation'
import '../components/navigation/navigation.module.css'
import '../components/footer/footer'
import '../components/footer/footer.module.css'

const API_BASED_URL=import.meta.env.VITE_API_URL || "http://localhost:5000";


export default function Chatbot() {
  const[messages,setMessages]=useState([]);
  const[input,setInput]=useState('');
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null);

  const sendMessage=async () => {
    if(!input.trim()) return;

    const userMessage={role: 'user',content: input};
    setMessages(prevMessages=> [...prevMessages,userMessage]);

    setInput('');
    setLoading(true);
    setError(null);

    try{
      const response = await axios.post(`${API_BASED_URL}/api/chat`,{message:input});
      const botMessage ={role: 'bot',content: response.data.reply};
      setMessages(prevMessages=> [...prevMessages,botMessage]);
    }catch(err){
      console.log("Error: " , err);
      setError("Failed to get response from Chatbot.Please try again.");
    }finally{
      setLoading(false);
    }
  };


  return (
    <div className="chatbot-container">
      <div className="messages">
        {messages.map((msg,index) =>(
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
          
        ))}
        {loading && <p>Bot is typing..</p>}
        {error && <p className="error">{error}</p>}
        
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) =>setInput(e.target.value)}
          placeholder="Type a message.."
          disabled={loading}
        />
        <button onClick={sendMessage} disabled={loading}>Send</button>
      </div>
    </div>
  );
}
