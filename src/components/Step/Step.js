import React from "react";
import PropTypes from "prop-types";
import useAppContext from "../../customHooks/useAppContext"

// style
import './Step.css';

const Step = ({ label, stepNumber }) => {
  const { step, handleStep } = useAppContext();
  const isSelected = step === stepNumber;

  return (
    <span
      className={`step ${isSelected ? "-selected" : ""}`}
      onClick={() => handleStep(stepNumber)}>
      {label}
    </span>
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
