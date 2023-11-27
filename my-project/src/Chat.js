// Chat.js
import React, { useState, useEffect } from 'react';
import Input from './Input';
import main from './Request.js';

function Chat() {
    const [messages, setMessages] = useState(JSON.parse(localStorage.getItem('chatMessages')) || []);

    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
        console.log('Updated localStorage:', localStorage.getItem('chatMessages'));
    }, [messages]);

    const handleSendMessage = async (message) => {
        setMessages(prevMessages => [...prevMessages, { role: 'User', content: message }]);
        let response = await main(message);
        response = response.text // this is the response from the AI
        setMessages(prevMessages => [...prevMessages, { role: 'Assistant', content: response }]);
    };
    const handleClear = () => {
        localStorage.clear();
        setMessages([]);
    };

    return (
        <div className = "p-4">
            <h1>Chat Page</h1>
            <div>
                {messages.map((message, index) => (
                    <p key={index}>{`${message.role}: ${message.content}`}</p>
                ))}
            </div>
            <div className="flex justify-center">
                <Input onSend={handleSendMessage} onClear={handleClear} />
            </div>
        </div>
    );
}

export default Chat;