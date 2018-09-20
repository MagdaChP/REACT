import React from 'react';
import ReactDOM from 'react-dom';

class Box extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            color: 'green',
            height: '200px' 
        }
    }
    changeBox = () => {
        this.setState({
            color: 'orange',
            height: '400px'
        })
    }
    removeChanges = () => {
        this.setState ({
            color: 'green',
            height: '200px' 
        })
    }
    render () {
        return (
            <div style={{backgroundColor: this.state.color, width:'500px', height:this.state.height}}
                onMouseEnter={this.changeBox} onMouseLeave={this.removeChanges}>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Box />,
        document.getElementById('app')
    );
});

// Stwórz komponent z elementem `div` z kolorem tła ustawionym na zielony, 
// szerokością 500px i wysokością 200px.

// Po najechaniu na `div` ma się zmieniać jego tło na niebieskie, a wysokość na 400px.

// Gdy kursor odjedzie, komponent ma wrócić do pierwotnego **stanu**.

// Wyrenderuj i przetestuj swój komponent.