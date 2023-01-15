/* eslint-disable react/jsx-key */
import React from 'react';
import ColorPaletteTile from './partials/ColorPaletteTile';

function Color() {
    return (
        <div>
            <h1>Colors</h1>
            <div>Our color palette is fairly simple</div>
            <div className="color-box-container">
                <ColorPaletteTile backgroundColor="red">Red</ColorPaletteTile>
                <ColorPaletteTile backgroundColor="orange">Orange</ColorPaletteTile>
                <ColorPaletteTile backgroundColor="yellow">Yellow</ColorPaletteTile>
                <ColorPaletteTile backgroundColor="green">Green</ColorPaletteTile>
                <ColorPaletteTile backgroundColor="blue">Blue</ColorPaletteTile>
                <ColorPaletteTile backgroundColor="purple">Purple</ColorPaletteTile>
            </div>
        </div>
    );
}

export default Color;