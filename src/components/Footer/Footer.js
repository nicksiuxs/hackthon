import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <span>2022 Veevart Museum</span>
        <select name="language">
            <option value="1">English</option>
        </select>
    </div>
  )
}

export default Footer