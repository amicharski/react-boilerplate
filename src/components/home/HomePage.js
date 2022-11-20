import React from 'react';
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1>React Boilerplate</h1>
            <p>This is Alex Micharski's boilerplate for his React projects</p>
            <Link to="about">Learn More</Link>
        </div>
    );
}

export default HomePage;