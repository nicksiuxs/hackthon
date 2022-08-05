import React from 'react'
import { NavLink } from "react-router-dom";
const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <NavLink
                to="/payment"
            >
                Payment
            </NavLink>
        </div>
    )
}

export default Register