import React from 'react';

function BasicControls() {
    return (
        <div className="sparsely-limited">
            <div className="top-tile">
                <h1>Basic Controls</h1>
                <p>Inputs, buttons, icons, tiles</p>
            </div>
            <div className="landing-tiles">
                <div className="tile">
                    <h2>Button Language</h2>
                    <p>How to express your buttons</p>
                </div>
                <div className="tile">
                    <h2>Buttons</h2>
                    <p>How to use your buttons</p>
                </div>
                <div className="tile">
                    <h2>Forms</h2>
                    <p>How to use form elements</p>
                </div>
                <div className="tile">
                    <h2>Icons</h2>
                    <p>How to use icons</p>
                </div>
                <div className="tile">
                    <h2>Linking</h2>
                    <p>How to use and style page navigation links</p>
                </div>
                <div className="tile">
                    <h2>Notifications</h2>
                    <p>How to display notifications to the end-user</p>
                </div>
                <div className="tile">
                    <h2>Tiles</h2>
                    <p>How to use the landing page tiles</p>
                </div>
                <div className="tile">
                    <h2>Smart tip and Smart info</h2>
                    <p>How to use smart tips with various page elementsy</p>
                </div>
            </div>
        </div>
    );
}

export default BasicControls;