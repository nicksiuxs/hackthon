import React from "react";
import PropTypes from "prop-types";

import useAppContext from "../../customHooks/useAppContext"
import useHandleStep from "../../customHooks/useHandleStep";

// style
import './Step.css';

const Step = ({ label, stepNumber }) => {
  const { state, dispatch } = useAppContext();
  const { step } = state;

  const isSelected = step === stepNumber;
  const isCompleted = step > stepNumber;
  const { handleStep } = useHandleStep({ newStep: stepNumber, dispatch });
  return (
    <div
      className="step-container"
    >
      <button onClick={() => handleStep()} className={`step ${isSelected ? "-selected" : isCompleted ? "-completed" : ""}`}>
      </button>
      {label}
    </div>
  );
};

Step.defaultProps = {
  stepNumber: 1,
};

Step.propTypes = {
  label: PropTypes.string,
  stepNumber: PropTypes.number,
};

export default Step;
