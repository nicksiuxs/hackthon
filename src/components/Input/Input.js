import React from "react";
import "./Input.css";

const Input = (props) => {
  const { id, type, label, value, handleOnchange } = props;
  return (
    <div className="input">
      <div>
        {!props.required && <span className="required">*</span>}&nbsp;
        {label ? <label htmlFor={id}>{label}</label> : null}
      </div>
      <input
        id={id}
        name={id}
        type={type || "text"}
        value={value}
        onChange={handleOnchange}
      />
    </div>
  );
};

export default Input;
