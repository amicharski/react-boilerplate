import React from 'react';

function DeveloperBestPractices() {
    return (
        <div className="sparsely-limited">
            <div className="top-tile">
                <h1>Developer Best Practices</h1>
                <p>Guidelines for developers</p>
            </div>
            <div className="landing-tiles">
                <div className="tile">
                    <h2>Accessibility</h2>
                    <p>How to best comply with 508 standards</p>
                </div>
                <div className="tile">
                    <h2>Customized CSS</h2>
                    <p>How to properly use Customized CSS</p>
                </div>
                <div className="tile">
                    <h2>General</h2>
                    <p>General information</p>
                </div>
                <div className="tile">
                    <h2>Harness</h2>
                    <p>How to properly implement an application harness</p>
                </div>
                <div className="tile">
                    <h2>Sizing</h2>
                    <p>How to properly use sizing in your application</p>
                </div>
                <div className="tile">
                    <h2>Skin Rules</h2>
                    <p>Rules for skin usage</p>
                </div>
            </div>
        </div>
    );
}

export default DeveloperBestPractices;