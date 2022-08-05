import React from 'react';
// sytles
import './Stepper.css';
// components
import Step from '../Step/Step';
import labels from '../../labels';


const Stepper = () => {
  return (
    <div className='stepper'>
      <Step label={labels.check_availability} stepNumber={1} />
      <Step label={labels.registration} stepNumber={2} />
      <Step label={labels.payment} stepNumber={3} />
    </div>
  )
}

export default Stepper