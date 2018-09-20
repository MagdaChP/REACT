import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {
    class AddNumbers extends React.Component {
        render() {
            return (
                <h1>{this.props.numberA + this.props.numberB}</h1> //to samo co {2+3}
            )
        }
    }
    ReactDOM.render(
        <AddNumbers numberA={2} numberB={2}/>,
        document.getElementById('app')
    );
});


// Stwórz komponent o nazwie `AddNumbers`. Do `props` przekaż mu liczbę A (`numberA`) oraz liczbę B (`numberB`).

// Powinien on wyświetlać w elemencie `h1` sumę tych dwóch liczb.

// Wyrenderuj go na stronie podając w atrybutach do props przykładowe liczby.