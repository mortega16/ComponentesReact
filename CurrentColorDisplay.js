import React from 'react';

const CurrentColorDisplay = ({ color, selectedColor }) => {
    return (
        <p>
            El color actual es: <span style={{ color: color }}>{selectedColor}</span>
        </p>
    );
};

export default CurrentColorDisplay;
