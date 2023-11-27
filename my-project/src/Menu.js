// src/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/account">Account</Link></li>
        </ul>
    </div>
  )
}

export default Menu;