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
            setBoxColorSeleccionado: "None",
            rows: 5,
            columns: 5
        };
    }

    componentDidMount() {
        this.generateGrid(this.state.rows, this.state.columns);
    }

    generateGrid = (rows, columns) => {
        const totalBoxes = rows * columns;
        const temporalVector = Array(totalBoxes).fill("white");
        this.setState({ backgroundsSetBoxColor: temporalVector });
    };

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

    updateGridSize = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: parseInt(value) }, () => {
            this.generateGrid(this.state.rows, this.state.columns);
        });
    };

    render() {
        const { rows, columns } = this.state;
        return (
            <div id='editor'>
                <p>Bienvenido a {this.state.clicks}</p>
                <div>
                    <label>Rows: </label>
                    <input
                        type="number"
                        name="rows"
                        value={this.state.rows}
                        onChange={this.updateGridSize}
                        min="1"
                    />
                    <label>Columns: </label>
                    <input
                        type="number"
                        name="columns"
                        value={this.state.columns}
                        onChange={this.updateGridSize}
                        min="1"
                    />
                </div>
                <div className="contenedor" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
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
