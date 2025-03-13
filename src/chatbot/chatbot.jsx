import {useState,useRef,useEffect} from 'react';
import axios from 'axios';
import './chatbot.css'
import '../components/navigation/navigation'
import '../components/navigation/navigation.module.css'
import '../components/footer/footer'
import '../components/footer/footer.module.css'

const OPENAI_BASE_URL="http://localhost:5000";


export default function Chatbot() {
  const[messages,setMessages]=useState([]);
  const[input,setInput]=useState('');
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null);
  const messagesEndRef=useRef(null);

  const scrollToBottom=()=>{
    messagesEndRef.current?.scrollIntoView({behavior:'smooth'});
  };

  useEffect(()=>{
    scrollToBottom();
  },[messages])

  const sendMessage=async () => {
    if(!input.trim()) return;

    const userMessage={role: 'user',content: input};
    setMessages(prevMessages=> [...prevMessages,userMessage]);

    setInput('');
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${OPENAI_BASE_URL}/api/chat`, {
          message: input,
      });

      if (response.data && response.data.reply) {
          const botMessage = { role: 'bot', content: response.data.reply };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
          setError('Invalid response from the chatbot.');
      }
    } catch (err) {
        console.error('Error: ', err);
        setError(
            'Failed to get response .'
        );
    } finally {
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
};

