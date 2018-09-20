import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class Sum extends React.Component {
        constructor(props) {
            super(props)
            this.result = this.props.numbers.reduce( (a, b) => { //zamiast deklarowania zmiennej, dopisujemy własność do obiektu, jakim jest ta klasa i dzięki temu w całej klasie mmay dostęp do result - niejawne deklarowanie zmiennnej
                return a + b;
            })
        }
        render() {
            return (
                <h1> {this.result}</h1> //wyświetl niejawnie zdeklarowaną zmienną (z constructora)
            )
        }
    }
    ReactDOM.render(
        <Sum numbers={[1,1,1,1,1,1]}/>,
        document.getElementById('app')
    );
});

// Stwórz komponent o nazwie `Sum`. Do `props` przekaż mu tablicę liczb (`numbers`).

// Powinien on wyświetlać w elemencie `h1` sumę wszystkich podanych liczb. Możesz do tego wykorzystać znany Ci `array.reduce()`.

// Wyrenderuj go na stronie podając w atrybucie do props przykładową tablicę liczb.