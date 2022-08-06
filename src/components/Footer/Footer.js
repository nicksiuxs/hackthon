import React from 'react';
import './Footer.css';
import Select from '../Select/Select';
import useAppContext from '../../customHooks/useAppContext';

const Footer = () => {
  const { state: { labels }} = useAppContext();

  return (
    <footer className='footer'>
      <span>2022 Veevart Museum</span>
      <div className='language-group'>
        {labels.language}
        <Select
          name="multilanguage"
          options={['Spanish', 'English']}
          value={'English'}
        />
      </div>
    </footer>
  )
}

export default Footer