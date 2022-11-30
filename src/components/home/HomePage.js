import React from 'react';
import { NavLink } from "react-router-dom";
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
            </div>
            <div className="landing-tiles">
                <NavLink to="/design_principles">
                    <div className="tile">
                        <h2>Design Principles</h2>
                        <p>Accessibility, colors, branding, and more</p>
                        <img src={Kaleidoscope} alt="Kaleidoscope" width="3" height="3" />
                    </div>
                </NavLink>
                <NavLink to="/basic_controls">
                    <div className="tile">
                        <h2>Basic Controls</h2>
                        <p>Inputs, buttons, icons, tiles</p>
                        <img src={Controls} alt="Controls" width="3" height="3" />
                    </div>
                </NavLink>
                <NavLink to="/structure">
                    <div className="tile">
                        <h2>Structure</h2>
                        <p>Layouts, layout groups, and containers</p>
                        <img src={Structure} alt="Structure" width="3" height="3" />
                    </div>
                </NavLink>
                <NavLink to="/data_visualization">
                    <div className="tile">
                        <h2>Data Visualization</h2>
                        <p>Charts, tables</p>
                        <img src={Charts} alt="Charts" width="3" height="3" />
                    </div>
                </NavLink>
                <NavLink to="/patterns">
                    <div className="tile">
                        <h2>Patterns</h2>
                        <p>Interaction patterns, search, etc.</p>
                        <img src={Pattern} alt="Pattern" width="3" height="3" />
                    </div>
                </NavLink>
                <NavLink to="/developer_best_practices">
                    <div className="tile">
                        <h2>Developer Best Practices</h2>
                        <p>Guidelines for developers</p>
                        <img src={Referee} alt="Referee" width="3" height="3" />
                    </div>
                </NavLink>
                <NavLink to="/proof_of_concept">
                    <div className="tile">
                        <h2>Proof of Concept</h2>
                        <p>Examples of upcoming requirements</p>
                        <img src={PrototypeImg} alt="Prototype" width="3" height="3" />
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default HomePage;