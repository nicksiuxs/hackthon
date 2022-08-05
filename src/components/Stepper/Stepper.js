import React from 'react';
// sytles
import './Stepper.css';
// components
import Step from '../Step/Step';

const Stepper = () => {
  return (
    <div className='stepper'>
      <Step label="Home" stepNumber={1} />
      <Step label="Payment" stepNumber={2} />
      <Step label="Register" stepNumber={3} />
    </div>
  )
}

export default Stepper