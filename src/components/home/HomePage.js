import React from 'react';
import { Link } from "react-router-dom";
import Kaleidoscope from '../../images/kaleidoscope.jpg';
import Controls from '../../images/controls.jpg';
import Structure from '../../images/structure.jpeg';
import Charts from '../../images/charts.jpeg';
import Pattern from '../../images/pattern.webp';
import Referee from '../../images/referee.webp';
import PrototypeImg from '../../images/prototype.jpeg';

function HomePage() {
    return (
        <div className="sparsely-limited">
            <div className="top-tile">
                <h1>React Boilerplate & Enterprise Pattern Library</h1>
                <p>View Alex Micharski&apos;s reusable UX design system</p>
                <Link to="about">Learn More</Link>
            </div>
            <div className="landing-tiles">
                <div className="row">
                    <div className="tile column small-12 medium-6 large-4">
                        <h2>Design Principles</h2>
                        <p>Accessibility, colors, branding, and more</p>
                        <img src={Kaleidoscope} alt="Kaleidoscope" width="3" height="3" />
                    </div>
                    <div className="tile column small-12 medium-6 large-4">
                        <h2>Basic Controls</h2>
                        <p>Inputs, buttons, icons, tiles</p>
                        <img src={Controls} alt="Controls" width="3" height="3" />
                    </div>
                    <div className="tile column small-12 medium-6 large-4">
                        <h2>Structure</h2>
                        <p>Layouts, layout groups, and containers</p>
                        <img src={Structure} alt="Structure" width="3" height="3" />
                    </div>
                </div>
                <div className="row">
                    <div className="tile column small-12 medium-6 large-4">
                        <h2>Data Visualization</h2>
                        <p>Charts, tables</p>
                        <img src={Charts} alt="Charts" width="3" height="3" />
                    </div>
                    <div className="tile column small-12 medium-6 large-4">
                        <h2>Patterns</h2>
                        <p>Interaction patterns, search, etc.</p>
                        <img src={Pattern} alt="Pattern" width="3" height="3" />
                    </div>
                    <div className="tile column small-12 medium-6 large-4">
                        <h2>Developer Best Practices</h2>
                        <p>Guidelines for developers</p>
                        <img src={Referee} alt="Referee" width="3" height="3" />
                    </div>
                </div>
                <div className="row">
                    <div className="tile column">
                        <h2>Proof of Concept</h2>
                        <p>Examples of upcoming requirements</p>
                        <img src={PrototypeImg} alt="Prototype" width="3" height="3" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;