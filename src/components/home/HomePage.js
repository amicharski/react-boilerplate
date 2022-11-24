import React from 'react';
import { Link } from "react-router-dom";
import Kaleidoscope from '../../images/kaleidoscope.webp';

function HomePage() {
    return (
        <>
            <div className="top-tile">
                <h1>React Boilerplate & Enterprise Pattern Library</h1>
                <p>View Alex Micharski's reusable UX design system</p>
                <Link to="about">Learn More</Link>
            </div>
            <div className="landing-tiles">
                <div className="row">
                    <div className="tile column small-12 medium-6 large-4">
                        <h2>Design Principles</h2>
                        <p>Accessibility, colors, branding, and more</p>
                        {/* <img src={Kaleidoscope} /> */}
                    </div>
                    <div className="tile column small-12 medium-6 large-4">
                        <h2>Basic Controls</h2>
                        <p>Inputs, buttons, icons, tiles</p>
                    </div>
                    <div className="tile column small-12 medium-6 large-4">
                        <h2>Structure</h2>
                        <p>Layouts, layout groups, and containers</p>
                    </div>
                </div>
                <div className="row">
                    <div className="tile column small-12 medium-6 large-4">
                        <h2>Data Visualization</h2>
                        <p>Charts, tables</p>
                    </div>
                    <div className="tile column small-12 medium-6 large-4">
                        <h2>Patterns</h2>
                        <p>Interaction patterns, search, etc.</p>
                    </div>
                    <div className="tile column small-12 medium-6 large-4">
                        <h2>Developer Best Practices</h2>
                        <p>Guidelines for developers</p>
                    </div>
                </div>
                <div className="row">
                    <div className="tile column">
                        <h2>Proof of Concept</h2>
                        <p>Examples of upcoming requirements</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;