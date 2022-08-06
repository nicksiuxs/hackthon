import React from 'react';
import "./Input.css";

const Input = ({ id, type, label, value, handleOnchange }) => {
    return (
        <div className="input">
            {label ? <label htmlFor={id}>{label}</label> : null}
            <input id={id} name={id} type={type || "text"} value={value} onChange={handleOnchange} />
        </div>
    )
}

export default Input