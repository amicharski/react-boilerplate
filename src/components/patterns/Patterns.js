import React from 'react';

function Patterns() {
    return (
        <div className="sparsely-limited">
            <div className="top-tile">
                <h1>Patterns</h1>
                <p>Interaction patterns, search, etc.</p>
            </div>
            <div className="landing-tiles">
                <div className="tile">
                    <h2>Document Upload</h2>
                    <p>How to implement a document upload</p>
                </div>
                <div className="tile">
                    <h2>Inline Editing</h2>
                    <p>How to implement inline editing on various controls</p>
                </div>
                <div className="tile">
                    <h2>Locked Objects</h2>
                    <p>How to warn the user of locked objects</p>
                </div>
                <div className="tile">
                    <h2>Navigating Between Applications</h2>
                    <p>How to properly navigate the end-user between applications</p>
                </div>
                <div className="tile">
                    <h2>Object Placement</h2>
                    <p>How to place various form controls in various layouts</p>
                </div>
                <div className="tile">
                    <h2>Process Flow</h2>
                    <p>How to implement a progress bar to label multi-step forms</p>
                </div>
                <div className="tile">
                    <h2>Search Bar</h2>
                    <p>How to implement a search bar</p>
                </div>
                <div className="tile">
                    <h2>Progress Bar</h2>
                    <p>How to implement a progress bar</p>
                </div>
            </div>
        </div>
    );
}

export default Patterns;