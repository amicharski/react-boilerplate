import React from 'react';
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="landing-tiles">
            <div className="top-tile">
                <h1>React Boilerplate & Enterprise Pattern Library</h1>
                <p>View Alex Micharski's reusable UX design system</p>
            </div>
            <Link to="about">Learn More</Link>
            <div className="tile">
                <h2>Design Principles</h2>
                <p>Accessibility, colors, branding, and more</p>
            </div>
            <div className="tile">
                <h2>Basic Controls</h2>
                <p>Inputs, buttons, icons, tiles</p>
            </div>
            <div className="tile">
                <h2>Structure</h2>
                <p>Layouts, layout groups, and containers</p>
            </div>
            <div className="tile">
                <h2>Data Visualization</h2>
                <p>Charts, tables</p>
            </div>
            <div className="tile">
                <h2>Patterns</h2>
                <p>Interaction patterns, search, etc.</p>
            </div>
            <div className="tile">
                <h2>Developer Best Practices</h2>
                <p>Guidelines for developers</p>
            </div>
            <div className="tile">
                <h2>Proof of Concept</h2>
                <p>Examples of upcoming requirements</p>
            </div>
        </div>
    );
}

export default HomePage;