import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <span>2022 Veevart Museum</span>
      <select name="language">
        <option value="1">English</option>
      </select>
    </footer>
  )
}

export default Footer