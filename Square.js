import React from 'react';

const Square = ({ color, onClick }) => {
    return (
        <button
            className='square'
            onClick={onClick}
            style={{ backgroundColor: color }}
        >
        </button>
    );
};

export default Square;
