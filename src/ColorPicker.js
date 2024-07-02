import React from 'react';

const colors = [
    "green", "blue", "red", "yellow", "purple", "white", "black", 
    "grey", "orange", "pink", "brown", "cyan", "magenta", "maroon", 
    "navy", "olive", "teal", "lime", "indigo", "violet", "gold", 
    "silver", "beige", "turquoise", "lavender", "coral", "salmon", "plum"
  ];
  
const ColorPicker = ({ onChangeColor }) => {
    return (
        <div className="color-tools">
            {colors.map(color => (
                <button key={color} onClick={() => onChangeColor(color)}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default ColorPicker;
