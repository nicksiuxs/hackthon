import React from "react";
import PropTypes from "prop-types";

import useAppContext from "../../customHooks/useAppContext";
import useHandleStep from "../../customHooks/useHandleStep";

// style
import "./Step.css";

const Step = ({ label, stepNumber }) => {
  const { state, dispatch } = useAppContext();
  const { step } = state;

  const isSelected = step === stepNumber;
  const isCompleted = step > stepNumber;
  const { handleStep } = useHandleStep({ newStep: stepNumber, dispatch });
  
  return (
    <div className="step-container">
      <div className="indicator">
        {stepNumber > 1 && (
          <div
            className={`bar ${isSelected || isCompleted ? "-blue" : ""}`}
          />
        )}
        <button
          onClick={() => handleStep()}
          className={`step ${
            isSelected ? "-selected" : isCompleted ? "-completed" : ""
          }`}
        >
          { isCompleted &&
            <img src="/icons/white_check.png" alt="white check" />
          }
          <span>{label}</span>
        </button>
      </div>
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
