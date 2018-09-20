import React from 'react';
import ReactDOM from 'react-dom';

class Bulb extends React.Component {
    constructor (props) {
        super(props);
        this.state ={
            color: 'yellow',
            text: 'On'
        }
    }
    changeBulb = () => {
        this.setState({
            color: this.state.color=='yellow' ? 'red':'yellow',
            text: this.state.text=='On' ? 'Off':'On'
        })
    }

    render () {
        return( 
            <div style={{backgroundColor:this.state.color, width:'100px', height:'100px'}}>
                <button onClick={this.changeBulb}> {this.state.text} </button>
            </div>)
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Bulb />,
        document.getElementById('app')
    );
});



// Stwórz komponent `Bulb` z elementem `div` z kolorem tła ustawionym na biały, szerokością i wysokością 100px.
// W elemencie `div` umieść przycisk `button` z napisem "On".

// Kliknięcie na przycisk zmienia stan żarówki: jeżeli tło `div` było białe, to zmienia je na żółte, 
//a napis na przycisku na "Off". W przeciwnym wypadku zmienia tło na białe, a napis na "On".

// Wyrenderuj i przetestuj swój komponent.