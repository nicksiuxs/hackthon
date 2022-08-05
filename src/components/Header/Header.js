import React from 'react'
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/logo.svg';

import "./Header.css";

const Header = () => {
    return (
        <header className='header'>
            <NavLink
                to="/"
            >
                <Logo />
            </NavLink>
        </header>
    )
}

export default Header