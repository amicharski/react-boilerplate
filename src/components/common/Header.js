import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
    const logoStyle = {
        fontWeight: 'bolder',
        fontSize: 20,
        textTransform: 'uppercase',
        padding: '.8rem 0',
        textAlign: 'center'
    };

    const page = useLocation().pathname;

    const menuToggle = () => {
        document.getElementById('primaryNav').classList.toggle('close');
    };

    return (
        <nav className="clearfix">
            <div className="row limited">
                <ul id="primaryNav">
                    <li>
                        <div style={logoStyle}>
                            MIGN
                            <button id="hamburgerBtn" onClick={menuToggle}>&#9776;</button>
                        </div>
                    </li>
                    <li className={`${page === "/" ? 'active' : ''}`}>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className={`${page === "/about" ? 'active' : ''}`}>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className={`${page === "/color" ? 'active' : ''}`}>
                        <NavLink to="/color">Color</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;