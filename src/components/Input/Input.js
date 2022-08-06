import React from "react";
import "./Input.css";

const Input = (props) => {
  const { id, type, label, value, handleOnchange, className, minValue } = props;
  return (
    <div className="input">
      <div>
        {props.required && <span className="required">* </span>}
        {label && <label htmlFor={id}>{label}</label>}
      </div>
      <input
        className={className}
        id={id}
        name={id}
        type={type || "text"}
        value={value}
        onChange={handleOnchange}
        {...minValue !== undefined ? { min: minValue } : {}}
      />
    </div>
  );
};

export default Input;
