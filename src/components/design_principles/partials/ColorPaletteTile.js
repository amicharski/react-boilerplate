import React from 'react';
import PropTypes from 'prop-types';

import variables from '../../../styles/small.scss';

function ColorPaletteTile(props){
    console.log(variables);
    return (
        <div className="color-box" style={{backgroundColor: `${props.backgroundColor}`}}>
            {props.children}
        </div>
    );
}

ColorPaletteTile.propTypes = {
    children: PropTypes.any,
    backgroundColor: PropTypes.string,
}

export default ColorPaletteTile;

/* `${#FFAAAA}`}}> */