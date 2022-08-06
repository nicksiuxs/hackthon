import React from 'react';
import './Spinner.css';

const Spinner = (props) => {

  // variants
  const { small, white } = props;

  return (
    <div className="spin-container">
      <div
        className={`spin ${small ? "-small" : ""} ${white ? "-white" : ""}`}
      />
    </div>
  )
}

export default Spinner