import React, { useState } from 'react';
import './Footer.css';
import Select from '../Select/Select';
import useAppContext from '../../customHooks/useAppContext';
import {
  useLanguage,
  // languages
  SPANISH,
  ENGLISH
} from '../../customHooks/useLanguage';

const Footer = () => {
  const { state: { labels }} = useAppContext();
  const {setLanguage} = useLanguage();

  const { lang, setLang} = useState('English');

  const changeLangage = (e) => {
    let lang = e.currentTarget.value;

    switch(lang) {
      case 'Spanish': {
        setLanguage(SPANISH)
        break;
      }
      case 'English': {
        setLanguage(ENGLISH)
        break;
      }
      default: {
        setLanguage(ENGLISH)
      }
    }
    setLang(lang)
  }

  return (
    <footer className='footer'>
      <span>2022 Veevart Museum</span>
      <div className='language-group'>
        {labels.language}
        <Select
          name="multilanguage"
          options={['English', 'Spanish']}
          value={lang}
          handleOnChange={changeLangage}
        />
      </div>
    </footer>
  )
}

export default Footer