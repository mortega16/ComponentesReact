import React, { Component } from 'react';
import Square from './Square';
import ColorPicker from './ColorPicker';
import ClearButton from './ClearButton';
import CurrentColorDisplay from './CurrentColorDisplay';

class PixelArt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 'PixelArt',
            backgroundsSetBoxColor: [],
            actualColor: 'white',
            setBoxColorSeleccionado: "None"
        };
    }

    componentDidMount() {
        const temporalVector = Array(100).fill("white");
        this.setState({ backgroundsSetBoxColor: temporalVector });
    }

    setBoxColor = (box) => {
        const temporalSetBoxColor = [...this.state.backgroundsSetBoxColor];
        temporalSetBoxColor[box] = this.state.actualColor;
        this.setState({ backgroundsSetBoxColor: temporalSetBoxColor });
    };

    changeColor = (color) => {
        const setBoxColorSeleccionado = color === "white" ? "None" : color;
        this.setState({ actualColor: color, setBoxColorSeleccionado });
    };

    cleanEverything = () => {
        const vectorTemporal = this.state.backgroundsSetBoxColor.map(() => "white");
        this.setState({ backgroundsSetBoxColor: vectorTemporal });
    };

    render() {
        return (
            <div id='editor'>
                <p>Bienvenido a {this.state.clicks}</p>
                <div className="contenedor">
                    {this.state.backgroundsSetBoxColor.map((color, index) => (
                        <Square
                            key={index}
                            color={color}
                            onClick={() => this.setBoxColor(index)}
                        />
                    ))}
                </div>
                <ColorPicker onChangeColor={this.changeColor} />
                <ClearButton onClick={this.cleanEverything} />
                <CurrentColorDisplay color={this.state.actualColor} selectedColor={this.state.setBoxColorSeleccionado} />
            </div>
        );
    }
}

export default PixelArt;
