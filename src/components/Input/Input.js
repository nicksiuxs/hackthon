import React from 'react';
import "./Input.css";

const Input = ({ id, type, label, value, handleOnchange }) => {
    return (
        <div className="input">
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} type={type || "text"} value={value} onChange={handleOnchange} />
        </div>
    )
}

export default Input