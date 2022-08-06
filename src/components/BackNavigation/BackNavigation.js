import React from "react";
import useAppContext from "../../customHooks/useAppContext";
import useHandleStep from "../../customHooks/useHandleStep";
import "./BackNavigation.css";

const BackNavigation = () => {
  const {
    state: { step, labels },
    dispatch,
  } = useAppContext();
  const { handleStep } = useHandleStep({ newStep: step - 1, dispatch });

  const stepName = [labels.availability, labels.registration];

  return (
    <>
      {step > 1 && (
        <div className="back-navigation" onClick={() => handleStep()}>
          <img src="/icons/blue_arrow.svg" alt="back" />
          {stepName[step - 2]}
        </div>
      )}
    </>
  );
};

export default BackNavigation;
