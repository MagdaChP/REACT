import React from 'react';
import ReactDOM from 'react-dom';

class CrazyDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: `${Math.round(Math.random() * 1000 + 1)}px`,
            top: `${Math.round(Math.random() * 1000 + 1)}px`
        }
    }
    changeDiv = () => {
        this.setState({
            left: `${Math.round(Math.random() * 1000 + 1)}px`,
            top: `${Math.round(Math.random() * 1000 + 1)}px`
        })
    }
    render() {
        return (
            <div style={{
                backgroundColor: 'red',
                width: '100px',
                height: '100px',
                position: 'absolute',
                left: this.state.left,
                top: this.state.top,
                transition: 'all .5s'
            }}
                onMouseEnter={this.changeDiv}>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <CrazyDiv/>,
        document.getElementById('app')
    );
});

// Stwórz komponent `CrazyDiv`. Ma on mieć czerwone tło, wysokość i szerokość 100px oraz `position` 
// ustawione na `absolute`.

// Po każdym najechaniu na `div` ma się zmieniać jego styl `left` i `top` na dwie losowe wartości 
// z przedziału 0 - 1000px.

// Wyrenderuj i przetestuj swój komponent.