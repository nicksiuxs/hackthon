import React from 'react'

const Select = ({ name, options, value, textDefault, handleOnChange }) => {
    return (
        <select name={name} value={value} onChange={handleOnChange}>
            {textDefault ? <option key={0} value="">{textDefault}</option> : null}
            {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
        </select>
    )
}

export default Select