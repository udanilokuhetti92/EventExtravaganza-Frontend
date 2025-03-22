import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import Navigation from "../navigation/navigation";
import styles from '../../event_planner_site/inbox/Chat.module.css'; 

const socket = io("http://localhost:5000");

const Chat = () => {
  const [clients, setClients] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [sender, setSender] = useState("");
  const [newEmail, setNewEmail] = useState("");

  useEffect(() => {
    const getSenderEmail = () => {
      const organizer = localStorage.getItem("organizer");
      const email = JSON.parse(organizer)?.email || "";
      console.log("Sender email:", email); // Log sender email
      return email;
    };
    setSender(getSenderEmail());
  }, []);

  useEffect(() => {
    if (sender) {
      fetchClients();
    }
  }, [sender]);

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      if (selectedClient && newMessage.sender === selectedClient.email) {
        setMessages((prev) => [...prev, newMessage]);
      }
    });

    return () => socket.off("newMessage");
  }, [selectedClient]);

  const fetchClients = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/chat/clients?sender=${sender}`
      );
      console.log("Fetched clients:", response.data);
  
      const clientData = response.data.map(email => ({
        email,
        name: email.split('@')[0] // Default name using the part before the @
      }));
  
      setClients(clientData);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  const fetchMessages = async (client) => {
    try {
      setSelectedClient(client);
      const response = await axios.get(
        `http://localhost:5000/api/chat/getMessages?sender=${sender}&recipient=${client.email}`
      );
      setMessages(response.data.messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    if (!message.trim() || !selectedClient) return;

    const messageData = {
      sender,
      recipient: selectedClient.email,
      content: message,
      type: "text",
    };

    try {
      await axios.post("http://localhost:5000/api/chat/sendMessage", messageData);
      socket.emit("sendMessage", messageData);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const startNewChat = () => {
    if (!newEmail.trim()) {
      alert("Please enter a valid email.");
      return;
    }

    // Check if chat already exists
    const existingChat = clients.find(client => client.email === newEmail);
    if (existingChat) {
      setSelectedClient(existingChat);
      fetchMessages(existingChat);
    } else {
      // Add new chat
      const newChat = { email: newEmail, name: newEmail.split("@")[0] }; 
      setClients([...clients, newChat]);
      setSelectedClient(newChat);
      setMessages([]);
    }

    setNewEmail(""); // Clear input field
  };

  return (
    <div className={styles.chatWrapper}>
      <Navigation />

      <div className={styles.chatContainer}>
        {/* Left - Chat List */}
        <div className={styles.chatList}>
          <h2 className={styles.chatTitle}>Chats</h2>

          {/* New Chat Input */}
          <div className={styles.newChat}>
            <input
              type="email"
              placeholder="Enter email..."
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className={styles.newChatInput}
            />
            <button onClick={startNewChat} className={styles.newChatButton}>
              Start Chat
            </button>
          </div>

          {/* Chat List */}
          {clients.length > 0 ? (
            clients.map((client) => (
              <div
                key={client.email}
                className={`${styles.clientItem} ${
                  selectedClient?.email === client.email ? styles.clientItemSelected : ''
                }`}
                onClick={() => fetchMessages(client)}
              >
                {client.name || client.email}
              </div>
            ))
          ) : (
            <p>No clients found</p>
          )}
        </div>

        {/* Right - Chat Window */}
        <div className={styles.chatArea}>
          {selectedClient ? (
            <>
              <h2 className={styles.chatAreaTitle}>
                Chat with {selectedClient.name || selectedClient.email}
              </h2>
              <div className={styles.messageContainer}>
                {messages.length > 0 ? (
                  messages.map((msg, index) => (
                    <div
                      key={msg._id || `${msg.sender}-${index}`}
                      className={`${styles.message} ${
                        msg.sender === sender ? styles.messageSent : styles.messageReceived
                      }`}
                    >
                      <strong>{msg.sender === sender ? "You" : selectedClient.name}:</strong> {msg.content}
                    </div>
                  ))
                ) : (
                  <p className={styles.noMessages}>No messages yet</p>
                )}
              </div>
              <div className={styles.messageInput}>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={styles.messageInputField}
                />
                <button onClick={sendMessage} className={styles.messageSendButton}>
                  Send
                </button>
              </div>
            </>
          ) : (
            <p className={styles.chatInstruction}>Select a chat to start messaging.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
