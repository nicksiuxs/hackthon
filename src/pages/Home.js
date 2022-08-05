import React from 'react'
import { NavLink } from "react-router-dom";
import { useAppContext } from '../context/AppContext';
const Home = () => {
    const { step, handleStep } = useAppContext()
    return (
        <div>
            <h1>Home</h1>
            <div>{step}</div>
            <button onClick={() => handleStep(step + 1)}>step</button>
            <NavLink
                to="register"
            >
                Register
            </NavLink>
        </div>
    )
}

export default Home