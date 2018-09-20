import React from 'react';
import ReactDOM from 'react-dom';

class ButtonCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfClicks: 0,
        }
    }
    render() {
        return (
            <div>
                <h1> {this.state.numberOfClicks} </h1>
                <ButtonToClick handler={this.clickCounter}/>
                <ButtonToClick handler={this.clickCounter}/>
            </div>
        )
    }
    clickCounter = () => { //taki zapis, bo to jest event, który ma być wywołany na rodzicu, którym jest komponent!
        this.setState({
            numberOfClicks: this.state.numberOfClicks + 1
        })
    }
}

class ButtonToClick extends React.Component {
    render() {
        return <button onClick={this.props.handler}> Click </button>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <ButtonCounter />,
        document.getElementById('app')
    );
});

// Stwórz komponent `ButtonCounter` oraz komponent `ButtonToClick`.

// Komponent `ButtonCounter` wyświetla `div`,a w nim `h1` oraz 2 przyciski stworzone za pomocą 
// komponentu `ButtonToClick`. W `h1` ma być na początku wyświetlane 0 - docelowo ma tam się wyświetlać ile razy 
// (łącznie) zostały kliknięte przyciski.

// Komponent `ButtonToClick` zawiera  przycisk `button`, po kliknięciu którego jest przesyłana odpowiednia 
// informacja do callbacku, który pobiera z props atrybut pod nazwą `onClick`. **Nie zapomnij sprawdzić czy 
// ten atrybut został odpowiednio przekazany i jest funkcją.**

// Wyrenderuj i przetestuj swój komponent.

// Na schemacie niżej zostało zobrazowane jak mniej więcej powinien wyglądać proces przkazywania funkcji 
// i gdzie ona jest wywoływana. To tylko rysunek poglądowy, pomagający zrozumieć cały proces.

// ![Schemat dla zadania 0](img/zadanie00.jpg "Schemat dla zadania 1")