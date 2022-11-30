import React from 'react';

function DesignPrinciples() {
    return (
        <div className="sparsely-limited">
            <div className="top-tile">
                <h1>Design Principles</h1>
                <p>Accessibility, colors, branding, and more</p>
            </div>
            <div className="landing-tiles">
                <div className="tile">
                    <h2>Color Palette</h2>
                    <p>How and where to use our colors</p>
                </div>
                <div className="tile">
                    <h2>Language</h2>
                    <p>How wording should be expressed to the end-user</p>
                </div>
                <div className="tile">
                    <h2>Spacing Guidelines</h2>
                    <p>How to add spacing between varous objects</p>
                </div>
                <div className="tile">
                    <h2>Typography</h2>
                    <p>How to maintain font consistency</p>
                </div>
            </div>
        </div>
    );
}

export default DesignPrinciples;