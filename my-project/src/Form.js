// src/Form.js
import React from 'react';

function Form() {
  return (
    <div>
                    <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="chat-header">
                Obi-Wan Kenobi
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>

            </div>
            <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="chat-header">
                Anakin
            </div>
            <div className="chat-bubble">I hate you!</div>
            </div>
    </div>
  );
}

export default Form;