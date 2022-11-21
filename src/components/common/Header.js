import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <NavLink to="/" exact>Home</NavLink>{" | "}
            <NavLink to="/about">About</NavLink>
        </nav>
    );
}

export default Header;